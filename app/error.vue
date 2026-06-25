<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <p class="text-7xl font-bold opacity-10 mb-4">{{ error?.statusCode }}</p>
      <h1 class="text-2xl font-bold tracking-tight mb-2">
        {{ error?.statusCode === 404 ? 'Página no encontrada' : 'Algo salió mal' }}
      </h1>
      <p class="text-sm opacity-50 mb-8 max-w-xs leading-relaxed">
        {{ error?.statusCode === 404
          ? 'La página que buscas no existe o fue movida.'
          : 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.' }}
      </p>
      <button
        class="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200
               bg-zinc-900 text-white hover:bg-zinc-700
               dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        @click="handleError"
      >
        Volver al inicio
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message?: string } | null }>()

function handleError() {
  clearError({ redirect: '/' })
}
</script>
