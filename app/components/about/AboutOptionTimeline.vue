<!-- app/components/about/AboutOptionTimeline.vue -->
<script setup lang="ts">
const props = defineProps<{
  avatarUrl?: string
}>()

const timeline = [
  {
    year: '2018',
    chapter: 'Capítulo I',
    title: 'El Primer Banco de Trabajo',
    desc: 'Todo empezó con un viejo banco de carpintero heredado y la fascinación por rescatar tablones de nogal y roble desechados. El descubrimiento de que con herramientas de mano bien afiladas, la madera revela secretos invisibles a la máquina.',
    tag: 'El despertar del oficio',
    img: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=600&auto=format&fit=crop&q=80',
    caption: 'Primeros ensambles a mano en el taller familiar.'
  },
  {
    year: '2021',
    chapter: 'Capítulo II',
    title: 'Nace Kelek Home: Renuncia al Aglomerado',
    desc: 'Fijé una regla inquebrantable: en Kelek jamás entraría melamina, DM ni tornillos de ocultación rápida. Si construimos un mueble, debe durar más que el árbol del que provino.',
    tag: 'Fundación & Principios',
    img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80',
    caption: 'Selección estricta de madera maciza y secado natural.'
  },
  {
    year: '2024 - Hoy',
    chapter: 'Capítulo III',
    title: 'Mobiliario con Alma & Vínculo Real',
    desc: 'Hoy creamos piezas a medida para hogares que valoran la serenidad y la nobleza de la materia viva. Además, colaboramos con las mejores marcas de maquinaria ebanista para difundir el oficio a toda una comunidad.',
    tag: 'El presente del taller',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
    caption: 'Acabados al aceite natural en piezas numeradas.'
  }
]

const diaryNotes = [
  {
    date: '14 de Octubre',
    title: 'El aroma del cedro y el nogal',
    text: 'Cuando cepillas a mano un tablón de nogal español, el taller se llena de un aroma a tierra húmeda y frutos secos. No hay máquina que pueda replicar esa sensación.'
  },
  {
    date: '02 de Febrero',
    title: 'Ajuste de colas de milano',
    text: 'Un milímetro en la madera es un abismo. Cada espiga se ajusta con formón biselado a 25 grados hasta que entra con la suave presión de los dedos.'
  }
]
</script>

<template>
  <div class="space-y-12 animate-fade-in">
    
    <!-- Header tipo Diario de Bitácora -->
    <section class="text-center space-y-4 max-w-xl mx-auto pt-2">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25 text-xs font-bold uppercase tracking-wider">
        <Icon name="mdi:book-open-page-variant-outline" class="text-sm" />
        <span>Diario del Artesano</span>
      </div>

      <h1 class="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
        El Viaje de las Manos y la Madera
      </h1>

      <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
        Una cronología honesta de cómo un banco de trabajo y el respeto a la materia viva dieron origen a Kelek Home.
      </p>

      <!-- Mini autor pill -->
      <div class="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs">
        <img :src="avatarUrl || '/avatar.png'" alt="Jesús" class="w-8 h-8 rounded-full object-cover border border-amber-500/40" />
        <span class="text-xs font-bold text-stone-900 dark:text-stone-100 font-serif">Por Jesús Iglesias</span>
      </div>
    </section>

    <!-- Timeline Secuencial -->
    <section class="relative space-y-10 pl-6 sm:pl-8 border-l-2 border-amber-500/30 dark:border-amber-500/20 ml-3 sm:ml-4">
      <div
        v-for="(item, index) in timeline"
        :key="item.year"
        class="relative space-y-4 group"
      >
        <!-- Timeline Node Bullet -->
        <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-stone-950 border-2 border-amber-500 flex items-center justify-center shadow-md">
          <div class="w-2 h-2 rounded-full bg-amber-500" />
        </div>

        <!-- Header del Hito -->
        <div class="space-y-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-800 dark:text-amber-300 text-[11px] font-mono font-bold">
              {{ item.year }}
            </span>
            <span class="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              {{ item.chapter }}
            </span>
          </div>

          <h2 class="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {{ item.title }}
          </h2>
        </div>

        <!-- Cuerpo del Hito -->
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
          {{ item.desc }}
        </p>

        <!-- Polaroid Card -->
        <div class="p-3 bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 rounded-2xl shadow-md space-y-2 max-w-sm">
          <div class="rounded-xl overflow-hidden aspect-[16/10] bg-stone-100 dark:bg-stone-800">
            <img :src="item.img" :alt="item.title" class="w-full h-full object-cover" />
          </div>
          <p class="text-[11px] font-serif italic text-stone-500 dark:text-stone-400 text-center px-2">
            «{{ item.caption }}»
          </p>
        </div>
      </div>
    </section>

    <!-- Notas de Bitácora / Cuaderno de Taller -->
    <section class="space-y-4">
      <div class="flex items-center gap-2">
        <Icon name="mdi:feather" class="text-amber-600 dark:text-amber-400 text-lg" />
        <h3 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
          Fragmentos del Cuaderno de Taller
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="note in diaryNotes"
          :key="note.date"
          class="p-5 rounded-2xl bg-amber-500/5 dark:bg-stone-900/80 border border-amber-500/20 dark:border-stone-800 space-y-2 relative"
        >
          <div class="flex items-center justify-between text-[11px] font-mono text-amber-700 dark:text-amber-400">
            <span>{{ note.date }}</span>
            <Icon name="mdi:pin-outline" />
          </div>
          <h4 class="font-bold text-xs text-stone-900 dark:text-stone-100">{{ note.title }}</h4>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed italic font-serif">
            «{{ note.text }}»
          </p>
        </div>
      </div>
    </section>

    <!-- Epílogo & Invitación -->
    <section class="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 border border-stone-800 text-center space-y-4 shadow-xl">
      <h3 class="font-serif font-bold text-xl text-white">
        El próximo capítulo lo escribimos contigo
      </h3>
      <p class="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
        Si quieres que diseñemos juntos una pieza que cuente tu propia historia y dure generaciones, las puertas del taller están abiertas.
      </p>
      
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <NuxtLink
          to="/hola/contacto?tipo=presupuesto"
          class="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>ENCARGAR PIEZA A MEDIDA</span>
          <Icon name="mdi:arrow-right" class="text-sm" />
        </NuxtLink>
      </div>
    </section>

  </div>
</template>
