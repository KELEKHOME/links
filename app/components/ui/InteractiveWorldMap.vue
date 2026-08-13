<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import 'jsvectormap/dist/jsvectormap.css'

let jsVectorMap: any = null

export interface CityData {
  name: string
  percentage: number
}

export interface CountryData {
  id: string
  name: string
  flag: string
  percentage: number
  region: 'europe' | 'latam' | 'other'
  cities: CityData[]
  notes: string
  coords: { x: number; y: number }
}

const props = defineProps<{
  countries: CountryData[]
  activeCountryId: string
  selectedRegion: 'all' | 'europe' | 'latam'
}>()

const emit = defineEmits<{
  (e: 'select-country', country: CountryData): void
}>()

const mapContainer = ref<HTMLElement | null>(null)
let mapInstance: any = null
const currentZoomScale = ref<number>(1)

// Definitions for progressive markers based on zoom level
interface MapMarkerDef {
  id: string
  name: string
  countryId: string
  coords: [number, number]
  priority: 1 | 2 | 3
}

const countryMarkersDef: MapMarkerDef[] = [
  // Priority 1: Main country (Spain - visible at low zoom scale <= 1.2, including zoom 0.7x)
  { id: 'es-m', name: '🇪🇸 82%', countryId: 'es', coords: [40.4168, -3.7038], priority: 1 },

  // Priority 2: Secondary countries (visible when scale > 1.2)
  { id: 'pt-m', name: '🇵🇹 5%', countryId: 'pt', coords: [39.5572, -7.8537], priority: 2 },
  { id: 'mx-m', name: '🇲🇽 4%', countryId: 'mx', coords: [23.6345, -102.5528], priority: 2 },

  // Priority 3: Minor countries (visible when scale >= 1.8)
  { id: 'co-m', name: '🇨🇴 3%', countryId: 'co', coords: [4.5709, -74.2973], priority: 3 },
  { id: 'de-m', name: '🇩🇪 2%', countryId: 'de', coords: [51.1657, 10.4515], priority: 3 },
  { id: 'ar-m', name: '🇦🇷 2%', countryId: 'ar', coords: [-38.4161, -63.6167], priority: 3 }
]

function getVisibleMarkers(scale: number) {
  return countryMarkersDef
    .filter(m => {
      if (m.priority === 1) return true
      if (m.priority === 2) return scale > 1.2
      if (m.priority === 3) return scale >= 1.8
      return false
    })
    .map(m => {
      return {
        name: m.name,
        coords: m.coords,
        style: {
          fill: '#f59e0b',
          stroke: '#ffffff',
          strokeWidth: 1.5,
          r: 5.5
        }
      }
    })
}

function handleCountryClick(id: string) {
  const found = props.countries.find(c => c.id === id)
  if (found) {
    emit('select-country', found)
  }
}

// Custom helper functions for smooth Zooming and Resetting
function zoomIn() {
  if (!mapInstance) return
  const nextScale = Math.min(mapInstance.scale * 1.5, mapInstance.params.zoomMax || 12)
  if (typeof mapInstance._setScale === 'function') {
    mapInstance._setScale(nextScale, mapInstance._width / 2, mapInstance._height / 2, false, true)
  }
}

function zoomOut() {
  if (!mapInstance) return
  const nextScale = Math.max(mapInstance.scale / 1.5, mapInstance.params.zoomMin || 0.5)
  if (typeof mapInstance._setScale === 'function') {
    mapInstance._setScale(nextScale, mapInstance._width / 2, mapInstance._height / 2, false, true)
  }
}

function resetZoom() {
  if (!mapInstance) return
  if (typeof mapInstance.reset === 'function') {
    mapInstance.reset()
  } else if (typeof mapInstance._setScale === 'function') {
    mapInstance._setScale(1, mapInstance._width / 2, mapInstance._height / 2, false, true)
  }
}

function handleDblClick(event: MouseEvent) {
  if (!mapInstance || !mapContainer.value) return
  const rect = mapContainer.value.getBoundingClientRect()
  const offsetX = event.clientX - rect.left
  const offsetY = event.clientY - rect.top
  const nextScale = Math.min(mapInstance.scale * 1.6, mapInstance.params.zoomMax || 12)
  if (typeof mapInstance._setScale === 'function') {
    mapInstance._setScale(nextScale, offsetX, offsetY, false, true)
  }
}

