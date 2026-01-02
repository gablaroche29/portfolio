export default function Header() {
  return (
    <header className="border-b border-text">
      <div className="mx-auto max-w-content px-6 h-18 flex items-center justify-between">
        <span className="font-medium">Gabriel</span>

        <nav className="flex gap-6 text-sm text-text">
          <a href="#work" className="hover:text-text">Work</a>
          <a href="#about" className="hover:text-text">About</a>
          <a href="#contact" className="hover:text-text">Contact</a>
        </nav>
      </div>
    </header>
  )
}
