import SectionHeader from "./SectionHeader";
import { skills } from "@/data/skills";

export default function SkillGrid() {
  return (
    <section id="skill" className="max-w-content mx-auto px-6 py-20">
        <SectionHeader title="02_Technical_Stack" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-text">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className="group border-r border-b border-text p-6 transition-colors duration-300 hover:bg-text hover:text-bg cursor-crosshair flex flex-col justify-between min-h-56.25"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <span className="text-xs border border-text group-hover:border-bg px-2 py-1 font-mono">
                    0{idx + 1}
                  </span>
                  <div className="w-2 h-2 bg-text group-hover:bg-bg transition-colors" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-black leading-tight mb-2 uppercase tracking-tighter">
                    {skill.name}
                  </h3>
                  <p className="text-xs font-mono opacity-70 leading-relaxed uppercase">
                    {`// ${skill.description}`}
                  </p>
                </div>
              </div>
              
              <span className="pt-4 border-t border-text/10 group-hover:border-bg/20 text-[10px] font-mono uppercase tracking-widest">Lvl: {skill.level}</span>
            </div>
          ))}
        </div>
    </section>
  );
}