function updateMarkersForZoom(scale: number) {
  if (!mapInstance) return
  try {
    const markersToDisplay = getVisibleMarkers(scale)
    mapInstance.removeMarkers()
    mapInstance.addMarkers(markersToDisplay)
  } catch {
    // catch any transient update errors
  }
}

function initMap() {
  if (!jsVectorMap || !mapContainer.value) return

  if (mapInstance) {
    try {
      mapInstance.destroy()
    } catch {
      // ignore cleanup errors
    }
    mapContainer.value.innerHTML = ''
  }

  // Choropleth values for region highlights based purely on percentage
  const regionValues: Record<string, number> = {
    ES: 82,
    PT: 5,
    MX: 4,
    CO: 3,
    DE: 2,
    AR: 2
  }

  const initialScale = currentZoomScale.value || 1
  const initialMarkers = getVisibleMarkers(initialScale)

  mapInstance = new jsVectorMap({
    selector: mapContainer.value,
    map: 'world_merc',
    zoomOnScroll: true,
    zoomOnScrollSpeed: 0.25,
    zoomButtons: true,
    zoomMax: 12,
    zoomMin: 0.5,
    zoomStep: 1.5,
    zoomAnimate: true,
    draggable: true,
    showTooltip: true,
    regionsSelectable: false,
    regionsSelectableOne: false,
    regionStyle: {
      initial: {
        fill: '#262626', // stone-800
        stroke: '#404040', // stone-700
        strokeWidth: 0.5,
        fillOpacity: 1
      },
      hover: {
        fill: '#f59e0b', // amber-500
        fillOpacity: 0.9,
        cursor: 'pointer'
      }
    },
    visualizeData: {
      scale: ['#382008', '#f59e0b'],
      values: regionValues
    },
    selectedRegions: [],
    markers: initialMarkers,
    labels: {
      markers: {
        render: (marker: any) => marker.name,
        offsets: () => [0, 0]
      }
    },
    markerStyle: {
      initial: {
        r: 5,
        fill: '#f59e0b',
        stroke: '#ffffff',
        strokeWidth: 1.5
      },
      hover: {
        r: 8,
        fill: '#fbbf24',
        stroke: '#ffffff',
        strokeWidth: 2,
        cursor: 'pointer'
      }
    },
    markerLabelStyle: {
      initial: {
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        fontSize: '11px',
        fontWeight: '800',
        fill: '#fef08a',
        cursor: 'pointer'
      },
      hover: {
        fill: '#ffffff',
        cursor: 'pointer'
      }
    },
    onMarkerClick: (_event: any, index: number) => {
      const scale = currentZoomScale.value
      const currentMarkers = countryMarkersDef.filter(m => {
        if (m.priority === 1) return true
        if (m.priority === 2) return scale > 1.2
        if (m.priority === 3) return scale >= 1.8
        return false
      })
      const clicked = currentMarkers[index]
      if (clicked) {
        handleCountryClick(clicked.countryId)
      }
    },
    onRegionClick: (_event: any, code: string) => {
      const countryId = code.toLowerCase()
      handleCountryClick(countryId)
    },
    onViewportChange: (scale: number) => {
      const prevScale = currentZoomScale.value
      currentZoomScale.value = scale

      // Determine zoom tier: Tier 1 (<= 1.2), Tier 2 (1.2 to 1.8), Tier 3 (>= 1.8)
      const getTier = (s: number) => (s >= 1.8 ? 3 : s > 1.2 ? 2 : 1)
      if (getTier(prevScale) !== getTier(scale)) {
        updateMarkersForZoom(scale)
      }
    },
    onRegionTooltipShow: (_event: any, tooltip: any, code: string) => {
      const countryId = code.toLowerCase()
      const found = props.countries.find(c => c.id === countryId)
      if (found) {
        tooltip.text(
          `<div class="p-2.5 bg-stone-900 text-white rounded-xl text-xs space-y-1 shadow-xl border border-amber-500/40">
            <div class="font-bold text-amber-400 flex items-center justify-between gap-3">
              <span class="flex items-center gap-1.5">
                <span class="text-base">${found.flag}</span>
                <span>${found.name}</span>
              </span>
              <span class="px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 font-mono text-[10px] font-extrabold">${found.percentage}%</span>
            </div>
            <p class="text-[11px] text-stone-300">${found.notes}</p>
          </div>`,
          true
        )
      }
    }
  })
}

