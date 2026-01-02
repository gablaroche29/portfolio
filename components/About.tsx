import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-6">
      <SectionHeader title="About" />

      <p className="max-w-xl text-muted">
        I’m a Web, Mobile & Game Development student with a strong interest
        in gameplay systems, interaction design, and clean interfaces.
      </p>
    </section>
  )
}
