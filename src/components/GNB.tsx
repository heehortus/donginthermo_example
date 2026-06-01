'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const technologyLinks = [
  { label: 'R&D Status',           href: '/technology/rd' },
  { label: 'Intellectual Property', href: '/technology/ip' },
  { label: 'Certifications',        href: '/technology/cert' },
  { label: 'Trademark',             href: '/technology/trademark' },
]

const productLinks = [
  { label: 'VAN',  href: '/products/van' },
  { label: 'NOSE', href: '/products/nose' },
  { label: 'ESC',  href: '/products/esc' },
  { label: 'SUB',  href: '/products/sub' },
]

function DropdownChevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3 h-3 mt-px transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function GNB() {
  const [scrolled, setScrolled] = useState(false)
  const [techOpen, setTechOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = isHome && !scrolled

  const btnCls = `flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${
    transparent ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'
  }`

  const dropdownCls = (open: boolean) =>
    `absolute top-full right-0 pt-2 min-w-[200px] transition-all duration-200 origin-top ${
      open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
    }`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-bold text-sm tracking-[0.2em] transition-colors ${
              transparent ? 'text-white' : 'text-blue-900'
            }`}
          >
            DONGINTHERMO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">

            {/* About */}
            <Link
              href="/about"
              className={`text-sm font-medium tracking-wide transition-colors ${
                transparent ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              About
            </Link>

            {/* Technology Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTechOpen(true)}
              onMouseLeave={() => setTechOpen(false)}
            >
              <button className={btnCls}>
                Technology
                <DropdownChevron open={techOpen} />
              </button>
              <div className={dropdownCls(techOpen)}>
                <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                  {technologyLinks.map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {t.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className={btnCls}>
                Products
                <DropdownChevron open={productsOpen} />
              </button>
              <div className={dropdownCls(productsOpen)}>
                <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                  {productLinks.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </nav>
        </div>
      </div>
    </header>
  )
}
