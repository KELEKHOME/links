export type FormspreeStatus = 'idle' | 'sending' | 'success' | 'error'

export function useFormspree() {
  const config = useRuntimeConfig()
  const status = ref<FormspreeStatus>('idle')

  async function submit(data: Record<string, any>) {
    status.value = 'sending'
    try {
      // Extract and normalize fields
      const rawType = data.type || data.tipo
      let type: 'estimate' | 'newsletter' | 'guide' | 'general' = 'general'

      if (rawType === 'newsletter' || data._subject?.includes('Newsletter') || data._subject?.includes('Suscripción')) {
        type = 'newsletter'
      } else if (rawType === 'estimate' || data.mueble || data._subject?.includes('Presupuesto')) {
        type = 'estimate'
      } else if (rawType === 'guide' || data._subject?.includes('Guía')) {
        type = 'guide'
      }

      const email = data.email
      const contact = data.contact || data.contacto || data.nombre || email
      const mueble = data.mueble
      const madera = data.madera
      const medidas = data.medidas
      const notas = data.notas || data.descripcion || data.asunto

      // Register lead in reactive leads store (which also posts to server & Notion)
      const { addLead } = useLeads()
      await addLead({
        type,
        email,
        contact,
        mueble,
        madera,
        medidas,
        notas
      })

      const id = config.public.formspreeId
      if (id) {
        await fetch(`https://formspree.io/f/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data)
        }).catch(() => {})
      }

      status.value = 'success'
    } catch {
      status.value = 'error'
    }
  }

  function reset() {
    status.value = 'idle'
  }

  return { status, submit, reset }
}
