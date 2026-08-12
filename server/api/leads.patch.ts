export default defineEventHandler(async (event) => {
  const body = await readBody(event) || {}
  const { id, status } = body

  if (!id || !status) {
    throw createError({ statusCode: 400, statusMessage: 'Missing id or status' })
  }

  const updated = updateServerLeadStatus(id, status)
  return { success: updated }
})
