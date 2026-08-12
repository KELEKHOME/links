export interface ServerLead {
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

declare global {
  var __server_leads: ServerLead[] | undefined
}

if (!globalThis.__server_leads) {
  globalThis.__server_leads = [
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
  ]
}

export function getLeads(): ServerLead[] {
  return globalThis.__server_leads || []
}

export function addServerLead(leadData: Partial<ServerLead>): ServerLead {
  const leads = getLeads()
  const newLead: ServerLead = {
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
  leads.unshift(newLead)
  return newLead
}

export function updateServerLeadStatus(id: string, status: ServerLead['status']): boolean {
  const leads = getLeads()
  const lead = leads.find(l => l.id === id)
  if (lead) {
    lead.status = status
    return true
  }
  return false
}

export function deleteServerLead(id: string): boolean {
  const leads = getLeads()
  const index = leads.findIndex(l => l.id === id)
  if (index !== -1) {
    leads.splice(index, 1)
    return true
  }
  return false
}
