<!-- app/pages/hola/marcas.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'slide-up', mode: 'out-in' } })
useSeoMeta({
  title: 'Marcas Aliadas & Equipamiento — Kelek Home',
  description: 'Descubre las marcas de primer nivel que potencian el taller de ebanistería Kelek Home en Madrid: Bambu Lab, Bessey, Bosch, Stabila, Klingspor, V33, Festool, Rubio Monocoat y oportunidades de sinergia.'
})

const activeFilter = ref('all')
const activeSynergyTab = ref('testing')

const filters = [
  { id: 'all', label: 'Todas las Marcas' },
  { id: 'herramienta', label: 'Herramientas & Maquinaria' },
  { id: 'acabados', label: 'Acabados & Protección' },
  { id: 'tecnologia', label: 'Tecnología & 3D' }
]

interface Brand {
  id: string
  name: string
  category: 'herramienta' | 'acabados' | 'tecnologia'
  tag: string
  badge: string
  description: string
  highlight: string
  projectApplied: string
  color: string
  url: string
  logoUrl?: string
  iconName?: string
  collaborationType?: string
  partnershipBenefits?: string[]
  statsOrImpact?: { label: string; value: string }[]
}

const brands: Brand[] = [
  {
    id: 'bambulab',
    name: 'Bambu Lab',
    category: 'tecnologia',
    tag: 'Impresión 3D & Prototipado',
    badge: 'Tecnología de Taller',
    description: 'Impresión 3D de alta velocidad para prototipar ensambles complejos, plantillas de fresado personalizadas y organizadores a medida.',
    highlight: 'Guías y plantillas 3D para fresadoras',
    projectApplied: 'Plantillas de canteado en Mueble Tv Nogal',
    color: '#00AE42',
    url: 'https://bambulab.com',
    logoUrl: 'https://cdn.simpleicons.org/bambulab/00AE42',
    iconName: 'simple-icons:bambulab',
    collaborationType: 'Partner Tecnológico & Prototipado 3D',
    partnershipBenefits: [
      'Diseño e impresión 3D de plantillas de fresado a medida y guías de canteado.',
      'Prototipado rápido de herrajes ocultos y organizadores de cajón personalizados.',
      'Optimización del tiempo de preparación en taller en un 65%.',
      'Demostración práctica de la convergencia entre ebanistería tradicional e innovación digital.'
    ],
    statsOrImpact: [
      { label: 'Plantillas en Taller', value: '+45 creadas' },
      { label: 'Tiempo Preparación', value: '-65% tiempo' },
      { label: 'Precisión', value: '0.1 mm' }
    ]
  },
  {
    id: 'bessey',
    name: 'BESSEY Tools',
    category: 'herramienta',
    tag: 'Sargentos & Sistemas de Apriete',
    badge: 'Fijación de Precisión',
    description: 'Tornillos de apriete monomanuales y sargentos de cuerpo plano para el ensamble perfecto sin deformaciones en tableros de roble macizo.',
    highlight: 'Prensado de tableros de madera noble',
    projectApplied: 'Encolado plano de Mesa Roble Salvaje',
    color: '#E30613',
    url: 'https://www.bessey.de',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Bessey_Tool_logo.svg',
    iconName: 'mdi:clamp',
    collaborationType: 'Equipamiento Oficial de Apriete & Ensamble',
    partnershipBenefits: [
      'Alineación y prensado uniforme de tableros de roble sin deformación superficial.',
      'Sargentos monomanuales de alta presión para ensambles precisos en solitario.',
      'Protección total de la madera contra marcas de compresión gracias a mordazas suaves.',
      'Rendimiento verificado en encolados estructurales de grandes mesas de comedor.'
    ],
    statsOrImpact: [
      { label: 'Fuerza de Apriete', value: 'Hasta 7.000 N' },
      { label: 'Superficie Protegida', value: '100% sin marcas' },
      { label: 'Planitud de Tablero', value: 'Precisión absoluta' }
    ]
  },
  {
    id: 'bosch',
    name: 'Bosch Professional',
    category: 'herramienta',
    tag: 'Herramienta Eléctrica',
    badge: 'Maquinaria Pesada',
    description: 'Fresadoras de superficie, lijadoras de banda y gama de batería de 18V para máxima exigencia en canteado y mecanizado continuo.',
    highlight: 'Mecanizado y canteado de alta potencia',
    projectApplied: 'Rebajes ciegos en Estantería Flotante',
    color: '#005691',
    url: 'https://www.bosch-professional.com',
    logoUrl: 'https://cdn.simpleicons.org/bosch/005691',
    iconName: 'simple-icons:bosch',
    collaborationType: 'Maquinaria & Fresado Profesional',
    partnershipBenefits: [
      'Mecanizado y rebajes ciegos continuos con fresadoras de superficie de alta potencia.',
      'Libertad de movimiento con la plataforma de baterías 18V AMPShare en montaje exterior.',
      'Sistema eficiente de extracción de polvo conectado a lijadoras y fresadoras en taller.',
      'Rendimiento constante trabajando maderas nobles de máxima densidad (roble, nogal, ipe).'
    ],
    statsOrImpact: [
      { label: 'Uso en Taller', value: '+350 hrs/año' },
      { label: 'Plataforma 18V', value: 'AMPShare' },
      { label: 'Extracción Polvo', value: 'Sistema L-BOXX' }
    ]
  },
  {
    id: 'stabila',
    name: 'STABILA',
    category: 'herramienta',
    tag: 'Medición & Niveles de Precisión',
    badge: 'Certificación Milimétrica',
    description: 'Medición láser de alta exactitud y niveles de burbuja ultrarresistentes para la perfecta escuadra y nivelación de cada estructura.',
    highlight: 'Ajuste de precisión milimétrica',
    projectApplied: 'Nivelado e instalación de Muebles de Obra',
    color: '#D4A000',
    url: 'https://www.stabila.com',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Stabila.svg',
    iconName: 'mdi:ruler-square',
    collaborationType: 'Socio Oficial de Medición & Metrología',
    partnershipBenefits: [
      'Toma de medidas con distanciómetro láser de alta fidelidad previa al diseño en 3D.',
      'Nivelación y aplomado milimétrico en la instalación de muebles flotantes e integrados.',
      'Estructuras de perfil de aluminio ultrarresistentes a caídas y uso intensivo en obra.',
      'Garantía de escuadra exacta en cada estructura de madera fabricada a medida.'
    ],
    statsOrImpact: [
      { label: 'Precisión Certificada', value: '±0.5 mm/m' },
      { label: 'Nivelación en Obra', value: '100% calibrada' },
      { label: 'Margen de Error', value: 'Cero absoluto' }
    ]
  },
  {
    id: 'klingspor',
    name: 'Klingspor',
    category: 'acabados',
    tag: 'Lijas & Abrasivos de Alto Rendimiento',
    badge: 'Preparación de Superficie',
    description: 'Discos abrasivos carburo de silicio y bandas de grano extrafino para lograr una textura sedosa sin rayado en superficies de madera pura.',
    highlight: 'Lijado uniforme respetando la veta',
    projectApplied: 'Lijado grano 320 previo a aceite en Roble',
    color: '#E2001A',
    url: 'https://www.klingspor.es',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Klingspor_logo.svg/640px-Klingspor_logo.svg.png',
    iconName: 'mdi:disc',
    collaborationType: 'Especialista en Abrasivos & Lijado',
    partnershipBenefits: [
      'Pre-tratamiento abrasivo de grano cerámico para un tacto sedoso e impecable en la madera.',
      'Lijado uniforme sin marcas helicoidales ni rayas previas al aceitado o barnizado.',
      'Discos con estructura micro-perforada para máxima absorción de polvo fino en taller.',
      'Mantenimiento intacto del veteado y poro abierto de maderas puras y nobles.'
    ],
    statsOrImpact: [
      { label: 'Rango Granulometría', value: 'P80 a P400' },
      { label: 'Absorción de Polvo', value: '90% capturado' },
      { label: 'Acabado Superficie', value: 'Calidad Museo' }
    ]
  },
  {
    id: 'v33',
    name: 'V33',
    category: 'acabados',
    tag: 'Aceites & Protectores de Madera',
    badge: 'Tratamiento Orgánico',
    description: 'Aceites y lasures de protección profunda que realzan el veteado natural y ofrecen alta resistencia frente a manchas, agua y calor.',
    highlight: 'Nutrición y protección natural de la veta',
    projectApplied: 'Protección hidrófuga en Encimera de Baño',
    color: '#00833E',
    url: 'https://www.v33.es',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/V33_logo.svg/640px-V33_logo.svg.png',
    iconName: 'mdi:palette-swatch-outline',
    collaborationType: 'Protección & Tratamientos Orgánicos',
    partnershipBenefits: [
      'Nutrición y protección hidrófuga profunda que sella la madera contra agua, calor y grasa.',
      'Realce cálido del veteado sin alterar la tonalidad natural del roble y del nogal.',
      'Fórmula libre de emisiones plásticas para conservar un tacto orgánico y natural.',
      'Inclusión de recomendaciones oficiales de conservación en las guías entregadas a clientes.'
    ],
    statsOrImpact: [
      { label: 'Protección Hidrófuga', value: 'Sello 24 Horas' },
      { label: 'Tacto Orgánico', value: '0% Capa Plástica' },
      { label: 'Resistencia', value: 'Máxima Durabilidad' }
    ]
  }
]

