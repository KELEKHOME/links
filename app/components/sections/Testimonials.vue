<!-- app/components/sections/Testimonials.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-16 space-y-6">
    <!-- Quote Banner -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="p-6 sm:p-8 rounded-3xl border border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/10 text-center relative"
    >
      <blockquote class="font-serif italic text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed max-w-xl mx-auto">
        «Cada mueble lleva horas de trabajo dedicado. No busco la prisa, busco la perfección que solo la paciencia aporta.»
      </blockquote>
    </div>

    <!-- Circle Connector Icon -->
    <div class="flex justify-center -my-3 relative z-10">
      <div class="w-8 h-8 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 flex items-center justify-center text-stone-600 dark:text-stone-400 shadow-sm">
        <Icon name="mdi:circle-outline" class="text-base" />
      </div>
    </div>

    <!-- Testimonials Main Card -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="p-5 sm:p-7 rounded-[28px] border bg-white/70 dark:bg-stone-900/70 border-stone-200/90 dark:border-stone-800 backdrop-blur-sm space-y-5 shadow-xs"
    >
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="space-y-0.5">
          <div class="text-[10px] font-bold uppercase tracking-wider text-amber-900/90 dark:text-amber-400">
            PIEZAS EN SU NUEVO HOGAR
          </div>
          <h2 class="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Lo que dicen quienes ya conviven con Kelek Home
          </h2>
        </div>

        <!-- Rating Badge -->
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 text-[11px] font-bold shrink-0 self-start sm:self-center">
          <Icon name="mdi:star" class="text-amber-400 text-sm" />
          <span>5.0 / 5.0 en valoraciones</span>
        </div>
      </div>

      <!-- Testimonial Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div
          v-for="item in testimonials"
          :key="item.author"
          class="p-3.5 rounded-2xl border bg-white/90 dark:bg-stone-950/70 border-stone-200/80 dark:border-stone-800/80 flex items-center gap-3 shadow-2xs hover:border-amber-500/40 transition-all"
        >
          <!-- Thumbnail -->
          <img
            :src="item.image"
            :alt="item.product"
            class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0 border border-stone-100 dark:border-stone-800"
          />

          <!-- Content -->
          <div class="space-y-1 min-w-0">
            <!-- Stars -->
            <div class="flex items-center gap-0.5">
              <Icon v-for="n in 5" :key="n" name="mdi:star" class="text-amber-400 text-[10px]" />
            </div>

            <!-- Quote -->
            <p class="text-[11px] sm:text-xs italic text-stone-700 dark:text-stone-300 line-clamp-2 leading-snug">
              "{{ item.quote }}"
            </p>

            <!-- Author & Product -->
            <div class="text-[10px] text-stone-400 dark:text-stone-500 font-medium truncate pt-0.5">
              <span>{{ item.author }}</span>
              <span class="mx-1">•</span>
              <span class="text-amber-800 dark:text-amber-400 font-bold">{{ item.product }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80',
    quote: 'La veta de la madera de olivo en persona es aún más impresionante...',
    author: 'Elena P. (Madrid)',
    product: 'Mesa Olivo Vivo'
  },
  {
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80',
    quote: 'Buscaba una medida exacta para el pasillo y el acabado a cera suave...',
    author: 'Marcos R. (Valencia)',
    product: 'Consola Entrada'
  }
]
</script>
