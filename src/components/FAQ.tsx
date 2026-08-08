import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "I build complete, functional websites end-to-end — from design and layout to backend setup and deployment. This includes custom React/TypeScript apps, WordPress sites, and eCommerce stores.",
  },
  {
    question: "What's your tech stack?",
    answer:
      "On the frontend: React, TypeScript, Tailwind CSS, and Vite. I also work extensively with WordPress, Elementor, and WooCommerce for CMS/eCommerce projects, along with PHP and JavaScript for custom functionality.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes — I've delivered projects like a French real estate platform with multilingual support, so remote collaboration across time zones and languages is something I'm comfortable with.",
  },
  {
    question: "Can I see live examples of your work?",
    answer:
      "Yes — check out the Projects section above. TatianaMunoz.com and Fore It Golf are both live, and MesBiensÀVendre is live but still being finished.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "The easiest ways are email or WhatsApp — both are linked in the Contact section below, or you can reach out via LinkedIn.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 transition-colors">
      <h2 className="text-4xl font-bold mb-2">Common Questions</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-12">
        Answers to what people usually ask before reaching out.
      </p>

      <div className="max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={faq.question}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {faq.question}
                <span className="text-slate-400">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