import { Link } from 'react-router-dom'

const columns = [
  {
    heading: 'Company',
    links: ['Story', 'Team', 'Portfolio', 'Careers'],
  },
  {
    heading: 'What We Do',
    links: ['Investing', 'Building', 'Advisory', 'FAQ'],
  },
  {
    heading: 'Connect',
    links: ['hello@vex.vc', 'Twitter / X', 'LinkedIn', 'AngelList'],
  },
]

const tags = [
  { label: 'Vision', color: 'bg-yellow-300', pos: 'top-[10%] left-[5%]', duration: '3.2s', delay: '0s' },
  { label: 'Capital', color: 'bg-purple-300', pos: 'top-[20%] left-[25%]', duration: '4.1s', delay: '0.5s' },
  { label: 'Conviction', color: 'bg-pink-300', pos: 'top-[8%] left-[50%]', duration: '5.3s', delay: '1.2s' },
  { label: 'Execution', color: 'bg-green-300', pos: 'top-[35%] left-[38%]', duration: '3.8s', delay: '0.8s' },
  { label: 'Scalability', color: 'bg-blue-300', pos: 'top-[15%] right-[20%]', duration: '4.6s', delay: '1.6s' },
  { label: 'Results', color: 'bg-orange-300', pos: 'top-[40%] right-[35%]', duration: '5.8s', delay: '0.3s' },
  { label: 'Simplicity', color: 'bg-teal-300', pos: 'top-[30%] left-[12%]', duration: '3.5s', delay: '1.9s' },
  { label: 'Reliability', color: 'bg-red-300', pos: 'top-[18%] right-[8%]', duration: '4.9s', delay: '1s' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-4 md:px-12 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
        <div>
          <div className="text-white font-semibold text-2xl tracking-tight mb-3">
            VEX
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[180px]">
            Shaping tomorrow with vision and action.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-white text-black text-xs font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Start a Chat
          </Link>
        </div>

        {columns.map(({ heading, links }) => (
          <div key={heading}>
            <div className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              {heading}
            </div>
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 text-sm hover:text-white transition block mb-3"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-white/10" />

      <div className="relative w-full overflow-hidden py-12 bg-black h-64">
        <div className="text-[200px] font-bold text-white/5 select-none absolute bottom-0 left-1/2 -translate-x-1/2 leading-none pointer-events-none">
          VEX
        </div>
        {tags.map(({ label, color, pos, duration, delay }) => (
          <span
            key={label}
            className={`hidden md:block float-tag absolute rounded-full px-5 py-2 text-sm font-medium text-black ${color} ${pos}`}
            style={{ animationDuration: duration, animationDelay: delay }}
          >
            {label}
          </span>
        ))}
        <div className="flex flex-wrap justify-center gap-3 md:hidden relative z-10">
          {tags.map(({ label, color }) => (
            <span
              key={label}
              className={`rounded-full px-5 py-2 text-sm font-medium text-black ${color}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center py-6">
        <span className="text-gray-600 text-xs">
          © 2026 VEX Ventures. All rights reserved.
        </span>
        <span className="text-gray-600 text-xs">
          Investing. Building. Advisory.
        </span>
      </div>
    </footer>
  )
}
