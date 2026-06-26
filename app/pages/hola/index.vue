<!-- pages/index.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'fade', mode: 'out-in' } })

const links = useLinks()
const catalogLink = computed(() => links.find(l => l.title === 'Catálogo Kelek Home'))
const otherContent = computed(() => links.filter(l => l.category === 'content' && l.title !== 'Catálogo Kelek Home'))

useSeoMeta({
  title: 'Kelek Home — Links',
  description: 'Mobiliario artesanal único hecho a mano. Descubre mis links, proyectos y colección.',
  ogTitle: 'Kelek Home',
  ogDescription: 'Piezas únicas, hechas a mano.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="px-4 pt-24 pb-4">
    <div class="w-full max-w-2xl mx-auto">

      <!-- Profile -->
      <ProfileBlock />

      <!-- Separador -->
      <div class="blur-in blur-in-d8 mt-10 flex items-center gap-4 max-w-lg mx-auto">
        <div class="flex-1 h-px bg-black/10 dark:bg-white/10" />
        <span class="text-xs font-semibold uppercase tracking-widest opacity-40">{{ $t('index.links_title') }}</span>
        <div class="flex-1 h-px bg-black/10 dark:bg-white/10" />
      </div>

      <!-- Hero Catálogo -->
      <div v-if="catalogLink" class="blur-in blur-in-d9 mt-4 max-w-lg mx-auto">
        <UiHeroCatalogCard :url="catalogLink.url" />
      </div>

      <!-- Resto de links de contenido -->
      <div class="mt-3 space-y-3 max-w-lg mx-auto">
        <div
          v-for="(link, i) in otherContent"
          :key="link.url"
          :class="`blur-in blur-in-d${i + 10}`"
        >
          <UiLinkCard :title="link.title" :url="link.url" :icon="link.icon" :color="link.color" />
        </div>
      </div>

      <!-- Por qué artesanal -->
      <SectionsWhyArtisanal />

      <!-- Mi proceso -->
      <SectionsMyProcess />

      <!-- Testimonios -->
      <SectionsTestimonials />

      <!-- Newsletter -->
      <SectionsNewsletterBanner />

    </div>
  </div>
</template>
