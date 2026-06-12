import { ReactNode, useState } from 'react'
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

const faqs = [
  {
    q: 'What stage do you typically invest at?',
    a: 'We focus primarily on pre-seed and seed stage companies, though we occasionally lead or participate in Series A rounds when the founder and thesis align.',
  },
  {
    q: 'Do you invest outside your listed sectors?',
    a: 'Our core focus is fintech, SaaS, and consumer — but we follow exceptional founders first. If the vision is strong enough, sector is secondary.',
  },
  {
    q: 'How long does your investment process take?',
    a: "We move fast. Most of our decisions are made within 2–3 weeks of a first meeting. We respect founders' time and don't drag processes out.",
  },
  {
    q: 'What does your advisory practice look like?',
    a: "We embed with companies at inflection points — fundraising, GTM pivots, hiring key leadership. It's hands-on, not a retainer relationship.",
  },
  {
    q: "Can I reach out if I'm not raising right now?",
    a: "Absolutely. Some of our best relationships started long before a round. We're always happy to connect with builders thinking about what's next.",
  },
  {
    q: 'What makes VEX different from other funds?',
    a: 'We operate across investing, building, and advisory simultaneously. That means our portfolio companies get more than capital — they get an active partner.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-black px-4 md:px-12 lg:px-16 py-16 lg:py-24">
      <div className="absolute top-0 left-0 pointer-events-none bg-purple-500/15 blur-[160px] rounded-full w-[500px] h-[250px]" />
      <div className="absolute bottom-0 right-0 pointer-events-none bg-cyan-500/10 blur-[140px] rounded-full w-[400px] h-[200px]" />

      <div className="relative z-10">
        <Reveal delay={0} distance={20}>
          <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1 text-xs text-gray-400 tracking-widest uppercase inline-block mb-6">
            FAQ
          </span>
        </Reveal>

        <Reveal delay={150} distance={24}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal max-w-2xl mb-12"
            style={{
              letterSpacing: '-0.04em',
              background:
                'linear-gradient(135deg, #ffffff 0%, #a0a0a0 40%, #ffffff 60%, #707070 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Frequently Asked
            <br />
            Questions.
          </h2>
        </Reveal>

        <div>
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={300 + i * 100} distance={20}>
              <div
                className="border-b border-white/10 py-5 transition-all duration-500"
                style={{
                  boxShadow:
                    open === i ? '0 0 30px rgba(168, 85, 247, 0.08)' : 'none',
                }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className={`font-medium text-base break-words ${
                      open === i
                        ? 'bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'
                        : 'text-white'
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`text-gray-400 text-xl transition-transform duration-300 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    open === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed mt-3 pb-2 break-words">
                    {item.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
