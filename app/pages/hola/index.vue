<!-- pages/index.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'fade', mode: 'out-in' } })

const { links } = useLinks()
const { features } = useCraftFeatures()

const activeLinks = computed(() => links.value.filter(l => l.enabled !== false))
const catalogLink = computed(() => activeLinks.value.find(l => l.title === 'Catálogo Kelek Home'))
const otherContent = computed(() => activeLinks.value.filter(l => l.category === 'content' && l.title !== 'Catálogo Kelek Home'))

const showToggles = ref(false)

useSeoMeta({
  title: 'KELEK HOME - Mobiliario artesanal',
  description: 'Mobiliario artesanal único hecho a mano en madera maciza. Descubre mis links, proyectos, simulador de presupuestos y catálogo.',
  ogTitle: 'Kelek Home',
  ogDescription: 'Piezas únicas, hechas a mano.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="px-4 pt-28 pb-16">
    <div class="w-full max-w-2xl mx-auto space-y-10">

      <!-- Profile Header -->
      <ProfileBlock />

      <!-- PROPUESTA 1: Hero Artesanal de Primer Impacto & Piezas Reales (Activable/Desactivable) -->
      <SectionsHomeCraftHero v-if="features.heroImpact" />

      <!-- Colección Artesanal (Hero Card original / secundario) -->
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

      <!-- PROPUESTA 2: Simulador Interactivo de Presupuestos (con modo WhatsApp 1-clic activable) -->
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

      <!-- Floating or Bottom Settings Widget for Proposals 1, 2, 3 -->
      <div class="pt-4">
        <div class="flex items-center justify-center">
          <button
            type="button"
            @click="showToggles = !showToggles"
            class="px-4 py-2 rounded-full border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 text-xs font-medium hover:border-amber-500/50 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Icon name="mdi:tune-variant" class="text-amber-600 dark:text-amber-400 text-sm" />
            <span>{{ showToggles ? 'Ocultar ajustes de mejoras' : 'Ajustes rápidos: Activar / Desactivar Mejoras (1, 2 y 3)' }}</span>
          </button>
        </div>

        <div v-if="showToggles" class="mt-4 animate-fade-in">
          <UiCraftFeaturesSwitcher />
        </div>
      </div>

    </div>
  </div>
</template>
