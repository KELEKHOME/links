<!-- app/components/about/AboutOptionEditorial.vue -->
<script setup lang="ts">
const props = defineProps<{
  avatarUrl?: string
}>()

const { t } = useI18n()

const stats = [
  { value: '+45h', label: 'Horas medias por pieza', detail: 'Tallado y ajuste a mano' },
  { value: '100%', label: 'Madera maciza certificada', detail: 'FSC / PEFC sostenible' },
  { value: '0%', label: 'Plásticos y aglomerados', detail: 'Todo es materia viva' },
  { value: '∞', label: 'Durabilidad generacional', detail: 'Hecho para heredarse' }
]

const principles = [
  {
    number: '01',
    title: 'Materia viva & trazabilidad',
    desc: 'Selecciono cada tablón personalmente en aserraderos locales. Maderas con secado lento natural, respetando las tensiones de la fibra y sus nudos característicos.',
    tag: 'Selección en bruto'
  },
  {
    number: '02',
    title: 'Ensambles de ebanistería clásica',
    desc: 'Sin tornillería vista ni colas sintéticas de baja calidad. Empleo lazos de cola de milano, caja y espiga pasante y cuñas de madera noble que ganan solidez con los años.',
    tag: 'Técnica tradicional'
  },
  {
    number: '03',
    title: 'Acabados orgánicos respirables',
    desc: 'Nutrimos la madera con aceites de linaza cocida, tung puro y cera de abeja natural. La superficie respira, tiene un tacto sedoso y envejece con una pátina inigualable.',
    tag: '100% libre de tóxicos'
  }
]
</script>

<template>
  <div class="space-y-12 animate-fade-in">
    
    <!-- Hero Editorial de Autor -->
    <section class="relative rounded-3xl overflow-hidden border border-stone-200/90 dark:border-stone-800 bg-stone-900 text-stone-100 shadow-xl">
      <!-- Background subtle wood grain image -->
      <div class="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
        <img
          src="https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1200&auto=format&fit=crop&q=80"
          alt="Textura de madera de taller"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-transparent" />

      <div class="relative p-6 sm:p-10 space-y-6">
        <!-- Top Badge & Sello -->
        <div class="flex items-center justify-between gap-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Manifiesto & Oficio</span>
          </div>

          <div class="text-right">
            <span class="text-[11px] font-mono uppercase tracking-widest text-stone-400">Est. 2020 · Madrid</span>
          </div>
        </div>

        <!-- Cita Principal de Autor -->
        <blockquote class="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-100 leading-snug tracking-tight font-medium">
          «La madera no se doblega a la prisa. Exige respeto, tiempo y unas manos que sepan escuchar el rumbo de su veta.»
        </blockquote>

        <!-- Autor Info con Avatar -->
        <div class="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3.5">
            <div class="w-13 h-13 rounded-full overflow-hidden border-2 border-amber-500/40 shrink-0 shadow-md">
              <img
                :src="avatarUrl || '/avatar.png'"
                alt="Jesús Iglesias"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 class="text-base font-bold text-stone-100 font-serif">Jesús Iglesias</h2>
              <p class="text-xs text-stone-400">Fundador & Maestro Ebanista en Kelek Home</p>
            </div>
          </div>

          <div class="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-xl">
            <span class="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Taller disponible para proyectos a medida</span>
          </div>
        </div>
      </div>
    </section>

    <!-- El Manifiesto (3 Principios) -->
    <section class="space-y-6">
      <div class="space-y-2">
        <span class="text-[11px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Filosofía de Taller</span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
          Los Tres Principios de Kelek
        </h2>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl">
          Frente al mobiliario efímero y desechable, creamos piezas concebidas para acompañar toda una vida y ganar belleza con el paso del tiempo.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="item in principles"
          :key="item.number"
          class="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-2xs hover:border-amber-500/40 transition-all space-y-3"
        >
          <div class="flex items-center justify-between gap-2">
            <span class="text-2xl font-serif font-extrabold text-amber-600/80 dark:text-amber-400/80">
              {{ item.number }}
            </span>
            <span class="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
              {{ item.tag }}
            </span>
          </div>
          <h3 class="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">
            {{ item.title }}
          </h3>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- El Taller en Cifras -->
    <section class="p-6 sm:p-8 rounded-3xl bg-amber-500/5 dark:bg-stone-900/60 border border-amber-500/20 dark:border-stone-800 space-y-6">
      <div class="text-center space-y-1">
        <h3 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">El Rigor del Tiempo</h3>
        <p class="text-xs text-stone-500 dark:text-stone-400">Métricas que definen nuestro estándar de ebanistería</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div v-for="stat in stats" :key="stat.value" class="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800/80 space-y-1 shadow-2xs">
          <div class="text-2xl sm:text-3xl font-serif font-extrabold text-amber-600 dark:text-amber-400">{{ stat.value }}</div>
          <div class="text-xs font-bold text-stone-800 dark:text-stone-200">{{ stat.label }}</div>
          <div class="text-[10px] text-stone-500 dark:text-stone-400">{{ stat.detail }}</div>
        </div>
      </div>
    </section>

    <!-- Galería Visual del Proceso -->
    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">La Intimidad del Taller</h3>
        <span class="text-xs text-stone-500 dark:text-stone-400">Madrid, España</span>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="relative rounded-2xl overflow-hidden group aspect-[4/3] bg-stone-900 border border-stone-200 dark:border-stone-800">
          <img
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=700&auto=format&fit=crop&q=80"
            alt="Herramientas de ebanista"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
            <span class="text-[11px] text-white font-medium">Gubias y formones de forja manual</span>
          </div>
        </div>

        <div class="relative rounded-2xl overflow-hidden group aspect-[4/3] bg-stone-900 border border-stone-200 dark:border-stone-800">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop&q=80"
            alt="Proceso de acabado al aceite"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
            <span class="text-[11px] text-white font-medium">Pulido y nutrición a muñequilla</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Llamada al Encuentro / Contacto -->
    <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-900 to-black text-white border border-stone-800 text-center space-y-4 shadow-xl">
      <div class="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center text-2xl border border-amber-500/30">
        <Icon name="mdi:coffee-outline" />
      </div>

      <div class="space-y-2 max-w-md mx-auto">
        <h3 class="text-xl sm:text-2xl font-serif font-bold text-stone-100">
          Hablemos de tu próximo espacio
        </h3>
        <p class="text-xs text-stone-300 leading-relaxed font-normal">
          Cada encargo comienza con una conversación honesta sobre la estancia, la luz, el uso y las maderas que mejor encajan con tu estilo.
        </p>
      </div>

      <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <NuxtLink
          to="/hola/contacto?tipo=presupuesto"
          class="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
        >
          <span>SOLICITAR PROYECTO A MEDIDA</span>
          <Icon name="mdi:arrow-right" class="text-sm" />
        </NuxtLink>

        <a
          href="https://wa.me/34663339031?text=Hola%20Jesús,%20he%20leído%20tu%20manifiesto%20y%20me%20gustaría%20hablar%20sobre%20un%20mueble%20a%20medida"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs transition-all border border-stone-700 flex items-center justify-center gap-2"
        >
          <Icon name="mdi:whatsapp" class="text-emerald-400 text-base" />
          <span>Escribir al Taller</span>
        </a>
      </div>
    </section>

  </div>
</template>
