<!-- pages/proyectos.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'slide-right', mode: 'out-in' } })
useSeoMeta({
  title: 'Proyectos & Piezas de Autor — Kelek Home',
  description: 'Portafolio de piezas únicas en madera maciza elaboradas en taller artesanal. Conoce las maderas nobles, acabados y detalles de cada encargo.'
})

const { features, toggleFeature } = useCraftFeatures()

interface ProjectItem {
  id: string
  title: string
  subtitle: string
  description: string
  wood: string
  finish: string
  dimensions: string
  location?: string
  challenge: string
  image: string
  detailImages?: string[]
  tags: string[]
}

const projects: ProjectItem[] = [
  {
    id: 'mesa-centro-roble',
    title: 'Mesa de Centro "Veta Serena"',
    subtitle: 'Roble macizo europeo',
    description: 'Diseño minimalista con tablero continuo sin uniones visibles y cantos suavemente biselados.',
    wood: 'Roble Europeo Seleccionado',
    finish: 'Aceite de linaza bio y cera natural',
    dimensions: '120 x 70 x 42 cm',
    location: 'Encargo particular para salón en Madrid',
    challenge: 'Mantener la veta continua a lo largo de todo el perímetro sin comprometer la resistencia estructural.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&fit=crop',
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&fit=crop'
    ],
    tags: ['Roble Macizo', 'Salón', 'Acabado Bio']
  },
  {
    id: 'estanteria-modular',
    title: 'Estantería Modular "Raíces"',
    subtitle: 'Castaño y herrajes invisibles',
    description: 'Sistema adaptable de módulos abiertos fabricados para encajar en la arquitectura del espacio.',
    wood: 'Castaño del Norte',
    finish: 'Cera de abeja artesana',
    dimensions: '190 x 110 x 32 cm',
    location: 'Estudio de lectura',
    challenge: 'Garantizar máxima ligereza visual con ensambles ocultos en inglete reforzados.',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&fit=crop'
    ],
    tags: ['Castaño', 'Modular', 'A Medida']
  },
  {
    id: 'silla-curvada',
    title: 'Silla Escultórica "Curva Viva"',
    subtitle: 'Curvado al vapor en fresno',
    description: 'Pieza que aúna técnica tradicional de curvado al vapor con líneas ergonómicas contemporáneas.',
    wood: 'Fresno Macizo',
    finish: 'Aceite Rubio Monocoat Mate',
    dimensions: '52 x 54 x 78 cm',
    location: 'Comedor contemporáneo',
    challenge: 'Lograr una curvatura orgánica suave sin debilitar las fibras de la madera.',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&fit=crop'
    ],
    tags: ['Fresno', 'Curvado al vapor', 'Ergonomía']
  },
  {
    id: 'consola-nogal-viva',
    title: 'Consola Flotante "Nogal Noble"',
    subtitle: 'Nogal español con borde natural',
    description: 'Pieza suspendida con gavetas interiores de apertura por presión y frontal de veta espejada.',
    wood: 'Nogal Español Macizo',
    finish: 'Aceite de tung y pulido manual',
    dimensions: '145 x 38 x 22 cm',
    location: 'Recibidor de entrada',
    challenge: 'Suspender una pieza maciza pesada con anclajes invisibles de alta seguridad en pared de pladur.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&fit=crop'
    ],
    tags: ['Nogal', 'Recibidor', 'Flotante']
  },
  {
    id: 'mural-decorativo',
    title: 'Panel Mural "Geometría de Taller"',
    subtitle: 'Madera reciclada y relieves',
    description: 'Composición mural con texturas y testas de madera noble que aporta calidez acústica y visual.',
    wood: 'Retales de Roble, Olivo y Fresno',
    finish: 'Acabado natural al agua',
    dimensions: '100 x 100 x 4 cm',
    location: 'Espacio de trabajo',
    challenge: 'Aprovechar descartes nobles del taller para crear un mosaico equilibrado de texturas.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&fit=crop'
    ],
    tags: ['Upcycling', 'Arte en Madera', 'Acústica']
  }
]

