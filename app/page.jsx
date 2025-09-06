'use client'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-bakery-cream to-white font-poppins text-gray-800">
      <Navbar />
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-dancing mb-4">Every Cake<br/>Tells a Story</h1>
            <p className="text-lg text-gray-600 mb-6">Handcrafted cakes, biscuits and pastries — baked with love. Custom orders available for birthdays, weddings and celebrations.</p>
            <div className="flex gap-4">
              <a href="#products" className="px-5 py-3 bg-bakery-pink rounded-md text-white font-medium shadow">Explore Products</a>
              <a href="#order" className="px-5 py-3 border rounded-md text-gray-700">Custom Orders</a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/hero-1.svg" alt="cakes" className="w-full h-80 object-cover"/>
          </div>
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Popular Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard title="Vanilla Story Cake" price="₹1,200" img="/images/prod-1.svg" desc="Light sponge, vanilla buttercream"/>
          <ProductCard title="Chocolate Chronicle" price="₹1,500" img="/images/prod-2.svg" desc="Rich chocolate ganache"/>
          <ProductCard title="Almond Biscotti" price="₹250" img="/images/prod-3.svg" desc="Crunchy, nutty"/>
          <ProductCard title="Lemon Zest Cookies" price="₹200" img="/images/prod-4.svg" desc="Zingy lemon"/>
        </div>
      </section>

      <section id="gallery" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/gallery-1.svg" className="w-full h-40 object-cover rounded-lg shadow" alt="g1"/>
            <img src="/images/gallery-2.svg" className="w-full h-40 object-cover rounded-lg shadow" alt="g2"/>
            <img src="/images/gallery-3.svg" className="w-full h-40 object-cover rounded-lg shadow" alt="g3"/>
            <img src="/images/gallery-4.svg" className="w-full h-40 object-cover rounded-lg shadow" alt="g4"/>
          </div>
        </div>
      </section>

      <section id="story" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600">Started in a small kitchen with a big dream, Tales of the Cake crafts personal and memorable treats. Every recipe is tested, every design is planned with care.</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow">
            <img src="/images/story-1.svg" className="w-full h-56 object-cover" alt="story"/>
          </div>
        </div>
      </section>

      <section id="order" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Custom Orders</h2>
        <p className="text-gray-600 mb-4">Message us on WhatsApp or email to place custom orders.</p>
        <div className="flex gap-4">
          <a href="https://wa.me/91YOURNUMBER" className="px-4 py-2 bg-green-500 text-white rounded">WhatsApp</a>
          <a href="mailto:yourbakery@example.com" className="px-4 py-2 border rounded">Email</a>
        </div>
      </section>

      <footer className="border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="font-semibold">Tales of the Cake</h3>
            <p className="text-sm text-gray-600">Made with ❤️. Pickup & delivery available.</p>
          </div>
          <div className="text-sm text-gray-600">Contact: <a href="tel:+91YOURNUMBER" className="text-bakery-pink">+91 YOURNUMBER</a></div>
        </div>
      </footer>
    </main>
  )
}

function ProductCard({ title, price, img, desc }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <div className="h-40 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover"/>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h5 className="font-semibold">{title}</h5>
            <p className="text-xs text-gray-500 mt-1">{desc}</p>
          </div>
          <div className="text-right">
            <div className="font-semibold">{price}</div>
            <a href={"https://wa.me/91YOURNUMBER?text=I%20want%20to%20order%20"+encodeURIComponent(title)} className="block mt-2 text-xs text-bakery-pink">Quick order</a>
          </div>
        </div>
      </div>
    </div>
  )
}
