export default defineEventHandler(() => {
  const hasKey = Boolean(process.env.NOTION_API_KEY)
  const hasDb = Boolean(process.env.NOTION_DATABASE_ID)

  return {
    configured: hasKey && hasDb,
    hasKey,
    hasDb
  }
})
