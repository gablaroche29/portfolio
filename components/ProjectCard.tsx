type Props = {
  title: string
  description: string
  type: string
}

export default function ProjectCard({ title, description, type }: Props) {
  return (
    <div className="border border-text bg-bg hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex items-center justify-between gap-2 px-3 h-8 border-b border-text bg-subtle">
        <span className="ml-2 text-xs font-medium truncate">
          {title}.exe
        </span>

        <div className="flex gap-1">
          <span className="w-2 h-2 border border-text" />
          <span className="w-2 h-2 border border-text" />
          <span className="w-2 h-2 border border-text" />
        </div>
      </div>

      <div className="p-4">
        <span className="text-xs uppercase text-muted">
          {type}
        </span>

        <h3 className="mt-2 font-medium">
          {title}
        </h3>

        <p className="mt-2 text-sm text-muted">
          {description}
        </p>

        <span className="inline-block mt-4 text-sm underline underline-offset-4">
          View case study
        </span>
      </div>
    </div>
  )
}
