<!-- pages/sobre-mi.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'fade', mode: 'out-in' } })
const { t } = useI18n()
useSeoMeta({ title: 'KELEK HOME - Sobre mí' })

const route = useRoute()
const router = useRouter()

// Control Panel de Opciones de Rediseño
const options = [
  {
    id: 'editorial',
    num: '01',
    name: 'Editorial & Manifiesto',
    shortName: 'Editorial',
    icon: 'mdi:format-quote-open',
    desc: 'Retrato de autor, principios de oficio, métricas de taller y rigor artesanal.'
  },
  {
    id: 'bento',
    num: '02',
    name: 'Bento de Oficio',
    shortName: 'Bento',
    icon: 'mdi:view-dashboard-outline',
    desc: 'Cuadrícula modular interactiva con catálogo de maderas y herramientas.'
  },
  {
    id: 'timeline',
    num: '03',
    name: 'Diario Cronológico',
    shortName: 'Diario',
    icon: 'mdi:timeline-text-outline',
    desc: 'Historia secuencial por capítulos, fotos polaroid y notas de taller.'
  },
  {
    id: 'classic',
    num: '04',
    name: 'Diseño Clásico',
    shortName: 'Clásico',
    icon: 'mdi:history',
    desc: 'Versión original de la página con hero enmascarado y tarjetas de valores.'
  }
]

const activeOption = ref('editorial')

onMounted(() => {
  if (route.query.opcion && options.some(o => o.id === route.query.opcion)) {
    activeOption.value = String(route.query.opcion)
  } else {
    const saved = localStorage.getItem('kelek_sobre_mi_opcion')
    if (saved && options.some(o => o.id === saved)) {
      activeOption.value = saved
    }
  }
})

function selectOption(id: string) {
  activeOption.value = id
  localStorage.setItem('kelek_sobre_mi_opcion', id)
  router.replace({ query: { ...route.query, opcion: id } })
}

// Valores de la versión clásica
const classicValues = computed(() => [
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
  <div class="min-h-screen pt-24 sm:pt-28 pb-20 px-4 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
    <div class="w-full max-w-2xl mx-auto space-y-8">
      
      <!-- Panel de Control / Switcher de Opciones para Testeo -->
      <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-md space-y-3.5">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span class="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 font-sans">
              Panel de Testeo de Diseños
            </span>
          </div>
          <span class="text-[11px] font-mono text-stone-400">
            Ancho Bio (640px)
          </span>
        </div>

        <!-- Selector Tabs -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-2xl bg-stone-100 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800/80">
          <button
            v-for="opt in options"
            :key="opt.id"
            type="button"
            @click="selectOption(opt.id)"
            :class="[
              'py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer',
              activeOption === opt.id
                ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-950 shadow-xs scale-[1.02]'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
            ]"
          >
            <Icon :name="opt.icon" class="text-sm shrink-0" />
            <span class="truncate">{{ opt.shortName }}</span>
          </button>
        </div>

        <!-- Resumen de la opción activa -->
        <div class="px-1 flex items-start gap-2 text-xs text-stone-500 dark:text-stone-400">
          <Icon name="mdi:information-outline" class="text-sm text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p class="leading-relaxed">
            <strong class="font-bold text-stone-800 dark:text-stone-200">
              {{ options.find(o => o.id === activeOption)?.name }}:
            </strong>
            {{ options.find(o => o.id === activeOption)?.desc }}
          </p>
        </div>
      </div>

      <!-- Vistas Dinámicas -->
      <Transition name="fade" mode="out-in">
        
        <!-- Opción 1: Estilo Editorial & Manifiesto -->
        <div v-if="activeOption === 'editorial'" key="editorial">
          <AboutOptionEditorial avatar-url="/avatar.png" />
        </div>

        <!-- Opción 2: Estilo Bento de Oficio -->
        <div v-else-if="activeOption === 'bento'" key="bento">
          <AboutOptionBento avatar-url="/avatar.png" />
        </div>

        <!-- Opción 3: Estilo Diario Cronológico -->
        <div v-else-if="activeOption === 'timeline'" key="timeline">
          <AboutOptionTimeline avatar-url="/avatar.png" />
        </div>

        <!-- Opción 4: Diseño Clásico Original -->
        <div v-else-if="activeOption === 'classic'" key="classic" class="space-y-12">
          <!-- Hero clásico full-bleed en móvil, contenido en desktop -->
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { duration: 800 } }"
            class="relative hero-photo rounded-2xl overflow-hidden shadow-xl"
          >
            <div class="absolute inset-0 hero-image-masked">
              <img
                src="/avatar.png"
                alt="Jesús, fundador de Kelek Home"
                class="w-full h-full object-cover object-top"
              />
              <div class="absolute inset-0 hero-gradient pointer-events-none" />
              <div
                class="absolute inset-0 opacity-[0.05] pointer-events-none"
                style="background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%221%22/></svg>')"
              />
            </div>

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

          <!-- Historia -->
          <section class="space-y-4">
            <h2 class="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{{ t('about.story_title') }}</h2>
            <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">{{ t('about.story_p1') }}</p>
            <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">{{ t('about.story_p2') }}</p>
          </section>

          <!-- Valores en cards -->
          <section class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              v-for="value in classicValues"
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
          <section class="space-y-4">
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

      </Transition>

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

.hero-image-masked {
  -webkit-mask-image: linear-gradient(to bottom, black 0%, black 78%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 0%, black 78%, transparent 100%);
}

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
