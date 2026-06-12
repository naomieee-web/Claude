import { ReactNode } from 'react'
import useInView from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  distance?: number
}

function Reveal({ children, delay = 0, distance = 20 }: RevealProps) {
  const { ref, inView } = useInView(0.15)

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${distance}px)`,
        transition: 'opacity 700ms ease, transform 700ms ease',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface Company {
  name: string
  color: string
}

const row1: Company[] = [
  { name: 'Arcflow', color: 'bg-purple-400' },
  { name: 'Nuvelo', color: 'bg-yellow-400' },
  { name: 'Kastro', color: 'bg-pink-400' },
  { name: 'Meridian', color: 'bg-blue-400' },
  { name: 'Lumyx', color: 'bg-green-400' },
  { name: 'Orbita', color: 'bg-orange-400' },
  { name: 'Fynder', color: 'bg-indigo-400' },
  { name: 'Zenth', color: 'bg-rose-400' },
]

const row2: Company[] = [
  { name: 'Quorra', color: 'bg-amber-400' },
  { name: 'Strato', color: 'bg-teal-400' },
  { name: 'Vexar', color: 'bg-violet-400' },
  { name: 'Plenio', color: 'bg-cyan-400' },
  { name: 'Drifto', color: 'bg-red-400' },
  { name: 'Halcyn', color: 'bg-lime-400' },
  { name: 'Bloqx', color: 'bg-fuchsia-400' },
  { name: 'Nexara', color: 'bg-sky-400' },
]

function LogoCard({ name, color }: Company) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3 min-w-[180px]">
      <div
        className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-xs font-semibold text-white`}
      >
        {name[0]}
      </div>
      <span className="text-sm font-medium text-gray-200">{name}</span>
    </div>
  )
}

function MarqueeRow({
  companies,
  direction,
}: {
  companies: Company[]
  direction: 'left' | 'right'
}) {
  const items = [...companies, ...companies]

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 w-max ${
          direction === 'left' ? 'marquee-left' : 'marquee-right'
        } hover:[animation-play-state:paused]`}
      >
        {items.map((company, i) => (
          <LogoCard key={`${company.name}-${i}`} {...company} />
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden bg-gray-950 border-t border-white/10 px-6 md:px-12 lg:px-16 py-12 lg:py-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none bg-purple-600/20 blur-[140px] rounded-full w-[700px] h-[300px]" />
      <div className="absolute top-40 left-2/3 pointer-events-none bg-blue-600/10 blur-[120px] rounded-full w-[500px] h-[200px]" />

      <div className="relative z-10">
      <Reveal delay={0} distance={20}>
        <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1 text-xs text-gray-400 tracking-widest uppercase inline-block mb-6">
          Our Portfolio
        </span>
      </Reveal>

      <Reveal delay={150} distance={24}>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal text-white max-w-2xl"
          style={{ letterSpacing: '-0.04em' }}
        >
          Backing the builders of tomorrow.
        </h2>
      </Reveal>

      <Reveal delay={300} distance={20}>
        <p className="text-base text-gray-400 mt-4 mb-8 max-w-lg">
          A growing portfolio of companies redefining their industries.
        </p>
      </Reveal>

      <div className="flex flex-col gap-8">
        <Reveal delay={450} distance={0}>
          <MarqueeRow companies={row1} direction="left" />
        </Reveal>

        <Reveal delay={600} distance={0}>
          <MarqueeRow companies={row2} direction="right" />
        </Reveal>
      </div>
      </div>
    </section>
  )
}
