// composables/useLinks.ts
export const useLinks = (): Link[] => {
  return [
    // Social
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/kelek.home',
      icon: 'simple-icons:instagram',
      color: '#E1306C',
      category: 'social'
    },
    {
      title: 'TikTok',
      url: 'https://www.tiktok.com/@kelek.home',
      icon: 'simple-icons:tiktok',
      color: '#EE1D52',
      category: 'social'
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/@kelek.home',
      icon: 'simple-icons:youtube',
      color: '#FF0000',
      category: 'social'
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/kelek.home',
      icon: 'simple-icons:facebook',
      color: '#1877F2',
      category: 'social'
    },
    {
      title: 'Pinterest',
      url: 'https://www.pinterest.com/kelekhome',
      icon: 'simple-icons:pinterest',
      color: '#BD081C',
      category: 'social'
    },
    {
      title: 'Email',
      url: 'mailto:hola@kelek.home',
      icon: 'mdi:email-outline',
      color: '#34A853',
      category: 'social'
    },
    // Content
    {
      title: 'Catálogo Kelek Home',
      url: 'https://linktr.ee/kelek.home',
      icon: 'mdi:bookshelf',
      color: '#8B5CF6',
      category: 'content'
    },
    {
      title: 'Bambu Lab',
      url: 'https://bambulab.com',
      icon: 'mdi:cube-outline',
      color: '#06B6D4',
      category: 'content'
    }
  ]
}
