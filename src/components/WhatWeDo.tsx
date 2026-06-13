import { ReactNode } from 'react'
import { TrendingUp, Layers, Compass, LucideIcon } from 'lucide-react'
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

interface Pillar {
  icon: LucideIcon
  title: string
  body: string
  delay: number
  iconBg: string
  iconColor: string
}

const pillars: Pillar[] = [
  {
    icon: TrendingUp,
    title: 'Investing',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500',
    body: 'We back early-stage founders with capital and conviction — partnering at the earliest moments, when belief matters most and the path is anything but obvious.',
    delay: 450,
  },
  {
    icon: Layers,
    title: 'Building',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500',
    body: 'We build ventures and products in-house, taking ideas from zero to one with disciplined craft, focused teams, and an obsession with what endures.',
    delay: 600,
  },
  {
    icon: Compass,
    title: 'Advisory',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-500',
    body: 'We provide strategic counsel for ambitious companies navigating inflection points — clarity on direction, structure, and the decisions that define trajectories.',
    delay: 750,
  },
]

const stats = [
  { value: '$2.4B+', label: 'Ventures Backed' },
  { value: '40+', label: 'Portfolio Companies' },
  { value: '12', label: 'Years of Edge' },
]

export default function WhatWeDo() {
  return (
    <section className="bg-white px-4 md:px-12 lg:px-16 py-12 lg:py-16">
      <Reveal delay={0} distance={20}>
        <span className="bg-gray-100 border border-gray-200 rounded-full px-4 py-1 text-xs text-gray-400 tracking-widest uppercase inline-block mb-6">
          What We Do
        </span>
      </Reveal>

      <Reveal delay={150} distance={24}>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900"
          style={{ letterSpacing: '-0.04em' }}
        >
          We operate at the intersection
          <br />
          of capital, craft, and conviction.
        </h2>
      </Reveal>

      <Reveal delay={300} distance={20}>
        <p className="text-base text-gray-500 mt-4 mb-8">
          Three distinct practices. One unified thesis.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map(({ icon: Icon, title, body, delay, iconBg, iconColor }) => (
          <Reveal key={title} delay={delay} distance={30}>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:border-gray-200 transition-all duration-300 flex flex-col gap-6 h-full">
              <div>
                <div className={`rounded-xl p-3 ${iconBg} w-fit mb-2`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{title}</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={900} distance={20}>
        <div className="border-t border-gray-200 mt-8 pt-10">
          <div className="grid grid-cols-3">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-light text-gray-900">{value}</div>
                <div className="text-xs text-gray-400 tracking-widest uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