const partnerBrandsList = [
  { name: 'Quilosa', tag: 'Adhesivos & Selladores', icon: 'ph:drop-bold', logoUrl: '/images/brands/quilosa.svg' },
  { name: 'Bora Tools', tag: 'Guías & Sierras', icon: 'ph:ruler-bold', logoUrl: '/images/brands/bora.svg' },
  { name: 'ToughBuilt', tag: 'Bancos & Soporte', icon: 'ph:toolbox-bold', logoUrl: '/images/brands/toughbuilt.svg' },
  { name: 'Skil', tag: 'Herramienta Eléctrica', icon: 'ph:lightning-bold', logoUrl: '/images/brands/skil.svg' },
  { name: 'Workteam', tag: 'Ropa & Protección Taller', icon: 'ph:coat-hanger-bold', logoUrl: '/images/brands/workteam.svg' },
  { name: 'Bambu Lab', tag: 'Tecnología de Taller', icon: 'ph:cube-bold', logoUrl: '/images/brands/bambu-lab.svg' },
  { name: 'BESSEY', tag: 'Fijación de Precisión', icon: 'ph:barbell-bold', logoUrl: '/images/brands/bessey.svg' },
  { name: 'Festool', tag: 'Sistema & Aspiración', icon: 'ph:fan-bold', logoUrl: '/images/brands/festool.svg' },
  { name: 'Rubio Monocoat', tag: 'Acabado Ecológico', icon: 'ph:drop-bold', logoUrl: '/images/brands/rubio-monocoat.svg' },
  { name: 'Mirka', tag: 'Abrasivos & Lijado', icon: 'ph:sparkle-bold', logoUrl: '/images/brands/mirka.svg' },
  { name: 'DeWalt', tag: 'Herramienta Eléctrica', icon: 'ph:wrench-bold', logoUrl: '/images/brands/dewalt.svg' },
  { name: 'Makita', tag: 'Potencia & Serrado', icon: 'ph:hammer-bold', logoUrl: '/images/brands/makita.svg' },
  { name: 'Stanley', tag: 'Medición & Manual', icon: 'ph:tape-measure-bold', logoUrl: '/images/brands/stanley.svg' },
  { name: 'Triton Tools', tag: 'Maquinaria Ebanistería', icon: 'ph:gear-six-bold', logoUrl: '/images/brands/triton.svg' },
  { name: 'Milescraft', tag: 'Accesorios Ensamblaje', icon: 'ph:compass-tool-bold', logoUrl: '/images/brands/milescraft.svg' }
]

const synergyFormats = [
  {
    id: 'testing',
    title: 'Test de Taller & Feedback Real',
    icon: 'mdi:anvil',
    tagline: 'Pruebas de resistencia en proyectos reales',
    description: 'Sometemos tus herramientas, maquinarias o productos de acabado a uso intenso durante la confección diaria de mobiliario de roble y nogal.',
    deliverables: ['Informe técnico de usabilidad', 'Mención en ficha de proyecto', 'Feedback directo de aplicación']
  },
  {
    id: 'content',
    title: 'Creación de Contenido & Visuals',
    icon: 'mdi:video-vintage',
    tagline: 'Fotografía estética & Vídeos de Proceso',
    description: 'Producimos reels, fotografías de taller en alta resolución y tutoriales paso a paso donde tu marca se muestra integrada de forma natural.',
    deliverables: ['Reels / Shorts de alta interacción', 'Galería de fotos profesionales de taller', 'Etiquetado directo y links en descripción']
  },
  {
    id: '3d-prototyping',
    title: 'Co-diseño & Prototipado 3D',
    icon: 'mdi:cube-scan',
    tagline: 'Desarrollo de accesorios & plantillas',
    description: 'Diseñamos y fabricamos plantillas 3D o adaptadores impresos en taller que potencian la usabilidad de tus herramientas.',
    deliverables: ['Archivos STL / 3D optimizados', 'Casos de estudio de integración', 'Contenido demostrativo']
  },
  {
    id: 'seal',
    title: 'Sello "Equipado por [Tu Marca]"',
    icon: 'mdi:certificate-outline',
    tagline: 'Mención VIP en entregas a clientes',
    description: 'Incluimos la guía de mantenimiento con tus productos oficiales en las recomendaciones de cuidado entregadas al cliente final.',
    deliverables: ['Inclusión en guía de mantenimiento', 'Recomendación directa de compra', 'Fidelización de cliente final']
  }
]

const faqs = [
  {
    q: '¿Cómo iniciamos una propuesta de colaboración con Kelek Home?',
    a: 'Puedes rellenar el formulario directo de colaboraciones o enviarnos un WhatsApp. Evaluamos el encaje técnico del producto con nuestro taller y te proponemos una estructura de sinergia a medida.'
  },
  {
    q: '¿Aceptáis cesión de material y pruebas de producto?',
    a: 'Sí, aceptamos cesión de maquinaria, consumibles y tratamientos de madera. Siempre realizamos pruebas honestas y aportamos valor real explicando sus ventajas técnicas a nuestra comunidad.'
  },
  {
    q: '¿Qué tipo de marcas encajan con Kelek Home?',
    a: 'Buscamos marcas alineadas con la calidad, la durabilidad y el respeto por el oficio: fabricantes de herramientas eléctricas o manuales, herrajes, aceites y barnices ecológicos, e impresión 3D.'
  },
  {
    q: '¿Qué plazos y entregables incluye cada proyecto?',
    a: 'Definimos un calendario claro según el alcance: desde pruebas técnicas rápidas en taller hasta la producción de contenido audiovisual en 4K e informes de usabilidad.'
  }
]

