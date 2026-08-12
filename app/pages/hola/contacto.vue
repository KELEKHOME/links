<!-- app/pages/hola/contacto.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'slide-up', mode: 'out-in' } })
useSeoMeta({ title: 'Contacto & Presupuestos — Kelek Home' })

const { status, submit, reset } = useFormspree()
const { polite, assertive } = useAnnouncer()

type ContactType = 'estimate' | 'general'
const activeType = ref<ContactType>('estimate')

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

const form = reactive({
  nombre: '',
  email: '',
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
  } else {
    payload._subject = `Consulta General de ${form.nombre}`
  }

  await submit(payload)

  if (status.value === 'success') {
    Object.assign(form, { nombre: '', email: '', medidas: '', descripcion: '' })
    polite('¡Mensaje enviado con éxito! Te responderé lo antes posible.')
  } else if (status.value === 'error') {
    assertive('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
  }
}
</script>

<template>
  <div class="min-h-screen pt-20 pb-16 px-4 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
    <div class="w-full max-w-xl mx-auto space-y-6">
      
      <!-- Header Card -->
      <div class="p-6 sm:p-7 rounded-[28px] border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900/90 shadow-2xs space-y-3 text-center sm:text-left">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-semibold">
          <Icon name="mdi:hammer-wrench" class="text-amber-500" />
          <span>Atención Personalizada</span>
        </div>

        <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-white leading-tight">
          <span>Diseñemos tu pieza </span>
          <span class="font-serif italic text-amber-600 dark:text-amber-400 font-normal">a medida</span>
        </h1>

        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-lg">
          Trabajo cada mueble una a una en madera maciza. Escríbeme directamente por WhatsApp o déjame los detalles de tu idea a continuación.
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
          <div class="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Icon name="simple-icons:instagram" class="text-lg" />
          </div>
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
              <span>{{ activeType === 'estimate' ? 'Solicitar Presupuesto' : 'Enviar Mensaje' }}</span>
              <Icon name="mdi:arrow-right" class="text-sm" />
            </span>
          </button>

        </form>

      </div>

    </div>
  </div>
</template>

