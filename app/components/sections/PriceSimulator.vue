<!-- app/components/sections/PriceSimulator.vue -->
<template>
  <section class="w-full max-w-xl mx-auto mt-8">
    <!-- Trigger Card on main page (Image 1) -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      @click="openModal = true"
      class="group p-5 sm:p-6 rounded-[24px] border border-stone-200/90 dark:border-stone-800
             bg-white dark:bg-stone-900/90 hover:border-amber-500/60 dark:hover:border-amber-500/60
             shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-between gap-4"
    >
      <div class="flex items-center gap-4 min-w-0">
        <!-- Ruler Square Icon Badge -->
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF4E8] dark:bg-amber-950/50 text-[#9A4212] dark:text-amber-400 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
          <Icon name="mdi:ruler-square" class="text-2xl sm:text-3xl" />
        </div>

        <!-- Content -->
        <div class="space-y-1 min-w-0">
          <div class="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#FFF4E8] dark:bg-amber-950/50 text-[#9A4212] dark:text-amber-400 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
            SIMULADOR INTERACTIVO · 1 MINUTO
          </div>

          <h3 class="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight flex items-center gap-1.5">
            <span>📐</span>
            <span>Solicita Presupuesto a Medida</span>
          </h3>

          <p class="text-xs text-stone-500 dark:text-stone-400 font-normal leading-snug line-clamp-2 sm:line-clamp-none">
            Elige mueble, tipo de madera y medidas para recibir una estimación orientativa sin compromiso.
          </p>
        </div>
      </div>

      <!-- Action Button -->
      <button
        type="button"
        @click.stop="openModal = true"
        class="px-5 py-2.5 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-1 shrink-0 group-hover:scale-105 transition-transform cursor-pointer shadow-xs"
      >
        <span>Diseñar</span>
        <Icon name="mdi:chevron-right" class="text-base" />
      </button>
    </div>

    <!-- Interactive Modal Popup (Images 2 & 3) -->
    <Teleport to="body">
      <div
        v-if="openModal"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        @click.self="closeSimulator"
      >
        <div
          class="bg-white dark:bg-stone-900 rounded-[28px] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200/80 dark:border-stone-800 max-h-[92vh] overflow-y-auto space-y-6"
        >
          <!-- Close Button -->
          <button
            type="button"
            @click="closeSimulator"
            class="absolute top-6 right-6 p-2 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <Icon name="mdi:close" class="text-xl" />
          </button>

          <!-- Header -->
          <div class="space-y-1 pr-8">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4E8] dark:bg-amber-950/60 text-[#9A4212] dark:text-amber-400 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
              <Icon name="mdi:hammer-wrench" class="text-xs" />
              <span>PRESUPUESTO PERSONALIZADO</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              Configura tu pieza a medida
            </h2>
          </div>

          <!-- Progress Bar (3 segments) -->
          <div v-if="!submitted" class="flex items-center gap-2 pt-1">
            <div
              class="h-1.5 rounded-full flex-1 transition-all duration-300"
              :class="step >= 1 ? 'bg-[#D97706]' : 'bg-stone-200 dark:bg-stone-800'"
            />
            <div
              class="h-1.5 rounded-full flex-1 transition-all duration-300"
              :class="step >= 2 ? 'bg-[#D97706]' : 'bg-stone-200 dark:bg-stone-800'"
            />
            <div
              class="h-1.5 rounded-full flex-1 transition-all duration-300"
              :class="step >= 3 ? 'bg-[#D97706]' : 'bg-stone-200 dark:bg-stone-800'"
            />
          </div>

          <!-- STEP 1: ¿QUÉ TIPO DE PIEZA TIENES EN MENTE? (Image 2) -->
          <div v-if="step === 1 && !submitted" class="space-y-4 pt-1">
            <p class="text-xs font-bold tracking-wider uppercase text-stone-500 dark:text-stone-400">
              PASO 1: ¿QUÉ TIPO DE PIEZA TIENES EN MENTE?
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                v-for="item in furnitureTypes"
                :key="item.id"
                type="button"
                @click="selectedFurniture = item"
                :class="[
                  'p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 cursor-pointer relative',
                  selectedFurniture.id === item.id
                    ? 'border-[#D97706] bg-[#FFFBF5] dark:bg-amber-950/20 shadow-xs ring-1 ring-[#D97706]'
                    : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-amber-500/50'
                ]"
              >
                <div class="p-2.5 rounded-xl bg-amber-500/10 text-[#D97706] dark:text-amber-400 w-fit">
                  <Icon :name="item.icon" class="text-2xl" />
                </div>
                <div>
                  <h4 class="font-bold text-sm text-stone-900 dark:text-stone-100">
                    {{ item.title }}
                  </h4>
                  <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    {{ item.subtitle }}
                  </p>
                </div>
              </button>
            </div>

            <!-- Footer Action -->
            <div class="pt-4 flex items-center justify-end">
              <button
                type="button"
                @click="step = 2"
                class="px-6 py-3 rounded-2xl font-bold text-sm text-white bg-[#D97706] hover:bg-[#B45309] transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Siguiente</span>
                <Icon name="mdi:arrow-right" class="text-lg" />
              </button>
            </div>
          </div>

          <!-- STEP 2: ¿QUÉ MADERA PREFIERES? -->
          <div v-else-if="step === 2 && !submitted" class="space-y-4 pt-1">
            <p class="text-xs font-bold tracking-wider uppercase text-stone-500 dark:text-stone-400">
              PASO 2: ¿QUÉ TIPO DE MADERA PREFIERES?
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                v-for="wood in woodOptions"
                :key="wood.id"
                type="button"
                @click="selectedWood = wood"
                :class="[
                  'p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 cursor-pointer relative',
                  selectedWood.id === wood.id
                    ? 'border-[#D97706] bg-[#FFFBF5] dark:bg-amber-950/20 shadow-xs ring-1 ring-[#D97706]'
                    : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-amber-500/50'
                ]"
              >
                <div class="flex items-center gap-2.5">
                  <span
                    class="w-5 h-5 rounded-full shrink-0 border border-black/10 dark:border-white/20 shadow-2xs"
                    :style="{ backgroundColor: wood.color }"
                  />
                  <span class="font-bold text-sm text-stone-900 dark:text-stone-100">
                    {{ wood.title }}
                  </span>
                </div>
                <p class="text-xs text-stone-500 dark:text-stone-400">
                  {{ wood.subtitle }}
                </p>
              </button>
            </div>

            <!-- Footer Actions -->
            <div class="pt-4 flex items-center justify-between border-t border-stone-100 dark:border-stone-800">
              <button
                type="button"
                @click="step = 1"
                class="px-4 py-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 font-semibold text-sm transition-colors cursor-pointer"
              >
                Atrás
              </button>
              <button
                type="button"
                @click="step = 3"
                class="px-6 py-3 rounded-2xl font-bold text-sm text-white bg-[#D97706] hover:bg-[#B45309] transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Siguiente</span>
                <Icon name="mdi:arrow-right" class="text-lg" />
              </button>
            </div>
          </div>

          <!-- STEP 3: MEDIDAS APROXIMADAS Y CONTACTO (Image 3) -->
          <div v-else-if="step === 3 && !submitted" class="space-y-4 pt-1">
            <p class="text-xs font-bold tracking-wider uppercase text-stone-500 dark:text-stone-400">
              PASO 3: MEDIDAS APROXIMADAS Y CONTACTO
            </p>

            <!-- Price estimate pill badge -->
            <div class="p-3.5 rounded-2xl bg-[#FFFBF5] dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-center justify-between text-xs sm:text-sm">
              <span class="text-stone-600 dark:text-stone-300 font-medium">
                Estimación orientativa ({{ selectedFurniture.title }} + {{ selectedWood.title }}):
              </span>
              <span class="font-bold text-[#D97706] dark:text-amber-400 text-base">
                {{ estimatedPriceRange.min }}€ – {{ estimatedPriceRange.max }}€
              </span>
            </div>

            <!-- Form Fields -->
            <div class="space-y-3.5">
              <!-- Field 1: Medidas -->
              <div class="space-y-1">
                <label class="text-xs font-bold text-stone-700 dark:text-stone-300">
                  Medidas estimadas (Largo x Ancho x Alto cm)
                </label>
                <input
                  v-model="form.medidas"
                  type="text"
                  placeholder="Ej: 160 x 80 x 75 cm"
                  class="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-[#D97706] transition-colors"
                />
              </div>

              <!-- Field 2: Email o Teléfono / WhatsApp -->
              <div class="space-y-1">
                <label class="text-xs font-bold text-stone-700 dark:text-stone-300">
                  Tu Email o Teléfono / WhatsApp *
                </label>
                <input
                  v-model="form.contact"
                  type="text"
                  required
                  placeholder="ejemplo@correo.com o +34 600 000 000"
                  class="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-[#D97706] transition-colors"
                />
              </div>

              <!-- Field 3: Detalles adicionales -->
              <div class="space-y-1">
                <label class="text-xs font-bold text-stone-700 dark:text-stone-300">
                  Detalles adicionales (Opcional)
                </label>
                <textarea
                  v-model="form.notas"
                  rows="3"
                  placeholder="Forma de patas, acabado en cera/aceite, etc."
                  class="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-[#D97706] transition-colors resize-none"
                />
              </div>
            </div>

            <!-- Footer Actions -->
            <div class="pt-4 flex items-center justify-between border-t border-stone-100 dark:border-stone-800">
              <button
                type="button"
                @click="step = 2"
                class="px-4 py-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 font-semibold text-sm transition-colors cursor-pointer"
              >
                Atrás
              </button>

              <button
                type="button"
                :disabled="!form.contact || loading"
                @click="handleSubmit"
                :class="[
                  'px-6 py-3 rounded-2xl font-bold text-sm text-white transition-all shadow-sm cursor-pointer flex items-center gap-2',
                  form.contact && !loading
                    ? 'bg-[#D97706] hover:bg-[#B45309]'
                    : 'bg-stone-300 dark:bg-stone-700 cursor-not-allowed opacity-70'
                ]"
              >
                <Icon v-if="loading" name="mdi:loading" class="animate-spin text-lg" />
                <span>{{ loading ? 'Enviando...' : 'Enviar Solicitud' }}</span>
              </button>
            </div>
          </div>

          <!-- SUCCESS STATE -->
          <div v-else-if="submitted" class="py-8 text-center space-y-4 animate-fade-in">
            <div class="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-3xl">
              <Icon name="mdi:check-circle-outline" />
            </div>

            <div class="space-y-1">
              <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100">
                ¡Solicitud de Presupuesto Enviada!
              </h3>
              <p class="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto leading-relaxed">
                He recibido tu configuración de <strong>{{ selectedFurniture.title }}</strong> en <strong>{{ selectedWood.title }}</strong>. Te responderé muy pronto.
              </p>
            </div>

            <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                :href="whatsappDirectUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <Icon name="simple-icons:whatsapp" class="text-lg" />
                <span>Hablar por WhatsApp ahora</span>
              </a>

              <button
                type="button"
                @click="closeSimulator"
                class="w-full sm:w-auto px-6 py-3 rounded-2xl border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-semibold text-xs sm:text-sm hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>

        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const openModal = ref(false)
