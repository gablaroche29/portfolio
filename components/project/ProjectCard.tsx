"use client"

import { useState } from "react"
import Window from "../Window"
import ProjectView from "./ProjectView"

type Props = {
  id: string
  title: string
  description: string
  type: string
}

export default function ProjectCard({
  id,
  title,
  description,
  type,
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="
          border border-text bg-bg cursor-pointer
          transition-transform duration-300
          hover:-translate-y-1
        "
      >
        <div className="flex items-center justify-between px-3 h-8 border-b border-text bg-subtle">
          <span className="text-xs font-mono tracking-wide truncate">
            {title}
          </span>
          <div className="flex gap-1">
            <span className="w-2 h-2 border border-text" />
            <span className="w-2 h-2 border border-text" />
            <span className="w-2 h-2 border border-text" />
          </div>
        </div>

        <div className="p-4 space-y-2">
          <span className="text-xs uppercase text-muted">
            {type}
          </span>
          <p className="text-sm text-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <Window
        title={title}
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <ProjectView id={id} />
      </Window>
    </>
  )
}
