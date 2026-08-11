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
  const leads = useState<Lead[]>('leads', () => [
    {
      id: '1',
      type: 'estimate',
      email: 'carlos.mendoza@ejemplo.com',
      contact: 'Carlos Mendoza (+34 612 345 678)',
      mueble: 'Mesa de Comedor Roble',
      madera: 'Roble Salvaje',
      medidas: '200x100x75 cm',
      notas: 'Acabado en aceite natural mate con cantos orgánicos.',
      status: 'pendiente',
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
    },
    {
      id: '2',
      type: 'guide',
      email: 'laura.artesanal@ejemplo.com',
      contact: 'Laura Gómez',
      status: 'contactado',
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
    },
    {
      id: '3',
      type: 'newsletter',
      email: 'javier.kelek@ejemplo.com',
      status: 'convertido',
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
    },
    {
      id: '4',
      type: 'estimate',
      email: 'marta.interiorismo@ejemplo.com',
      contact: 'Marta Interiorismo',
      mueble: 'Aparador de Nogal',
      madera: 'Nogal Español',
      medidas: '180x45x80 cm',
      notas: 'Puertas correderas con alistonado artesanal.',
      status: 'pendiente',
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
    }
  ])

  const addLead = (lead: Omit<Lead, 'id' | 'createdAt' | 'status'> & { status?: Lead['status'] }) => {
    leads.value.unshift({
      id: Date.now().toString(),
      status: lead.status || 'pendiente',
      createdAt: new Date().toISOString(),
      ...lead
    })
  }

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    const item = leads.value.find(l => l.id === id)
    if (item) {
      item.status = status
    }
  }

  const deleteLead = (id: string) => {
    leads.value = leads.value.filter(l => l.id !== id)
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
    addLead,
    updateLeadStatus,
    deleteLead,
    exportToCSV
  }
}
