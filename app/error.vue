<template>
  <div
    class="min-h-screen flex flex-col transition-colors duration-300
           bg-gradient-to-br from-zinc-100 via-white to-zinc-200 text-zinc-900
           dark:from-zinc-900 dark:via-black dark:to-zinc-800 dark:text-white"
  >
    <AppHeader />

    <main class="flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-12 text-center">

      <!-- Código grande decorativo -->
      <div class="blur-in blur-in-d1 relative select-none mb-2">
        <span class="text-[120px] sm:text-[160px] font-bold leading-none tracking-tighter opacity-[0.06]">
          {{ is404 ? '404' : error?.statusCode }}
        </span>
        <!-- Icono centrado sobre el número -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center
                      bg-amber-400/15 border border-amber-400/20">
            <Icon
              :name="is404 ? 'mdi:hammer-wrench' : 'mdi:alert-circle-outline'"
              class="text-amber-400 text-3xl"
            />
          </div>
        </div>
      </div>

      <!-- Título y descripción -->
      <h1 class="blur-in blur-in-d2 text-2xl sm:text-3xl font-bold tracking-tight mt-4 mb-3">
        {{ is404 ? 'Esta pieza no existe' : 'Algo salió mal' }}
      </h1>
      <p class="blur-in blur-in-d3 text-sm opacity-50 max-w-xs leading-relaxed mb-10">
        {{ is404
          ? 'La página que buscas no existe o fue movida a otro lugar. Quizás puedo ayudarte desde aquí:'
          : 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.' }}
      </p>

      <!-- Accesos rápidos (solo en 404) -->
      <div v-if="is404" class="blur-in blur-in-d4 grid grid-cols-3 gap-3 mb-10 w-full max-w-xs">
        <NuxtLink
          v-for="link in quickLinks"
          :key="link.href"
          :to="link.href"
          class="flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-200
                 bg-black/5 border-black/10 hover:bg-black/8 hover:-translate-y-0.5
                 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/8"
          @click="clearError({})"
        >
          <Icon :name="link.icon" class="text-xl opacity-70" />
          <span class="text-[11px] font-medium opacity-60">{{ link.label }}</span>
        </NuxtLink>
      </div>

      <!-- CTA principal -->
      <button
        class="blur-in blur-in-d5 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200
               bg-zinc-900 text-white hover:bg-zinc-700 hover:-translate-y-0.5 active:translate-y-0
               dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        @click="handleError"
      >
        Volver al inicio
      </button>
    </main>

    <AppFooter />
    <CustomCursor />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message?: string } | null }>()

const is404 = computed(() => props.error?.statusCode === 404)

const quickLinks = [
  { href: '/hola/proyectos', icon: 'mdi:hammer-wrench', label: 'Proyectos' },
  { href: '/hola/marcas',    icon: 'mdi:tag-outline',   label: 'Marcas'    },
  { href: '/hola/contacto',  icon: 'mdi:email-outline', label: 'Contacto'  },
]

function handleError() {
  clearError({ redirect: '/hola' })
}
</script>