const openFaqIndex = ref<number | null>(null)
function toggleFaq(index: number) {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

const imageErrors = reactive<Record<string, boolean>>({})
function handleImageError(id: string) {
  imageErrors[id] = true
}

// Brand Cards Skeleton Loading State
const isBrandsLoading = ref(true)
let loadingTimer: ReturnType<typeof setTimeout> | null = null

// Selected Brand Modal State (Expand Feature)
const selectedBrandModal = ref<Brand | null>(null)

function openBrandModal(brand: Brand) {
  selectedBrandModal.value = brand
}

function closeBrandModal() {
  selectedBrandModal.value = null
}

function triggerBrandsLoading(duration = 450) {
  isBrandsLoading.value = true
  if (loadingTimer) clearTimeout(loadingTimer)
  loadingTimer = setTimeout(() => {
    isBrandsLoading.value = false
  }, duration)
}

onMounted(() => {
  triggerBrandsLoading(550)
})

watch(activeFilter, () => {
  triggerBrandsLoading(300)
})

const filteredBrands = computed(() => {
  if (activeFilter.value === 'all') return brands
  return brands.filter(b => b.category === activeFilter.value)
})

// Interactive Audience State & Map Modal
const showMapModal = ref(false)
const selectedRegion = ref<'all' | 'europe' | 'latam'>('all')
const selectedAgeGroup = ref<string | null>('25-34')
const selectedInterest = ref<string | null>('ebanisteria')
const activeGenderNote = ref<string | null>(null)

interface CountryData {
  id: string
  name: string
  flag: string
  percentage: number
  region: 'europe' | 'latam' | 'other'
  cities: { name: string; percentage: number }[]
  notes: string
  coords: { x: number; y: number }
}

const countryData: CountryData[] = [
  {
    id: 'es',
    name: 'España',
    flag: '🇪🇸',
    percentage: 82,
    region: 'europe',
    cities: [
      { name: 'Madrid (Sede Taller)', percentage: 45 },
      { name: 'Barcelona & Cataluña', percentage: 15 },
      { name: 'Valencia & Alicante', percentage: 10 },
      { name: 'Sevilla & Andalucía', percentage: 8 },
      { name: 'País Vasco & Norte', percentage: 7 },
      { name: 'Resto de España', percentage: 15 }
    ],
    notes: 'Núcleo principal de clientes de piezas a medida, fabricantes y talleres colaboradores.',
    coords: { x: 45.8, y: 35.5 }
  },
  {
    id: 'pt',
    name: 'Portugal',
    flag: '🇵🇹',
    percentage: 5,
    region: 'europe',
    cities: [
      { name: 'Oporto', percentage: 50 },
      { name: 'Lisboa', percentage: 50 }
    ],
    notes: 'Interés en maquinaria de carpintería y acabados ecológicos.',
    coords: { x: 43.5, y: 35.5 }
  },
  {
    id: 'mx',
    name: 'México',
    flag: '🇲🇽',
    percentage: 4,
    region: 'latam',
    cities: [
      { name: 'Ciudad de México', percentage: 60 },
      { name: 'Guadalajara', percentage: 40 }
    ],
    notes: 'Comunidad en crecimiento de diseño de interiores y mobiliario de autor.',
    coords: { x: 20, y: 47 }
  },
  {
    id: 'co',
    name: 'Colombia',
    flag: '🇨🇴',
    percentage: 3,
    region: 'latam',
    cities: [
      { name: 'Bogotá', percentage: 55 },
      { name: 'Medellín', percentage: 45 }
    ],
    notes: 'Audiencia interesada en técnicas de ensamble y diseño 3D.',
    coords: { x: 26.5, y: 60 }
  },
  {
    id: 'de',
    name: 'Alemania',
    flag: '🇩🇪',
    percentage: 2,
    region: 'europe',
    cities: [
      { name: 'Berlín', percentage: 50 },
      { name: 'Stuttgart', percentage: 50 }
    ],
    notes: 'Proveedores de maquinaria pesada y fabricantes de herrajes.',
    coords: { x: 50, y: 27 }
  },
  {
    id: 'ar',
    name: 'Argentina',
    flag: '🇦🇷',
    percentage: 2,
    region: 'latam',
    cities: [
      { name: 'Buenos Aires', percentage: 70 },
      { name: 'Córdoba', percentage: 30 }
    ],
    notes: 'Creadores de contenido y entusiastas de la ebanistería artesanal.',
    coords: { x: 28.5, y: 85 }
  },
  {
    id: 'other',
    name: 'Otros Países',
    flag: '🌍',
    percentage: 2,
    region: 'other',
    cities: [
      { name: 'Chile', percentage: 40 },
      { name: 'Francia', percentage: 35 },
      { name: 'EE.UU.', percentage: 25 }
    ],
    notes: 'Alcance internacional a través de la difusión de proyectos en redes.',
    coords: { x: 65, y: 38 }
  }
]

const activeCountry = ref<CountryData>(countryData[0])

function selectCountry(country: CountryData) {
  activeCountry.value = country
}

function openLocationMap(countryId?: string) {
  if (countryId) {
    const found = countryData.find(c => c.id === countryId)
    if (found) activeCountry.value = found
  }
  showMapModal.value = true
}

const filteredCountries = computed(() => {
  if (selectedRegion.value === 'all') return countryData
  return countryData.filter(c => c.region === selectedRegion.value)
})

const ageGroupDetails: Record<string, { title: string; desc: string }> = {
  '18-24': {
    title: '18 - 24 años (12%) — Jóvenes Aprendices & Estudiantes',
    desc: 'Perfil con alta inclinación hacia la innovación tecnológica, diseño 3D, prototipado rápido e iniciación en el trabajo con madera.'
  },
  '25-34': {
    title: '25 - 34 años (52% ⭐) — Grupo Principal de Decisión',
    desc: 'Arquitectos, interioristas, diseñadores y propietarios jóvenes. Buscan herramientas de máxima precisión y encargos de mobiliario a medida.'
  },
  '35-44': {
    title: '35 - 44 años (24%) — Profesional & Taller Consolidado',
    desc: 'Ebanistas en activo y reformistas de alta gama. Evalúan la durabilidad de herramientas, acabados duraderos y sistemas de aspiración.'
  },
  '45+': {
    title: '45+ años (12%) — Coleccionistas & Propietarios VIP',
    desc: 'Inversores en piezas únicas de roble macizo y clientes que buscan acabados ecológicos de altísima exigencia y longevidad.'
  }
}
</script>

<template>
  <div class="min-h-screen pt-28 sm:pt-32 pb-24 px-4 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 selection:bg-amber-500/20 font-sans antialiased">
    <div class="w-full max-w-2xl mx-auto space-y-8 sm:space-y-10">

      <!-- Hero Header Section -->
      <div class="text-center space-y-5 max-w-2xl mx-auto pt-2">
        <div class="space-y-4">
          <h1 class="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Marcas que Potencian Nuestro Taller
          </h1>

          <p class="text-stone-600 dark:text-stone-300 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto">
            En Kelek Home damos visibilidad auténtica a las mejores marcas de herramientas, maquinaria y acabados. Integración real en piezas a medida y difusión en contenido de ebanistería.
          </p>

          <!-- Counter Metric: Brands that trust Kelek -->
          <div class="pt-2 flex items-center justify-center">
            <div class="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-amber-500/10 dark:bg-amber-500/10 border border-amber-500/20 text-stone-900 dark:text-stone-100 shadow-2xs">
              <div class="flex items-baseline gap-1.5 text-amber-600 dark:text-amber-400">
                <span class="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">+50</span>
              </div>
              <div class="text-left border-l border-amber-500/20 pl-3.5 space-y-0.5">
                <span class="block text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                  Marcas que confían en KELEK
                </span>
                <span class="block text-[11px] font-medium text-stone-600 dark:text-stone-400">
                  Equipamiento, acabados y herramientas presentes en nuestro taller
                </span>
              </div>
            </div>
          </div>

          <!-- Availability Badge (Moved below +50 Marcas container with smooth hover micro-interaction) -->
          <div class="pt-1.5 flex items-center justify-center">
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25 text-xs font-semibold tracking-wide shadow-2xs backdrop-blur-xs transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-emerald-500/15 hover:border-emerald-500/35 hover:shadow-xs cursor-default select-none">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponible para colaboración y sinergias</span>
            </div>
          </div>
        </div>
      </div>

      <!-- MARCAS ALIADAS & EQUIPAMIENTO SECTION -->
      <div class="relative space-y-6 py-2 overflow-hidden">
        
        <!-- Category Filter Pills -->
        <div class="relative z-10 flex items-center justify-center gap-2 flex-wrap pt-1">
          <button
            v-for="filter in filters"
            :key="filter.id"
            type="button"
            @click="activeFilter = filter.id"
            :class="[
              'px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border',
              activeFilter === filter.id
                ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 border-stone-900 dark:border-stone-100 shadow-sm scale-102'
                : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border-stone-200/90 dark:border-stone-800 hover:border-amber-500/50'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Unified Grid (2 cols on sm, 1 col on mobile) -->
        <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          
          <!-- Skeleton Loading State -->
          <template v-if="isBrandsLoading">
            <div
              v-for="i in 6"
              :key="`brand-skeleton-${i}`"
              class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800/90 shadow-2xs flex flex-col justify-between space-y-3 relative overflow-hidden animate-pulse"
            >
              <div class="space-y-3">
                <!-- Skeleton Header -->
                <div class="flex items-start justify-between gap-2.5 pt-0.5">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-11 h-11 rounded-xl bg-stone-200 dark:bg-stone-800 shrink-0"></div>
                    <div class="space-y-1.5 min-w-0">
                      <div class="h-4 w-28 bg-stone-200 dark:bg-stone-800 rounded"></div>
                      <div class="h-3 w-36 bg-stone-100 dark:bg-stone-800/60 rounded"></div>
                    </div>
                  </div>
                  <div class="h-5 w-20 bg-stone-200 dark:bg-stone-800 rounded-full shrink-0"></div>
                </div>

                <!-- Skeleton Description -->
                <div class="space-y-1.5 pt-1">
                  <div class="h-3 w-full bg-stone-100 dark:bg-stone-800/70 rounded"></div>
                  <div class="h-3 w-4/5 bg-stone-100 dark:bg-stone-800/70 rounded"></div>
                </div>
              </div>
            </div>
          </template>

          <!-- Brand Item Cards -->
          <template v-else>
            <div
              v-for="brand in filteredBrands"
              :key="brand.id"
              @click="openBrandModal(brand)"
              class="brand-card-item group p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800/90 hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col justify-between space-y-3 relative overflow-hidden cursor-pointer"
              :style="{
                '--brand-color': brand.color,
                '--brand-border-hover': brand.color
              }"
              title="Haz clic para ver detalles completos de la alianza"
            >
              <!-- Top Subtle Tint Highlight Line -->
              <div 
                class="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100"
                :style="{ backgroundColor: brand.color }"
              ></div>

              <div class="space-y-3">
                <!-- Top Header: Logo/Icon + Category Badge -->
                <div class="flex items-start justify-between gap-2.5 pt-0.5">
                  <div class="flex items-center gap-3 min-w-0">
                    <a
                      :href="brand.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      @click.stop
                      class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border p-1.5 bg-stone-50 dark:bg-stone-950 shadow-2xs transition-transform duration-300 hover:scale-105 cursor-pointer"
                      :style="{ borderColor: `color-mix(in srgb, ${brand.color} 35%, transparent)` }"
                      :title="`Visitar sitio web oficial de ${brand.name}`"
                    >
                      <img
                        v-if="brand.logoUrl && !imageErrors[brand.id]"
                        :src="brand.logoUrl"
                        :alt="`Logo ${brand.name}`"
                        @error="handleImageError(brand.id)"
                        class="max-h-6 max-w-full object-contain filter dark:brightness-110"
                      />
                      <Icon v-else-if="brand.iconName" :name="brand.iconName" class="text-xl text-stone-700 dark:text-stone-300" />
                      <span v-else class="font-bold text-xs text-stone-900 dark:text-stone-100">{{ brand.name.substring(0, 2) }}</span>
                    </a>

                    <div class="min-w-0">
                      <a
                        :href="brand.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        class="brand-title-link font-serif font-bold text-base text-stone-900 dark:text-white leading-tight hover:underline transition-colors cursor-pointer inline-flex items-center gap-1.5 group/title truncate"
                        :title="`Visitar sitio web oficial de ${brand.name}`"
                      >
                        <span class="truncate">{{ brand.name }}</span>
                        <Icon name="mdi:open-in-new" class="text-xs text-stone-400 opacity-0 group-hover/title:opacity-100 transition-opacity shrink-0" />
                      </a>
                      <p class="text-[11px] font-semibold text-stone-500 dark:text-stone-400 mt-0.5 truncate">
                        {{ brand.tag }}
                      </p>
                    </div>
                  </div>

                  <span
                    class="px-2.5 py-1 rounded-full text-[10px] font-bold shrink-0 border whitespace-nowrap"
                    :style="{
                      backgroundColor: `color-mix(in srgb, ${brand.color} 10%, transparent)`,
                      borderColor: `color-mix(in srgb, ${brand.color} 25%, transparent)`,
                      color: brand.color
                    }"
                  >
                    {{ brand.badge }}
                  </span>
                </div>

                <!-- Description (max 2 lines) -->
                <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-2">
                  {{ brand.description }}
                </p>
              </div>

              <!-- Card Footer: Expand Hint -->
              <div class="pt-2 mt-1 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs">
                <span
                  class="text-[11px] font-bold inline-flex items-center gap-1 group-hover:underline"
                  :style="{ color: brand.color }"
                >
                  <Icon name="mdi:arrow-expand" class="text-xs" :style="{ color: brand.color }" />
                  <span>Detalles de Alianza</span>
                </span>
                <span class="text-[10px] text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                  Ampliar ↗
                </span>
              </div>
            </div>
          </template>

          <!-- Minimalist Logo Carousel (Fused with app background, no container, no subtext) -->
          <div class="col-span-1 sm:col-span-2 py-6 relative w-full overflow-hidden mask-fade-edges">
            <div class="flex items-center gap-12 sm:gap-16 w-max animate-marquee-loop hover:[animation-play-state:paused]">
              <!-- First Loop -->
              <div
                v-for="(pBrand, idx) in partnerBrandsList"
                :key="`partner-1-${idx}`"
                class="flex items-center justify-center shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
                :title="pBrand.name"
              >
                <img
                  v-if="pBrand.logoUrl"
                  :src="pBrand.logoUrl"
                  :alt="pBrand.name"
                  class="h-7 sm:h-8 w-auto max-w-[120px] object-contain filter grayscale dark:invert opacity-70 group-hover:opacity-100 transition-all"
                />
                <span
                  v-else
                  class="font-serif font-black text-lg sm:text-xl tracking-wider text-stone-800 dark:text-stone-200 uppercase opacity-70 group-hover:opacity-100 transition-opacity"
                >
                  {{ pBrand.name }}
                </span>
              </div>

              <!-- Second Duplicate Loop for continuous animation -->
              <div
                v-for="(pBrand, idx) in partnerBrandsList"
                :key="`partner-2-${idx}`"
                class="flex items-center justify-center shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
                :title="pBrand.name"
              >
                <img
                  v-if="pBrand.logoUrl"
                  :src="pBrand.logoUrl"
                  :alt="pBrand.name"
                  class="h-7 sm:h-8 w-auto max-w-[120px] object-contain filter grayscale dark:invert opacity-70 group-hover:opacity-100 transition-all"
                />
                <span
                  v-else
                  class="font-serif font-black text-lg sm:text-xl tracking-wider text-stone-800 dark:text-stone-200 uppercase opacity-70 group-hover:opacity-100 transition-opacity"
                >
                  {{ pBrand.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- Featured Callout Card (Full Width in Bio view) -->
          <div class="col-span-1 sm:col-span-2 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-950 to-black border border-stone-800 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            <!-- Ambient Backlight -->
            <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

            <div class="space-y-3 z-10 max-w-md">
              <span class="px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-300 text-[10px] font-bold uppercase tracking-wider inline-block backdrop-blur-md border border-amber-500/30">
                🤝 SINERGIA & PARTNERSHIP
              </span>

              <h3 class="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                ¡Impulsamos el valor de tus productos!
              </h3>

              <p class="text-xs text-stone-300 leading-relaxed font-normal">
                Si eres una marca o un fabricante y quieres crear sinergias, podemos probar tus producto en proyectos reales y mostrarlos a nuestra comunidad.
              </p>
            </div>

            <div class="space-y-2.5 z-10 w-full sm:w-auto shrink-0 sm:min-w-[220px] pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-stone-800 sm:pl-6 flex flex-col justify-center">
              <div class="flex items-center justify-between gap-4 text-xs text-stone-300 pb-1">
                <span class="font-medium">Valoración Taller Real:</span>
                <div class="flex items-center gap-1 text-amber-400 text-sm">
                  <span>★★★★★</span>
                  <strong class="text-white text-xs ml-1">4.9 / 5</strong>
                </div>
              </div>

              <NuxtLink
                to="/hola/contacto?tipo=colaboracion"
                class="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 group/btn cursor-pointer whitespace-nowrap"
              >
                <span>PROPONER COLABORACIÓN</span>
                <Icon name="mdi:arrow-right" class="text-sm group-hover/btn:translate-x-1 transition-transform text-stone-950" />
              </NuxtLink>

              <a
                href="https://www.instagram.com/kelek.home"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full py-2.5 px-4 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-white font-bold text-xs transition-all border border-stone-700/80 flex items-center justify-center gap-2 group/btn cursor-pointer whitespace-nowrap shadow-xs"
              >
                <UiInstagramIcon class="w-4 h-4 shrink-0" />
                <span>Hablar por Instagram</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- Audience Section 🔎 -->
      <div class="p-6 sm:p-8 rounded-[32px] bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800/90 shadow-2xs space-y-7">
        <div class="flex items-center justify-between flex-wrap gap-3 border-b border-stone-100 dark:border-stone-800 pb-5">
          <div class="space-y-1">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <span>Audiencia / Audience</span>
              <span class="text-2xl">🔎</span>
            </h2>
            <p class="text-xs text-stone-500 dark:text-stone-400">
              Métricas estimadas y perfil de la comunidad receptiva de Kelek Home
            </p>
          </div>

          <button
            type="button"
            @click="openLocationMap()"
            class="px-3.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/25 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
          >
            <Icon name="mdi:earth" class="text-base text-amber-600 dark:text-amber-400" />
            <span>Ver Mapa Mundial Interactivo 🗺️</span>
          </button>
        </div>

        <!-- Audience Breakdown Grid / Rows -->
        <div class="space-y-6 text-xs">
          
          <!-- Row 1: Gender / Sexo -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div class="md:col-span-3 font-bold text-stone-700 dark:text-stone-300 flex items-center gap-2 text-xs sm:text-sm">
              <span>Sexo / Gender</span>
              <Icon name="mdi:arrow-right" class="text-stone-400 text-xs" />
            </div>

            <div class="md:col-span-9 flex flex-col sm:flex-row items-center gap-3">
              <!-- Visual Stacked Bar -->
              <div class="w-full bg-stone-100 dark:bg-stone-800/80 rounded-2xl h-11 p-1 flex items-center gap-1 border border-stone-200/80 dark:border-stone-700/80">
                <!-- Male 68% -->
                <div
                  @click="activeGenderNote = activeGenderNote === 'male' ? null : 'male'"
                  class="h-full rounded-xl bg-amber-500/15 dark:bg-amber-500/20 border border-amber-500/40 text-amber-900 dark:text-amber-300 font-bold flex items-center justify-center text-xs transition-all hover:bg-amber-500/30 cursor-pointer"
                  style="width: 68%;"
                  title="Haz clic para ver más sobre este segmento"
                >
                  <span class="truncate px-2">Hombre (68%)</span>
                </div>
                <!-- Female 32% -->
                <div
                  @click="activeGenderNote = activeGenderNote === 'female' ? null : 'female'"
                  class="h-full rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-bold flex items-center justify-center text-xs transition-all hover:bg-amber-500/25 cursor-pointer"
                  style="width: 32%;"
                  title="Haz clic para ver más sobre este segmento"
                >
                  <span class="truncate px-2">Mujer (32%)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Optional Active Gender Detail Card -->
          <div v-if="activeGenderNote" class="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-amber-500/30 text-xs text-stone-700 dark:text-stone-300 flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <Icon name="mdi:information-outline" class="text-amber-500 text-base shrink-0" />
              <p v-if="activeGenderNote === 'male'">
                <strong class="text-stone-900 dark:text-stone-100">68% Hombres:</strong> Alta afinidad por pruebas técnicas de maquinaria, herrajes de ensamble y procesos de ebanistería tradicional.
              </p>
              <p v-else>
                <strong class="text-stone-900 dark:text-stone-100">32% Mujeres:</strong> Enfocadas en proyectos de diseño de interiores, acabado orgánico de superficies y mobiliario a medida.
              </p>
            </div>
            <button @click="activeGenderNote = null" class="text-stone-400 hover:text-stone-600 text-xs font-bold">✕</button>
          </div>

          <!-- Row 2: Age / Edad -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div class="md:col-span-3 font-bold text-stone-700 dark:text-stone-300 flex items-center gap-2 text-xs sm:text-sm">
              <span>Edad / Age</span>
              <Icon name="mdi:arrow-right" class="text-stone-400 text-xs" />
            </div>

            <div class="md:col-span-9 space-y-3">
              <div class="grid grid-cols-4 gap-2 text-center">
                <button
                  type="button"
                  @click="selectedAgeGroup = '18-24'"
                  :class="[
                    'p-3 rounded-2xl border transition-all cursor-pointer text-center',
                    selectedAgeGroup === '18-24'
                      ? 'bg-amber-500/15 dark:bg-amber-500/25 border-amber-500 text-amber-900 dark:text-amber-200 font-bold ring-1 ring-amber-500/30 scale-102'
                      : 'bg-stone-50 dark:bg-stone-800/50 border-stone-200/70 dark:border-stone-700/70 hover:border-amber-500/40'
                  ]"
                >
                  <span class="block text-[11px] text-stone-500 dark:text-stone-400">18 - 24</span>
                  <span class="block font-bold text-xs sm:text-sm text-stone-800 dark:text-stone-200 mt-0.5">12%</span>
                </button>

                <button
                  type="button"
                  @click="selectedAgeGroup = '25-34'"
                  :class="[
                    'p-3 rounded-2xl border transition-all cursor-pointer text-center',
                    selectedAgeGroup === '25-34'
                      ? 'bg-amber-500/15 dark:bg-amber-500/25 border-amber-500 text-amber-900 dark:text-amber-200 font-bold ring-1 ring-amber-500/30 scale-102'
                      : 'bg-stone-50 dark:bg-stone-800/50 border-stone-200/70 dark:border-stone-700/70 hover:border-amber-500/40'
                  ]"
                >
                  <span class="block text-[11px] text-amber-700 dark:text-amber-300">25 - 34</span>
                  <span class="block text-xs sm:text-sm font-extrabold text-amber-800 dark:text-amber-200 mt-0.5">52% ⭐</span>
                </button>

                <button
                  type="button"
                  @click="selectedAgeGroup = '35-44'"
                  :class="[
                    'p-3 rounded-2xl border transition-all cursor-pointer text-center',
                    selectedAgeGroup === '35-44'
                      ? 'bg-amber-500/15 dark:bg-amber-500/25 border-amber-500 text-amber-900 dark:text-amber-200 font-bold ring-1 ring-amber-500/30 scale-102'
                      : 'bg-stone-50 dark:bg-stone-800/50 border-stone-200/70 dark:border-stone-700/70 hover:border-amber-500/40'
                  ]"
                >
                  <span class="block text-[11px] text-stone-500 dark:text-stone-400">35 - 44</span>
                  <span class="block font-bold text-xs sm:text-sm text-stone-800 dark:text-stone-200 mt-0.5">24%</span>
                </button>

                <button
                  type="button"
                  @click="selectedAgeGroup = '45+'"
                  :class="[
                    'p-3 rounded-2xl border transition-all cursor-pointer text-center',
                    selectedAgeGroup === '45+'
                      ? 'bg-amber-500/15 dark:bg-amber-500/25 border-amber-500 text-amber-900 dark:text-amber-200 font-bold ring-1 ring-amber-500/30 scale-102'
                      : 'bg-stone-50 dark:bg-stone-800/50 border-stone-200/70 dark:border-stone-700/70 hover:border-amber-500/40'
                  ]"
                >
                  <span class="block text-[11px] text-stone-500 dark:text-stone-400">45+</span>
                  <span class="block font-bold text-xs sm:text-sm text-stone-800 dark:text-stone-200 mt-0.5">12%</span>
                </button>
              </div>

              <!-- Selected Age Info Banner -->
              <div v-if="selectedAgeGroup && ageGroupDetails[selectedAgeGroup]" class="p-3.5 rounded-2xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 text-xs space-y-1">
                <p class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                  <Icon name="mdi:account-group-outline" class="text-base" />
                  <span>{{ ageGroupDetails[selectedAgeGroup].title }}</span>
                </p>
                <p class="text-stone-600 dark:text-stone-300 leading-relaxed text-[11px]">
                  {{ ageGroupDetails[selectedAgeGroup].desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Row 3: Interests / Intereses -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div class="md:col-span-3 font-bold text-stone-700 dark:text-stone-300 flex items-center gap-2 text-xs sm:text-sm">
              <span>Intereses</span>
              <Icon name="mdi:arrow-right" class="text-stone-400 text-xs" />
            </div>

            <div class="md:col-span-9 flex flex-wrap gap-2">
              <button
                type="button"
                @click="selectedInterest = selectedInterest === 'ebanisteria' ? null : 'ebanisteria'"
                :class="[
                  'px-3.5 py-2 rounded-full font-semibold border transition-all cursor-pointer',
                  selectedInterest === 'ebanisteria'
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-2xs font-bold'
                    : 'bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border-stone-200/80 dark:border-stone-700/80 hover:border-amber-500/40'
                ]"
              >
                🔨 Ebanistería & Madera (92%)
              </button>

              <button
                type="button"
                @click="selectedInterest = selectedInterest === 'herramientas' ? null : 'herramientas'"
                :class="[
                  'px-3.5 py-2 rounded-full font-semibold border transition-all cursor-pointer',
                  selectedInterest === 'herramientas'
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-2xs font-bold'
                    : 'bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border-stone-200/80 dark:border-stone-700/80 hover:border-amber-500/40'
                ]"
              >
                ⚙️ Herramientas & Maquinaria (85%)
              </button>

              <button
                type="button"
                @click="selectedInterest = selectedInterest === 'diseno' ? null : 'diseno'"
                :class="[
                  'px-3.5 py-2 rounded-full font-semibold border transition-all cursor-pointer',
                  selectedInterest === 'diseno'
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-2xs font-bold'
                    : 'bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border-stone-200/80 dark:border-stone-700/80 hover:border-amber-500/40'
                ]"
              >
                🏠 Diseño de Interiores (78%)
              </button>

              <button
                type="button"
                @click="selectedInterest = selectedInterest === '3d' ? null : '3d'"
                :class="[
                  'px-3.5 py-2 rounded-full font-semibold border transition-all cursor-pointer',
                  selectedInterest === '3d'
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-2xs font-bold'
                    : 'bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border-stone-200/80 dark:border-stone-700/80 hover:border-amber-500/40'
                ]"
              >
                🖨️ Impresión 3D (64%)
              </button>
            </div>
          </div>

          <!-- Row 4: Ubicación / Location -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div class="md:col-span-3 font-bold text-stone-700 dark:text-stone-300 flex items-center gap-2 text-xs sm:text-sm">
              <span>Ubicación</span>
              <Icon name="mdi:arrow-right" class="text-stone-400 text-xs" />
            </div>

            <div class="md:col-span-9 space-y-2">
              <div
                @click="openLocationMap()"
                class="w-full bg-stone-100 dark:bg-stone-800/80 rounded-2xl h-11 p-1 flex items-center gap-1 border border-stone-200/80 dark:border-stone-700/80 hover:border-amber-500/50 transition-all cursor-pointer group shadow-2xs"
                title="Haz clic para abrir el mapa interactivo de alcance mundial"
              >
                <div
                  @click.stop="openLocationMap('es')"
                  class="h-full rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-bold flex items-center justify-between px-3 text-xs hover:bg-amber-500 dark:hover:bg-amber-400 dark:hover:text-stone-950 transition-colors cursor-pointer"
                  style="width: 82%;"
                >
                  <span class="truncate">España (82%) — Madrid (45%)</span>
                  <Icon name="mdi:map-marker" class="text-amber-400 dark:text-amber-600 text-sm shrink-0" />
                </div>
                <div
                  @click.stop="openLocationMap('pt')"
                  class="h-full rounded-xl bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 font-bold flex items-center justify-between px-2 text-xs hover:bg-amber-500/30 transition-colors cursor-pointer"
                  style="width: 18%;"
                >
                  <span class="truncate">Europa / Latam (18%)</span>
                  <Icon name="mdi:earth" class="text-stone-500 dark:text-stone-300 text-sm shrink-0" />
                </div>
              </div>

              <div class="flex items-center justify-between text-[11px] text-amber-800 dark:text-amber-400 font-medium px-1">
                <button @click="openLocationMap()" class="inline-flex items-center gap-1.5 hover:underline cursor-pointer">
                  <Icon name="mdi:earth-box" class="text-sm text-amber-600" />
                  <span>Haz clic en la barra o aquí para abrir el **Mapa Mundial Interactivo** 🗺️</span>
                </button>
                <span class="text-stone-400 text-[10px] hidden sm:inline">Desglose por países y ciudades</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- World Map Interactive Modal 🗺️ -->
      <Teleport to="body">
        <div
          v-if="showMapModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto"
          @click.self="showMapModal = false"
        >
          <div class="relative w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-[28px] shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 my-auto max-h-[92vh] flex flex-col">
            
            <!-- Modal Header -->
            <div class="flex items-start justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-4 shrink-0">
              <div class="space-y-1">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
                  <Icon name="mdi:earth" class="text-amber-600 dark:text-amber-400" />
                  <span>Mapa Interactivo de Alcance</span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                  Comunidad Mundial & Desglose
                </h3>
                <p class="text-xs text-stone-500 dark:text-stone-400">
                  Selecciona cualquier país o región para inspeccionar la concentración de audiencia y proyectos
                </p>
              </div>

              <button
                type="button"
                @click="showMapModal = false"
                class="p-2.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer shrink-0"
              >
                <Icon name="mdi:close" class="text-xl" />
              </button>
            </div>

            <div class="overflow-y-auto space-y-6 pr-1">
              <!-- Region Filter Tabs -->
              <div class="flex items-center gap-2 overflow-x-auto pb-1">
                <button
                  type="button"
                  @click="selectedRegion = 'all'"
                  :class="[
                    'px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap',
                    selectedRegion === 'all'
                      ? 'bg-amber-500 text-stone-950 dark:bg-amber-400 dark:text-stone-950 shadow-2xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                  ]"
                >
                  Todas las Regiones (100%)
                </button>
                <button
                  type="button"
                  @click="selectedRegion = 'europe'"
                  :class="[
                    'px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap',
                    selectedRegion === 'europe'
                      ? 'bg-amber-500 text-stone-950 dark:bg-amber-400 dark:text-stone-950 shadow-2xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                  ]"
                >
                  🇪🇺 Europa (89%)
                </button>
                <button
                  type="button"
                  @click="selectedRegion = 'latam'"
                  :class="[
                    'px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap',
                    selectedRegion === 'latam'
                      ? 'bg-amber-500 text-stone-950 dark:bg-amber-400 dark:text-stone-950 shadow-2xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                  ]"
                >
                  🌎 Latinoamérica (9%)
                </button>
              </div>

              <!-- Interactive Vector World Map Component -->
              <UiInteractiveWorldMap
                :countries="countryData"
                :active-country-id="activeCountry.id"
                :selected-region="selectedRegion"
                @select-country="selectCountry"
              />

              <!-- Country Selection Pills -->
              <div class="space-y-2">
                <p class="text-[11px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                  Selecciona un país para ver desgloses por ciudades:
                </p>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="country in filteredCountries"
                    :key="country.id"
                    type="button"
                    @click="selectCountry(country)"
                    :class="[
                      'px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer',
                      activeCountry.id === country.id
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-2xs'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:border-amber-500/50'
                    ]"
                  >
                    <span>{{ country.flag }}</span>
                    <span>{{ country.name }}</span>
                    <span class="text-[10px] font-mono opacity-80">({{ country.percentage }}%)</span>
                  </button>
                </div>
              </div>

              <!-- Selected Active Country Detail Box -->
              <div v-if="activeCountry" class="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/80 border border-amber-500/30 space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-3">
                    <span class="text-3xl">{{ activeCountry.flag }}</span>
                    <div>
                      <h4 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                        <span>{{ activeCountry.name }}</span>
                        <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-900 dark:text-amber-300 font-bold border border-amber-500/30">
                          {{ activeCountry.percentage }}% del Alcance
                        </span>
                      </h4>
                      <p class="text-xs text-stone-600 dark:text-stone-300 mt-0.5">{{ activeCountry.notes }}</p>
                    </div>
                  </div>
                </div>

                <!-- City breakdown list -->
                <div class="space-y-2 pt-3 border-t border-stone-200/80 dark:border-stone-700/80">
                  <p class="text-xs font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1">
                    <Icon name="mdi:city-variant-outline" class="text-amber-500 text-sm" />
                    <span>Desglose por Ciudades / Regiones Clave:</span>
                  </p>
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <div
                      v-for="city in activeCountry.cities"
                      :key="city.name"
                      class="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-700/80 text-xs flex flex-col justify-between shadow-2xs"
                    >
                      <span class="text-stone-600 dark:text-stone-400 text-[11px] font-medium truncate">{{ city.name }}</span>
                      <span class="font-bold font-mono text-amber-600 dark:text-amber-400 text-sm mt-1">{{ city.percentage }}%</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Teleport>

      <!-- Value Proposition Pillars for Brands -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800 space-y-2.5 shadow-2xs hover:border-amber-500/40 transition-all hover:-translate-y-0.5">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center text-lg font-bold border border-amber-500/20">
            <Icon name="mdi:hammer-wrench" />
          </div>
          <h3 class="font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm">Presencia Real en Taller</h3>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            Integración de tu maquinaria o consumibles durante el proceso artesanal diario.
          </p>
        </div>

        <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800 space-y-2.5 shadow-2xs hover:border-amber-500/40 transition-all hover:-translate-y-0.5">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center text-lg font-bold border border-amber-500/20">
            <Icon name="mdi:video-vintage" />
          </div>
          <h3 class="font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm">Contenido de Proceso</h3>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            Generamos imágenes y vídeos donde la estética del acabado y el producto destacan.
          </p>
        </div>

        <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800 space-y-2.5 shadow-2xs hover:border-amber-500/40 transition-all hover:-translate-y-0.5">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center text-lg font-bold border border-amber-500/20">
            <Icon name="mdi:sparkles" />
          </div>
          <h3 class="font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm">Prescripción Directa</h3>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            Recomendación de tus productos en la guía entregada a cada comprador de Kelek Home.
          </p>
        </div>
      </div>

      <!-- Formatos de Sinergia Section -->
      <div class="space-y-5">
        <div class="text-center space-y-1.5 max-w-xl mx-auto">
          <span class="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Modalidades de Trabajo</span>
          <h2 class="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
            ¿Cómo Podemos Colaborar?
          </h2>
          <p class="text-xs text-stone-500 dark:text-stone-400">
            Fórmulas de sinergia adaptadas a las metas de comunicación de cada marca.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div
            v-for="format in synergyFormats"
            :key="format.id"
            @click="activeSynergyTab = format.id"
            :class="[
              'p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3.5 hover:-translate-y-0.5',
              activeSynergyTab === format.id
                ? 'bg-white dark:bg-stone-900 border-amber-500 shadow-md ring-2 ring-amber-500/20'
                : 'bg-white/80 dark:bg-stone-900/60 border-stone-200/80 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
            ]"
          >
            <div class="space-y-2">
              <div class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center text-base font-bold border border-amber-500/20">
                <Icon :name="format.icon" />
              </div>
              <h3 class="font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm leading-snug">{{ format.title }}</h3>
              <p class="text-[11px] text-amber-800 dark:text-amber-400 font-semibold">{{ format.tagline }}</p>
              <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{{ format.description }}</p>
            </div>

            <div class="pt-2.5 border-t border-stone-100 dark:border-stone-800 space-y-1.5">
              <p class="text-[10px] font-bold uppercase tracking-wider text-stone-400">Entregables:</p>
              <ul class="space-y-1">
                <li v-for="(item, idx) in format.deliverables" :key="idx" class="text-[11px] text-stone-600 dark:text-stone-300 flex items-center gap-1.5">
                  <Icon name="mdi:check-circle" class="text-amber-500 text-xs shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Accordion for Brands -->
      <div class="py-4 space-y-6">
        <!-- Section Header -->
        <div class="text-center space-y-2 max-w-xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/25 text-[11px] font-bold uppercase tracking-wider">
            <Icon name="mdi:help-circle-outline" class="text-xs text-amber-600 dark:text-amber-400" />
            <span>¿Cómo Podemos Ayudarte?</span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-snug">
            Preguntas Frecuentes de Marcas
          </h2>
        </div>

        <!-- 1-Column Bio Grid -->
        <div class="space-y-4 pt-1">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="space-y-3 border-b border-stone-200/80 dark:border-stone-800/80 pb-6 transition-colors"
          >
            <!-- Index Number -->
            <span class="block text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
              {{ index + 1 }}.
            </span>

            <!-- Question Row Button -->
            <button
              type="button"
              @click="toggleFaq(index)"
              class="w-full text-left font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 flex items-start justify-between gap-4 group cursor-pointer transition-colors"
            >
              <span
                :class="[
                  'transition-colors leading-snug',
                  openFaqIndex === index ? 'text-amber-700 dark:text-amber-400 font-extrabold' : 'group-hover:text-amber-600 dark:group-hover:text-amber-400'
                ]"
              >
                {{ faq.q }}
              </span>

              <span
                :class="[
                  'w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200',
                  openFaqIndex === index
                    ? 'bg-amber-500 text-stone-950 dark:bg-amber-400 dark:text-stone-950 shadow-2xs'
                    : 'bg-stone-100 dark:bg-stone-800/80 text-stone-500 dark:text-stone-400 group-hover:bg-amber-500/10 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                ]"
              >
                <Icon
                  :name="openFaqIndex === index ? 'mdi:arrow-up' : 'mdi:arrow-down'"
                  class="text-base"
                />
              </span>
            </button>

            <!-- Answer Content -->
            <div
              v-show="openFaqIndex === index"
              class="pt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed"
            >
              <p>
                {{ faq.a }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Brand Partnership Expand Modal 🔎 -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="selectedBrandModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto"
          @click.self="closeBrandModal"
        >
          <div
            class="relative w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-[28px] shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 my-auto max-h-[92vh] flex flex-col"
          >
            <!-- Top Tint Bar -->
            <div 
              class="absolute top-0 left-0 right-0 h-1.5"
              :style="{ backgroundColor: selectedBrandModal.color }"
            ></div>

            <!-- Modal Header -->
            <div class="flex items-start justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-4 shrink-0 pt-1">
              <div class="flex items-center gap-4 min-w-0">
                <div
                  class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border p-2 bg-stone-50 dark:bg-stone-950 shadow-2xs"
                  :style="{ borderColor: `color-mix(in srgb, ${selectedBrandModal.color} 40%, transparent)` }"
                >
                  <img
                    v-if="selectedBrandModal.logoUrl && !imageErrors[selectedBrandModal.id]"
                    :src="selectedBrandModal.logoUrl"
                    :alt="`Logo ${selectedBrandModal.name}`"
                    @error="handleImageError(selectedBrandModal.id)"
                    class="max-h-8 max-w-full object-contain filter dark:brightness-110"
                  />
                  <Icon v-else-if="selectedBrandModal.iconName" :name="selectedBrandModal.iconName" class="text-2xl text-stone-700 dark:text-stone-300" />
                  <span v-else class="font-bold text-sm text-stone-900 dark:text-stone-100">{{ selectedBrandModal.name.substring(0, 2) }}</span>
                </div>

                <div class="min-w-0 space-y-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span
                      class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider"
                      :style="{
                        backgroundColor: `color-mix(in srgb, ${selectedBrandModal.color} 10%, transparent)`,
                        borderColor: `color-mix(in srgb, ${selectedBrandModal.color} 25%, transparent)`,
                        color: selectedBrandModal.color
                      }"
                    >
                      {{ selectedBrandModal.badge }}
                    </span>
                    <span v-if="selectedBrandModal.collaborationType" class="text-[11px] font-medium text-stone-500 dark:text-stone-400">
                      {{ selectedBrandModal.collaborationType }}
                    </span>
                  </div>

                  <h3 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-white leading-tight">
                    {{ selectedBrandModal.name }}
                  </h3>

                  <p class="text-xs font-semibold text-stone-500 dark:text-stone-400">
                    {{ selectedBrandModal.tag }}
                  </p>
                </div>
              </div>

              <button
                type="button"
                @click="closeBrandModal"
                class="p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer shrink-0"
                title="Cerrar modal"
              >
                <Icon name="mdi:close" class="text-xl" />
              </button>
            </div>

            <!-- Modal Body Content -->
            <div class="space-y-5 overflow-y-auto pr-1 text-stone-700 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
              
              <!-- General Description -->
              <p class="text-stone-600 dark:text-stone-300">
                {{ selectedBrandModal.description }}
              </p>

              <!-- Real Project Application Badge -->
              <div class="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/80 space-y-1.5">
                <div class="flex items-center gap-2 text-xs font-bold text-stone-900 dark:text-stone-100">
                  <Icon name="mdi:hammer-screwdriver" class="text-amber-500 text-base" />
                  <span>Aplicación en Taller Real:</span>
                </div>
                <p class="text-xs text-stone-600 dark:text-stone-300">
                  <strong>Proyecto:</strong> {{ selectedBrandModal.projectApplied }}
                </p>
                <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                  ✨ {{ selectedBrandModal.highlight }}
                </p>
              </div>

              <!-- Partnership Benefits List -->
              <div v-if="selectedBrandModal.partnershipBenefits && selectedBrandModal.partnershipBenefits.length" class="space-y-2.5 pt-1">
                <h4 class="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Icon name="mdi:handshake-outline" class="text-amber-500 text-lg" />
                  <span>Beneficios de la Alianza & Integración</span>
                </h4>

                <ul class="space-y-2">
                  <li
                    v-for="(benefit, idx) in selectedBrandModal.partnershipBenefits"
                    :key="idx"
                    class="flex items-start gap-2.5 text-xs text-stone-600 dark:text-stone-300"
                  >
                    <Icon name="mdi:check-circle-outline" class="text-amber-500 text-base shrink-0 mt-0.5" />
                    <span>{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <!-- Impact Metrics & Stats -->
              <div v-if="selectedBrandModal.statsOrImpact && selectedBrandModal.statsOrImpact.length" class="space-y-2 pt-1">
                <h4 class="font-serif font-bold text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Impacto & Rendimiento Comprobado
                </h4>

                <div class="grid grid-cols-3 gap-2.5">
                  <div
                    v-for="(stat, idx) in selectedBrandModal.statsOrImpact"
                    :key="idx"
                    class="p-3 rounded-xl bg-stone-100/80 dark:bg-stone-800/50 border border-stone-200/60 dark:border-stone-700/60 text-center space-y-0.5"
                  >
                    <span class="block text-[10px] text-stone-500 dark:text-stone-400 font-medium truncate">{{ stat.label }}</span>
                    <span class="block text-xs sm:text-sm font-extrabold text-stone-900 dark:text-white truncate">{{ stat.value }}</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Modal Footer Actions -->
            <div class="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <a
                :href="selectedBrandModal.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Visitar Sitio Oficial</span>
                <Icon name="mdi:open-in-new" class="text-sm" />
              </a>

              <NuxtLink
                to="/hola/contacto?tipo=colaboracion"
                @click="closeBrandModal"
                class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs text-center"
              >
                <Icon name="mdi:handshake" class="text-sm text-stone-950" />
                <span>Proponer Alianza Similar</span>
              </NuxtLink>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.brand-card-item {
  box-shadow: none !important;
}

.brand-card-item:hover {
  border-color: var(--brand-border-hover) !important;
  box-shadow: none !important;
}

.brand-card-item:hover .brand-title-link {
  color: var(--brand-color) !important;
}

@keyframes marqueeLoop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee-loop {
  animation: marqueeLoop 50s linear infinite;
}

.mask-fade-edges {
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}
</style>

