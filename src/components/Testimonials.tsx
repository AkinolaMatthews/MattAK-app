import { useState } from 'react'

type Testimonial = {
  name: string
  role: string
  quote: string
}

const initialTestimonials: Testimonial[] = [
  {
    name: "Tatiana Munoz",
    role: "TatianaMunoz.com",
    quote:
      "Matthew did an excellent job bringing my website together. He was professional, responsive, and paid attention to the little details. The final website looks clean, modern, and exactly like what I needed for my business.",
  },
  {
    name: "Engr. Andrew",
    role: "Indigenous Contractor Association (IndigeContAss)",
    quote:
      "Working with Matthew was a great experience. He understood what we wanted for the website and handled the development professionally. He was also patient with our revisions and made sure everything worked properly.",
  },
  {
    name: "Bruce Breton",
    role: "MyStateMLS",
    quote:
      "Matthew was very knowledgeable and easy to work with. He handled the website development and integration work efficiently and was always willing to troubleshoot issues until we got the desired result.",
  },
  {
    name: "Amber W. McIntyre",
    role: "M4L Events",
    quote:
      "Matthew did a fantastic job on our website. He was reliable, creative, and very responsive throughout the project. I'm really happy with how professional and user-friendly the finished site looks.",
  },
  {
    name: "Anonymous",
    role: "Client",
    quote:
      "Matthew is very good at what he does. He understood the project quickly, communicated clearly, and delivered a website that exceeded my expectations.",
  },
  {
    name: "Anonymous",
    role: "Client",
    quote:
      "I had a great experience working with Matthew. He was professional, patient, and knowledgeable. Whenever an issue came up, he was quick to find a solution.",
  },
  {
    name: "Anonymous",
    role: "Client",
    quote:
      "Excellent work from start to finish. Matthew was dependable, paid attention to detail, and made the whole website development process much easier than I expected.",
  },
]

function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [quote, setQuote] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !quote.trim()) return

    setTestimonials([{ name, role: role || 'Client', quote }, ...testimonials])
    setName('')
    setRole('')
    setQuote('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="testimonials" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 transition-colors">
      <h2 className="text-4xl font-bold mb-2">Client Testimonials</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-12">
        What people have said about working with me.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="border border-slate-200 dark:border-slate-800 rounded-xl p-6"
          >
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
              "{t.quote}"
            </p>
            <p className="font-semibold text-sm">{t.name}</p>
            <p className="text-slate-500 dark:text-slate-500 text-xs">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="max-w-xl border border-slate-200 dark:border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm focus:outline-none focus:border-emerald-400"
            required
          />
          <input
            type="text"
            placeholder="Company / role (optional)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm focus:outline-none focus:border-emerald-400"
          />
          <textarea
            placeholder="Your review"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm focus:outline-none focus:border-emerald-400"
            required
          />
          <button
            type="submit"
            className="bg-emerald-500 dark:bg-emerald-400 text-white dark:text-slate-950 font-semibold px-6 py-2 rounded-full text-sm hover:bg-emerald-400 dark:hover:bg-emerald-300 transition-colors"
          >
            Submit Review
          </button>
          {submitted && (
            <p className="text-emerald-600 dark:text-emerald-400 text-sm">
              Thanks for your review!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Testimonials