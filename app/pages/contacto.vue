<!-- pages/contacto.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'slide-up', mode: 'out-in' } })
useSeoMeta({ title: 'Contacto — Kelek Home' })

const form = reactive({ nombre: '', email: '', asunto: '', descripcion: '' })
const { status, submit, reset } = useFormspree()
const { polite, assertive } = useAnnouncer()

async function handleSubmit() {
  await submit({ ...form })
  if (status.value === 'success') {
    Object.assign(form, { nombre: '', email: '', asunto: '', descripcion: '' })
    polite('¡Mensaje enviado con éxito! Te responderé lo antes posible.')
  } else if (status.value === 'error') {
    assertive('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
  }
}
</script>

<template>
  <div class="flex items-center justify-center px-4 pt-24 pb-12">
    <div class="w-full max-w-2xl">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold tracking-tight">Contacto</h1>
        <p class="mt-3 opacity-60 text-sm leading-relaxed">
          ¿Tienes alguna pregunta o propuesta? Escríbeme y te responderé lo antes posible.
        </p>
      </div>

      <!-- Éxito -->
      <div
        v-if="status === 'success'"
        class="text-center py-12 rounded-2xl border bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700/40"
      >
        <Icon name="mdi:check-circle-outline" class="text-5xl text-green-500 mb-3" />
        <p class="font-semibold text-green-700 dark:text-green-400">¡Mensaje enviado!</p>
        <p class="text-sm opacity-60 mt-1">Te responderé lo antes posible.</p>
        <button class="mt-5 text-sm underline opacity-60 hover:opacity-100 transition" @click="reset">
          Enviar otro mensaje
        </button>
      </div>

      <!-- Formulario -->
      <form v-else class="space-y-4" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-medium opacity-60 uppercase tracking-wide">Nombre</label>
            <input
              v-model="form.nombre"
              type="text"
              required
              placeholder="Tu nombre"
              class="px-4 py-3 rounded-xl border text-sm outline-none transition
                     bg-white/60 border-zinc-200 placeholder:opacity-40 focus:border-zinc-400
                     dark:bg-white/5 dark:border-white/10 dark:focus:border-white/30"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-xs font-medium opacity-60 uppercase tracking-wide">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="tu@email.com"
              class="px-4 py-3 rounded-xl border text-sm outline-none transition
                     bg-white/60 border-zinc-200 placeholder:opacity-40 focus:border-zinc-400
                     dark:bg-white/5 dark:border-white/10 dark:focus:border-white/30"
            />
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-medium opacity-60 uppercase tracking-wide">Asunto</label>
          <input
            v-model="form.asunto"
            type="text"
            required
            placeholder="¿De qué trata tu mensaje?"
            class="px-4 py-3 rounded-xl border text-sm outline-none transition
                   bg-white/60 border-zinc-200 placeholder:opacity-40 focus:border-zinc-400
                   dark:bg-white/5 dark:border-white/10 dark:focus:border-white/30"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-medium opacity-60 uppercase tracking-wide">Descripción</label>
          <textarea
            v-model="form.descripcion"
            required
            rows="5"
            placeholder="Cuéntame más..."
            class="px-4 py-3 rounded-xl border text-sm outline-none transition resize-none
                   bg-white/60 border-zinc-200 placeholder:opacity-40 focus:border-zinc-400
                   dark:bg-white/5 dark:border-white/10 dark:focus:border-white/30"
          />
        </div>

        <div v-if="status === 'error'" class="text-sm text-red-500 text-center">
          Algo salió mal. Por favor, inténtalo de nuevo.
        </div>

        <button
          type="submit"
          :disabled="status === 'sending'"
          class="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200
                 bg-zinc-900 text-white hover:bg-zinc-700 disabled:opacity-50
                 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <span v-if="status === 'sending'" class="flex items-center justify-center gap-2">
            <Icon name="mdi:loading" class="animate-spin" /> Enviando...
          </span>
          <span v-else>Enviar mensaje →</span>
        </button>
      </form>
    </div>
  </div>
</template>
