import { Link } from 'react-router-dom'

interface NavbarProps {
  variant?: 'glass' | 'light'
}

export default function Navbar({ variant = 'glass' }: NavbarProps) {
  const links = ['Story', 'Investing', 'Building', 'Advisory']

  if (variant === 'light') {
    return (
      <div className="bg-white border-b border-gray-100 px-4 md:px-12 lg:px-16 py-4">
        <nav className="flex items-center justify-between">
          <span className="text-2xl font-semibold tracking-tight text-gray-900">
            VEX
          </span>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <Link
            to="/contact"
            className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors inline-block"
          >
            Start a Chat
          </Link>
        </nav>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-12 lg:px-16 pt-6">
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

        <Link
          to="/contact"
          className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors inline-block"
        >
          Start a Chat
        </Link>
      </nav>
    </div>
  )
}
