// Plugin client-only: si la URL contiene ?notrack=1, desactiva el tracking
// de Umami en este navegador de forma permanente (localStorage).
// Para reactivarlo: localStorage.removeItem('umami.disabled')
export default defineNuxtPlugin(() => {
  const route = useRoute()

  if (route.query.notrack === '1') {
    localStorage.setItem('umami.disabled', '1')
    // Limpia el parámetro de la URL sin recargar la página
    const { notrack: _, ...rest } = route.query
    navigateTo({ query: rest }, { replace: true })
  }
})
