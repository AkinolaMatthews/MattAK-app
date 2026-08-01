const email = "akinolamatthews522@gmail.com"
const whatsappNumber = "2348083326661" // no + or leading 0, just country code + number
const linkedin = "https://www.linkedin.com/in/matthews-akinola-088751350"
const github = "https://github.com/AkinolaMatthews"
const instagram = "https://www.instagram.com/akinolamatthews"

function Contact() {
  return (
    <section className="bg-slate-950 text-white px-6 md:px-20 py-24 border-t border-slate-800">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-emerald-400 text-sm font-medium mb-2">
          // Feel free to reach out for collaborations or inquiries
        </p>
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-slate-400 mb-10">
          Have a project in mind or just want to connect? I'm always open to
          discussing new opportunities.
        </p>

        <a
          href={`mailto:${email}`}
          className="inline-block bg-emerald-400 text-slate-950 font-semibold px-8 py-3 rounded-full hover:bg-emerald-300 transition-colors"
        >
          Say Hello
        </a>
      </div>

      <div className="flex justify-center gap-6 mt-16 text-slate-400 text-sm flex-wrap">
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello%20Matthew%2C%20I%27m%20reaching%20out%20from%20your%20portfolio.`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-400 transition-colors"
        >
          WhatsApp
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-400 transition-colors"
        >
          GitHub
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-400 transition-colors"
        >
          LinkedIn
        </a>

        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-400 transition-colors"
        >
          Instagram
        </a>

        <a
          href={`mailto:${email}`}
          className="hover:text-emerald-400 transition-colors"
        >
          Email
        </a>
      </div>

      <p className="text-center text-slate-600 text-xs mt-16">
        © {new Date().getFullYear()} Akinola Matthew. Built with React & Tailwind CSS.
      </p>
    </section>
  )
}

export default Contact