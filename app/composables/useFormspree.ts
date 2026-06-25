// composables/useFormspree.ts
export type FormspreeStatus = 'idle' | 'sending' | 'success' | 'error'

export function useFormspree() {
  const config = useRuntimeConfig()
  const status = ref<FormspreeStatus>('idle')

  async function submit(data: Record<string, string>) {
    status.value = 'sending'
    try {
      const id = config.public.formspreeId
      if (!id) { status.value = 'success'; return }

      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      })
      status.value = res.ok ? 'success' : 'error'
    } catch {
      status.value = 'error'
    }
  }

  function reset() {
    status.value = 'idle'
  }

  return { status, submit, reset }
}
