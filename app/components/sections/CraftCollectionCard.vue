<!-- app/components/sections/CraftCollectionCard.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto">
    <a
      :href="catalogUrl"
      target="_blank"
      rel="noopener noreferrer"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      class="group relative block w-full rounded-[28px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 border border-stone-200/80 dark:border-stone-800 text-white cursor-pointer no-underline"
    >
      <!-- Background Image -->
      <img
        src="https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1000&fit=crop"
        alt="Colección Artesanal Kelek Home"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <!-- Dark Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/70 to-stone-950/40" />

      <!-- Inner Content Structure -->
      <div class="relative p-6 sm:p-7 flex flex-col justify-between min-h-[320px] sm:min-h-[340px] z-10 space-y-6">
        
        <!-- Top Badges Row -->
        <div class="flex items-center justify-between gap-2">
          <!-- Left Badge -->
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[11px] font-bold tracking-wider uppercase">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>COLECCIÓN ARTESANAL</span>
          </span>

          <!-- Right Badge -->
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/60 backdrop-blur-md border border-white/15 text-stone-200 text-[11px] font-medium">
            <Icon name="mdi:leaf" class="text-amber-400 text-xs" />
            <span>Sostenible</span>
          </span>
        </div>

        <!-- Middle Text Content -->
        <div class="space-y-2 mt-auto">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
            <span>Piezas únicas, </span>
            <span class="font-serif italic text-amber-300 font-normal">hechas a mano</span>
          </h2>
          <p class="text-xs sm:text-sm text-stone-200/90 leading-relaxed max-w-lg font-normal">
            Piezas elaboradas una a una en madera maciza. Sin prisas, respetando la veta y el alma del material.
          </p>
        </div>

        <!-- Bottom Action & Stats Row -->
        <div class="pt-2 flex flex-row items-center justify-between gap-3 border-t border-white/10">
          <div class="flex items-center gap-1.5 text-xs text-stone-200 font-medium">
            <Icon name="mdi:check-circle-outline" class="text-amber-400 text-sm" />
            <span>120+ Piezas creadas</span>
          </div>

          <div
            class="px-4 sm:px-5 py-2.5 rounded-full bg-white hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 shadow-md group-hover:scale-105"
          >
            <span>Ver catálogo completo</span>
            <Icon name="mdi:arrow-right" class="text-base transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

      </div>
    </a>
  </section>
</template>

<script setup lang="ts">
const catalogUrl = 'https://linktr.ee/kelek.home'
</script>
