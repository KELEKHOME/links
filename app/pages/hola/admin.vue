<!-- pages/hola/admin.vue -->
<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

const { leads, updateLeadStatus, deleteLead, exportToCSV } = useLeads()

const { data: notionStatus } = await useFetch('/api/notion/status')

const activeTab = ref<'all' | 'estimate' | 'newsletter' | 'guide'>('all')
const search = ref('')

const filteredLeads = computed(() => {
  return leads.value.filter(l => {
    const matchesTab = activeTab.value === 'all' || l.type === activeTab.value
    const query = search.value.toLowerCase()
    const contactStr = (l.email || l.contact || '').toLowerCase()
    const furnitureStr = (l.mueble || '').toLowerCase()
    const woodStr = (l.madera || '').toLowerCase()
    const matchesSearch = !query || contactStr.includes(query) || furnitureStr.includes(query) || woodStr.includes(query)
    return matchesTab && matchesSearch
  })
})

const stats = computed(() => {
  return {
    total: leads.value.length,
    estimates: leads.value.filter(l => l.type === 'estimate').length,
    newsletters: leads.value.filter(l => l.type === 'newsletter').length,
    guides: leads.value.filter(l => l.type === 'guide').length,
    pending: leads.value.filter(l => l.status === 'pendiente').length
  }
})

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'estimate': return { text: 'Presupuesto', color: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20' }
    case 'guide': return { text: 'Guía Madera', color: 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20' }
    case 'newsletter': return { text: 'Newsletter', color: 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-500/20' }
    default: return { text: 'General', color: 'bg-stone-500/10 text-stone-700 dark:text-stone-300 border-stone-500/20' }
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'pendiente': return 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30'
    case 'contactado': return 'bg-blue-500/15 text-blue-800 dark:text-blue-300 border-blue-500/30'
    case 'convertido': return 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
    case 'archivado': return 'bg-stone-200 dark:bg-stone-800 text-stone-500 border-stone-300 dark:border-stone-700'
    default: return ''
  }
}

const formatDate = (isoStr: string) => {
  try {
    const d = new Date(isoStr)
    return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch {
    return isoStr
  }
}

useSeoMeta({
  title: 'Panel de Administración — Kelek Home',
  description: 'Gestión interna de suscriptores y solicitudes de presupuesto.'
})
</script>

<template>
  <div class="w-full space-y-6">

      <!-- Admin Top Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
        <div>
          <div class="flex items-center gap-2">
            <span class="p-1.5 rounded-xl bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900">
              <Icon name="mdi:shield-account-outline" class="text-lg" />
            </span>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Panel Privado
            </span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-serif font-normal text-stone-900 dark:text-stone-100 mt-1">
            Gestión de Leads & Contactos
          </h1>
          <p class="text-xs text-stone-500 dark:text-stone-400 font-light mt-0.5">
            Administra suscripciones, solicitudes de guía y presupuestos recibidos en Kelek Home.
          </p>
        </div>

        <div class="flex items-center gap-2 self-start sm:self-center">
          <button
            type="button"
            @click="exportToCSV"
            class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer flex items-center gap-2"
          >
            <Icon name="mdi:file-excel-outline" class="text-base" />
            <span>Exportar CSV</span>
          </button>

          <NuxtLink
            to="/hola"
            class="px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-medium transition-colors"
          >
            Volver a la Web
          </NuxtLink>
        </div>
      </div>

      <!-- Quick Metrics Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400">Total Leads</span>
          <p class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-0.5">
            {{ stats.total }}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-amber-500/30 dark:border-amber-500/20 bg-amber-500/5">
          <span class="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">Presupuestos</span>
          <p class="text-2xl font-serif font-bold text-amber-800 dark:text-amber-300 mt-0.5">
            {{ stats.estimates }}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-emerald-500/30 dark:border-emerald-500/20 bg-emerald-500/5">
          <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">Guías Solicitadas</span>
          <p class="text-2xl font-serif font-bold text-emerald-800 dark:text-emerald-300 mt-0.5">
            {{ stats.guides }}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400">Pendientes</span>
          <p class="text-2xl font-serif font-bold text-amber-600 dark:text-amber-400 mt-0.5">
            {{ stats.pending }}
          </p>
        </div>
      </div>

      <!-- Notion Integration Status Banner -->
      <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-stone-900 to-stone-800 text-stone-100 dark:from-stone-950 dark:to-stone-900 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div class="flex items-start gap-3">
          <div class="p-2 rounded-xl bg-stone-800/80 text-amber-400 text-xl shrink-0 mt-0.5">
            <Icon name="simple-icons:notion" />
          </div>
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <h3 class="text-sm font-bold">Sincronización con Notion</h3>
              <span v-if="notionStatus?.configured" class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ● Conectado
              </span>
              <span v-else class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                ○ Listo para conectar
              </span>
            </div>
            <p class="text-xs text-stone-300 font-light max-w-2xl leading-relaxed">
              {{ notionStatus?.configured 
                ? 'Los nuevos leads y solicitudes de presupuesto se sincronizan automáticamente en tu base de datos de Notion.' 
                : 'Configura las variables NOTION_API_KEY y NOTION_DATABASE_ID en tu entorno para guardar automáticamente cada solicitud en Notion.' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Filters & Search Bar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <!-- Tabs -->
        <div class="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
          <button
            v-for="t in [
              { id: 'all', label: 'Todos' },
              { id: 'estimate', label: 'Presupuestos' },
              { id: 'guide', label: 'Guía Madera' },
              { id: 'newsletter', label: 'Newsletter' }
            ]"
            :key="t.id"
            @click="activeTab = t.id as any"
            class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
            :class="activeTab === t.id
              ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'"
          >
            {{ t.label }}
          </button>
        </div>

        <!-- Search Input -->
        <div class="relative w-full sm:w-64">
          <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-base" />
          <input
            v-model="search"
            type="text"
            placeholder="Buscar por email, mueble..."
            class="w-full pl-9 pr-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/60 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
          />
        </div>
      </div>

      <!-- Leads List / Table -->
      <div class="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm overflow-hidden">
        <div v-if="filteredLeads.length > 0" class="divide-y divide-stone-100 dark:divide-stone-800/80">
          <div
            v-for="item in filteredLeads"
            :key="item.id"
            class="p-4 sm:p-5 hover:bg-stone-50/80 dark:hover:bg-stone-800/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <!-- Left Info -->
            <div class="space-y-1.5 min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <!-- Type Badge -->
                <span
                  class="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border"
                  :class="getTypeLabel(item.type).color"
                >
                  {{ getTypeLabel(item.type).text }}
                </span>

                <!-- Date -->
                <span class="text-[11px] text-stone-400 font-light">
                  {{ formatDate(item.createdAt) }}
                </span>
              </div>

              <!-- Main Contact -->
              <h3 class="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>{{ item.email || item.contact || 'Sin contacto' }}</span>
              </h3>

              <!-- Extra details for Estimate -->
              <div v-if="item.type === 'estimate'" class="text-xs text-stone-600 dark:text-stone-300 space-y-0.5 pt-1 bg-amber-500/5 p-2.5 rounded-xl border border-amber-500/10">
                <p><strong>Mueble:</strong> {{ item.mueble || 'No especificado' }} • <strong>Madera:</strong> {{ item.madera || 'No especificada' }}</p>
                <p v-if="item.medidas"><strong>Medidas:</strong> {{ item.medidas }}</p>
                <p v-if="item.notas" class="italic text-stone-500">"{{ item.notas }}"</p>
              </div>
            </div>

            <!-- Right Status & Controls -->
            <div class="flex items-center gap-3 shrink-0 self-start sm:self-center">
              <!-- Status Select -->
              <select
                :value="item.status"
                @change="e => updateLeadStatus(item.id, (e.target as HTMLSelectElement).value as any)"
                class="px-2.5 py-1.5 rounded-xl text-xs font-semibold border focus:outline-none cursor-pointer"
                :class="getStatusBadge(item.status)"
              >
                <option value="pendiente">Pendiente</option>
                <option value="contactado">Contactado</option>
                <option value="convertido">Convertido</option>
                <option value="archivado">Archivado</option>
              </select>

              <!-- Delete Button -->
              <button
                type="button"
                @click="deleteLead(item.id)"
                title="Eliminar contacto"
                class="p-1.5 rounded-lg text-stone-400 hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
              >
                <Icon name="mdi:trash-can-outline" class="text-base" />
              </button>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="p-12 text-center space-y-3">
          <div class="w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-400 flex items-center justify-center mx-auto text-2xl">
            <Icon name="mdi:inbox-remove-outline" />
          </div>
          <p class="text-sm font-medium text-stone-600 dark:text-stone-300">
            No se han encontrado contactos en esta categoría.
          </p>
        </div>
      </div>

  </div>
</template>
