import type { Link } from '~~/shared/types'

export const useLinks = () => {
  const links = useState<Link[]>('links', () => [
    {
      id: '1',
      title: 'Instagram',
      url: 'https://www.instagram.com/kelek.home',
      icon: 'simple-icons:instagram',
      color: '#E1306C',
      category: 'social',
      enabled: true
    },
    {
      id: '2',
      title: 'TikTok',
      url: 'https://www.tiktok.com/@kelek.home',
      icon: 'simple-icons:tiktok',
      color: '#EE1D52',
      category: 'social',
      enabled: true
    },
    {
      id: '3',
      title: 'YouTube',
      url: 'https://www.youtube.com/@kelek.home',
      icon: 'simple-icons:youtube',
      color: '#FF0000',
      category: 'social',
      enabled: true
    },
    {
      id: '4',
      title: 'Facebook',
      url: 'https://www.facebook.com/kelek.home',
      icon: 'simple-icons:facebook',
      color: '#1877F2',
      category: 'social',
      enabled: true
    },
    {
      id: '5',
      title: 'Pinterest',
      url: 'https://www.pinterest.com/kelekhome',
      icon: 'simple-icons:pinterest',
      color: '#BD081C',
      category: 'social',
      enabled: true
    },
    {
      id: '6',
      title: 'Email',
      url: 'mailto:hola@kelek.home',
      icon: 'mdi:email-outline',
      color: '#34A853',
      category: 'social',
      enabled: true
    },
    {
      id: '7',
      title: 'Catálogo Kelek Home',
      url: 'https://linktr.ee/kelek.home',
      icon: 'mdi:bookshelf',
      color: '#8B5CF6',
      category: 'content',
      enabled: true
    },
    {
      id: '8',
      title: 'Bambu Lab',
      url: 'https://bambulab.com',
      icon: 'mdi:cube-outline',
      color: '#06B6D4',
      category: 'content',
      enabled: true
    }
  ])

  const addLink = (link: Omit<Link, 'id'>) => {
    links.value.push({
      id: Date.now().toString(),
      enabled: true,
      ...link
    })
  }

  const removeLink = (id: string) => {
    links.value = links.value.filter(l => l.id !== id)
  }

  const toggleLink = (id: string) => {
    const link = links.value.find(l => l.id === id)
    if (link) {
      link.enabled = !link.enabled
    }
  }

  return {
    links,
    addLink,
    removeLink,
    toggleLink
  }
}

