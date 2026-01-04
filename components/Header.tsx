export default function Header() {
  return (
    <header className="border-b border-text bg-bg sticky top-0 z-100 font-mono">
      <div className="mx-auto max-w-content px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-text animate-pulse" />
          <span className="font-bold uppercase tracking-tighter text-lg">Gabriel_Dev_OS</span>
        </div>/

        <nav className="hidden md:flex items-center h-full">
          {['Work', 'Skill', 'Events', 'About', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="h-full px-6 flex items-center border-l border-text hover:bg-text hover:text-bg transition-colors duration-200 text-xs uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
          <div className="px-6 border-l border-text text-[10px] opacity-50 italic">
            v2.0.26
          </div>
        </nav>
      </div>
    </header>
  )
}