<!-- components/SocialLinks.vue -->
<template>
  <div class="flex items-center justify-center gap-4 flex-wrap">
    <a
      v-for="s in socials"
      :key="s.url"
      :href="s.url"
      :aria-label="s.title"
      target="_blank"
      rel="noopener noreferrer"
      class="social-card group flex items-center gap-3 px-5 py-3 rounded-2xl
             border border-transparent
             hover:-translate-y-1 transition-all duration-300"
      :class="[s.key, isDark ? 'dark-card' : 'light-card']"
    >
      <Icon
        :name="s.icon"
        class="text-[28px] transition-transform duration-300 group-hover:scale-110"
        :class="s.iconClass"
      />

      <!-- Texto -->
      <div class="text-left">
        <div class="text-[11px] font-medium opacity-40 uppercase tracking-wider leading-none mb-1">
          {{ s.title }}
        </div>
        <div class="text-lg font-bold tabular-nums leading-none">
          {{ formatCount(displayed[s.key]) }}<span class="text-sm font-semibold opacity-60"> seg.</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const socials = computed(() => [
  {
    key: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/kelek.home',
    icon: isDark.value ? 'simple-icons:instagram' : 'logos:instagram-icon',
    iconClass: isDark.value ? 'text-white' : '',
    followers: 5000
  },
  {
    key: 'tiktok',
    title: 'TikTok',
    url: 'https://www.tiktok.com/@kelek.home',
    icon: isDark.value ? 'simple-icons:tiktok' : 'logos:tiktok-icon',
    iconClass: isDark.value ? 'text-white' : '',
    followers: 6500
  }
])

const displayed = reactive<Record<string, number>>({
  instagram: 0,
  tiktok: 0
})

function formatCount(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'K'
  return n.toString()
}

onMounted(() => {
  socials.value.forEach(s => {
    const duration = 1400
    const start = Date.now()
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      displayed[s.key] = Math.floor(ease * s.followers)
      if (progress < 1) requestAnimationFrame(tick)
      else displayed[s.key] = s.followers
    }
    requestAnimationFrame(tick)
  })
})
</script>

<style scoped>
.light-card:hover {
  border-color: rgba(0, 0, 0, 0.5);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.12);
}

.dark-card:hover {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.15),
    0 8px 24px rgba(255, 255, 255, 0.12);
}
</style>

