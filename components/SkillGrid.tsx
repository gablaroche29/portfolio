"use client"
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";

export default function SkillGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const visibleSkills = filteredSkills.slice(0, visibleCount);

  return (
    <section id="skill" className="max-w-content mx-auto px-6 py-20">
      <SectionHeader title="02_Technical_Stack" />

      <div className="flex flex-wrap gap-4 mb-10">
        {["All", ...Array.from(new Set(skills.map((s) => s.category)))].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(8);
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-text">
        {visibleSkills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} index={idx} />
        ))}
      </div>

      {visibleCount < filteredSkills.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="px-8 py-3 border border-text text-text font-mono uppercase tracking-widest text-sm hover:bg-text hover:text-bg transition-colors duration-300 cursor-pointer"
          >
            Load More Skills ({filteredSkills.length - visibleCount} Remaining)
          </button>
        </div>
      )}
    </section>
  );
}