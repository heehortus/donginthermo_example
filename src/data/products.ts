export type CategoryId = 'van' | 'nose' | 'esc' | 'sub'

export interface Spec {
  label: string
  value: string
}

export interface Performance {
  temp: string
  mode?: string
  watts: string
  kcal: string
  btu: string
}

export interface Product {
  id: string
  name: string
  category: CategoryId
  tagline: string
  features: string[]
  specs: Spec[]
  performance: Performance[]
  performanceNote?: string
  imgUrl: string
}

export const categoryMeta: Record<CategoryId, { label: string; title: string }> = {
  van:  { label: 'VAN',  title: 'Van Type'  },
  nose: { label: 'NOSE', title: 'Nose Type' },
  esc:  { label: 'ESC',  title: 'ESC Type'  },
  sub:  { label: 'SUB',  title: 'Sub Type'  },
}

export const categories: CategoryId[] = ['van', 'nose', 'esc', 'sub']
