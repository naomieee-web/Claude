export default function Navbar() {
  const links = ['Story', 'Investing', 'Building', 'Advisory']

  return (
    <div className="px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        <span className="text-2xl font-semibold tracking-tight">VEX</span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
          Start a Chat
        </button>
      </nav>
    </div>
  )
}
