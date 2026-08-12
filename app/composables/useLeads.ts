export interface Lead {
  id: string
  type: 'estimate' | 'newsletter' | 'guide' | 'general'
  email?: string
  contact?: string
  mueble?: string
  madera?: string
  medidas?: string
  notas?: string
  status: 'pendiente' | 'contactado' | 'convertido' | 'archivado'
  createdAt: string
}

export const useLeads = () => {
  const leads = useState<Lead[]>('leads', () => [])
  const loaded = useState<boolean>('leads_loaded', () => false)

  const fetchLeads = async () => {
    try {
      const data = await $fetch<Lead[]>('/api/leads')
      if (Array.isArray(data)) {
        leads.value = data
        loaded.value = true
      }
    } catch (err) {
      console.error('Failed to fetch leads from API', err)
    }
  }

  if (import.meta.client && !loaded.value) {
    fetchLeads()
  }

  const addLead = async (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'> & { status?: Lead['status'] }) => {
    const tempLead: Lead = {
      id: Date.now().toString(),
      type: leadData.type || 'general',
      email: leadData.email,
      contact: leadData.contact,
      mueble: leadData.mueble,
      madera: leadData.madera,
      medidas: leadData.medidas,
      notas: leadData.notas,
      status: leadData.status || 'pendiente',
      createdAt: new Date().toISOString()
    }

    leads.value.unshift(tempLead)

    try {
      const res = await $fetch<{ success: boolean; lead?: Lead }>('/api/leads', {
        method: 'POST',
        body: leadData
      })
      if (res?.lead) {
        const idx = leads.value.findIndex(l => l.id === tempLead.id)
        if (idx !== -1) {
          leads.value[idx] = res.lead
        }
      }
    } catch (err) {
      console.error('Failed to save lead to server', err)
    }
  }

  const updateLeadStatus = async (id: string, status: Lead['status']) => {
    const item = leads.value.find(l => l.id === id)
    if (item) {
      item.status = status
    }
    try {
      await $fetch('/api/leads', {
        method: 'PATCH',
        body: { id, status }
      })
    } catch (err) {
      console.error('Failed to update lead status on server', err)
    }
  }

  const deleteLead = async (id: string) => {
    leads.value = leads.value.filter(l => l.id !== id)
    try {
      await $fetch(`/api/leads?id=${id}`, {
        method: 'DELETE'
      })
    } catch (err) {
      console.error('Failed to delete lead on server', err)
    }
  }

  const exportToCSV = () => {
    if (!import.meta.client) return
    const headers = ['ID', 'Tipo', 'Email / Contacto', 'Mueble', 'Madera', 'Medidas', 'Notas', 'Estado', 'Fecha']
    const rows = leads.value.map(l => [
      l.id,
      l.type,
      `"${l.email || l.contact || ''}"`,
      `"${l.mueble || ''}"`,
      `"${l.madera || ''}"`,
      `"${l.medidas || ''}"`,
      `"${l.notas || ''}"`,
      l.status,
      l.createdAt
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `leads_kelek_home_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return {
    leads,
    fetchLeads,
    addLead,
    updateLeadStatus,
    deleteLead,
    exportToCSV
  }
}
