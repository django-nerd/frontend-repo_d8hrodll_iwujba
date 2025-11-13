const products = [
  {
    id: 1,
    name: 'Lavender Calm',
    desc: 'Soothing lavender and oat for ultra-gentle cleansing',
    price: '$9',
    img: 'https://images.unsplash.com/photo-1617038260897-41a1ae0870ef?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Citrus Zest',
    desc: 'Energizing lemon and orange with jojoba oil',
    price: '$9',
    img: 'https://images.unsplash.com/photo-1584801095702-62f191ae8441?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Tea Tree Fresh',
    desc: 'Purifying tea tree and charcoal for clarity',
    price: '$10',
    img: 'https://images.unsplash.com/photo-1598214880130-7f1a5c9c994c?q=80&w=1200&auto=format&fit=crop'
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Best sellers</h2>
          <a href="#shop" className="text-emerald-600 hover:text-emerald-700 font-medium">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <article key={p.id} className="group bg-white/70 backdrop-blur rounded-2xl border border-emerald-100/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                  <span className="text-emerald-600 font-semibold">{p.price}</span>
                </div>
                <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
                <button className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-emerald-500 text-white px-4 py-2 font-medium hover:bg-emerald-600 transition-colors">Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
