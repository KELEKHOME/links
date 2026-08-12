<!-- app/components/sections/SalesLeadWidget.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-16">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      class="p-6 rounded-3xl border bg-stone-900 text-stone-100 dark:bg-stone-950 border-stone-800 shadow-xl space-y-5"
    >
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
            <Icon name="mdi:view-dashboard" />
          </div>
          <div>
            <h3 class="font-bold text-base text-white">Panel de Captación y Ventas</h3>
            <p class="text-xs text-stone-400">Gestión interna de leads, presupuestos y sincronización Notion</p>
          </div>
        </div>

        <NuxtLink
          to="/hola/admin"
          class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition flex items-center justify-center gap-2 shrink-0"
        >
          <span>Abrir Panel de Control</span>
          <Icon name="mdi:arrow-right" class="text-base" />
        </NuxtLink>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="grid grid-cols-3 gap-3 text-center">
        <div class="p-3 rounded-2xl bg-stone-800/60 border border-stone-700/50">
          <div class="text-2xl font-bold text-amber-400">{{ totalLeads }}</div>
          <div class="text-[11px] text-stone-400">Leads Captados</div>
        </div>

        <div class="p-3 rounded-2xl bg-stone-800/60 border border-stone-700/50">
          <div class="text-2xl font-bold text-emerald-400">{{ estimatesCount }}</div>
          <div class="text-[11px] text-stone-400">Presupuestos</div>
        </div>

        <div class="p-3 rounded-2xl bg-stone-800/60 border border-stone-700/50">
          <div class="text-2xl font-bold text-sky-400">{{ newsletterCount }}</div>
          <div class="text-[11px] text-stone-400">Newsletter</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { leads } = useLeads()

const totalLeads = computed(() => leads.value?.length || 0)
const estimatesCount = computed(() => leads.value?.filter(l => l.type === 'estimate').length || 0)
const newsletterCount = computed(() => leads.value?.filter(l => l.type === 'newsletter' || l.type === 'guide').length || 0)
</script>
