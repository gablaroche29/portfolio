import { Project } from "@/data/projects"
import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"


export default function ProjectView(project: Project) {
  if (!project) return <p className="font-mono text-red-500 underline">ERROR: 404_PROJECT_NOT_FOUND</p>

  return (
    <div className="space-y-12 font-mono">
      <section className="space-y-4">
        <div className="inline-block px-2 py-0.5 border border-text text-[10px] uppercase font-bold">
          Type: {project.type}
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
          {project.title}
        </h1>
        <p className="text-lg italic opacity-80 border-l-4 border-text pl-4">
          {project.subtitle}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section>
            <SectionHeader title="01_Overview" />
            <p className="leading-relaxed text-text/90">
              {project.overview}
            </p>
          </section>

          <section>
            <SectionHeader title="02_Key_Features" />
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-text/40">[{i+1}]</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-8">
            <section>
                <SectionHeader title="Build_Log" />
                <dl className="space-y-4 text-xs">
                    {Object.entries(project.technical).map(([k, v]) => (
                        <div key={k} className="border-b border-text/10 pb-2">
                            <dt className="text-text/50 uppercase mb-1 tracking-widest">{k}</dt>
                            <dd className="font-bold text-sm">{v}</dd>
                        </div>
                    ))}
                </dl>
            </section>
        </aside>
      </div>

      {project.media && (
        <section>
          <SectionHeader title="03_Visual_Documentation" />
          <div className="mt-4 border-2 border-text bg-text p-1 shadow-inner">
            <div className="bg-bg p-1">
                {project.media.type === "video" ? (
                <video autoPlay loop muted playsInline className="w-full grayscale contrast-125">
                    <source src={project.media.src} />
                </video>
                ) : (
                <Image src={project.media.src} alt={project.title} className="w-full grayscale" width={800} height={600} />
                )}
            </div>
          </div>
        </section>
      )}

      <section className="pb-8">
        <SectionHeader title="04_Outcome" />
        <div className="bg-text/5 p-6 border-l-2 border-text">
            <p className="text-sm">
            {project.outcome}
            </p>
        </div>
      </section>
    </div>
  )
}