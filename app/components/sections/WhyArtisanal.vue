<!-- components/WhyArtisanal.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-16">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center mb-8"
    >
      <h2 class="text-2xl font-bold tracking-tight">{{ $t('why.title') }}</h2>
      <p class="mt-2 text-sm opacity-50">{{ $t('why.subtitle') }}</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div
        v-for="(item, i) in pillars"
        :key="item.title"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 120 } }"
        class="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl border transition-all duration-300
               bg-black/5 border-black/10 hover:bg-black/8 hover:-translate-y-1
               dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/8"
      >
        <div
          class="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300"
          :style="{ backgroundColor: `${item.color}20` }"
        >
          <Icon :name="item.icon" class="text-2xl" :style="{ color: item.color }" />
        </div>
        <h3 class="font-semibold text-sm">{{ item.title }}</h3>
        <p class="text-xs opacity-50 leading-relaxed">{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const pillars = computed(() => [
  {
    icon: 'mdi:hand-heart-outline',
    color: '#E07B54',
    title: t('why.handmade_title'),
    desc: t('why.handmade_desc')
  },
  {
    icon: 'mdi:tree-outline',
    color: '#67AC45',
    title: t('why.sustainable_title'),
    desc: t('why.sustainable_desc')
  },
  {
    icon: 'mdi:star-four-points-outline',
    color: '#C8A96E',
    title: t('why.unique_title'),
    desc: t('why.unique_desc')
  }
])
</script>
