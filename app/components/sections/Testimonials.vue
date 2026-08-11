<!-- components/Testimonials.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-16">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center mb-8"
    >
      <h2 class="text-2xl font-bold tracking-tight">{{ $t('testimonials.title') }}</h2>
      <p class="mt-2 text-sm opacity-50">{{ $t('testimonials.subtitle') }}</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div
        v-for="(t, i) in testimonials"
        :key="t.name"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 120 } }"
        class="flex flex-col gap-3 p-5 rounded-2xl border
               bg-black/5 border-black/10
               dark:bg-white/5 dark:border-white/10"
      >
        <!-- estrellas -->
        <div class="flex gap-0.5">
          <Icon v-for="n in 5" :key="n" name="mdi:star" class="text-amber-400 text-sm" />
        </div>
        <!-- cita -->
        <p class="text-sm leading-relaxed opacity-70 flex-1">"{{ t.quote }}"</p>
        <!-- autor -->
        <div class="flex items-center gap-2.5 mt-1">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
            :style="{ backgroundColor: t.color }"
          >
            {{ t.initials }}
          </div>
          <div>
            <p class="text-xs font-semibold">{{ t.name }}</p>
            <p class="text-xs opacity-40">{{ t.city }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const testimonials = computed(() => [
  {
    quote: t('testimonials.quote_1'),
    name: 'María G.',
    city: 'Madrid',
    initials: 'MG',
    color: '#E1306C'
  },
  {
    quote: t('testimonials.quote_2'),
    name: 'Carlos R.',
    city: 'Barcelona',
    initials: 'CR',
    color: '#1877F2'
  },
  {
    quote: t('testimonials.quote_3'),
    name: 'Ana M.',
    city: 'Valencia',
    initials: 'AM',
    color: '#67AC45'
  }
])
</script>
