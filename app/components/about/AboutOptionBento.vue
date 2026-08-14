<!-- app/components/about/AboutOptionBento.vue -->
<script setup lang="ts">
const props = defineProps<{
  avatarUrl?: string
}>()

const woodTypes = [
  {
    id: 'nogal',
    name: 'Nogal Español',
    tone: 'Pardo profundo & chocolate',
    grain: 'Veta sinuosa y contrastada',
    hardness: 'Alta (4/5)',
    use: 'Mesas nobles, piezas escultóricas y cabeceros',
    color: '#452c1e',
    img: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'roble',
    name: 'Roble Europeo',
    tone: 'Dorado natural & miel',
    grain: 'Fibra recta y radios medulares',
    hardness: 'Muy alta (5/5)',
    use: 'Estructuras de uso diario y mobiliario resistente',
    color: '#8b5a2b',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'fresno',
    name: 'Fresno Blanco',
    tone: 'Luminoso, marfil y beige',
    grain: 'Veta elástica y expresiva',
    hardness: 'Alta (4/5)',
    use: 'Diseños contemporáneos, sillería y curvas',
    color: '#d4b595',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'cerezo',
    name: 'Cerezo Silvestre',
    tone: 'Cobrizo cálido que madura con la luz',
    grain: 'Textura sedosa ultrafina',
    hardness: 'Media-alta (3.5/5)',
    use: 'Cómodas, mesitas auxiliares y detalles finos',
    color: '#7b3f2e',
    img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&auto=format&fit=crop&q=80'
  }
]

const selectedWood = ref(woodTypes[0])

const tools = [
  { name: 'Kanna Japonés', role: 'Cepillado a mano sin lija', icon: 'mdi:hand-back-right-outline' },
  { name: 'Formones Forjados', role: 'Ensambles milimétricos', icon: 'mdi:hammer' },
  { name: 'Gramil de Latón', role: 'Trazado exacto de espigas', icon: 'mdi:ruler' },
  { name: 'Muñequilla de Lino', role: 'Nutrición con aceites orgánicos', icon: 'mdi:brush-variant' }
]
</script>

