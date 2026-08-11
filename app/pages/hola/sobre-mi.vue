<!-- pages/sobre-mi.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'fade', mode: 'out-in' } })
const { t } = useI18n()
useSeoMeta({ title: 'Sobre mí — Kelek Home' })

const values = computed(() => [
  {
    icon: 'mdi:hand-heart-outline',
    title: t('about.val1_title'),
    desc: t('about.val1_desc'),
    color: '#f59e0b',
    bg: '#fef3c7'
  },
  {
    icon: 'mdi:tree-outline',
    title: t('about.val2_title'),
    desc: t('about.val2_desc'),
    color: '#10b981',
    bg: '#d1fae5'
  },
  {
    icon: 'mdi:star-four-points-outline',
    title: t('about.val3_title'),
    desc: t('about.val3_desc'),
    color: '#6366f1',
    bg: '#e0e7ff'
  }
])
</script>

<template>
  <div class="pb-20">
    <!-- Hero full-bleed en móvil, contenido en desktop -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 800 } }"
      class="relative hero-photo sm:max-w-3xl sm:mx-auto sm:rounded-2xl sm:overflow-hidden"
    >
      <!-- Todo enmascarado: imagen, gradiente y ruido -->
      <div class="absolute inset-0 hero-image-masked">
        <img
          src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&h=1000&fit=crop&crop=face"
          alt="Jesús, fundador de Kelek Home"
          class="w-full h-full object-cover object-top"
        />
        <div class="absolute inset-0 hero-gradient pointer-events-none" />
        <div class="absolute inset-0 opacity-[0.05] pointer-events-none"
             style="background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%221%22/></svg>')" />
      </div>

      <!-- Texto fuera de la máscara, anclado por encima de la zona de fundido -->
      <div class="absolute inset-x-0 hero-text px-6 space-y-2">
        <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
          {{ t('about.label') }}
        </p>
        <h1 class="hero-name text-white leading-none">
          {{ t('about.name') }}
        </h1>
        <div class="flex items-center gap-2 pt-1">
          <span class="relative flex h-2 w-2 shrink-0">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span class="text-xs font-medium text-emerald-300 tracking-wide">{{ t('about.available') }}</span>
        </div>
        <p class="text-sm leading-relaxed text-white/65 max-w-sm pt-1">
          {{ t('about.intro') }}
        </p>
      </div>
    </div>

    <!-- Resto del contenido -->
    <div class="px-4 max-w-3xl mx-auto space-y-12 pt-6">

      <!-- Historia -->
      <section
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="space-y-4"
      >
        <h2 class="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{{ t('about.story_title') }}</h2>
        <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ t('about.story_p1') }}</p>
        <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ t('about.story_p2') }}</p>
      </section>

      <!-- Valores en cards -->
      <section
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        class="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <div
          v-for="value in values"
          :key="value.icon"
          class="p-5 rounded-2xl border bg-black/3 border-black/8 dark:bg-white/5 dark:border-white/10 space-y-2"
        >
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" :style="{ background: value.bg }">
            <Icon :name="value.icon" class="text-[20px]" :style="{ color: value.color }" />
          </div>
          <p class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{{ value.title }}</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ value.desc }}</p>
        </div>
      </section>

      <!-- Foto taller -->
      <section
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="space-y-4"
      >
        <h2 class="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{{ t('about.workshop_title') }}</h2>
        <div class="grid grid-cols-2 gap-3">
          <img
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=400&fit=crop"
            alt="Taller de Kelek Home"
            class="w-full h-48 object-cover rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
          />
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
            alt="Proceso artesanal"
            class="w-full h-48 object-cover rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
          />
        </div>
        <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">{{ t('about.workshop_desc') }}</p>
      </section>

    </div>
  </div>
</template>

<style scoped>
.hero-photo {
  aspect-ratio: 3 / 4;
}

@media (min-width: 640px) {
  .hero-photo {
    aspect-ratio: 4 / 3;
  }
}

/* Máscara sobre imagen+gradiente: fundido solo en el último 22% */
.hero-image-masked {
  -webkit-mask-image: linear-gradient(to bottom, black 0%, black 78%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 0%, black 78%, transparent 100%);
}

/* Texto anclado cerca del fondo */
.hero-text {
  bottom: 6%;
}

@media (min-width: 640px) {
  .hero-text {
    bottom: 5%;
  }
}

.hero-gradient {
  background: linear-gradient(
    to top,
    rgba(8, 7, 5, 0.95) 0%,
    rgba(8, 7, 5, 0.75) 28%,
    rgba(8, 7, 5, 0.25) 58%,
    transparent 100%
  );
}

.hero-name {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(2.8rem, 12vw, 5rem);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 0.92;
}
</style>
