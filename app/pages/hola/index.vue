<!-- pages/index.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'fade', mode: 'out-in' } })

const { links } = useLinks()
const activeLinks = computed(() => links.value.filter(l => l.enabled !== false))
const catalogLink = computed(() => activeLinks.value.find(l => l.title === 'Catálogo Kelek Home'))
const otherContent = computed(() => activeLinks.value.filter(l => l.category === 'content' && l.title !== 'Catálogo Kelek Home'))

useSeoMeta({
  title: 'Kelek Home — Links',
  description: 'Mobiliario artesanal único hecho a mano. Descubre mis links, proyectos, simulador de presupuestos y catálogo.',
  ogTitle: 'Kelek Home',
  ogDescription: 'Piezas únicas, hechas a mano.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="px-4 pt-28 pb-12">
    <div class="w-full max-w-2xl mx-auto space-y-12">

      <!-- Profile Header -->
      <ProfileBlock />

      <!-- Colección Artesanal (Hero Card) -->
      <SectionsCraftCollectionCard />

      <!-- Explorar por Categoría -->
      <SectionsCategoryExplorer />

      <!-- WhatsApp Direct CTA -->
      <SectionsWhatsAppCTA />

      <!-- Separador Links -->
      <div class="blur-in blur-in-d8 mt-6 flex items-center gap-4 w-full">
        <div class="flex-1 h-px bg-black/10 dark:bg-white/10" />
        <span class="text-xs font-semibold uppercase tracking-widest opacity-40">{{ $t('index.links_title') }}</span>
        <div class="flex-1 h-px bg-black/10 dark:bg-white/10" />
      </div>

      <!-- Hero Catálogo -->
      <div v-if="catalogLink" class="blur-in blur-in-d9 mt-4 w-full">
        <UiHeroCatalogCard :url="catalogLink.url" />
      </div>

      <!-- Resto de links de contenido -->
      <div class="mt-3 space-y-3 w-full">
        <div
          v-for="(link, i) in otherContent"
          :key="link.url"
          :class="`blur-in blur-in-d${i + 10}`"
        >
          <UiLinkCard :title="link.title" :url="link.url" :icon="link.icon" :color="link.color" />
        </div>
      </div>

      <!-- Simulador Interactivo de Presupuestos -->
      <SectionsPriceSimulator />

      <!-- Guía de Precios Orientativos y Rangos -->
      <SectionsPricingGuide />

      <!-- Recurso Gratuito (Lead Magnet) -->
      <SectionsFreeResourceBanner />

      <!-- Por qué artesanal -->
      <SectionsWhyArtisanal />

      <!-- Mi proceso en el taller -->
      <SectionsMyProcess />

      <!-- Testimonios -->
      <SectionsTestimonials />

      <!-- Panel de Control de Captación y Ventas -->
      <SectionsSalesLeadWidget />

    </div>
  </div>
</template>

