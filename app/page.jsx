export default function Home() {
  return (
    <div className="bg-amber-50 text-amber-900 min-h-screen">
      {/* Header */}
      <header className="bg-amber-100 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Tales of the Cake</h1>
          <nav className="hidden md:flex space-x-6 font-medium">
            <a href="#home" className="hover:text-amber-600">Home</a>
            <a href="#menu" className="hover:text-amber-600">Menu</a>
            <a href="#about" className="hover:text-amber-600">About</a>
            <a href="#contact" className="hover:text-amber-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 text-center bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="flex flex-col items-center">
          {/* Cake Illustration */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="h-20 w-20 mb-4">
            <rect x="20" y="70" width="80" height="30" rx="6" fill="#F59E0B" stroke="#78350F" strokeWidth="2"/>
            <rect x="30" y="50" width="60" height="25" rx="5" fill="#FDE68A" stroke="#78350F" strokeWidth="2"/>
            <rect x="40" y="35" width="40" height="20" rx="4" fill="#FCD34D" stroke="#78350F" strokeWidth="2"/>
            <rect x="58" y="15" width="4" height="20" fill="#9CA3AF"/>
            <ellipse cx="60" cy="12" rx="6" ry="8" fill="#FBBF24" stroke="#B45309" strokeWidth="1"/>
          </svg>

          {/* Brand Name + Tagline */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150" className="w-full max-w-2xl">
            <text
              x="50%"
              y="60"
              textAnchor="middle"
              fontFamily="cursive"
              fontSize="48"
              fill="#B45309"
              fontWeight="bold"
            >
              Tales of the Cake
            </text>
            <text
              x="50%"
              y="110"
              textAnchor="middle"
              fontFamily="serif"
              fontSize="22"
              fill="#78350F"
              fontStyle="italic"
            >
              Freshly Baked Happiness
            </text>
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Chocolate Cake</h3>
            <p className="text-amber-700">Rich, moist, and irresistible.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Vanilla Delight</h3>
            <p className="text-amber-700">Classic vanilla with a modern twist.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Red Velvet</h3>
            <p className="text-amber-700">Soft, creamy, and simply elegant.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-amber-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-amber-800">
            At <b>Tales of the Cake</b>, every cake tells a story. We blend passion, quality,
            and love into every recipe, ensuring your celebrations are filled
            with sweetness and joy.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">📧 Email: <a href="mailto:talesofthecake@gmail.com" className="text-amber-700 hover:underline">talesofthecake@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:+919931052652" className="text-amber-700 hover:underline">+91 9931052652</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-6 text-center">
        <p>© {new Date().getFullYear()} Tales of the Cake. All rights reserved.</p>
      </footer>
    </div>
  );
}
