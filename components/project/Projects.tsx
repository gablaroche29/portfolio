"use client"

import { useState } from "react"
import SectionHeader from "../SectionHeader"
import ProjectCard from "./ProjectCard"
import { projects } from "@/data/projects"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleCount, setVisibleCount] = useState(6)

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.type)))]

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.type === activeCategory)

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  return (
    <section id="work" className="mx-auto max-w-content px-6 py-20">
      <SectionHeader title="01_Selected_Work" />

      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat)
              setVisibleCount(6)
            }}
            className={`px-4 py-2 border text-sm font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer
              ${activeCategory === cat
                ? "bg-text text-bg border-text"
                : "border-text/30 hover:border-text text-text/50 hover:text-text"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      {visibleCount < filteredProjects.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="px-8 py-3 border border-text text-text font-mono uppercase tracking-widest text-sm hover:bg-text hover:text-bg transition-colors duration-300"
          >
            Load More Projects ({filteredProjects.length - visibleCount} Remaining)
          </button>
        </div>
      )}
    </section>
  )
}
