export default function Reviews() {
  const reviews = [
    { name: 'Maya', text: 'The only soap that doesn\'t irritate my skin. Smells heavenly!' },
    { name: 'Jared', text: 'Bars last long and the packaging is beautiful.' },
    { name: 'Alina', text: 'My go-to gift for friends. Love the Citrus Zest.' },
  ]

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-emerald-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">What customers say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur p-6 shadow-sm">
              <p className="text-gray-800">“{r.text}”</p>
              <footer className="mt-4 text-sm text-gray-600">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
