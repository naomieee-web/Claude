import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
  LucideIcon,
} from 'lucide-react'
import Navbar from './Navbar'

interface SlideInProps {
  children: ReactNode
  from?: 'left' | 'right' | 'up'
  delay?: number
}

function SlideIn({ children, from = 'left', delay = 0 }: SlideInProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const hidden =
    from === 'left'
      ? 'translateX(-20px)'
      : from === 'right'
        ? 'translateX(20px)'
        : 'translateY(20px)'

  return (
    <div
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translate(0, 0)' : hidden,
        transition: 'opacity 400ms ease, transform 400ms ease',
      }}
    >
      {children}
    </div>
  )
}

const details = [
  {
    icon: MapPin as LucideIcon,
    label: 'Address',
    value: '14 Innovation Drive, Victoria Island, Lagos, Nigeria',
    bg: 'bg-purple-100',
    fg: 'text-purple-500',
  },
  {
    icon: Phone as LucideIcon,
    label: 'Phone',
    value: '+234 901 234 5678',
    bg: 'bg-green-100',
    fg: 'text-green-500',
  },
  {
    icon: Mail as LucideIcon,
    label: 'Email',
    value: 'hello@vex.vc',
    bg: 'bg-blue-100',
    fg: 'text-blue-500',
  },
  {
    icon: Clock as LucideIcon,
    label: 'Hours',
    value: 'Monday – Friday, 9am – 6pm WAT',
    bg: 'bg-orange-100',
    fg: 'text-orange-500',
  },
]

const socials = [Twitter, Linkedin, Instagram]

const inputClass =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition bg-white'
const labelClass = 'text-xs text-gray-500 uppercase tracking-widest mb-2 block'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const [errors, setErrors] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const name = nameRef.current?.value.trim() ?? ''
    const email = emailRef.current?.value.trim() ?? ''
    const message = messageRef.current?.value.trim() ?? ''

    const newErrors = { name: '', email: '', message: '' }
    let valid = true

    if (!name) { newErrors.name = 'This field is required'; valid = false }
    if (!email) {
      newErrors.email = 'This field is required'; valid = false
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address'; valid = false
    }
    if (!message) { newErrors.message = 'This field is required'; valid = false }

    setErrors(newErrors)
    if (!valid) return

    // Clear fields and show success
    if (nameRef.current) nameRef.current.value = ''
    if (emailRef.current) emailRef.current.value = ''
    if (messageRef.current) messageRef.current.value = ''
    setSubmitted(true)
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar variant="light" />

      <div
        className="relative w-full h-48 md:h-64"
        style={{ backgroundImage: 'url(/contact-banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <SlideIn from="left">
            <div>
              <span className="bg-gray-100 border border-gray-200 rounded-full px-4 py-1 text-xs text-gray-400 tracking-widest uppercase inline-block mb-6">
                Get In Touch
              </span>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 max-w-sm"
                style={{ letterSpacing: '-0.04em' }}
              >
                Let&apos;s start a
                <br />
                conversation.
              </h1>

              <p className="text-gray-500 text-sm mt-4 mb-10 max-w-xs leading-relaxed">
                Whether you&apos;re a founder, investor, or operator —
                we&apos;d love to hear from you.
              </p>

              <div className="flex flex-col gap-6">
                {details.map(({ icon: Icon, label, value, bg, fg }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className={`w-4 h-4 ${fg}`} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                        {label}
                      </div>
                      <div className="text-gray-800 text-sm font-medium">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                {socials.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                  >
                    <Icon className="text-gray-500 w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </SlideIn>

          {/* Right column — form */}
          <SlideIn from="right" delay={200}>
            <div className="bg-white border border-gray-100 rounded-2xl p-4 md:p-8 shadow-sm overflow-visible">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl font-medium">
                    ✓
                  </div>
                  <p className="text-green-600 text-sm font-medium text-center">
                    Message sent! We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      ref={nameRef}
                      type="text"
                      placeholder="Alex Monroe"
                      className={inputClass}
                      onChange={() => setErrors((e) => ({ ...e, name: '' }))}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      ref={emailRef}
                      type="email"
                      placeholder="alex@company.com"
                      className={inputClass}
                      onChange={() => setErrors((e) => ({ ...e, email: '' }))}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Company</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      What are you looking for?
                    </label>
                    <div className="relative" style={{ position: 'relative', zIndex: 50 }}>
                      <select
                        size={1}
                        className={`w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition bg-white appearance-none cursor-pointer ${
                          hasValue ? 'text-gray-800' : 'text-gray-300'
                        }`}
                        defaultValue=""
                        onChange={(e) => setHasValue(e.target.value !== '')}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option>Investing</option>
                        <option>Building</option>
                        <option>Advisory</option>
                        <option>General Inquiry</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea
                      ref={messageRef}
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className={inputClass}
                      onChange={() => setErrors((e) => ({ ...e, message: '' }))}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition mt-2"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-3">
                    We typically respond within 24 hours
                  </p>
                </form>
              )}
            </div>
          </SlideIn>
        </div>

        {/* Map */}
        <SlideIn from="up" delay={400}>
          <div className="mt-16">
            <h2 className="text-gray-900 font-medium text-lg mb-4">Find Us</h2>
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.4219!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzE4LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                style={{ border: 0 }}
                className="h-64 md:h-[400px] w-full block"
                allowFullScreen
                loading="lazy"
                title="VEX office location — Victoria Island, Lagos"
              />
            </div>
          </div>
        </SlideIn>
      </main>
    </div>
  )
}
