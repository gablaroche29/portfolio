export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-24">
      <h2 className="text-2xl font-semibold mb-6">
        Let’s talk
      </h2>

      <a
        href="mailto:youremail@example.com"
        className="underline underline-offset-4"
      >
        youremail@example.com
      </a>

      <div className="mt-4 flex gap-4 text-sm text-muted">
        <a href="#" className="hover:text-text">GitHub</a>
        <a href="#" className="hover:text-text">LinkedIn</a>
        <a href="#" className="hover:text-text">Itch.io</a>
      </div>
    </section>
  )
}
