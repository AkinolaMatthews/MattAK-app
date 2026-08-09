import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

const email = "akinolamatthews522@gmail.com"
const whatsappNumber = "2348083326661"
const linkedin = "https://www.linkedin.com/in/matthews-akinola-088751350"
const github = "https://github.com/AkinolaMatthews"
const instagram = "https://www.instagram.com/akinolamatthews"

const socials = [
  { icon: FaWhatsapp, href: `https://wa.me/${whatsappNumber}?text=Hello%20Matthew%2C%20I%27m%20reaching%20out%20from%20your%20portfolio.`, label: "WhatsApp" },
  { icon: FaGithub, href: github, label: "GitHub" },
  { icon: FaLinkedin, href: linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: instagram, label: "Instagram" },
  { icon: FaEnvelope, href: `mailto:${email}`, label: "Email" },
]

function Contact() {
  return (
    <section id="contact" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-2">
          Feel free to reach out for collaborations or inquiries
        </p>
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Have a project in mind or just want to connect? I'm always open to
          discussing new opportunities.
        </p>

        <a
          href={`mailto:${email}`}
          className="inline-block bg-emerald-500 dark:bg-emerald-400 text-white dark:text-slate-950 font-semibold px-8 py-3 rounded-full hover:bg-emerald-400 dark:hover:bg-emerald-300 hover:scale-105 transition-all duration-200"
        >
          Say Hello
        </a>
      </div>

      <div className="flex justify-center gap-5 mt-16 flex-wrap">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-400 hover:scale-110 transition-all duration-200"
          >
            <s.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <p className="text-center text-slate-400 dark:text-slate-600 text-xs mt-16">
        © {new Date().getFullYear()} Akinola Matthew. Built with React & Tailwind CSS.
      </p>
    </section>
  )
}

export default Contact