type Props = {
  title: string
}

export default function SectionHeader({ title }: Props) {
  return (
    <div className="flex items-center gap-4 mb-4 mt-8">
      <span className="text-xs uppercase tracking-wide">
        / {title}
      </span>

      <div className="h-px flex-1 bg-text" />
    </div>
  )
}
