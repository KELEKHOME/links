export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { type = 'general', email, contact, mueble, madera, medidas, notas, status = 'pendiente' } = body || {}

  const notionApiKey = process.env.NOTION_API_KEY
  const notionDatabaseId = process.env.NOTION_DATABASE_ID

  let syncedToNotion = false
  let notionError: string | null = null

  if (notionApiKey && notionDatabaseId) {
    try {
      const title = contact || email || 'Nuevo Lead'
      const description = [
        mueble ? `Mueble: ${mueble}` : null,
        madera ? `Madera: ${madera}` : null,
        medidas ? `Medidas: ${medidas}` : null,
        notas ? `Notas: ${notas}` : null
      ].filter(Boolean).join(' | ')

      const response = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${notionApiKey}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          parent: { database_id: notionDatabaseId },
          properties: {
            'Nombre / Contacto': {
              title: [{ text: { content: title } }]
            },
            'Email': email ? { email } : undefined,
            'Tipo': {
              select: { name: type === 'estimate' ? 'Presupuesto' : type === 'newsletter' ? 'Newsletter' : type === 'guide' ? 'Guía Madera' : 'Contacto' }
            },
            'Estado': {
              status: { name: status === 'pendiente' ? 'Nuevo' : status }
            },
            'Detalles': description ? {
              rich_text: [{ text: { content: description } }]
            } : undefined
          }
        })
      })

      if (response.ok) {
        syncedToNotion = true
      } else {
        const errText = await response.text()
        notionError = `Notion API Error: ${response.status} - ${errText}`
        console.error(notionError)
      }
    } catch (err: any) {
      notionError = err.message || 'Failed to sync with Notion'
      console.error(notionError)
    }
  }

  return {
    success: true,
    syncedToNotion,
    notionConfigured: Boolean(notionApiKey && notionDatabaseId),
    error: notionError
  }
})
