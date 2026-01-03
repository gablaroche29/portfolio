import SectionHeader from "./SectionHeader";
import { skills } from "@/data/skills";

export default function SkillGrid() {
  return (
    <section id="skill" className="max-w-content mx-auto px-6 py-6">
        <SectionHeader title="02_Technical_Stack" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-text">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className="group border-r border-b border-text p-6 transition-colors duration-300 hover:bg-text hover:text-bg cursor-crosshair"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs border border-text group-hover:border-bg px-2 py-1">
                  0{idx + 1}
                </span>
                <div className="w-2 h-2 bg-text group-hover:bg-bg transition-colors" />
              </div>
              
              <h3 className="text-2xl font-semibold leading-tight mb-2 uppercase">{skill.name}</h3>
              <p className="text-sm opacity-70 mb-4">{skill.description}</p>
              
              <div className="mt-auto pt-4 border-t border-text/10 group-hover:border-white/20 text-[10px] uppercase tracking-widest">
                Status: {skill.level}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}