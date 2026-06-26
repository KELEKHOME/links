<!-- pages/proyectos.vue -->
<script setup lang="ts">
definePageMeta({ pageTransition: { name: 'slide-right', mode: 'out-in' } })
useSeoMeta({ title: 'Proyectos — Kelek Home' })

const projects = [
  {
    title: 'Mesa de centro artesanal',
    description: 'Diseño minimalista en madera maciza de roble con acabado natural.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
    tags: ['Madera', 'Minimalista']
  },
  {
    title: 'Estantería modular',
    description: 'Sistema de estanterías adaptables para cualquier espacio del hogar.',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&h=400&fit=crop',
    tags: ['Modular', 'Diseño']
  },
  {
    title: 'Silla de madera curvada',
    description: 'Técnica artesanal de curvado al vapor para ergonomía y estética.',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop',
    tags: ['Artesanal', 'Ergonomía']
  },
  {
    title: 'Decoración mural',
    description: 'Piezas decorativas únicas inspiradas en patrones de la naturaleza.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=400&fit=crop',
    tags: ['Decoración', 'Naturaleza']
  }
]
</script>

<template>
  <div class="px-4 pt-28 pb-8">
    <div class="w-full max-w-2xl mx-auto">
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold tracking-tight">Proyectos</h1>
        <p class="mt-3 opacity-60 text-sm leading-relaxed">
          Una selección de lo que he creado con mis manos.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <a
          v-for="project in projects"
          :key="project.title"
          href="#"
          class="group rounded-2xl overflow-hidden border transition-all duration-300
                 bg-black/5 border-black/10 hover:bg-black/8 hover:-translate-y-1 hover:shadow-lg
                 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/8"
        >
          <div class="overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="p-4">
            <h2 class="font-semibold text-sm">{{ project.title }}</h2>
            <p class="text-xs opacity-50 mt-1 leading-relaxed">{{ project.description }}</p>
            <div class="flex gap-1.5 mt-3 flex-wrap">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[10px] px-2 py-0.5 rounded-full border font-medium
                       border-black/10 opacity-60 dark:border-white/10"
              >{{ tag }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
