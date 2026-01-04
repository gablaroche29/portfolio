
import { Skill } from "@/data/skills";

type SkillCardProps = {
    skill: Skill;
    index: number;
};

export default function SkillCard({ skill, index }: SkillCardProps) {
    return (
        <div className="group border-r border-b border-text p-6 transition-colors duration-300 hover:bg-text hover:text-bg cursor-crosshair flex flex-col justify-between min-h-56.25">
            <div className="space-y-8">
                <div className="flex justify-between items-start">
                    <span className="text-xs border border-text group-hover:border-bg px-2 py-1 font-mono">
                        {index < 9 ? `0${index + 1}` : index + 1}
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

            <div className="pt-4 border-t border-text/10 group-hover:border-bg/20 flex justify-between items-end">
                <span className="text-[10px] font-mono uppercase tracking-widest">
                    Lvl: {skill.level}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">
                    {skill.category}
                </span>
            </div>
        </div>
    );
}
