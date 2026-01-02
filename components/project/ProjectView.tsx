import { projects } from "@/data/projects"
import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"

type Props = {
  id: string
}

export default function ProjectView({ id }: Props) {
  const project = projects.find(p => p.id === id)
  if (!project) {
    return <p className="text-muted">Project not found.</p>
  }

  return (
    <div className="">
      <section>
        <span className="text-xs uppercase text-muted">
          {project.type}
        </span>
        <h1 className="mt-2 text-3xl font-semibold">
          {project.title}
        </h1>
        <p className="mt-2 max-w-xl text-muted">
          {project.subtitle}
        </p>
      </section>

      <section>
        <SectionHeader title="Overview" />
        <p className="max-w-xl text-muted">
          {project.overview}
        </p>
      </section>

      <section>
        <SectionHeader title="Key Features" />
        <ul className="list-disc list-inside space-y-2 text-muted">
          {project.features.map(f => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      {project.media && (
        <section>
          <SectionHeader title="Media" />
          <div className="border border-text p-2 max-w-xl">
            {project.media.type === "video" ? (
              <video autoPlay loop muted playsInline className="w-full">
                <source src={project.media.src} />
              </video>
            ) : (
              <Image src={project.media.src} alt={project.title} className="w-full" width={800} height={600} />
            )}
          </div>
        </section>
      )}

      <section>
        <SectionHeader title="Technical Details" />
        <dl className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          {Object.entries(project.technical).map(([k, v]) => (
            <div key={k}>
              <dt className="text-muted capitalize">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <SectionHeader title="Outcome" />
        <p className="max-w-xl text-muted">
          {project.outcome}
        </p>
      </section>
    </div>
  )
}
