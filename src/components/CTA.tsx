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

export default function CTA() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-16 py-12 lg:py-16">
      <div className="text-center flex flex-col items-center">
        <Reveal delay={0} distance={20}>
          <span className="bg-gray-100 border border-gray-200 rounded-full px-4 py-1 text-xs text-gray-400 tracking-widest uppercase inline-block mb-6">
            Let&apos;s Build Together
          </span>
        </Reveal>

        <Reveal delay={150} distance={24}>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 max-w-2xl mx-auto"
            style={{ letterSpacing: '-0.04em' }}
          >
            Ready to shape
            <br />
            what comes next?
          </h2>
        </Reveal>

        <Reveal delay={300} distance={20}>
          <p className="text-base text-gray-500 mt-6 mb-10 max-w-lg mx-auto">
            Whether you&apos;re building, raising, or looking for a strategic
            edge — we want to hear from you.
          </p>
        </Reveal>

        <Reveal delay={450} distance={20}>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Start a Chat
            </button>
            <button className="border border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </Reveal>

        <div className="mt-16 w-full">
          <Reveal delay={600} distance={20}>
            <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/cta-image.jpg"
                alt="A river winding through a mountain valley"
                className="w-full h-full object-cover object-center block"
              />
              <div className="bg-gradient-to-b from-white/40 to-transparent h-16 absolute top-0 left-0 right-0 pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
