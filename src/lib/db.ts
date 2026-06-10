import { supabase } from './supabase'
import type { CategoryId, Product, Spec, Performance } from '@/data/products'

// ── DB row 타입 ───────────────────────────────────────────────────────────────

type ProductRow = {
  id: string
  name: string
  category: string
  tagline: string
  features: string[]
  specs: Spec[]
  performance: Performance[]
  performance_note: string | null
  sort_order: number
  product_images: { img_url: string; alt: string | null; sort_order: number }[]
}

export type CertRow = {
  id: string
  name: string
  category: string
  img_url: string | null
  sort_order: number
}

// ── 매핑 ─────────────────────────────────────────────────────────────────────

function toProduct(row: ProductRow): Product {
  const images = [...(row.product_images ?? [])].sort((a, b) => a.sort_order - b.sort_order)
  return {
    id: row.id,
    name: row.name,
    category: row.category as CategoryId,
    tagline: row.tagline,
    features: row.features ?? [],
    specs: row.specs ?? [],
    performance: row.performance ?? [],
    performanceNote: row.performance_note ?? undefined,
    imgUrl: images[0]?.img_url ?? '',
  }
}

// ── 쿼리 함수 ─────────────────────────────────────────────────────────────────

export async function getProductsByCategory(category: CategoryId): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*, product_images(img_url, alt, sort_order)')
    .eq('category', category)
    .order('sort_order')

  if (error) throw error
  return (data as ProductRow[]).map(toProduct)
}

export async function getProduct(category: string, id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*, product_images(img_url, alt, sort_order)')
    .eq('category', category)
    .eq('id', id)
    .maybeSingle()

  if (error || !data) return null
  return toProduct(data as ProductRow)
}

export async function getCertifications(): Promise<CertRow[]> {
  const { data, error } = await supabase
    .from('certifications')
    .select('*')
    .order('sort_order')

  if (error) throw error
  return data as CertRow[]
}
