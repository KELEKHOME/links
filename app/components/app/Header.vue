<!-- components/app/Header.vue -->
<template>
  <header
    class="fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-7rem)] sm:w-auto transition-all duration-500"
    :class="scrolled ? 'top-4' : 'top-8'"
  >

    <!-- ─── Desktop ─── -->
    <nav
      class="hidden sm:flex relative items-center gap-0 rounded-full border backdrop-blur-xl transition-all duration-500"
      :class="scrolled
        ? 'px-2 py-1 shadow-2xl shadow-black/20 bg-white/60 dark:bg-zinc-950/60 border-zinc-200/50 dark:border-white/8'
        : 'px-2.5 py-1.5 shadow-xl shadow-black/8 bg-white/80 dark:bg-zinc-900/80 border-zinc-200/60 dark:border-white/10'"
    >
      <!-- Barra animada del tab activo -->
      <span
        class="pointer-events-none absolute -top-[2.5px] h-[3px] w-5 rounded-full bg-amber-400 shadow-[0_0_8px_2px_rgba(251,191,36,0.55)] z-20"
        :class="[bubbleReady ? 'tab-bubble' : 'opacity-0', isResyncing && 'tab-bubble--instant']"
        :style="{ left: bubbleLeft + 'px' }"
      />

      <!-- Badge: aparece al hacer scroll (max-width trick, sin v-if) -->
      <div
        class="flex items-center overflow-hidden transition-all duration-500 ease-in-out shrink-0"
        :class="scrolled ? 'max-w-[32px] opacity-100' : 'max-w-0 opacity-0'"
      >
        <img src="/favicon.png" alt="Kelek Home" class="w-6 h-6 rounded-lg shrink-0" />
      </div>
      <!-- Nav links -->
      <div class="flex items-center">
        <NuxtLink
          v-for="(item, i) in navItems"
          :key="item.label"
          :ref="(el) => setLinkRef(el, i)"
          :to="item.to"
          class="group relative flex items-center rounded-xl font-medium whitespace-nowrap transition-all duration-200"
          :class="[
            scrolled ? 'px-3 py-1 text-sm' : 'px-3.5 py-1.5 text-sm',
            !isActive(item.to) && 'hover:-translate-y-px hover:scale-[1.03]'
          ]"
          active-class="is-active"
        >
          <!-- Background: hover fill (solo en no-activos) -->
          <span
            v-if="!isActive(item.to)"
            class="absolute inset-x-0 inset-y-0.5 rounded-xl pointer-events-none transition-all duration-200 opacity-0 group-hover:opacity-100 bg-zinc-100/90 dark:bg-white/[0.07]"
          />
          <!-- Amber glow en hover (no activo) -->
          <span
            v-if="!isActive(item.to)"
            class="absolute inset-x-0 inset-y-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style="background: radial-gradient(ellipse at 50% 130%, rgb(251 191 36 / 0.16), transparent 65%)"
          />
          <span
            class="relative z-10 whitespace-nowrap transition-colors duration-200"
            :class="isActive(item.to)
              ? 'text-zinc-900 dark:text-white font-semibold'
              : 'text-zinc-500 group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200'"
          >{{ item.label }}</span>
        </NuxtLink>
      </div>

      <!-- Divisor izquierdo de controles -->
      <div
        class="h-[1.7rem] bg-zinc-400/70 dark:bg-zinc-500/70 transition-all duration-500 ease-in-out shrink-0"
        :class="!scrolled ? 'w-px mx-2' : 'w-0 mx-0 opacity-0'"
      />
      <!-- Controles: se ocultan al hacer scroll (max-width trick, sin v-if) -->
      <div
        class="flex items-center gap-1 overflow-hidden transition-all duration-500 ease-in-out shrink-0"
        :class="!scrolled ? 'max-w-[120px] opacity-100' : 'max-w-0 opacity-0'"
      >
        <LocaleSwitcher />
        <div class="w-px h-[1.7rem] bg-zinc-400/70 dark:bg-zinc-500/70 shrink-0" />
        <AppColorModeButton />
      </div>
    </nav>

    <!-- ─── Mobile: hamburguesa mejorada ─── -->
    <div class="sm:hidden">
      <!-- Barra superior -->
      <div
        class="flex items-center justify-between px-3 py-1.5 rounded-full border backdrop-blur-xl shadow-xl shadow-black/10 transition-all duration-500
               bg-white/85 border-zinc-200/60
               dark:bg-zinc-900/85 dark:border-white/10"
      >
        <!-- Brand -->
        <div class="flex items-center gap-2">
          <img src="/favicon.png" alt="Kelek Home" class="w-6 h-6 rounded-lg shrink-0" />
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-x-2"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-2"
            mode="out-in"
          >
            <span
              :key="activeLabel"
              class="text-sm font-semibold text-zinc-800 dark:text-zinc-100 tracking-wide"
            >{{ activeLabel }}</span>
          </Transition>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-0.5">
          <div class="overflow-hidden transition-all duration-500 ease-in-out"
            :class="!scrolled ? 'max-w-[40px] opacity-100' : 'max-w-0 opacity-0'"
          >
            <AppColorModeButton />
          </div>
          <!-- Hamburger button -->
          <button
            :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
            class="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200
                   text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100
                   dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10"
            @click="menuOpen = !menuOpen"
          >
            <span class="flex flex-col gap-[5px] w-[16px]">
              <span class="block h-px bg-current rounded-full transition-all duration-300 origin-center"
                :class="menuOpen ? 'rotate-45 translate-y-[8px] w-full' : 'w-full'" />
              <span class="block h-px bg-current rounded-full transition-all duration-300 w-[10px]"
                :class="menuOpen ? 'opacity-0 -translate-x-1' : ''" />
              <span class="block h-px bg-current rounded-full transition-all duration-300 origin-center"
                :class="menuOpen ? '-rotate-45 -translate-y-[8px] w-full' : 'w-[13px]'" />
            </span>
          </button>
        </div>
      </div>

      <!-- Dropdown -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2 scale-[0.98]"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-2 scale-[0.98]"
      >
        <nav
          v-if="menuOpen"
          class="mt-2 p-1.5 rounded-2xl border shadow-2xl shadow-black/15 backdrop-blur-xl
                 bg-white/95 border-zinc-200/60
                 dark:bg-zinc-900/95 dark:border-white/10"
        >
          <NuxtLink
            v-for="(item, i) in navItems"
            :key="item.label"
            :to="item.to"
            class="mobile-nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150"
            :class="isActive(item.to)
              ? 'bg-amber-50 dark:bg-amber-500/10'
              : 'active:bg-zinc-100 dark:active:bg-white/8 active:scale-[0.98]'"
            :style="{ animationDelay: `${i * 45}ms` }"
            @click="menuOpen = false"
          >
            <!-- Icon badge -->
            <div
              class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
              :class="isActive(item.to)
                ? 'bg-amber-100 dark:bg-amber-500/20'
                : 'bg-zinc-100 dark:bg-white/8'"
            >
              <Icon
                :name="item.icon"
                class="text-[17px] transition-colors duration-200"
                :class="isActive(item.to) ? 'text-amber-500 dark:text-amber-400' : 'text-zinc-400 dark:text-zinc-500'"
              />
            </div>

            <span
              class="text-sm font-medium flex-1 transition-colors duration-200"
              :class="isActive(item.to) ? 'text-zinc-900 dark:text-white font-semibold' : 'text-zinc-600 dark:text-zinc-300'"
            >{{ item.label }}</span>

            <Icon
              name="mdi:chevron-right"
              class="text-[16px] transition-colors duration-200"
              :class="isActive(item.to) ? 'text-amber-400' : 'text-zinc-300 dark:text-zinc-600'"
            />
          </NuxtLink>

          <!-- Locale switcher al pie -->
          <div class="flex items-center gap-2 px-3 pt-2 mt-1 border-t border-zinc-100 dark:border-white/8">
            <span class="text-xs text-zinc-400 dark:text-zinc-500">Idioma</span>
            <LocaleSwitcher />
          </div>
        </nav>
      </Transition>
    </div>

  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)

