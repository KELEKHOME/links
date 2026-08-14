<!-- app/pages/hola/contacto.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'slide-up', mode: 'out-in' } })
useSeoMeta({ title: 'KELEK HOME - Contacto' })

const route = useRoute()
const { status, submit, reset } = useFormspree()
const { polite, assertive } = useAnnouncer()

type ContactType = 'estimate' | 'general' | 'collaboration'
const activeType = ref<ContactType>('estimate')

onMounted(() => {
  if (route.query.tipo === 'colaboracion' || route.query.type === 'collaboration') {
    activeType.value = 'collaboration'
  }
})

watch(() => route.query.tipo, (val) => {
  if (val === 'colaboracion') activeType.value = 'collaboration'
})

const selectedMueble = ref('Mesa de Comedor')
const muebleOptions = [
  { id: 'Mesa de Comedor', label: 'Mesa Comedor' },
  { id: 'Aparador', label: 'Aparador / TV' },
  { id: 'Estantería', label: 'Estantería' },
  { id: 'Mesa de Centro', label: 'Mesa Centro' },
  { id: 'Otro', label: 'Otro proyecto' }
]

const selectedMadera = ref('Roble Salvaje')
const maderaOptions = [
  { id: 'Roble Salvaje', label: 'Roble' },
  { id: 'Nogal Español', label: 'Nogal' },
  { id: 'Castaño', label: 'Castaño' },
  { id: 'Olivo', label: 'Olivo' },
  { id: 'Asesórame', label: 'Asesórame' }
]

const selectedColabType = ref('Cesión de Herramientas / Material')
const colabOptions = [
  'Cesión de Herramientas / Material',
  'Patrocinio de Contenido',
  'Pruebas de Taller & Feedback',
  'Otro'
]

const form = reactive({
  nombre: '',
  email: '',
  marca: '',
  medidas: '',
  descripcion: ''
})

const copiedEmail = ref(false)
function copyEmail() {
  if (navigator?.clipboard) {
    navigator.clipboard.writeText('hola@kelek.home')
    copiedEmail.value = true
    setTimeout(() => { copiedEmail.value = false }, 2500)
  }
}

