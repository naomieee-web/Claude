import { ReactNode } from 'react'
import useInView from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  distance?: number
  className?: string
}

function Reveal({ children, delay = 0, distance = 20, className }: RevealProps) {
  const { ref, inView } = useInView(0.15)

  return (
    <div
      ref={ref}
      className={className}
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

interface Member {
  name: string
  role: string
  img: string
}

const members: Member[] = [
  { name: 'Alex Monroe', role: 'Managing Partner', img: '/team/team-1.jpg' },
  { name: 'Priya Nair', role: 'Venture Partner', img: '/team/team-2.jpg' },
  { name: 'James Okafor', role: 'Head of Building', img: '/team/team-3.jpg' },
  { name: 'Sasha Lev', role: 'Principal, Investments', img: '/team/team-4.jpg' },
  { name: 'Mei Lin', role: 'Advisory Lead', img: '/team/team-5.jpg' },
  { name: 'Tomás Reyes', role: 'Platform & Ops', img: '/team/team-6.jpg' },
]

const arc = [
  { y: 60, size: 'w-36 h-48' },
  { y: 30, size: 'w-40 h-56' },
  { y: 0, size: 'w-44 h-64' },
  { y: 0, size: 'w-44 h-64' },
  { y: 30, size: 'w-40 h-56' },
  { y: 60, size: 'w-36 h-48' },
]

function PhotoCard({
  member,
  position,
}: {
  member: Member
  position: number
}) {
  const { y, size } = arc[position]

  return (
    <div
      className={`${size} rounded-2xl overflow-hidden shadow-md relative flex-shrink-0`}
      style={{ transform: `translateY(${y}px)` }}
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3">
        <div className="text-white text-xs font-medium">{member.name}</div>
        <div className="text-white/70 text-xs">{member.role}</div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section className="bg-white border-t border-gray-100 px-6 md:px-12 lg:px-16 py-12 lg:py-16 pb-20 lg:pb-32">
      <div className="flex flex-col items-center text-center">
        <Reveal delay={0} distance={20}>
          <span className="bg-gray-100 border border-gray-200 rounded-full px-4 py-1 text-xs text-gray-400 tracking-widest uppercase inline-block mb-6">
            Meet The Team
          </span>
        </Reveal>

        <Reveal delay={150} distance={24}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 max-w-2xl"
            style={{ letterSpacing: '-0.04em' }}
          >
            The people behind
            <br />
            the vision.
          </h2>
        </Reveal>

        <Reveal delay={300} distance={20}>
          <p className="text-base text-gray-500 mt-4 max-w-lg">
            A team of builders, investors and operators
            <br />
            who&apos;ve done it before.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-row items-end justify-center gap-3 mt-8">
        {members.map((member, i) => (
          <Reveal key={member.name} delay={450 + i * 150} distance={20}>
            <PhotoCard member={member} position={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
