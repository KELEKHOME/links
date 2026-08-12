<!-- pages/contacto.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'slide-up', mode: 'out-in' } })
useSeoMeta({ title: 'Contacto & Presupuestos — Kelek Home' })

const { status, submit, reset } = useFormspree()
const { polite, assertive } = useAnnouncer()

// Contact Types
type ContactType = 'estimate' | 'general' | 'collaboration' | 'wood'
const activeType = ref<ContactType>('estimate')

// Interactive Options for Custom Estimates
const selectedMueble = ref('Mesa de Comedor')
const muebleOptions = [
  { id: 'Mesa de Comedor', label: 'Mesa de Comedor', icon: 'mdi:table-furniture' },
  { id: 'Aparador', label: 'Aparador / Mueble TV', icon: 'mdi:cabinet' },
  { id: 'Estantería', label: 'Estantería / Librería', icon: 'mdi:bookshelf' },
  { id: 'Mesa de Centro', label: 'Mesa de Centro', icon: 'mdi:table' },
  { id: 'Escritorio', label: 'Escritorio / Oficina', icon: 'mdi:desk' },
  { id: 'Otro', label: 'Otro proyecto', icon: 'mdi:star-outline' }
]

const selectedMadera = ref('Roble Salvaje')
const maderaOptions = [
  { id: 'Roble Salvaje', label: 'Roble Salvaje', color: 'bg-amber-800' },
  { id: 'Nogal Español', label: 'Nogal Español', color: 'bg-stone-800' },
  { id: 'Castaño', label: 'Castaño', color: 'bg-yellow-900' },
  { id: 'Olivo', label: 'Madera de Olivo', color: 'bg-amber-700' },
  { id: 'Asesórame', label: 'Aseóramé tú', color: 'bg-stone-500' }
]

const form = reactive({
  nombre: '',
  email: '',
  medidas: '',
  asunto: '',
  descripcion: ''
})

// Copy Toast Notification State
const copiedEmail = ref(false)
function copyEmail() {
  if (navigator?.clipboard) {
    navigator.clipboard.writeText('hola@kelek.home')
    copiedEmail.value = true
    setTimeout(() => { copiedEmail.value = false }, 2500)
  }
}

// FAQ Accordion State
const openFaq = ref<number | null>(0)
const faqs = [
  {
    q: '¿Cómo funciona el proceso de encargo a medida?',
    a: 'Empezamos escuchando tu idea, medidas y espacio. Te enviamos una propuesta detallada con render/boceto y presupuesto sin compromiso. Una vez aceptado, seleccionamos la madera en el taller y comenzamos la fabricación artesanal.'
  },
  {
    q: '¿Cuáles son los plazos aproximados de entrega?',
    a: 'Normalmente entre 3 y 5 semanas desde la confirmación del proyecto. Como trabajamos de forma artesanal pieza por pieza, cuidamos cada secado y acabado con el tiempo que requiere la madera.'
  },
  {
    q: '¿Hacéis envíos a toda España y Europa?',
    a: 'Sí. Todos nuestros muebles viajan asegurados en cajas protectoras hechas a medida o paletizados para garantizar que llegan impecables a tu casa.'
  },
  {
    q: '¿Se pueden ver muestras de maderas o visitar el taller?',
    a: '¡Por supuesto! Atendemos en nuestro taller en Madrid con cita previa para mostrarte muestras de vetas, aceites orgánicos y acabados al natural.'
  }
]

