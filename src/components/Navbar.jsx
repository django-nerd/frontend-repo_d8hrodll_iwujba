import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
            <span className="font-semibold text-gray-800 tracking-wide">PureLuxe Soap</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#shop" className="inline-flex items-center rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-600 transition-colors shadow-sm">
              Shop now
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
                {item.label}
              </a>
            ))}
            <a href="#shop" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-600 transition-colors shadow-sm">
              Shop now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
