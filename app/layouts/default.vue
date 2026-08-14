<template>
  <div
    class="min-h-screen flex flex-col transition-colors duration-300
           bg-stone-50 text-stone-900
           dark:bg-stone-950 dark:text-stone-100"
  >
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <AppFooter />

    <CustomCursor />
    <ShareButton />
  </div>
</template>
