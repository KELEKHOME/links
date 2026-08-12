<template>
  <footer class="w-full border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-950/50 mt-20 transition-colors">
    <div class="max-w-4xl mx-auto px-6 py-12 space-y-10">
      
      <!-- Top Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <!-- Brand Column -->
        <div class="space-y-3">
          <div class="flex items-center gap-2.5">
            <img src="/favicon.png" alt="Kelek Home" class="w-7 h-7 rounded-lg" />
            <span class="font-serif font-bold text-base text-stone-900 dark:text-stone-100 tracking-tight">Kelek Home</span>
          </div>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            Mobiliario artesanal único elaborado en madera maciza sostenible. Hecho a mano con pasión en nuestro taller de Madrid.
          </p>
          <div class="flex items-center gap-3 pt-1 text-stone-500 dark:text-stone-400">
            <a
              href="https://www.instagram.com/kelek.home"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="hover:text-pink-600 dark:hover:text-pink-400 transition-colors p-1"
            >
              <Icon name="simple-icons:instagram" class="text-lg" />
            </a>
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-1"
            >
              <Icon name="mdi:whatsapp" class="text-lg" />
            </a>
            <a
              href="mailto:hola@kelek.home"
              aria-label="Email"
              class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors p-1"
            >
              <Icon name="mdi:email-outline" class="text-lg" />
            </a>
          </div>
        </div>

        <!-- Quick Navigation -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200">
            Navegación
          </h4>
          <ul class="space-y-2 text-xs text-stone-600 dark:text-stone-400">
            <li>
              <NuxtLink to="/hola" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <Icon name="mdi:chevron-right" class="text-amber-500 text-xs" /> Inicio / Links
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hola/sobre-mi" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <Icon name="mdi:chevron-right" class="text-amber-500 text-xs" /> Sobre Mí & Filosofía
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hola/proyectos" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <Icon name="mdi:chevron-right" class="text-amber-500 text-xs" /> Proyectos & Catálogo
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hola/marcas" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <Icon name="mdi:chevron-right" class="text-amber-500 text-xs" /> Marcas & Colaboraciones
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hola/contacto" class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <Icon name="mdi:chevron-right" class="text-amber-500 text-xs" /> Contacto & Presupuestos
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact & Location -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200">
            Taller & Contacto
          </h4>
          <div class="space-y-2 text-xs text-stone-600 dark:text-stone-400">
            <p class="flex items-center gap-2">
              <Icon name="mdi:map-marker-outline" class="text-amber-600 dark:text-amber-400 text-sm shrink-0" />
              <span>Madrid, España (Atención con cita previa)</span>
            </p>
            <a href="mailto:hola@kelek.home" class="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <Icon name="mdi:email-outline" class="text-amber-600 dark:hover:text-amber-400 text-sm shrink-0" />
              <span>hola@kelek.home</span>
            </a>
            <p class="flex items-center gap-2">
              <Icon name="mdi:clock-outline" class="text-amber-600 dark:text-amber-400 text-sm shrink-0" />
              <span>Lunes a Viernes (09:00 - 19:00)</span>
            </p>
            <div class="pt-2">
              <NuxtLink to="/admin" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-200/60 dark:bg-stone-800/60 hover:bg-stone-200 dark:hover:bg-stone-800 text-[11px] font-medium text-stone-700 dark:text-stone-300 transition-colors">
                <Icon name="mdi:shield-account" class="text-sm text-amber-600 dark:text-amber-400" />
                <span>Panel de Gestión</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 border-t border-stone-200/60 dark:border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
        <p>© {{ year }} Kelek Home. Todos los derechos reservados.</p>
        <p class="flex items-center gap-1">
          Hecho a mano con <span class="text-rose-500 animate-pulse">♥</span> en Madrid
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
