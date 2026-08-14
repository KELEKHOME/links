<!-- app/components/sections/CategoryExplorer.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      class="p-5 sm:p-6 rounded-[28px] border border-stone-200/90 dark:border-stone-800
             bg-white dark:bg-stone-900/90 shadow-2xs space-y-5"
    >
      <!-- Header Row: Title + Tabs -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <!-- Left Title -->
        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300">
          <Icon name="mdi:shape-outline" class="text-amber-600 dark:text-amber-400 text-sm shrink-0" />
          <span>EXPLORAR POR CATEGORÍA</span>
        </div>

        <!-- Right Tabs Bar -->
        <div class="p-1 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center gap-1 self-stretch sm:self-auto justify-between sm:justify-start">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            type="button"
            @click="activeTab = tab.id"
            :class="[
              'px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer text-center flex-1 sm:flex-none',
              activeTab === tab.id
                ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 font-bold shadow-2xs'
                : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 font-medium'
            ]"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- 3 Columns Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div
          v-for="item in currentItems"
          :key="item.title"
          @click="openCategoryItem(item)"
          class="group rounded-2xl border border-stone-200/80 dark:border-stone-800 overflow-hidden bg-white dark:bg-stone-900/60 hover:border-amber-500/50 hover:shadow-sm transition-all duration-300 cursor-pointer flex sm:flex-col"
        >
          <!-- Card Image Container -->
          <div class="relative w-28 sm:w-full h-24 sm:h-36 overflow-hidden shrink-0">
            <!-- Wood Tag Badge -->
            <span class="absolute top-2.5 left-2.5 z-10 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-2xs">
              {{ item.wood }}
            </span>
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Card Content Body -->
          <div class="p-3 sm:p-3.5 flex flex-col justify-center space-y-0.5 min-w-0 flex-1">
            <h4 class="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {{ item.title }}
            </h4>
            <p class="text-[11px] text-stone-500 dark:text-stone-400 truncate">
              {{ item.subtitle }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
type TabId = 'mesas' | 'modulos' | 'objetos'

interface CategoryItem {
  wood: string
  title: string
  subtitle: string
  image: string
}

const activeTab = ref<TabId>('modulos')

const tabs = [
  { id: 'mesas' as TabId, name: 'Mesas' },
  { id: 'modulos' as TabId, name: 'Módulos' },
  { id: 'objetos' as TabId, name: 'Objetos' }
]

const categoryData: Record<TabId, CategoryItem[]> = {
  modulos: [
    {
      wood: 'Roble',
      title: 'Estante Flotante',
      subtitle: 'Fijación oculta',
      image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&fit=crop'
    },
    {
      wood: 'Castaño',
      title: 'Módulo Pared',
      subtitle: 'Modular',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&fit=crop'
    },
    {
      wood: 'Nogal',
      title: 'Consola Entrada',
      subtitle: 'Diseño liviano',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&fit=crop'
    }
  ],
  mesas: [
    {
      wood: 'Roble',
      title: 'Mesa Comedor',
      subtitle: 'Canto orgánico',
      image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&fit=crop'
    },
    {
      wood: 'Nogal',
      title: 'Mesa de Centro',
      subtitle: 'Patas en cruz',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&fit=crop'
    },
    {
      wood: 'Olivo',
      title: 'Mesa Auxiliar',
      subtitle: 'Rodaja maciza',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&fit=crop'
    }
  ],
  objetos: [
    {
      wood: 'Castaño',
      title: 'Tabla de Corte',
      subtitle: 'Cera de abeja',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&fit=crop'
    },
    {
      wood: 'Roble',
      title: 'Lámpara Madera',
      subtitle: 'Luz cálida LED',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&fit=crop'
    },
    {
      wood: 'Nogal',
      title: 'Perchero Pared',
      subtitle: 'Listones artesanales',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&fit=crop'
    }
  ]
}

const currentItems = computed(() => categoryData[activeTab.value])

function openCategoryItem(item: CategoryItem) {
  const url = `https://wa.me/34600000000?text=${encodeURIComponent(`¡Hola Jesús! Me interesa consultar sobre: ${item.title} (${item.wood})`)}`
  window.open(url, '_blank')
}
</script>