<template>
  <div class="space-y-6 animate-fade-in">
    
    <!-- Bento Grid Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      <!-- Card 1: Perfil Principal & Rol (Full Width en móvil, span-2) -->
      <div class="sm:col-span-2 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-black text-white border border-stone-800 shadow-xl relative overflow-hidden">
        <!-- Glow -->
        <div class="absolute -right-10 -bottom-10 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        
        <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div class="relative shrink-0">
            <div class="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-xl bg-stone-800">
              <img
                :src="avatarUrl || '/avatar.png'"
                alt="Jesús Iglesias"
                class="w-full h-full object-cover"
              />
            </div>
            <span class="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 font-bold text-[9px] uppercase tracking-wider shadow-sm">
              Artesano
            </span>
          </div>

          <div class="space-y-2 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <h2 class="text-2xl font-serif font-bold text-white">Jesús Iglesias</h2>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Taller Abierto
              </span>
            </div>
            <p class="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
              Diseño y construyo mobiliario singular en madera maciza desde mi taller en Madrid. Cada pieza es un diálogo entre el árbol, el diseño contemporáneo y el rigor del oficio.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2: Muestrario de Maderas Nobles (Interactivo - Col Span 2) -->
      <div class="sm:col-span-2 p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-2xs space-y-4">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <div class="space-y-0.5">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Materia Prima Viva</span>
            <h3 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">Muestrario de Maderas de Taller</h3>
          </div>
          <span class="text-[11px] text-stone-500 dark:text-stone-400">Toca para inspeccionar</span>
        </div>

        <!-- Selector de Maderas -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            v-for="wood in woodTypes"
            :key="wood.id"
            type="button"
            @click="selectedWood = wood"
            :class="[
              'p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2',
              selectedWood.id === wood.id
                ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 border-stone-900 dark:border-stone-100 shadow-md scale-102'
                : 'bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-amber-500/40'
            ]"
          >
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-full border border-black/20 dark:border-white/20 shrink-0" :style="{ backgroundColor: wood.color }" />
              <span class="text-xs font-bold leading-tight truncate">{{ wood.name }}</span>
            </div>
            <span class="text-[10px] opacity-70 truncate">{{ wood.hardness }}</span>
          </button>
        </div>

        <!-- Ficha de la Madera Seleccionada -->
        <div class="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800/80 flex flex-col sm:flex-row items-center gap-4 transition-all">
          <div class="w-full sm:w-28 h-24 rounded-xl overflow-hidden shrink-0 border border-stone-200 dark:border-stone-800">
            <img :src="selectedWood.img" :alt="selectedWood.name" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-1.5 flex-1 w-full text-left">
            <div class="flex items-center justify-between">
              <h4 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100">{{ selectedWood.name }}</h4>
              <span class="text-[11px] font-semibold text-amber-600 dark:text-amber-400">{{ selectedWood.hardness }}</span>
            </div>
            <p class="text-xs text-stone-600 dark:text-stone-300"><strong class="font-semibold text-stone-800 dark:text-stone-200">Tonalidad:</strong> {{ selectedWood.tone }}</p>
            <p class="text-xs text-stone-600 dark:text-stone-300"><strong class="font-semibold text-stone-800 dark:text-stone-200">Uso ideal:</strong> {{ selectedWood.use }}</p>
          </div>
        </div>
      </div>

      <!-- Card 3: Herramientas de Autor (Col 1) -->
      <div class="p-5 sm:p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-2xs space-y-4">
        <div class="space-y-1">
          <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">El Oficio</span>
          <h3 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100">Herramientas Esenciales</h3>
        </div>
        <div class="space-y-2.5">
          <div v-for="t in tools" :key="t.name" class="flex items-center gap-3 p-2 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-100 dark:border-stone-800/80">
            <div class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-base shrink-0">
              <Icon :name="t.icon" />
            </div>
            <div class="min-w-0">
              <p class="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">{{ t.name }}</p>
              <p class="text-[11px] text-stone-500 dark:text-stone-400 truncate">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4: Garantía de Vida & Ensambles (Col 2) -->
      <div class="p-5 sm:p-6 rounded-3xl bg-amber-500/10 dark:bg-stone-900/90 border border-amber-500/25 dark:border-stone-800 shadow-2xs flex flex-col justify-between space-y-4">
        <div class="space-y-3">
          <div class="w-10 h-10 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center text-xl font-bold shadow-md">
            <Icon name="mdi:shield-check-outline" />
          </div>
          <h3 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
            Garantía Generacional
          </h3>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            Cada ensamble a cola de milano y cada espiga están calculados para absorber las variaciones de humedad sin crujir ni deformarse jamás.
          </p>
        </div>

        <div class="pt-2 border-t border-amber-500/20 dark:border-stone-800 flex items-center justify-between text-[11px] font-semibold text-amber-900 dark:text-amber-400">
          <span>Piezas 100% numeradas</span>
          <span>Firma de autor</span>
        </div>
      </div>

      <!-- Card 5: Banner de Contacto Directo (Full Width) -->
      <div class="sm:col-span-2 p-6 rounded-3xl bg-stone-900 text-white border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div class="space-y-1 text-center sm:text-left">
          <h4 class="font-serif font-bold text-base text-white">¿Tienes un espacio o proyecto en mente?</h4>
          <p class="text-xs text-stone-400">Diseño a medida según tus medidas exactas y maderas preferidas.</p>
        </div>

        <NuxtLink
          to="/hola/contacto?tipo=presupuesto"
          class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
        >
          <span>PEDIR PRESUPUESTO</span>
          <Icon name="mdi:arrow-right" class="text-sm" />
        </NuxtLink>
      </div>

    </div>

  </div>
</template>