watch(() => route.path, () => { menuOpen.value = false })

onMounted(() => {
  const handler = () => { scrolled.value = window.scrollY > 30 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})

const navItems = computed(() => [
  { label: t('nav.home'),     to: '/hola',           icon: 'mdi:home-outline' },
  { label: t('nav.about'),    to: '/hola/sobre-mi',  icon: 'mdi:account-outline' },
  { label: t('nav.projects'), to: '/hola/proyectos', icon: 'mdi:hammer-wrench' },
  { label: t('nav.brands'),   to: '/hola/marcas',    icon: 'mdi:tag-outline' },
  { label: t('nav.contact'),  to: '/hola/contacto',  icon: 'mdi:email-outline' }
])

const activeLabel = computed(() => {
  return navItems.value.find(item => isActive(item.to))?.label ?? 'Kelek Home'
})

function isActive(to: string) {
  return route.path === to || (to !== '/hola' && route.path.startsWith(to))
}

// ─── Barra animada del tab activo ───
const linkRefs = ref<(HTMLElement | null)[]>([])
const bubbleLeft = ref(0)
const bubbleReady = ref(false)
const isResyncing = ref(false)

function setLinkRef(el: any, i: number) {
  linkRefs.value[i] = (el?.$el ?? el) as HTMLElement | null
}

function updateBubble() {
  const idx = navItems.value.findIndex(item => isActive(item.to))
  const el = linkRefs.value[idx]
  if (!el) return
  bubbleLeft.value = el.offsetLeft + el.offsetWidth / 2
  bubbleReady.value = true
}

// Sigue en tiempo real el reflow del nav (colapso de badge/controles al
// hacer scroll) para que el indicador nunca quede descentrado mientras anima.
function resyncBubbleDuring(ms: number) {
  isResyncing.value = true
  const start = performance.now()
  function step() {
    updateBubble()
    if (performance.now() - start < ms) {
      requestAnimationFrame(step)
    } else {
      isResyncing.value = false
    }
  }
  requestAnimationFrame(step)
}

watch(() => route.path, () => nextTick(updateBubble))
watch(scrolled, () => nextTick(() => resyncBubbleDuring(550)))

onMounted(() => {
  nextTick(updateBubble)
  const handler = () => updateBubble()
  window.addEventListener('resize', handler)
  onUnmounted(() => window.removeEventListener('resize', handler))
})
</script>

<style scoped>
.mobile-nav-item {
  animation: menuItemIn 0.25s ease-out both;
}
@keyframes menuItemIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.tab-bubble {
  transform: translateX(-50%);
  animation: bubblePop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}
.tab-bubble--instant {
  transition: none;
  animation: none;
}
@keyframes bubblePop {
  0%   { transform: translateX(-50%) translateY(6px) scale(0.4); opacity: 0; }
  60%  { transform: translateX(-50%) translateY(-2px) scale(1.15); opacity: 1; }
  100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }
}

</style>
