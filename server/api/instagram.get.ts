// server/api/instagram.get.ts
export default defineCachedEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const token = config.instagramToken

  if (!token) {
    return { images: [] }
  }

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&limit=9&access_token=${token}`

  const data = await $fetch<{ data: Array<{
    id: string
    caption?: string
    media_type: string
    media_url: string
    permalink: string
    timestamp: string
  }> }>(url)

  const images = data.data
    .filter(item => item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM')
    .slice(0, 9)
    .map(item => ({
      id: item.id,
      src: item.media_url,
      alt: item.caption?.split('\n')[0].slice(0, 60) ?? 'Kelek Home',
      permalink: item.permalink
    }))

  return { images }
}, {
  maxAge: 60 * 10 // caché 10 minutos
})
