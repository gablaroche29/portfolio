"use client"

import { useState } from "react"
import Window from "../Window"
import ProjectView from "./ProjectView"
import { Project } from "@/data/projects"

export default function ProjectCard(project: Project) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="
          group relative border border-text bg-bg cursor-crosshair
          transition-all duration-200
          hover:shadow-[4px_4px_0px_0px_rgba(var(--text-rgb),1)]
          active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
          min-h-56.25
        "
      >
        <div className="flex items-center justify-between px-3 h-9 border-b border-text bg-text text-bg transition-colors group-hover:bg-bg group-hover:text-text">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-bg group-hover:border-text flex items-center justify-center">
                <div className="w-1 h-1 bg-bg group-hover:bg-text" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
              {project.type}.exe
            </span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full border border-bg group-hover:border-text" />
          </div>
        </div>

        <div className="p-5 flex flex-col h-[calc(100%-2.25rem)]">
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold uppercase leading-none tracking-tighter">
                {project.title}
              </h3>
              <div className="h-0.5 w-8 bg-text group-hover:w-full transition-all duration-500" />
            </div>
            
            <p className="text-sm text-text/80 leading-snug font-mono line-clamp-3 italic">
              {`// ${project.description}`}
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 mt-auto">
            <span className="text-[9px] uppercase opacity-50 font-mono">
                Click to Initialize
            </span>
            <span className="text-xs group-hover:translate-x-1 transition-transform">
                →
            </span>
          </div>
        </div>
      </div>

      <Window
        title={project.title}
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <ProjectView {...project} />
      </Window>
    </>
  )
}