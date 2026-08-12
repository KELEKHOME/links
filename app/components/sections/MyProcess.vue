<!-- app/components/sections/MyProcess.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-16">
    <!-- Header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center mb-8 space-y-1.5"
    >
      <div class="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
        RIGOR & OFICIO
      </div>
      <h2 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight">
        Mi proceso en el taller
      </h2>
      <p class="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto">
        Desde la idea inicial hasta que la pieza llega a tu hogar, paso a paso.
      </p>
    </div>

    <!-- Process Stepper -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="space-y-4"
    >
      <!-- Stepper Buttons Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <button
          v-for="(step, index) in steps"
          :key="step.num"
          type="button"
          @click="activeStep = index"
          :class="[
            'p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3',
            activeStep === index
              ? 'bg-stone-900 text-white border-stone-900 dark:bg-stone-100 dark:text-stone-950 dark:border-stone-100 shadow-md scale-[1.02]'
              : 'bg-white/70 dark:bg-stone-900/70 text-stone-700 dark:text-stone-300 border-stone-200/80 dark:border-stone-800 hover:border-amber-500/40'
          ]"
        >
          <!-- Top Row: Number & Time -->
          <div class="flex items-center justify-between text-xs">
            <span
              :class="[
                'font-serif italic font-bold text-sm',
                activeStep === index
                  ? 'text-amber-400 dark:text-amber-600'
                  : 'text-amber-800 dark:text-amber-400'
              ]"
            >
              {{ step.num }}
            </span>
            <span
              :class="[
                'text-[10px] font-mono',
                activeStep === index
                  ? 'opacity-80'
                  : 'opacity-50'
              ]"
            >
              {{ step.time }}
            </span>
          </div>

          <!-- Title -->
          <span class="text-xs font-bold leading-tight">
            {{ step.title }}
          </span>
        </button>
      </div>

      <!-- Active Progress Line -->
      <div class="w-full h-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 overflow-hidden">
        <div
          class="h-full bg-amber-600 dark:bg-amber-500 transition-all duration-300 rounded-full"
          :style="{ width: `${((activeStep + 1) / steps.length) * 100}%` }"
        />
      </div>

      <!-- Active Step Detail Card -->
      <div class="p-6 rounded-3xl border bg-white/80 dark:bg-stone-900/80 border-stone-200/80 dark:border-stone-800 shadow-sm space-y-3">
        <div class="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-xs">
              {{ currentStep.num }}
            </div>
            <h3 class="font-serif font-bold text-stone-900 dark:text-stone-100 text-base">
              {{ currentStep.title }}
            </h3>
          </div>
          <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
            Tiempo est.: {{ currentStep.time }}
          </span>
        </div>

        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
          {{ currentStep.detail }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-stone-500 dark:text-stone-400">
          <div class="flex items-center gap-1.5">
            <Icon name="mdi:check" class="text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{{ currentStep.bullet1 }}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <Icon name="mdi:check" class="text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{{ currentStep.bullet2 }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeStep = ref(1) // Step 02 active by default like in screenshot

const steps = [
  {
    num: '01',
    time: '1–2d',
    title: 'Boceto & Diseño',
    detail: 'Definimos las proporciones, función y estilo según tus necesidades. Creamos un boceto 3D/render previo para validar medidas.',
    bullet1: 'Croquis detallado con cotas exactas',
    bullet2: 'Asesoramiento de integración en el espacio'
  },
  {
    num: '02',
    time: '2–3d',
    title: 'Selección de la Madera',
    detail: 'Seleccionamos cada tablón en el taller atendiendo al dibujo de la veta, nudos orgánicos y secado óptimo de la madera noble.',
    bullet1: 'Madera certificada FSC de origen sostenible',
    bullet2: 'Fotos previas de la veta para tu aprobación'
  },
  {
    num: '03',
    time: '4–7d',
    title: 'Taller & Ensamblaje',
    detail: 'Corte artesanal, cepillado manual y ensambles tradicionales a espiga para garantizar una estructura sólida y duradera.',
    bullet1: 'Trabajo manual de ebanistería tradicional',
    bullet2: 'Control diario de humedad y estabilidad'
  },
  {
    num: '04',
    time: '2d',
    title: 'Acabados & Envío',
    detail: 'Lijado suave multietapa, aplicación de aceites ecológicos y ceras naturales. Embalaje reforzado a medida para el transporte.',
    bullet1: 'Nutrición orgánica con cera de abeja',
    bullet2: 'Envío protegido con seguro al 100%'
  }
]

const currentStep = computed(() => steps[activeStep.value])
</script>
