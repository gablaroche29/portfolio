import SectionHeader from "../SectionHeader"
import ProjectCard from "./ProjectCard"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-content px-6 py-6">
      <SectionHeader title="01_Selected_Work" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            type={project.type}
          />
        ))}
      </div>
    </section>
  )
}