async function handleSubmit() {
  const payload: Record<string, any> = {
    nombre: form.nombre,
    email: form.email,
    type: activeType.value,
    descripcion: form.descripcion
  }

  if (activeType.value === 'estimate') {
    payload.mueble = selectedMueble.value
    payload.madera = selectedMadera.value
    payload.medidas = form.medidas
    payload._subject = `Presupuesto a Medida: ${selectedMueble.value} (${selectedMadera.value}) - ${form.nombre}`
  } else if (activeType.value === 'collaboration') {
    payload.marca = form.marca
    payload.tipoColaboracion = selectedColabType.value
    payload._subject = `Propuesta de Colaboración de Marca: ${form.marca || form.nombre}`
  } else {
    payload._subject = `Consulta General de ${form.nombre}`
  }

  await submit(payload)

  if (status.value === 'success') {
    Object.assign(form, { nombre: '', email: '', marca: '', medidas: '', descripcion: '' })
    polite('¡Mensaje enviado con éxito! Te responderé lo antes posible.')
  } else if (status.value === 'error') {
    assertive('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
  }
}

// FAQ Accordion
const openFaq = ref<number | null>(null)
const faqs = [
  {
    q: '¿Cómo funciona el proceso de encargo a medida?',
    a: 'Empezamos comentando tu idea, dimensiones y tipo de madera. Te envío un presupuesto detallado sin compromiso y, una vez aprobado, acordamos los detalles antes de comenzar en el taller.'
  },
  {
    q: '¿Qué maderas utilizas y de dónde proceden?',
    a: 'Trabajo principalmente con maderas macizas de fuentes sostenibles certificadas (FSC/PEFC): Roble salvaje, Castaño, Nogal, Olivo y Fresno.'
  },
  {
    q: '¿Cuánto tiempo tarda la fabricación?',
    a: 'El plazo habitual de fabricación artesanal es de 3 a 5 semanas, según la complejidad del proyecto y los acabados.'
  },
  {
    q: '¿Realizas envíos fuera de Madrid?',
    a: 'Sí, realizo envíos protegidos a toda España. En la Comunidad de Madrid realizamos la entrega y montaje directamente en persona.'
  },
  {
    q: '¿Qué mantenimiento requiere la madera maciza?',
    a: 'Aplicamos aceites y ceras naturales de gran resistencia. Con tu pedido adjuntamos una guía rápida y recomendaciones sencillas de cuidado diario.'
  }
]
</script>

<template>
  <div class="min-h-screen pt-28 sm:pt-32 pb-16 px-4 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
    <div class="w-full max-w-2xl mx-auto space-y-8">
      
      <!-- Header Hero Section (Estilo Referencia) -->
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Creemos algo único juntos
        </h1>

        <p class="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-normal max-w-xl mx-auto leading-relaxed">
          Cuéntanos tu proyecto a medida, solicita información o pásate por nuestro taller en Madrid. Respondemos habitualmente en menos de 24 horas.
        </p>
      </div>

      <!-- Direct Contact Bio Channels -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <!-- WhatsApp Direct -->
        <a
          href="https://wa.me/34600000000?text=Hola%20Jes%C3%BAs,%20me%20gustar%C3%ADa%20consultarte%20un%20proyecto"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200 transition-all duration-200 flex items-center gap-3 group"
        >
          <div class="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Icon name="mdi:whatsapp" class="text-xl" />
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-xs font-bold truncate">WhatsApp</div>
            <div class="text-[10px] text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Respuesta rápida</span>
            </div>
          </div>
        </a>

        <!-- Copy Email -->
        <button
          type="button"
          @click="copyEmail"
          class="p-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-stone-900 dark:text-stone-100 transition-all duration-200 flex items-center gap-3 group cursor-pointer text-left"
        >
          <div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Icon name="mdi:email-outline" class="text-xl" />
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-xs font-bold truncate">Email Directo</div>
            <div class="text-[10px] text-stone-500 dark:text-stone-400 font-mono truncate">
              {{ copiedEmail ? '¡Copiado!' : 'hola@kelek.home' }}
            </div>
          </div>
        </button>

        <!-- Instagram DM -->
        <a
          href="https://www.instagram.com/kelek.home"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200/80 dark:bg-stone-800/80 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-700/80 transition-all duration-200 flex items-center gap-3 group"
        >
          <UiInstagramIcon class="w-9 h-9 shrink-0 group-hover:scale-105 transition-transform" />
          <div class="min-w-0 flex-1">
            <div class="text-xs font-bold truncate">Instagram</div>
            <div class="text-[10px] text-stone-500 dark:text-stone-400 truncate">@kelek.home</div>
          </div>
        </a>
      </div>

      <!-- Main Streamlined Form Card -->
      <div class="p-6 sm:p-7 rounded-[28px] border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900/90 shadow-2xs space-y-5">
        
        <!-- Type Selector -->
        <div class="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
          <span class="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            ¿En qué te ayudo?
          </span>

          <div class="p-1 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center gap-1">
            <button
              type="button"
              @click="activeType = 'estimate'"
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer',
                activeType === 'estimate'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 font-bold shadow-2xs'
                  : 'text-stone-500 dark:text-stone-400 hover:text-stone-900'
              ]"
            >
              Presupuesto
            </button>
            <button
              type="button"
              @click="activeType = 'general'"
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer',
                activeType === 'general'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 font-bold shadow-2xs'
                  : 'text-stone-500 dark:text-stone-400 hover:text-stone-900'
              ]"
            >
              Consulta
            </button>
            <button
              type="button"
              @click="activeType = 'collaboration'"
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1',
                activeType === 'collaboration'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-2xs'
                  : 'text-stone-500 dark:text-stone-400 hover:text-stone-900'
              ]"
            >
              <span>Marcas</span>
            </button>
          </div>
        </div>

        <!-- Success Screen -->
        <div
          v-if="status === 'success'"
          class="py-8 px-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
        >
          <div class="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center text-2xl">
            <Icon name="mdi:check-circle-outline" />
          </div>
          <h3 class="text-lg font-bold text-stone-900 dark:text-stone-100">
            ¡Mensaje recibido!
          </h3>
          <p class="text-xs text-stone-600 dark:text-stone-300 max-w-sm mx-auto leading-relaxed">
            Jesús revisará tu consulta y te responderá lo antes posible.
          </p>
          <button
            type="button"
            @click="reset"
            class="px-4 py-2 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-bold hover:opacity-90 transition cursor-pointer"
          >
            Enviar otro mensaje
          </button>
        </div>

        <!-- Form Fields -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-4">

          <!-- Estimate Specific Pills -->
          <div v-if="activeType === 'estimate'" class="space-y-4">
            
            <!-- Furniture Chips -->
            <div class="space-y-1.5">
              <label class="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Tipo de Mueble
              </label>
              <div class="flex flex-wrap gap-1.5">
                <button
                  v-for="item in muebleOptions"
                  :key="item.id"
                  type="button"
                  @click="selectedMueble = item.id"
                  :class="[
                    'px-3 py-1.5 rounded-xl border text-xs transition-all cursor-pointer',
                    selectedMueble === item.id
                      ? 'border-amber-500 bg-amber-500/15 text-stone-900 dark:text-amber-300 font-bold'
                      : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 text-stone-600 dark:text-stone-400'
                  ]"
                >
                  {{ item.label }}
                </button>
              </div>
            </div>

            <!-- Wood Chips -->
            <div class="space-y-1.5">
              <label class="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Madera Deseada
              </label>
              <div class="flex flex-wrap gap-1.5">
                <button
                  v-for="wood in maderaOptions"
                  :key="wood.id"
                  type="button"
                  @click="selectedMadera = wood.id"
                  :class="[
                    'px-3 py-1.5 rounded-xl border text-xs transition-all cursor-pointer',
                    selectedMadera === wood.id
                      ? 'border-stone-900 dark:border-stone-200 bg-stone-900 dark:bg-stone-200 text-white dark:text-stone-900 font-bold'
                      : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 text-stone-600 dark:text-stone-400'
                  ]"
                >
                  {{ wood.label }}
                </button>
              </div>
            </div>

            <!-- Approx Dimensions -->
            <div class="space-y-1">
              <label class="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Medidas aprox. (opcional)
              </label>
              <input
                v-model="form.medidas"
                type="text"
                placeholder="Ej. 180 x 90 x 75 cm"
                class="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900 text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <!-- Collaboration Specific Options -->
          <div v-if="activeType === 'collaboration'" class="space-y-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <div class="space-y-1">
              <label class="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                Nombre de la Marca / Empresa *
              </label>
              <input
                v-model="form.marca"
                type="text"
                :required="activeType === 'collaboration'"
                placeholder="Ej. Bosch Professional, Festool, V33..."
                class="w-full px-3.5 py-2.5 rounded-xl border border-amber-500/30 bg-white dark:bg-stone-900 text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                Tipo de Sinergia
              </label>
              <div class="flex flex-wrap gap-1.5">
                <button
                  v-for="colab in colabOptions"
                  :key="colab"
                  type="button"
                  @click="selectedColabType = colab"
                  :class="[
                    'px-2.5 py-1 rounded-lg text-xs transition-all cursor-pointer',
                    selectedColabType === colab
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-white/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 hover:bg-white'
                  ]"
                >
                  {{ colab }}
                </button>
              </div>
            </div>
          </div>

          <!-- Common Personal Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Tu Nombre *
              </label>
              <input
                v-model="form.nombre"
                type="text"
                required
                placeholder="Ej. María López"
                class="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900 text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div class="space-y-1">
              <label class="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Correo Electrónico *
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="tu@email.com"
                class="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900 text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <!-- Message Box -->
          <div class="space-y-1">
            <label class="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              {{ activeType === 'estimate' ? 'Detalles de la idea *' : 'Mensaje *' }}
            </label>
            <textarea
              v-model="form.descripcion"
              required
              rows="3"
              :placeholder="activeType === 'estimate' ? 'Cuéntame brevemente dónde irá la pieza, acabados o referencias...' : 'Escribe tu consulta aquí...'"
              class="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900 text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-500 transition-colors resize-none"
            ></textarea>
          </div>

          <!-- Error Feedback -->
          <div v-if="status === 'error'" class="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs text-center font-medium">
            Error al enviar. Puedes escribirme directamente a hola@kelek.home
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="status === 'sending'"
            class="w-full py-3.5 px-5 rounded-full font-bold text-xs transition-all duration-200 bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-stone-950 shadow-md disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
          >
            <span v-if="status === 'sending'" class="flex items-center gap-2">
              <Icon name="mdi:loading" class="animate-spin text-sm" />
              <span>Enviando...</span>
            </span>
            <span v-else class="flex items-center gap-1.5">
              <span>{{ activeType === 'estimate' ? 'Solicitar Presupuesto' : activeType === 'collaboration' ? 'Enviar Propuesta de Colaboración' : 'Enviar Mensaje' }}</span>
              <Icon name="mdi:arrow-right" class="text-sm" />
            </span>
          </button>

        </form>

      </div>

      <!-- FAQ Section -->
      <div class="p-6 sm:p-7 rounded-[28px] border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900/90 shadow-2xs space-y-4">
        <div class="space-y-1">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[11px] font-bold">
            <Icon name="mdi:help-circle-outline" class="text-xs" />
            <span>Dudas Frecuentes</span>
          </div>
          <h2 class="text-lg font-bold text-stone-900 dark:text-stone-100">
            Preguntas Frecuentes
          </h2>
          <p class="text-xs text-stone-500 dark:text-stone-400">
            Información rápida sobre encargos a medida, plazos y envíos
          </p>
        </div>

        <div class="space-y-2 pt-1">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="rounded-xl border border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/40 overflow-hidden transition-all"
          >
            <button
              type="button"
              @click="openFaq = openFaq === index ? null : index"
              class="w-full px-4 py-3 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-stone-100/60 dark:hover:bg-stone-800/50 transition-colors"
            >
              <span class="font-semibold text-stone-900 dark:text-stone-100 text-xs sm:text-sm leading-snug">
                {{ faq.q }}
              </span>
              <Icon
                name="mdi:chevron-down"
                :class="{ 'rotate-180': openFaq === index }"
                class="text-lg text-amber-500 shrink-0 transition-transform duration-200"
              />
            </button>

            <div
              v-if="openFaq === index"
              class="px-4 pb-3.5 text-xs text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800/80 pt-2.5 animate-fade-in"
            >
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