onMounted(async () => {
  if (import.meta.client) {
    try {
      const jsVMModule = await import('jsvectormap')
      const jsVM = jsVMModule.default || jsVMModule
      if (typeof window !== 'undefined') {
        ;(window as any).jsVectorMap = jsVM
      }
      await import('jsvectormap/dist/maps/world-merc.js')
      jsVectorMap = jsVM
      initMap()
    } catch (err) {
      console.error('Failed to load jsVectorMap:', err)
    }
  }
})

onUnmounted(() => {
  if (mapInstance) {
    try {
      mapInstance.destroy()
    } catch {
      // ignore
    }
  }
})
</script>

<template>
  <div class="space-y-3">
    <!-- Map Canvas Container -->
    <div
      class="relative w-full h-[320px] sm:h-[420px] bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden shadow-inner p-2 select-none"
    >
      <!-- jsVectorMap mount node -->
      <div ref="mapContainer" @dblclick="handleDblClick" class="w-full h-full jsvectormap-custom-theme"></div>

      <!-- Prominent Custom Zoom Controls & Shortcuts Panel -->
      <div class="absolute top-3 left-3 z-20 flex flex-col gap-1.5 bg-stone-900/90 border border-stone-800 p-1.5 rounded-2xl backdrop-blur-md shadow-2xl">
        <button
          type="button"
          @click="zoomIn"
          class="w-8 h-8 rounded-xl bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-amber-400 font-extrabold text-lg flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
          title="Acercar mapa (+)"
        >
          +
        </button>
        <button
          type="button"
          @click="zoomOut"
          class="w-8 h-8 rounded-xl bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-amber-400 font-extrabold text-lg flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
          title="Alejar mapa (-)"
        >
          −
        </button>
        <button
          type="button"
          @click="resetZoom"
          class="w-8 h-8 rounded-xl bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-300 hover:font-bold text-[10px] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
          title="Restablecer vista inicial"
        >
          🎯
        </button>
      </div>

      <!-- Active Zoom Indicator Banner -->
      <div class="absolute top-3 right-14 z-10 hidden sm:flex items-center gap-2 bg-stone-900/90 border border-stone-800 px-2.5 py-1 rounded-xl text-[10px] font-mono text-stone-300 backdrop-blur-md">
        <span class="w-1.5 h-1.5 rounded-full" :class="currentZoomScale > 1.2 ? 'bg-amber-400' : 'bg-stone-500'"></span>
        <span>Zoom: <strong class="text-amber-400">{{ currentZoomScale.toFixed(1) }}x</strong></span>
        <span class="text-stone-500">|</span>
        <span class="text-stone-400" v-if="currentZoomScale <= 1.2">Solo España (82%)</span>
        <span class="text-amber-300 font-bold" v-else-if="currentZoomScale < 1.8">+ Portugal (5%) y México (4%)</span>
        <span class="text-amber-300 font-bold" v-else>+ Todos los países con audiencia</span>
      </div>

      <!-- Map Overlay Legend Footer -->
      <div class="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-stone-400 bg-stone-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-800 z-10 pointer-events-none">
        <div class="flex items-center gap-3">
          <span class="flex items-center gap-1">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            <span class="text-stone-200 font-medium">Mayor Concentración</span>
          </span>
          <span class="flex items-center gap-1">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-900/80 inline-block border border-amber-700"></span>
            <span class="text-stone-300">Presencia</span>
          </span>
          <span class="flex items-center gap-1">
            <span class="w-2.5 h-2.5 rounded-full bg-stone-800 inline-block border border-stone-700"></span>
            <span class="text-stone-400">Sin audiencia</span>
          </span>
        </div>
        <span class="hidden sm:inline text-amber-400 font-medium">💡 Usa la rueda del ratón, dobles clics o los botones (+/−) para hacer zoom</span>
      </div>
    </div>
  </div>
</template>

<style>
/* Custom styling for jsVectorMap controls, markers, and tooltips in dark theme */
.jsvectormap-container {
  width: 100%;
  height: 100%;
  background-color: transparent !important;
}

.jvm-marker-label {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
  font-weight: 800 !important;
  font-size: 11px !important;
  fill: #fef08a !important;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.95), 0 0 3px #d97706 !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
}

.jvm-marker-label:hover {
  fill: #ffffff !important;
}

.jsvectormap-zoombox {
  display: none !important;
}

.jsvectormap-tooltip {
  background-color: #1c1917 !important;
  border: 1px solid #78350f !important;
  border-radius: 12px !important;
  padding: 0 !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.7) !important;
  font-family: inherit !important;
}
</style>
