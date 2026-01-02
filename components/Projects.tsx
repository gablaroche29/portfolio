import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-content px-6 py-24">
      <h2 className="text-2xl font-semibold mb-12">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Top-Down Dungeon Prototype"
          description="Combat-focused action RPG prototype built in Godot."
          type="Game Project"
        />

        <ProjectCard
          title="Minimal Portfolio Platform"
          description="Monochrome portfolio inspired by Stripe.dev."
          type="Web Project"
        />

        <ProjectCard
          title="Enemy AI Experiment"
          description="State machines and combat behaviors for action games."
          type="Game Systems"
        />

        <ProjectCard
          title="UI System for Indie Games"
          description="Reusable UI rules and layouts for game menus."
          type="UI / UX"
        />
      </div>
    </section>
  )
}