const selectedProject = ref<ProjectItem | null>(null)

function getWhatsAppProjectUrl(project: ProjectItem) {
  const phone = '34600000000'
  const text = `¡Hola Jesús! He visto en tu web el proyecto "${project.title}" (${project.wood}). Me gustaría saber si podríamos fabricar una pieza similar para mi casa.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}
</script>

<template>
  <div class="px-4 pt-28 pb-16">
    <div class="w-full max-w-2xl mx-auto space-y-8">
      
      <!-- Header Section -->
      <div class="text-center space-y-3">
        <h1 class="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Proyectos
        </h1>
        <p class="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
          Cada encargo es único: maderas nobles seleccionadas, ensambles de autor y acabados respetuosos con el material.
        </p>

        <!-- Mode Toggle Switcher (Detailed vs Compact) -->
        <div class="pt-2 flex items-center justify-center">
          <div class="inline-flex items-center p-1 rounded-full bg-stone-200/70 dark:bg-stone-800/80 border border-stone-300/50 dark:border-stone-700">
            <button
              type="button"
              @click="features.projectsDetailedView = true"
              :class="[
                'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5',
                features.projectsDetailedView
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              ]"
            >
              <Icon name="mdi:hammer-wrench" class="text-sm text-amber-600 dark:text-amber-400" />
              <span>Fichas de Taller</span>
            </button>
            <button
              type="button"
              @click="features.projectsDetailedView = false"
              :class="[
                'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5',
                !features.projectsDetailedView
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              ]"
            >
              <Icon name="mdi:view-grid-outline" class="text-sm" />
              <span>Vista Compacta</span>
            </button>
          </div>
        </div>
      </div>

      <!-- DETAILED CRAFT VIEW (Propuesta 3) -->
      <div v-if="features.projectsDetailedView" class="space-y-6">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group rounded-3xl overflow-hidden border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs hover:shadow-md transition-all duration-300"
        >
          <!-- Project Image with Wood Tag -->
          <div class="relative h-60 sm:h-72 overflow-hidden bg-stone-100 dark:bg-stone-950">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

            <!-- Badges on image -->
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full bg-stone-900/90 backdrop-blur-xs text-amber-300 text-xs font-bold border border-amber-500/30">
                {{ project.wood }}
              </span>
              <span class="px-2.5 py-1 rounded-full bg-stone-900/70 backdrop-blur-xs text-stone-300 text-[11px] font-medium">
                📏 {{ project.dimensions }}
              </span>
            </div>
          </div>

          <!-- Project Details Body -->
          <div class="p-5 sm:p-6 space-y-4">
            <div class="space-y-1">
              <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                {{ project.title }}
              </h2>
              <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Craft Specs Grid -->
            <div class="grid grid-cols-2 gap-2 text-xs bg-stone-50 dark:bg-stone-950/50 p-3.5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80">
              <div class="space-y-0.5">
                <span class="text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400">Acabado Aplicado</span>
                <p class="font-semibold text-stone-800 dark:text-stone-200">{{ project.finish }}</p>
              </div>
              <div class="space-y-0.5">
                <span class="text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400">Detalle Artesanal</span>
                <p class="font-semibold text-stone-800 dark:text-stone-200 line-clamp-1">{{ project.challenge }}</p>
              </div>
            </div>

            <!-- Actions Row -->
            <div class="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <!-- WhatsApp Direct Order CTA -->
              <a
                :href="getWhatsAppProjectUrl(project)"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Icon name="simple-icons:whatsapp" class="text-base" />
                <span>¿Quieres una pieza similar? Escríbeme</span>
              </a>

              <!-- Detail Modal Button -->
              <button
                type="button"
                @click="selectedProject = project"
                class="w-full sm:w-auto py-3 px-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 font-semibold text-xs transition-colors cursor-pointer text-center"
              >
                Ficha completa
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- COMPACT MINIMAL VIEW (Original) -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="project in projects"
          :key="project.id"
          @click="selectedProject = project"
          class="group rounded-2xl overflow-hidden border transition-all duration-300
                 bg-white dark:bg-stone-900 border-stone-200/90 dark:border-stone-800 hover:shadow-md cursor-pointer flex flex-col justify-between"
        >
          <div class="overflow-hidden h-44 bg-stone-100 dark:bg-stone-950">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="p-4 space-y-2 flex-1 flex flex-col justify-between">
            <div>
              <h2 class="font-semibold text-sm text-stone-900 dark:text-stone-100">{{ project.title }}</h2>
              <p class="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed line-clamp-2">{{ project.description }}</p>
            </div>
            <div class="flex gap-1.5 pt-2 flex-wrap">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[10px] px-2 py-0.5 rounded-full border font-medium
                       border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400"
              >{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Global Bottom Conversion Banner -->
      <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 text-center space-y-4 shadow-xs">
        <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-2xl">
          <Icon name="mdi:hammer" />
        </div>
        <div class="space-y-1">
          <h3 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            ¿Tienes en mente un mueble especial?
          </h3>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
            Hablamos sobre medidas, tipo de madera y diseñamos una pieza a medida para tu espacio sin compromiso.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
          <NuxtLink
            to="/hola/contacto"
            class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition-all"
          >
            Contactar para un encargo
          </NuxtLink>
          <NuxtLink
            to="/hola"
            class="w-full sm:w-auto px-5 py-3 rounded-2xl border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-semibold transition-colors"
          >
            Probar simulador de precios
          </NuxtLink>
        </div>
      </div>

      <!-- PROJECT DETAIL MODAL -->
      <Teleport to="body">
        <div
          v-if="selectedProject"
          class="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 sm:p-6"
          @click.self="selectedProject = null"
        >
          <div class="bg-white dark:bg-stone-900 rounded-[28px] max-w-lg w-full p-6 sm:p-7 shadow-2xl relative border border-stone-200 dark:border-stone-800 max-h-[90vh] overflow-y-auto space-y-5">
            
            <!-- Close Button -->
            <button
              type="button"
              @click="selectedProject = null"
              class="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <Icon name="mdi:close" class="text-xl" />
            </button>

            <!-- Modal Header -->
            <div class="pr-8 space-y-1">
              <span class="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                {{ selectedProject.wood }}
              </span>
              <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                {{ selectedProject.title }}
              </h2>
            </div>

            <!-- Main Image -->
            <div class="h-52 rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-950">
              <img
                :src="selectedProject.image"
                :alt="selectedProject.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Description & Story -->
            <div class="space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Historia y fabricación
              </h4>
              <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {{ selectedProject.description }}
              </p>
            </div>

            <!-- Specs list -->
            <div class="space-y-2 text-xs border-t border-stone-100 dark:border-stone-800 pt-3">
              <div class="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800/60">
                <span class="text-stone-500">Madera principal:</span>
                <span class="font-bold text-stone-800 dark:text-stone-200">{{ selectedProject.wood }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800/60">
                <span class="text-stone-500">Dimensiones:</span>
                <span class="font-bold text-stone-800 dark:text-stone-200">{{ selectedProject.dimensions }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800/60">
                <span class="text-stone-500">Tratamiento superficial:</span>
                <span class="font-bold text-stone-800 dark:text-stone-200">{{ selectedProject.finish }}</span>
              </div>
              <div v-if="selectedProject.location" class="flex justify-between py-1">
                <span class="text-stone-500">Ubicación / Destino:</span>
                <span class="font-bold text-stone-800 dark:text-stone-200">{{ selectedProject.location }}</span>
              </div>
            </div>

            <!-- Direct Contact CTA inside modal -->
            <div class="pt-2 flex flex-col gap-2">
              <a
                :href="getWhatsAppProjectUrl(selectedProject)"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <Icon name="simple-icons:whatsapp" class="text-lg" />
                <span>Pedir presupuesto para una pieza similar</span>
              </a>
              <button
                type="button"
                @click="selectedProject = null"
                class="w-full py-2.5 text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
              >
                Volver a la galería
              </button>
            </div>

          </div>
        </div>
      </Teleport>

    </div>
  </div>
</template>
