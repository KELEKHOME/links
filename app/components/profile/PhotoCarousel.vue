<!-- components/PhotoCarousel.vue -->
<template>
  <div class="w-full overflow-hidden carousel-mask">
    <!-- skeleton mientras carga -->
    <div v-if="pending" class="flex gap-5 py-6 px-10">
      <div
        v-for="n in 6"
        :key="n"
        class="flex-shrink-0 w-36 h-48 bg-black/5 dark:bg-white/5 animate-pulse rounded"
        :style="{ transform: `rotate(${n % 2 === 0 ? -3 : 3}deg)` }"
      />
    </div>

    <!-- carrusel infinito -->
    <div v-else class="carousel-track flex items-end gap-5 py-6">
      <UiPolaroidItem
        v-for="(img, i) in loopedImages"
        :key="`${img.id}-${i}`"
        :src="img.src"
        :alt="img.alt"
        :permalink="img.permalink"
        :index="i"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, pending } = await useFetch('/api/instagram')

const placeholders = [
  { id: 'p1', src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop', alt: 'Mobiliario artesanal', permalink: '#' },
  { id: 'p2', src: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=400&h=400&fit=crop', alt: 'Madera natural', permalink: '#' },
  { id: 'p3', src: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop', alt: 'Hecho a mano', permalink: '#' },
  { id: 'p4', src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop', alt: 'Detalle madera', permalink: '#' },
  { id: 'p5', src: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop', alt: 'Diseño natural', permalink: '#' },
  { id: 'p6', src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop', alt: 'Rincón acogedor', permalink: '#' },
  { id: 'p7', src: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=400&fit=crop', alt: 'Artesanía', permalink: '#' },
]

const baseImages = computed(() =>
  (data.value?.images?.length ?? 0) > 0 ? data.value!.images : placeholders
)

// Duplicar para loop infinito seamless
const loopedImages = computed(() => [...baseImages.value, ...baseImages.value])
</script>

<style scoped>
.carousel-mask {
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
}

.carousel-track {
  animation: scroll-left 30s linear infinite;
  width: max-content;
}

.carousel-track:hover {
  animation-play-state: paused;
}

@keyframes scroll-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
