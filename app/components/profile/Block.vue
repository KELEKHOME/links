<!-- components/Profile.vue -->
<template>
  <div class="text-center">
    <!-- Avatar -->
    <div class="blur-in blur-in-d1 inline-flex mx-auto">
      <button
        class="group relative inline-flex items-center justify-center rounded-full
               ring-2 ring-zinc-300 dark:ring-white/30
               focus:outline-none cursor-pointer"
        @click="open = true"
      >
        <img
          src="/avatar.png"
          alt="Kelek Home avatar"
          class="relative w-28 h-28 rounded-full object-cover transition-all duration-300
                 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        />

        <div
          class="absolute w-28 h-28 rounded-full
                 border-2 border-transparent
                 border-t-zinc-800 border-r-zinc-800/30
                 dark:border-t-zinc-300 dark:border-r-zinc-300/30
                 [animation:spin_1.5s_linear_infinite] opacity-0 group-hover:opacity-100
                 transition-opacity duration-300
                 [filter:drop-shadow(0_0_6px_rgba(30,30,30,0.35))]
                 dark:[filter:drop-shadow(0_0_6px_rgba(200,200,200,0.25))]"
        />

        <div
          class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full
                 bg-zinc-900/20 dark:bg-white/20 blur-md opacity-0 transition-all duration-500
                 group-hover:h-2/3 group-hover:opacity-100"
        />
      </button>
    </div>

    <div class="blur-in blur-in-d2 mt-5 flex flex-col items-center leading-tight">
      <span class="text-2xl text-zinc-500 dark:text-zinc-400" style="font-family: 'Instrument Serif', serif; font-style: italic;">
        Bienvenidos a
      </span>
      <span class="text-5xl font-bold tracking-tight">
        KELEK HOME
      </span>
    </div>

    <!-- Badge disponible -->
    <div class="blur-in blur-in-d3 mt-3 flex items-center justify-center gap-2">
      <NuxtLink
        to="/hola/marcas"
        class="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-transparent transition-all duration-300
               hover:border-green-400/70 hover:bg-green-500/10 hover:shadow-[0_0_14px_rgba(74,222,128,0.25)] hover:-translate-y-0.5"
      >
        <span class="relative flex h-2 w-2 shrink-0">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span class="text-xs font-medium text-green-600 dark:text-green-400 transition-colors duration-300 group-hover:text-green-500 dark:group-hover:text-green-300">
          {{ $t('profile.available') }}
        </span>
      </NuxtLink>
    </div>

    <p class="blur-in blur-in-d4 mt-4 text-base leading-relaxed text-zinc-400 dark:text-zinc-500 max-w-lg mx-auto">
      {{ $t('profile.bio') }}
    </p>

    <!-- Hashtags -->
    <div class="blur-in blur-in-d4 mt-3 flex flex-wrap items-center justify-center gap-2">
      <span
        v-for="tag in ['#artesanal', '#fibrasNaturales', '#mobiliarioÚnico']"
        :key="tag"
        class="text-xs font-medium px-2.5 py-1 rounded-full
               bg-amber-400/10 text-amber-700 dark:text-amber-300
               border border-amber-400/20"
      >{{ tag }}</span>
    </div>

    <div class="blur-in blur-in-d5 mt-5">
      <ProfileSocialLinks />
    </div>

    <div class="blur-in blur-in-d7 mt-8">
      <ProfilePhotoCarousel />
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="open"
          class="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          @click.self="open = false"
        >
          <div class="absolute inset-0 bg-black/70 backdrop-blur-md" @click="open = false" />
          <div class="relative z-10">
            <img
              src="/avatar.png"
              alt="Kelek Home"
              class="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl object-cover shadow-2xl ring-4 ring-white/10"
            />
            <button
              class="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20
                     flex items-center justify-center text-white hover:bg-white/20 transition"
              @click="open = false"
            >
              <Icon name="mdi:close" class="text-lg" />
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const open = ref(false)

onMounted(() => {
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') open.value = false }
  window.addEventListener('keydown', onKey)
  onUnmounted(() => window.removeEventListener('keydown', onKey))
})
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.35s ease;
}
.lightbox-enter-active .relative,
.lightbox-leave-active .relative {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease;
}
.lightbox-enter-from,
.lightbox-leave-to { opacity: 0; }
.lightbox-enter-from .relative { transform: scale(0.6); opacity: 0; }
.lightbox-leave-to .relative { transform: scale(0.6); opacity: 0; }
</style>
