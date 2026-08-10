import { useState } from 'react'
import {
  HiOutlineRocketLaunch, HiOutlineMapPin, HiOutlinePaperAirplane, HiOutlineShieldCheck,
} from 'react-icons/hi2'
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import { supabase } from '../utils/lib/supabase'
// ...keep other imports as they were

const email = "akinolamatthews522@gmail.com"
const whatsappNumber = "2348083326661"
const linkedin = "https://www.linkedin.com/in/matthews-akinola-088751350"
const github = "https://github.com/AkinolaMatthews"
const instagram = "https://www.instagram.com/akinolamatthews"

const socials = [
  { icon: FaLinkedin, href: linkedin, label: "LinkedIn", color: "bg-blue-600" },
  { icon: FaGithub, href: github, label: "GitHub", color: "bg-slate-700" },
  { icon: FaInstagram, href: instagram, label: "Instagram", color: "bg-pink-600" },
]

function Contact() {
  const [name, setName] = useState('')
  const [emailVal, setEmailVal] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const { error } = await supabase
      .from('messages')
      .insert([{ name, email: emailVal, phone, subject, message }])

    setSubmitting(false)

    if (!error) {
      setSent(true)
      setName('')
      setEmailVal('')
      setPhone('')
      setSubject('')
      setMessage('')
      setTimeout(() => setSent(false), 4000)
    } else {
      alert('Something went wrong sending your message. Please try again or email me directly.')
    }
  }

  return (
    <section id="contact" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 transition-colors">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/30 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span className="text-sky-600 dark:text-sky-300 text-xs font-medium">Let's connect ideas</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Transform your vision into digital reality. Let's create something extraordinary together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="space-y-6">
          <ScrollReveal>
            <div className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-400 flex items-center justify-center text-white flex-shrink-0">
                  <HiOutlineRocketLaunch className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Ready to work together?</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Let's turn your idea into a live, working website
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                I build complete digital solutions — let's discuss your next project.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Full-Stack Development", "WordPress & E-commerce", "Custom Integrations"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`mailto:${email}`}
                className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white mb-3">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-pink-600 dark:text-pink-400 mb-1">E-mail</p>
                <p className="font-medium text-sm mb-2">Direct message</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs break-all">{email}</p>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Matthew%2C%20I%27m%20reaching%20out%20from%20your%20portfolio.`}
                target="_blank"
                className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white mb-3">
                  <FaWhatsapp className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">WhatsApp</p>
                <p className="font-medium text-sm mb-2">Instant chat</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">+234 808 332 6661</p>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white">
                  <HiOutlineMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Location</p>
                  <p className="font-semibold text-sm">Nigeria</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Available for remote work</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">GMT+1</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-5">
              <p className="font-semibold text-sm mb-3">Connect with me</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-6 md:p-8 h-full">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-violet-400/10 border border-violet-400/30 text-violet-600 dark:text-violet-300 mb-3">
                <HiOutlinePaperAirplane className="w-3.5 h-3.5" />
                Send your message
              </span>
              <h3 className="text-xl font-bold">Let's chat</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Transform your idea into reality</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium mb-1 block">Full name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-emerald-400"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-medium mb-1 block">Email</label>
                  <input
                    type="email"
                    value={emailVal}
                    onChange={(e) => setEmailVal(e.target.value)}
                    placeholder="Email"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-emerald-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium mb-1 block">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium mb-1 block">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium mb-1 block">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-emerald-400"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3 rounded-full transition-transform duration-200 ${submitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <HiOutlinePaperAirplane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {sent && (
                <p className="text-center text-sm text-emerald-600 dark:text-emerald-400">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              )}

              <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <HiOutlineShieldCheck className="w-4 h-4" />
                Your information is secure and will not be shared.
              </p>
            </form>
          </div>
        </ScrollReveal>
      </div>

      <p className="text-center text-slate-400 dark:text-slate-600 text-xs mt-16">
        © {new Date().getFullYear()} Akinola Matthew. Built with React & Tailwind CSS.
      </p>
    </section>
  )
}

export default Contact