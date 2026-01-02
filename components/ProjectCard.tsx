type Props = {
  title: string
  description: string
  type: string
}

export default function ProjectCard({ title, description, type }: Props) {
  return (
    <div className="border border-border rounded-lg p-6 hover:border-text transition-colors">
      <span className="text-xs text-muted uppercase">
        {type}
      </span>

      <h3 className="mt-2 font-medium">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted">
        {description}
      </p>

      <span className="inline-block mt-6 text-sm underline underline-offset-4">
        View case study
      </span>
    </div>
  )
}
