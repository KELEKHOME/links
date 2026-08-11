<!-- pages/marcas.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'zoom', mode: 'out-in' } })
useSeoMeta({ title: 'Marcas — Kelek Home' })

const brands = [
  { name: 'Bambu Lab',     icon: 'mdi:cube-outline',          color: '#00AE42', url: 'https://bambulab.com' },
  { name: 'IKEA',          icon: 'mdi:home-outline',           color: '#0058A3', url: 'https://ikea.com' },
  { name: 'Leroy Merlin',  icon: 'mdi:hammer-wrench',          color: '#67AC45', url: 'https://leroymerlin.es' },
  { name: 'Maisons du Monde', icon: 'mdi:sofa-outline',        color: '#C8A96E', url: 'https://maisonsdumonde.com' },
  { name: 'Etsy',          icon: 'simple-icons:etsy',          color: '#F56400', url: 'https://etsy.com' },
  { name: 'Pinterest',     icon: 'simple-icons:pinterest',     color: '#BD081C', url: 'https://pinterest.com' },
]
</script>

<template>
  <div class="px-4 pt-28 pb-8">
    <div class="w-full max-w-2xl mx-auto">
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold tracking-tight">Marcas</h1>
        <p class="mt-3 opacity-60 text-sm leading-relaxed">
          Marcas con las que colaboro y que forman parte de mi día a día.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <a
          v-for="brand in brands"
          :key="brand.name"
          :href="brand.url"
          target="_blank"
          rel="noopener noreferrer"
          class="brand-card group flex flex-col items-center justify-center gap-3 py-8 px-4 rounded-2xl border
                 transition-all duration-300 cursor-pointer
                 bg-black/5 border-black/10 hover:-translate-y-1 hover:shadow-lg
                 dark:bg-white/5 dark:border-white/10"
          :style="{ '--brand-color': brand.color } as any"
        >
          <Icon
            :name="brand.icon"
            class="text-4xl transition-colors duration-300 opacity-30 group-hover:opacity-100"
            :style="{ color: `var(--brand-color)` }"
          />
          <span class="text-sm font-medium opacity-40 group-hover:opacity-100 transition-opacity duration-300">
            {{ brand.name }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brand-card:hover {
  background-color: color-mix(in srgb, var(--brand-color) 8%, transparent);
  border-color: color-mix(in srgb, var(--brand-color) 30%, transparent);
}
</style>
