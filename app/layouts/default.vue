<template>
  <div
    class="min-h-screen flex flex-col transition-colors duration-300
           bg-gradient-to-br from-zinc-100 via-white to-zinc-200 text-zinc-900
           dark:from-zinc-900 dark:via-black dark:to-zinc-800 dark:text-white"
  >
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <AppFooter />
    <CookieBanner />
    <CustomCursor />
    <ShareButton />
  </div>
</template>
