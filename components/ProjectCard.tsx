"use client"

import { useState } from "react"
import Window from "./Window"

type Props = {
  title: string,
  description: string,
  type: string,
  content: React.ReactNode,
}

export default function ProjectCard({ title, description, type, content }: Props) {
  const [isWindowOpen, setIsWindowOpen] = useState(false)

  return (
    <>
      <div 
        className="border border-text bg-bg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
        onClick={() => setIsWindowOpen(true)}
      >
        <div className="flex items-center justify-between gap-2 px-3 h-8 border-b border-text bg-subtle">
          <span className="ml-2 text-xs font-medium truncate">{title}.exe</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 border border-text" />
            <span className="w-2 h-2 border border-text" />
            <span className="w-2 h-2 border border-text" />
          </div>
        </div>
        <div className="p-4">
          <span className="text-xs uppercase text-muted">{type}</span>
          <h3 className="mt-2 font-medium">{title}</h3>
          <p className="mt-2 text-sm text-muted">{description}</p>
        </div>
      </div>

      <Window
        title={title}
        isOpen={isWindowOpen}
        onClose={() => setIsWindowOpen(false)}
      >
        {content}
      </Window>
    </>
  )
}
