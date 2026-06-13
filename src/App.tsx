import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import AnimatedHeading from './components/AnimatedHeading'
import FadeIn from './components/FadeIn'
import WhatWeDo from './components/WhatWeDo'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Contact from './components/Contact'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

function Home() {
  return (
    <main className="bg-black text-white w-full max-w-[100vw] overflow-x-hidden scroll-smooth">
      <div className="relative h-[100svh] overflow-hidden w-full">
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col h-full">
        <Navbar />

        <div className="flex-1 flex flex-col justify-end pb-16 md:justify-center px-4 md:px-12 lg:px-16 md:pb-12 lg:pb-16">
          <div className="flex flex-col">
            <div>
              <AnimatedHeading
                text={'Shaping tomorrow with vision and action.'}
                className="max-w-2xl text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
                style={{ letterSpacing: '-0.04em' }}
                initialDelay={200}
                charDelay={30}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="max-w-lg text-left text-base md:text-lg text-gray-300 mb-5">
                  We back visionaries and craft ventures that define what comes
                  next.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block"
                  >
                    Start a Chat
                  </Link>
                  <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors">
                    Explore Now
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
      </div>

      <WhatWeDo />

      <Team />

      <Portfolio />

      <CTA />

      <FAQ />

      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
