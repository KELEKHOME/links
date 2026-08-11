<!-- components/HeroCatalogCard.vue -->
<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative block w-full rounded-3xl overflow-hidden h-52 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
  >
    <!-- imagen de fondo -->
    <img
      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=400&fit=crop"
      alt="Catálogo Kelek Home"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <!-- overlay gradiente -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

    <!-- contenido -->
    <div class="relative h-full flex flex-col justify-end p-6">
      <span class="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1">
        {{ $t('catalog.badge') }}
      </span>
      <h2 class="text-2xl font-bold text-white leading-tight">
        {{ $t('catalog.headline_1') }}<br>{{ $t('catalog.headline_2') }}
      </h2>
      <div class="mt-3 flex items-center gap-2">
        <span
          class="inline-flex items-center gap-1.5 bg-white text-zinc-900 text-sm font-semibold
                 px-4 py-2 rounded-full transition-all duration-300
                 group-hover:bg-amber-400 group-hover:gap-3"
        >
          {{ $t('catalog.cta') }}
          <Icon name="mdi:arrow-right" class="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{ url: string }>()
</script>
