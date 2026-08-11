// Ruta protegida para renovar el token de Instagram long-lived.
// Llamada automáticamente por el cron job de Vercel cada 30 días.
//
// Requiere las siguientes variables de entorno en Vercel:
//   CRON_SECRET          — clave secreta para proteger el endpoint
//   VERCEL_TOKEN         — token de la API de Vercel (para actualizar el env var)
//   VERCEL_PROJECT_ID    — ID del proyecto en Vercel
//   VERCEL_TEAM_ID       — ID del equipo en Vercel

export default defineEventHandler(async (event) => {
  // Verificar el secret del cron (Vercel lo envía como Authorization: Bearer <CRON_SECRET>)
  const authHeader = getHeader(event, 'authorization')
  const cronSecret = process.env.CRON_SECRET

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN
  if (!currentToken) {
    throw createError({ statusCode: 500, message: 'No Instagram token configured' })
  }

  // 1. Renovar el token con Instagram Graph API
  const refreshed = await $fetch<{ access_token: string; token_type: string }>(
    'https://graph.instagram.com/refresh_access_token',
    {
      query: {
        grant_type: 'ig_refresh_token',
        access_token: currentToken
      }
    }
  )

  const newToken = refreshed.access_token
  if (!newToken) {
    throw createError({ statusCode: 500, message: 'Instagram did not return a new token' })
  }

  // 2. Actualizar la variable de entorno en Vercel vía su API
  const vercelToken = process.env.VERCEL_TOKEN
  const projectId = process.env.VERCEL_PROJECT_ID
  const teamId = process.env.VERCEL_TEAM_ID

  if (!vercelToken || !projectId) {
    throw createError({ statusCode: 500, message: 'Missing Vercel API credentials' })
  }

  // Primero obtenemos el ID de la env var existente
  const envVars = await $fetch<{ envs: Array<{ id: string; key: string }> }>(
    `https://api.vercel.com/v9/projects/${projectId}/env`,
    {
      headers: { Authorization: `Bearer ${vercelToken}` },
      query: teamId ? { teamId } : {}
    }
  )

  const envVar = envVars.envs.find(e => e.key === 'INSTAGRAM_ACCESS_TOKEN')
  if (!envVar) {
    throw createError({ statusCode: 500, message: 'INSTAGRAM_ACCESS_TOKEN env var not found in Vercel' })
  }

  // Actualizamos con el nuevo token
  await $fetch(
    `https://api.vercel.com/v9/projects/${projectId}/env/${envVar.id}`,
    {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${vercelToken}` },
      query: teamId ? { teamId } : {},
      body: { value: newToken }
    }
  )

  return {
    ok: true,
    message: 'Instagram token refreshed successfully',
    refreshedAt: new Date().toISOString()
  }
})
