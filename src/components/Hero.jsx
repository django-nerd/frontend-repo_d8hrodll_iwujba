export default function Hero() {
  return (
    <section id="home" className="relative pt-28 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-80 w-80 bg-emerald-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 bg-teal-200/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Handcrafted soaps
              <span className="block bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">for sensitive skin</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Gentle, natural, and cruelty-free bars infused with botanical oils and essential aromas. Made in small batches.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#shop" className="inline-flex items-center rounded-full bg-emerald-500 text-white px-6 py-3 font-semibold hover:bg-emerald-600 transition-colors shadow">
                Shop collection
              </a>
              <a href="#ingredients" className="inline-flex items-center rounded-full border border-gray-300 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-50 transition-colors">
                See ingredients
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Dermatologist tested
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                Plastic-free packaging
              </div>
            </div>
          </div>

          <div className="relative md:h-[520px]">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/40 to-transparent rounded-3xl" />
            <img src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2FwfGVufDB8MHx8fDE3NjMwNTQ1MzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Soap" className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
