// app/composables/useCraftFeatures.ts

export interface CraftFeaturesState {
  heroImpact: boolean // Propuesta 1: Hero artesanal de primer impacto con piezas reales
  simulatorDirectWhatsApp: boolean // Propuesta 2: Simulador con botón directo de WhatsApp con mensaje precargado
  projectsDetailedView: boolean // Propuesta 3: Fichas técnicas artesanales y CTA de encargo en Proyectos
}

const STORAGE_KEY = 'kelek_craft_features_v1'

const DEFAULT_FEATURES: CraftFeaturesState = {
  heroImpact: true,
  simulatorDirectWhatsApp: true,
  projectsDetailedView: true
}

export const useCraftFeatures = () => {
  const features = useState<CraftFeaturesState>('craft_features', () => ({ ...DEFAULT_FEATURES }))
  const isLoaded = useState<boolean>('craft_features_loaded', () => false)

  // Cargar estado inicial desde localStorage en cliente
  if (import.meta.client && !isLoaded.value) {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        features.value = { ...DEFAULT_FEATURES, ...parsed }
      }
    } catch (e) {
      console.warn('Error loading craft features from storage', e)
    }
    isLoaded.value = true
  }

  // Guardar cambios
  const saveToStorage = () => {
    if (import.meta.client) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(features.value))
      } catch (e) {
        console.warn('Error saving craft features to storage', e)
      }
    }
  }

  const setFeature = (key: keyof CraftFeaturesState, value: boolean) => {
    features.value[key] = value
    saveToStorage()
  }

  const toggleFeature = (key: keyof CraftFeaturesState) => {
    features.value[key] = !features.value[key]
    saveToStorage()
  }

  const setAll = (value: boolean) => {
    features.value.heroImpact = value
    features.value.simulatorDirectWhatsApp = value
    features.value.projectsDetailedView = value
    saveToStorage()
  }

  return {
    features,
    setFeature,
    toggleFeature,
    setAll
  }
}
