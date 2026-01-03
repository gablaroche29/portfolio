"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const router = useRouter()

  const commands = [
    { id: 'work', name: 'Go to Work', action: () => router.push('#work') },
    { id: 'about', name: 'Go to About', action: () => router.push('#about') },
    { id: 'contact', name: 'Go to Contact', action: () => router.push('#contact') },
    { id: 'reboot', name: 'Reboot System', action: () => window.location.reload() },
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  if (!isOpen) return null

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-200 flex items-start justify-center pt-[15vh] px-4 bg-bg/80 backdrop-blur-sm">
      <div className="w-full max-w-xl border-2 border-text bg-bg shadow-[12px_12px_0px_0px_rgba(var(--text-rgb),1)]">
        <div className="flex items-center px-4 py-4 border-b-2 border-text gap-3">
          <span className="text-xl font-bold">{`>`}</span>
          <input
            autoFocus
            className="flex-1 bg-transparent outline-none font-mono text-lg uppercase placeholder:opacity-30"
            placeholder="Type a command (e.g. 'work', 'reboot')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="text-[10px] border border-text px-1 opacity-50 font-mono">ESC</kbd>
        </div>

        <div className="max-h-75 overflow-y-auto">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.id}
                onClick={() => {
                  cmd.action()
                  setIsOpen(false)
                  setQuery("")
                }}
                className="w-full text-left px-6 py-4 hover:bg-text hover:text-bg font-mono text-sm uppercase transition-colors flex justify-between group"
              >
                <span>{cmd.name}</span>
                <span className="opacity-0 group-hover:opacity-100 italic text-[10px]">Execute_</span>
              </button>
            ))
          ) : (
            <div className="px-6 py-4 font-mono text-sm opacity-50 italic">
              No matching commands found...
            </div>
          )}
        </div>
        
        <div className="px-4 py-2 bg-text text-bg text-[9px] font-mono flex justify-between">
          <span>SYSTEM_VERSION: 2.0.26</span>
          <span>SELECT: [ENTER]</span>
        </div>
      </div>
    </div>
  )
}