export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const id = query.id as string

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing lead id' })
  }

  const deleted = deleteServerLead(id)
  return { success: deleted }
})
