export default function Ingredients() {
  const items = [
    { title: 'Shea Butter', desc: 'Deeply moisturizes and protects the skin barrier.' },
    { title: 'Olive Oil', desc: 'Rich in antioxidants for a soft, nourished feel.' },
    { title: 'Coconut Oil', desc: 'Gently cleanses while maintaining natural oils.' },
    { title: 'Essential Oils', desc: 'Natural aromas derived from botanicals.' },
  ]

  return (
    <section id="ingredients" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Thoughtful ingredients</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 mb-4" />
              <h3 className="font-semibold text-gray-900">{i.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
