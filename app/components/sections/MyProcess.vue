<!-- components/MyProcess.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-16">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center mb-8"
    >
      <h2 class="text-2xl font-bold tracking-tight">{{ $t('process.title') }}</h2>
      <p class="mt-2 text-sm opacity-50">{{ $t('process.subtitle') }}</p>
    </div>

    <div class="relative">
      <!-- línea conectora -->
      <div class="absolute left-5 top-6 bottom-6 w-px bg-black/10 dark:bg-white/10 sm:hidden" />

      <div class="space-y-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:space-y-0">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 150 } }"
          class="flex sm:flex-col items-start sm:items-center gap-4 sm:gap-3 sm:text-center"
        >
          <!-- número + icono -->
          <div class="relative shrink-0">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-colors duration-300"
              :style="{ borderColor: step.color, backgroundColor: `${step.color}15` }"
            >
              <Icon :name="step.icon" class="text-lg" :style="{ color: step.color }" />
            </div>
            <span
              class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-bold
                     flex items-center justify-center text-white"
              :style="{ backgroundColor: step.color }"
            >{{ i + 1 }}</span>
          </div>
          <div>
            <h3 class="font-semibold text-sm">{{ step.title }}</h3>
            <p class="text-xs opacity-50 leading-relaxed mt-0.5">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const steps = computed(() => [
  {
    icon: 'mdi:pencil-outline',
    color: '#8B5CF6',
    title: t('process.sketch_title'),
    desc: t('process.sketch_desc')
  },
  {
    icon: 'mdi:tree-outline',
    color: '#67AC45',
    title: t('process.selection_title'),
    desc: t('process.selection_desc')
  },
  {
    icon: 'mdi:hammer',
    color: '#E07B54',
    title: t('process.craft_title'),
    desc: t('process.craft_desc')
  },
  {
    icon: 'mdi:home-heart',
    color: '#C8A96E',
    title: t('process.home_title'),
    desc: t('process.home_desc')
  }
])
</script>