async function handleSubmit() {
  const payload: Record<string, any> = {
    nombre: form.nombre,
    email: form.email,
    type: activeType.value
  }

  if (activeType.value === 'estimate') {
    payload.mueble = selectedMueble.value
    payload.madera = selectedMadera.value
    payload.medidas = form.medidas
    payload.descripcion = form.descripcion
    payload._subject = `Presupuesto a Medida: ${selectedMueble.value} (${selectedMadera.value})`
  } else {
    payload.asunto = form.asunto || (activeType.value === 'collaboration' ? 'Propuesta de Colaboración' : 'Consulta General')
    payload.descripcion = form.descripcion
    payload._subject = payload.asunto
  }

  await submit(payload)

  if (status.value === 'success') {
    Object.assign(form, { nombre: '', email: '', medidas: '', asunto: '', descripcion: '' })
    polite('¡Mensaje enviado con éxito! Te responderé lo antes posible.')
  } else if (status.value === 'error') {
    assertive('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
  }
}
</script>

<template>

  <div class="min-h-screen pt-24 pb-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-16">
    
    <!-- Header Hero Section -->
    <div class="text-center space-y-4 max-w-3xl mx-auto pt-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 text-xs font-semibold tracking-wide">
        <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        <span>Taller Artesanal & Atención Personalizada</span>
      </div>

      <h1 class="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
        Creemos algo único juntos
      </h1>

      <p class="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
        Cuéntanos tu proyecto a medida, solicita información o pásate por nuestro taller en Madrid. Respondemos habitualmente en menos de 24 horas.
      </p>
    </div>

    <!-- Quick Direct Contact Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- WhatsApp Card -->
      <a
        href="https://wa.me/34600000000?text=Hola%20Jes%C3%BAs,%20me%20gustar%C3%ADa%20consultarte%20un%20proyecto"
        target="_blank"
        rel="noopener noreferrer"
        class="group p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4"
      >
        <div class="flex items-center justify-between">
          <div class="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
            <Icon name="mdi:whatsapp" class="text-2xl" />
          </div>
          <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            En línea
          </span>
        </div>
        <div>
          <h3 class="font-bold text-stone-900 dark:text-stone-100 text-sm">WhatsApp Directo</h3>
          <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Respuesta rápida y directa con Jesús</p>
        </div>
        <div class="flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
          <span>Iniciar chat</span>
          <Icon name="mdi:arrow-right" class="ml-1" />
        </div>
      </a>

      <!-- Email Copy Card -->
      <div
        @click="copyEmail"
        class="group p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4 cursor-pointer relative"
      >
        <div class="flex items-center justify-between">
          <div class="p-3 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 group-hover:scale-110 transition-transform">
            <Icon name="mdi:email-outline" class="text-2xl" />
          </div>
          <span v-if="copiedEmail" class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full animate-fade-in">
            ✓ Copiado
          </span>
          <span v-else class="text-[11px] font-medium text-stone-400">
            Copiar
          </span>
        </div>
        <div>
          <h3 class="font-bold text-stone-900 dark:text-stone-100 text-sm">Email Directo</h3>
          <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5 font-mono select-all">hola@kelek.home</p>
        </div>
        <div class="flex items-center text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
          <span>{{ copiedEmail ? 'Email copiado en portapapeles' : 'Haz clic para copiar' }}</span>
        </div>
      </div>

      <!-- Instagram DM -->
      <a
        href="https://www.instagram.com/kelek.home"
        target="_blank"
        rel="noopener noreferrer"
        class="group p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-pink-500/50 dark:hover:border-pink-500/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4"
      >
        <div class="flex items-center justify-between">
          <div class="p-3 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
            <Icon name="simple-icons:instagram" class="text-2xl" />
          </div>
          <span class="text-[11px] font-medium text-stone-400">@kelek.home</span>
        </div>
        <div>
          <h3 class="font-bold text-stone-900 dark:text-stone-100 text-sm">Instagram DM</h3>
          <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Mira los últimos procesos en taller</p>
        </div>
        <div class="flex items-center text-xs font-semibold text-pink-600 dark:text-pink-400 group-hover:translate-x-1 transition-transform">
          <span>Ver perfil</span>
          <Icon name="mdi:arrow-right" class="ml-1" />
        </div>
      </a>

      <!-- Location / Workshop -->
      <div class="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between gap-4">
        <div class="flex items-center justify-between">
          <div class="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
            <Icon name="mdi:map-marker-outline" class="text-2xl" />
          </div>
          <span class="text-[11px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full">
            Cita previa
          </span>
        </div>
        <div>
          <h3 class="font-bold text-stone-900 dark:text-stone-100 text-sm">Taller en Madrid</h3>
          <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">España (Visitas con cita)</p>
        </div>
        <div class="flex items-center text-xs text-stone-500 dark:text-stone-400">
          <Icon name="mdi:clock-outline" class="mr-1" /> Lun – Vie (09:00 – 19:00)
        </div>
      </div>
    </div>

    <!-- Main Interactive Form Section -->
    <div class="bg-white dark:bg-stone-900 rounded-3xl border border-stone-200/80 dark:border-stone-800 p-6 sm:p-10 shadow-xl relative overflow-hidden">
      <!-- Ambient Background Glow -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Form Type Selector Tabs -->
      <div class="space-y-3 mb-8">
        <label class="text-xs font-bold uppercase tracking-wider text-stone-400">¿En qué podemos ayudarte?</label>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-stone-100 dark:bg-stone-950 p-1.5 rounded-2xl border border-stone-200/60 dark:border-stone-800/80">
          <button
            type="button"
            @click="activeType = 'estimate'"
            :class="[
              activeType === 'estimate'
                ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-sm border border-stone-200/80 dark:border-stone-700 font-bold'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 font-medium'
            ]"
            class="py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Icon name="mdi:hammer" class="text-base text-amber-600 dark:text-amber-400" />
            <span>Presupuesto</span>
          </button>

          <button
            type="button"
            @click="activeType = 'general'"
            :class="[
              activeType === 'general'
                ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-sm border border-stone-200/80 dark:border-stone-700 font-bold'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 font-medium'
            ]"
            class="py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Icon name="mdi:message-text-outline" class="text-base text-stone-500" />
            <span>Consulta</span>
          </button>

          <button
            type="button"
            @click="activeType = 'collaboration'"
            :class="[
              activeType === 'collaboration'
                ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-sm border border-stone-200/80 dark:border-stone-700 font-bold'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 font-medium'
            ]"
            class="py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Icon name="mdi:handshake-outline" class="text-base text-stone-500" />
            <span>Colaboración</span>
          </button>

          <button
            type="button"
            @click="activeType = 'wood'"
            :class="[
              activeType === 'wood'
                ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-sm border border-stone-200/80 dark:border-stone-700 font-bold'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 font-medium'
            ]"
            class="py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Icon name="mdi:tree-outline" class="text-base text-amber-700" />
            <span>Guía Madera</span>
          </button>
        </div>
      </div>

      <!-- Success Screen -->
      <div
        v-if="status === 'success'"
        class="py-12 px-6 rounded-2xl bg-stone-50 dark:bg-stone-950/60 border border-emerald-500/30 text-center space-y-4 my-4"
      >
        <div class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center text-3xl">
          <Icon name="mdi:check-circle-outline" />
        </div>
        <h3 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
          ¡Mensaje recibido con éxito!
        </h3>
        <p class="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
          Gracias por contactar con Kelek Home. Jesús revisará tu consulta y te responderá en menos de 24 horas.
        </p>
        <button
          type="button"
          @click="reset"
          class="mt-4 px-6 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-semibold hover:opacity-90 transition cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>

      <!-- Main Form -->
      <form v-else @submit.prevent="handleSubmit" class="space-y-6">

        <!-- ESTIMATE SPECIFIC SELECTORS -->
        <div v-if="activeType === 'estimate'" class="space-y-6 animate-fade-in">
          <!-- Type of Furniture Selector -->
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              1. Tipo de Mueble
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <button
                v-for="item in muebleOptions"
                :key="item.id"
                type="button"
                @click="selectedMueble = item.id"
                :class="[
                  selectedMueble === item.id
                    ? 'border-amber-600 bg-amber-500/10 text-stone-900 dark:text-stone-100 font-semibold ring-1 ring-amber-600'
                    : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-stone-600 dark:text-stone-400 hover:border-stone-300 dark:hover:border-stone-700'
                ]"
                class="p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Icon :name="item.icon" class="text-lg text-amber-700 dark:text-amber-400 shrink-0" />
                <span class="truncate">{{ item.label }}</span>
              </button>
            </div>
          </div>

          <!-- Wood Selection -->
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              2. Madera Deseada
            </label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="wood in maderaOptions"
                :key="wood.id"
                type="button"
                @click="selectedMadera = wood.id"
                :class="[
                  selectedMadera === wood.id
                    ? 'border-stone-900 dark:border-amber-400 bg-stone-900 text-white dark:bg-amber-400 dark:text-stone-950 font-bold'
                    : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-stone-700 dark:text-stone-300 hover:border-stone-400'
                ]"
                class="px-3.5 py-2 rounded-xl border text-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <span :class="['w-2.5 h-2.5 rounded-full shrink-0', wood.color]"></span>
                <span>{{ wood.label }}</span>
              </button>
            </div>
          </div>

          <!-- Approximate Dimensions Input -->
          <div class="space-y-1.5">
            <label class="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              3. Medidas Aproximadas (Opcional)
            </label>
            <input
              v-model="form.medidas"
              type="text"
              placeholder="Ej. 200 x 100 x 75 cm (Ancho x Largo x Alto)"
              class="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-600 dark:focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        <!-- COMMON PERSONAL DATA INPUTS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Nombre / Contacto <span class="text-amber-600">*</span>
            </label>
            <input
              v-model="form.nombre"
              type="text"
              required
              placeholder="Tu nombre completo"
              class="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-600 dark:focus:border-amber-500 transition-colors"
            />
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Correo Electrónico <span class="text-amber-600">*</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="tu@email.com"
              class="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-600 dark:focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        <!-- SUBJECT FIELD FOR NON-ESTIMATE -->
        <div v-if="activeType !== 'estimate'" class="space-y-1.5 animate-fade-in">
          <label class="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Asunto <span class="text-amber-600">*</span>
          </label>
          <input
            v-model="form.asunto"
            type="text"
            required
            placeholder="¿De qué trata tu consulta?"
            class="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-600 dark:focus:border-amber-500 transition-colors"
          />
        </div>

        <!-- DETAILS / DESCRIPTION TEXTAREA -->
        <div class="space-y-1.5">
          <label class="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            {{ activeType === 'estimate' ? '4. Detalles del Proyecto & Idea' : 'Detalles de tu mensaje' }} <span class="text-amber-600">*</span>
          </label>
          <textarea
            v-model="form.descripcion"
            required
            rows="4"
            :placeholder="activeType === 'estimate' ? 'Cuéntame el espacio donde irá la pieza, el tipo de acabado preferido o cualquier referencia...' : 'Escribe aquí tu consulta o mensaje...'"
            class="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-600 dark:focus:border-amber-500 transition-colors resize-none"
          ></textarea>
        </div>

        <div v-if="status === 'error'" class="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-medium text-center">
          Ocurrió un error al enviar. Por favor, inténtalo de nuevo o escríbenos directamente a hola@kelek.home.
        </div>

        <!-- SUBMIT BUTTON -->
        <button
          type="submit"
          :disabled="status === 'sending'"
          class="w-full py-4 px-6 rounded-2xl font-semibold text-sm transition-all duration-200 bg-gradient-to-r from-stone-900 to-stone-800 dark:from-stone-100 dark:to-stone-200 text-white dark:text-stone-950 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
        >
          <span v-if="status === 'sending'" class="flex items-center gap-2">
            <Icon name="mdi:loading" class="animate-spin text-lg" />
            <span>Enviando mensaje...</span>
          </span>
          <span v-else class="flex items-center gap-2">
            <span>{{ activeType === 'estimate' ? 'Solicitar Presupuesto Gratuito' : 'Enviar Mensaje' }}</span>
            <Icon name="mdi:arrow-right" class="text-lg" />
          </span>
        </button>

        <p class="text-[11px] text-stone-400 text-center">
          🔒 Respetamos tu privacidad. Tus datos solo se usan para responder tu consulta.
        </p>

      </form>
    </div>

    <!-- Process & Trust Highlights -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      <div class="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 space-y-3">
        <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center text-xl font-bold">
          1
        </div>
        <h3 class="font-bold text-stone-900 dark:text-stone-100 text-base">Asesoramiento Personalizado</h3>
        <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
          Definimos juntos la variedad de madera, el tipo de canto (orgánico o recto) y el acabado ideal para el uso de tu mueble.
        </p>
      </div>

      <div class="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 space-y-3">
        <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center text-xl font-bold">
          2
        </div>
        <h3 class="font-bold text-stone-900 dark:text-stone-100 text-base">Madera Certificada FSC</h3>
        <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
          Todas nuestras maderas provienen de bosques de tala sostenible con certificación de origen y secado óptimo.
        </p>
      </div>

      <div class="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 space-y-3">
        <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center text-xl font-bold">
          3
        </div>
        <h3 class="font-bold text-stone-900 dark:text-stone-100 text-base">Fabricación & Entrega</h3>
        <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
          Cada pieza se trabaja a mano en nuestro taller de Madrid y se envía perfectamente embalada y protegida a tu puerta.
        </p>
      </div>
    </div>

    <!-- FAQ Accordion Section -->
    <div class="space-y-6 pt-4 max-w-3xl mx-auto">
      <div class="text-center space-y-2">
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
          Preguntas Frecuentes
        </h2>
        <p class="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
          Respuestas rápidas a las dudas más comunes sobre encargos y taller
        </p>
      </div>

      <div class="space-y-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 overflow-hidden transition-all"
        >
          <button
            type="button"
            @click="openFaq = openFaq === index ? null : index"
            class="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 dark:hover:bg-stone-800/50 transition-colors"
          >
            <span class="font-semibold text-stone-900 dark:text-stone-100 text-sm sm:text-base">
              {{ faq.q }}
            </span>
            <Icon
              name="mdi:chevron-down"
              :class="{ 'rotate-180': openFaq === index }"
              class="text-xl text-stone-400 shrink-0 transition-transform duration-200"
            />
          </button>
          <div
            v-if="openFaq === index"
            class="px-5 pb-5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed animate-fade-in border-t border-stone-100 dark:border-stone-800/60 pt-3"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
