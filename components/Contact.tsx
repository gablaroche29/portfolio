import SectionHeader from "./SectionHeader";

export default function Contact() {
  const socialLinks = [
    { name: "GitHub", url: "#", icon: "GH" },
    { name: "LinkedIn", url: "#", icon: "LN" },
    { name: "Itch.io", url: "#", icon: "IT" },
  ];

  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-6 bg-bg">
      <SectionHeader title="04_Transmission" />

      <div className="group relative">
        <div className="absolute -inset-2 bg-text opacity-[0.03] group-hover:opacity-[0.05] transition-opacity" />
        
        <div className="relative border-2 border-text p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          <div className="space-y-2">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Establish_Contact
            </h3>
            <p className="font-mono text-sm text-text/60 italic">
              Ready to initialize a new project or collaboration?
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <a
              href="mailto:youremail@example.com"
              className="text-2xl md:text-3xl font-mono font-bold underline underline-offset-8 decoration-2 hover:bg-text hover:text-bg transition-colors p-2"
            >
              youremail@example.com
            </a>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="px-4 py-2 border border-text font-mono text-xs uppercase tracking-widest hover:bg-text hover:text-bg transition-all flex items-center gap-2"
                >
                  <span className="opacity-50">[{link.icon}]</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <footer className="mt-6 pt-8 border-t border-text/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono opacity-50 uppercase tracking-[0.2em]">
        <span>© 2026 GABRIEL_OS // ALL_RIGHTS_RESERVED</span>
        <span>UPTIME: 99.9% // SOREL-TRACY_NODE_01</span>
      </footer>
    </section>
  )
}