const step = ref(1)
const loading = ref(false)
const submitted = ref(false)

const { addLead } = useLeads()

interface FurnitureOption {
  id: string
  title: string
  subtitle: string
  icon: string
  baseMin: number
  baseMax: number
}

interface WoodOption {
  id: string
  title: string
  subtitle: string
  color: string
  multiplier: number
}

const furnitureTypes: FurnitureOption[] = [
  {
    id: 'mesa',
    title: 'Mesa de Comedor',
    subtitle: 'Gran formato o redonda',
    icon: 'mdi:table-furniture',
    baseMin: 650,
    baseMax: 1100
  },
  {
    id: 'consola',
    title: 'Consola / Recibidor',
    subtitle: 'Para entradas o pasillos',
    icon: 'mdi:view-dashboard-outline',
    baseMin: 380,
    baseMax: 650
  },
  {
    id: 'estanteria',
    title: 'Estantería / Módulo',
    subtitle: 'Librerías o baldas',
    icon: 'mdi:bookshelf',
    baseMin: 420,
    baseMax: 850
  },
  {
    id: 'especial',
    title: 'Pieza Especial',
    subtitle: 'Tablas, lámparas o decor',
    icon: 'mdi:hammer',
    baseMin: 180,
    baseMax: 450
  }
]

