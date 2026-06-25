<!-- components/StatsRow.vue -->
<template>
  <div class="flex items-center justify-center gap-8 mt-5">
    <div
      v-for="stat in stats"
      :key="stat.key"
      class="text-center"
    >
      <div class="text-2xl font-bold tabular-nums">
        <span class="counter" :data-target="stat.value">{{ displayed[stat.key] }}</span>{{ stat.suffix }}
      </div>
      <div class="text-xs opacity-50 mt-0.5 font-medium uppercase tracking-wide">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { key: 'followers', value: 5000, suffix: '+', label: t('stats.followers') },
  { key: 'posts',     value: 200,  suffix: '+', label: t('stats.posts') },
  { key: 'years',     value: 2,    suffix: '+', label: t('stats.years') }
])

const displayed = reactive<Record<string, number>>({
  followers: 0,
  posts: 0,
  years: 0
})

onMounted(() => {
  stats.value.forEach(stat => {
    const duration = 1400
    const start = Date.now()
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      displayed[stat.key] = Math.floor(ease * stat.value)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
})
</script>
