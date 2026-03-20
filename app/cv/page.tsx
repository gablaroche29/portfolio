"use client"
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-bg font-mono py-12 px-6">
      {/* Navigation Back */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="text-xs border border-text px-3 py-1 hover:bg-text hover:text-bg transition-colors uppercase tracking-widest">
          {`<< RETURN_TO_SYSTEM`}
        </Link>
      </div>

      {/* Main CV Sheet */}
      <div className="max-w-4xl mx-auto border-2 border-text bg-white p-8 md:p-16 shadow-[12px_12px_0px_0px_rgba(var(--text-rgb),1)]">
        
        {/* Header: Personal Details */}
        <header className="border-b-2 border-text pb-10 mb-10 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Gabriel Laroche</h1>
            <p className="text-lg italic opacity-80 uppercase tracking-wide">Web & Game Systems Developer</p>
          </div>
          <div className="text-[10px] space-y-1 uppercase text-right md:w-48">
            <div className="flex justify-between border-b border-text/10 pb-1"><span>Loc</span><span>QC, CAN</span></div>
            <div className="flex justify-between border-b border-text/10 pb-1"><span>Mail</span><span>contact@gabriel.dev</span></div>
            <div className="flex justify-between border-b border-text/10 pb-1"><span>Link</span><span>github.com/gabriel</span></div>
          </div>
        </header>

        {/* Section: Experiences */}
        <section className="mb-12">
          <SectionHeader title="01_Experiences" />
          <div className="space-y-8 mt-6">
            <CVEntry 
              title="Junior Software Developer" 
              org="Tech Solutions Inc." 
              date="2025 - Present" 
              desc="Architecture of scalable web systems and API integration." 
            />
            <CVEntry 
              title="Game Designer (Freelance)" 
              org="Indie Studio X" 
              date="2024 - 2025" 
              desc="Development of core gameplay mechanics and UI implementation." 
            />
          </div>
        </section>

        {/* Section: Formation */}
        <section className="mb-12">
          <SectionHeader title="02_Formation" />
          <div className="space-y-6 mt-6">
            <CVEntry 
              title="AEC in Web, Mobile & Game Development" 
              org="Cégep de Sorel-Tracy" 
              date="2023 - 2026" 
              desc="Focused on C#, JavaScript, and systems architecture." 
            />
          </div>
        </section>

        {/* Section: Projects (Concise) */}
        <section className="mb-12">
          <SectionHeader title="03_Selected_Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-6">
            <div className="border-l-2 border-text pl-4">
              <h4 className="font-bold uppercase text-sm">Project_Strife</h4>
              <p className="text-xs opacity-70">A 3D combat system built in Unity with custom physics.</p>
            </div>
            <div className="border-l-2 border-text pl-4">
              <h4 className="font-bold uppercase text-sm">Stripe_Retro_UI</h4>
              <p className="text-xs opacity-70">Interactive portfolio system using React Three Fiber.</p>
            </div>
          </div>
        </section>

        {/* Section: Prices & Distinctions */}
        <section>
          <SectionHeader title="04_Distinctions" />
          <ul className="mt-6 space-y-3">
            <li className="flex justify-between items-center border-b border-text/10 pb-2">
              <span className="text-sm font-bold uppercase">Global Game Jam - Top 3</span>
              <span className="text-[10px] opacity-50">2025</span>
            </li>
            <li className="flex justify-between items-center border-b border-text/10 pb-2">
              <span className="text-sm font-bold uppercase">Excellence Scholarship</span>
              <span className="text-[10px] opacity-50">2024</span>
            </li>
          </ul>
        </section>

        {/* Footer Manifest */}
        <footer className="mt-20 pt-8 border-t border-text/20 text-[9px] uppercase opacity-40 flex justify-between italic">
          <span>End of transmission // Gabriel_CV_2026</span>
          <span>Verified at: {new Date().toLocaleDateString()}</span>
        </footer>
      </div>
    </div>
  )
}

// Sub-component for clean entries
function CVEntry({ title, org, date, desc }: { title: string, org: string, date: string, desc: string }) {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-lg font-black uppercase tracking-tight">{title}</h3>
        <span className="text-[10px] font-mono opacity-50 italic">{date}</span>
      </div>
      <div className="text-xs font-bold uppercase mb-2 text-text/60">{org}</div>
      <p className="text-sm leading-relaxed text-text/80 italic">{`> ${desc}`}</p>
    </div>
  )
}