const woodOptions: WoodOption[] = [
  {
    id: 'roble',
    title: 'Roble Salvaje',
    subtitle: 'Veta natural y alta resistencia',
    color: '#A06E3B',
    multiplier: 1.0
  },
  {
    id: 'nogal',
    title: 'Nogal Español',
    subtitle: 'Tono oscuro noble y elegante',
    color: '#4A3324',
    multiplier: 1.35
  },
  {
    id: 'castano',
    title: 'Castaño / Fresno',
    subtitle: 'Tono cálido y duradero',
    color: '#C8A87C',
    multiplier: 1.05
  },
  {
    id: 'olivo',
    title: 'Olivo / Reciclada',
    subtitle: 'Piezas con alma e historia',
    color: '#8C6737',
    multiplier: 1.25
  }
]

const selectedFurniture = ref<FurnitureOption>(furnitureTypes[0])
const selectedWood = ref<WoodOption>(woodOptions[0])

const form = reactive({
  medidas: '',
  contact: '',
  notas: ''
})

const estimatedPriceRange = computed(() => {
  const min = Math.round((selectedFurniture.value.baseMin * selectedWood.value.multiplier) / 10) * 10
  const max = Math.round((selectedFurniture.value.baseMax * selectedWood.value.multiplier) / 10) * 10
  return { min, max }
})

const whatsappDirectUrl = computed(() => {
  const phone = '34600000000'
  const text = `¡Hola Jesús! He configurado mi presupuesto en la web:
- Pieza: ${selectedFurniture.value.title}
- Madera: ${selectedWood.value.title}
- Medidas: ${form.medidas || 'A definir'}
- Estimación: ${estimatedPriceRange.value.min}€ - ${estimatedPriceRange.value.max}€
- Contacto: ${form.contact}`
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
})

async function handleSubmit() {
  if (!form.contact) return
  loading.value = true

  try {
    await addLead({
      type: 'estimate',
      contact: form.contact,
      mueble: selectedFurniture.value.title,
      madera: selectedWood.value.title,
      medidas: form.medidas || 'No especificado',
      notas: `[Simulador Web] ${form.notas || 'Sin notas'} (Estimado: ${estimatedPriceRange.value.min}€ - ${estimatedPriceRange.value.max}€)`
    })
    submitted.value = true
  } catch (err) {
    console.error('Error enviando lead desde simulador', err)
  } finally {
    loading.value = false
  }
}

function closeSimulator() {
  openModal.value = false
  setTimeout(() => {
    step.value = 1
    submitted.value = false
    form.medidas = ''
    form.contact = ''
    form.notas = ''
  }, 300)
}
</script>
