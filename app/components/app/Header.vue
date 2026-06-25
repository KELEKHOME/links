<!-- components/AppHeader.vue -->
<template>
  <header class="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-max">

    <!-- Pill navbar (desktop) -->
    <nav
      class="hidden sm:flex items-center gap-1 px-3 py-2 rounded-full border shadow-lg shadow-black/5 backdrop-blur-sm transition-colors duration-300
             bg-white/80 border-zinc-200/60
             dark:bg-zinc-900/80 dark:border-white/10"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="px-2.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200
               text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100
               dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10"
        active-class="text-zinc-900 bg-zinc-100 dark:text-white dark:bg-white/10"
      >
        {{ item.label }}
      </NuxtLink>

      <div class="w-px h-4 mx-1 bg-zinc-200 dark:bg-white/10" />
      <LocaleSwitcher />
      <div class="w-px h-4 mx-1 bg-zinc-200 dark:bg-white/10" />
      <AppColorModeButton />
    </nav>

    <!-- Mobile navbar -->
    <div class="sm:hidden">
      <div
        class="flex items-center justify-between px-4 py-2.5 rounded-2xl border shadow-lg shadow-black/5 backdrop-blur-sm transition-colors duration-300
               bg-white/90 border-zinc-200/60
               dark:bg-zinc-900/90 dark:border-white/10"
      >
        <!-- Brand -->
        <span class="text-sm font-semibold text-zinc-800 dark:text-zinc-100 tracking-widest uppercase">
          Kelek Home
        </span>

        <!-- Right controls -->
        <div class="flex items-center gap-1">
          <LocaleSwitcher />
          <div class="w-px h-5 bg-zinc-200 dark:bg-white/10 shrink-0" />
          <AppColorModeButton />
          <!-- Hamburger -->
          <button
            :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
            class="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200
                   text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100
                   dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10"
            @click="menuOpen = !menuOpen"
          >
            <Icon
              :name="menuOpen ? 'mdi:close' : 'mdi:menu'"
              class="text-[22px] transition-transform duration-300"
              :class="menuOpen ? 'rotate-90' : 'rotate-0'"
            />
          </button>
        </div>
      </div>

      <!-- Dropdown menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-2 scale-95"
      >
        <nav
          v-if="menuOpen"
          class="mt-2 p-2 rounded-2xl border shadow-lg shadow-black/5 backdrop-blur-sm
                 bg-white/90 border-zinc-200/60
                 dark:bg-zinc-900/90 dark:border-white/10"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200
                   text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100
                   dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10"
            active-class="text-zinc-900 bg-zinc-100 dark:text-white dark:bg-white/10"
            @click="menuOpen = false"
          >
            <Icon :name="item.icon" class="text-[18px] shrink-0" />
            {{ item.label }}
          </NuxtLink>
        </nav>
      </Transition>
    </div>

  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()
const menuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => { menuOpen.value = false })

const navItems = computed(() => [
  { label: t('nav.home'),     to: '/',           icon: 'mdi:home-outline' },
  { label: t('nav.about'),    to: '/sobre-mi',   icon: 'mdi:account-outline' },
  { label: t('nav.projects'), to: '/proyectos',  icon: 'mdi:hammer-wrench' },
  { label: t('nav.brands'),   to: '/marcas',     icon: 'mdi:tag-outline' },
  { label: t('nav.contact'),  to: '/contacto',   icon: 'mdi:email-outline' }
])
</script>
