'use client'

import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { useInView } from '@/hooks/useInView'
import {
  categories,
  categoryMeta,
  getProductsByCategory,
  type CategoryId,
  type Product,
} from '@/data/products'

// ---------------------------------------------------------------------------
// Category Sub-Nav
// ---------------------------------------------------------------------------
function CategoryNav({ active }: { active: CategoryId }) {
  return (
    <div className="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex gap-0 overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/products/${cat}`}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                active === cat
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {categoryMeta[cat].label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Product Card
// ---------------------------------------------------------------------------
function ProductCard({
  product,
  index,
  visible,
}: {
  product: Product
  index: number
  visible: boolean
}) {
  return (
    <Link
      href={`/products/${product.category}/${product.id}`}
      className={`group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image area */}
      <div className="aspect-[4/3] bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center overflow-hidden relative">
        {product.imgUrl ? (
          <img
            src={product.imgUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-gray-300">
            <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V11m0 0L4 7" />
            </svg>
            <span className="text-xs tracking-widest uppercase">Product Image</span>
          </div>
        )}
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase">
          {categoryMeta[product.category].label}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-gray-900 text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.tagline}</p>

        {/* Key spec highlights */}
        {product.specs.length > 0 && (
          <div className="space-y-2 mb-6">
            {product.specs.slice(0, 2).map((s) => (
              <div key={s.label} className="flex items-center justify-between text-xs">
                <span className="text-gray-400">{s.label}</span>
                <span className="text-gray-700 font-medium">{s.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 gap-1 transition-all duration-200">
          View Details
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

// ---------------------------------------------------------------------------
// Grid Section
// ---------------------------------------------------------------------------
function ProductGrid({ category }: { category: CategoryId }) {
  const { ref: gridRef, inView: gridIn } = useInView()
  const items = getProductsByCategory(category)

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Product cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} visible={gridIn} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function CategoryPage() {
  const { category: categoryParam } = useParams<{ category: string }>()
  const category = categoryParam as CategoryId
  if (!categories.includes(category)) notFound()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-blue-500 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Products
          </p>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-bold leading-tight">
            The One Solution
            <br />
            For You
          </h1>
        </div>
      </section>

      {/* Tab Nav */}
      <CategoryNav active={category} />

      {/* Grid */}
      <ProductGrid category={category} />
    </>
  )
}
