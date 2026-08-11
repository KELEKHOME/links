<script setup lang="ts">
const newLink = ref({
  title: '',
  url: '',
  icon: 'mdi:link-variant',
  category: 'content',
  color: '#8B5CF6'
})

const { links, addLink, removeLink, toggleLink } = useLinks()

const handleAdd = () => {
  if (!newLink.value.title || !newLink.value.url) return
  addLink({ ...newLink.value })
  newLink.value = { title: '', url: '', icon: 'mdi:link-variant', category: 'content', color: '#8B5CF6' }
}

useSeoMeta({
  title: 'Admin — Kelek Home',
  robots: 'noindex, nofollow'
})
</script>

<template>
  <div class="max-w-4xl mx-auto p-6 pt-24 space-y-8">
    <div class="flex items-center justify-between border-b pb-4 dark:border-neutral-800">
      <div>
        <h1 class="text-2xl font-bold">Panel de Administración</h1>
        <p class="text-sm text-neutral-500">Gestiona tus enlaces y accesos directos</p>
      </div>
      <NuxtLink to="/hola" class="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white flex items-center gap-1">
        <Icon name="mdi:arrow-left" /> Volver a /hola
      </NuxtLink>
    </div>

    <div class="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border dark:border-neutral-800 space-y-4">
      <h2 class="text-lg font-semibold">Añadir Nuevo Enlace</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input v-model="newLink.title" placeholder="Título del enlace" class="p-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700" />
        <input v-model="newLink.url" placeholder="URL destino (ej: https://...)" class="p-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700" />
        <input v-model="newLink.icon" placeholder="Icono (ej: mdi:link-variant)" class="p-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700" />
        <select v-model="newLink.category" class="p-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700">
          <option value="content">Contenido</option>
          <option value="social">Social</option>
        </select>
      </div>
      <button @click="handleAdd" class="px-4 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-90">
        Añadir Enlace
      </button>
    </div>

    <div class="space-y-4">
      <h2 class="text-lg font-semibold">Enlaces Existentes</h2>
      <div class="space-y-2">
        <div v-for="link in links" :key="link.id || link.url" class="flex items-center justify-between p-4 border rounded-xl dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div class="flex items-center gap-3">
            <Icon :name="link.icon || 'mdi:link-variant'" class="w-5 h-5 text-neutral-500" />
            <div>
              <p class="font-medium text-sm">{{ link.title }}</p>
              <p class="text-xs text-neutral-500">{{ link.url }} • <span class="capitalize">{{ link.category }}</span></p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button @click="link.id && toggleLink(link.id)" class="px-3 py-1 text-xs rounded-md border dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {{ link.enabled === false ? 'Desactivado' : 'Activo' }}
            </button>
            <button @click="link.id && removeLink(link.id)" class="px-3 py-1 text-xs rounded-md bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-950 dark:text-red-400">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
