import SectionHeader from "./SectionHeader";

export default function About() {
  const bioStats = [
    { label: "Focus", value: "Interaction Design / Game Logic" },
    { label: "Engine", value: "Unity / Unreal / Next.js" },
    { label: "Location", value: "Sorel-Tracy, QC" },
    { label: "Mode", value: "Available_For_Collaboration" },
  ];

  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20">
      <SectionHeader title="04_System_Profile" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-mono leading-relaxed">
            I’m a developer at the intersection of <span className="bg-text text-bg px-1 italic">web performance</span> and <span className="bg-text text-bg px-1 italic">gameplay systems</span>. 
          </p>
          <p className="text-text/70 font-mono leading-relaxed italic uppercase text-sm">
            {`// I specialize in building interfaces that don't just work—they feel mechanical. My approach combines the strict architecture of software engineering with the fluid feedback of game design.`}
          </p>
        </div>

        <div className="border border-text p-6 relative">
          <div className="absolute top-0 right-0 p-2 text-[10px] font-mono opacity-70">DATA_RECAP</div>
          <div className="space-y-4">
            {bioStats.map((stat, i) => (
              <div key={i} className="flex justify-between border-b border-text/10 pb-2">
                <span className="text-[10px] font-mono uppercase text-text/70">{stat.label}</span>
                <span className="text-sm font-mono font-bold tracking-tighter">{stat.value}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-4 border-t border-text/40">
            <span className="font-mono text-[10px] uppercase block mb-1">Authorization:</span>
            <div className="h-8 w-32 border border-text/40 flex items-center justify-center italic opacity-40 text-xs">
              G. Laroche
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}