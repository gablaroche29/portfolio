"use client"
import { useEffect, useState } from "react"

export default function Footer() {
  const [time, setTime] = useState("")

  // Update time to look like a system clock
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setTime(now.toISOString().replace('T', ' ').slice(0, 19))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="border-t-2 border-text bg-bg font-mono mt-20">
      {/* Top Section: Navigation and Stats */}
      <div className="mx-auto max-w-content px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Directory */}
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">[ Directory ]</div>
          <nav className="flex flex-col gap-2 uppercase text-sm font-bold">
            <a href="#work" className="hover:underline underline-offset-4 w-fit tracking-tighter">01_Work</a>
            <a href="#about" className="hover:underline underline-offset-4 w-fit tracking-tighter">02_About</a>
            <a href="#contact" className="hover:underline underline-offset-4 w-fit tracking-tighter">03_Contact</a>
          </nav>
        </div>

        {/* Column 2: System Specs */}
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">[ Build_Specs ]</div>
          <div className="text-[11px] space-y-1 uppercase leading-tight">
            <div className="flex justify-between border-b border-text/10 pb-1">
                <span>Environment</span>
                <span className="font-bold text-right">Production_v2.6</span>
            </div>
            <div className="flex justify-between border-b border-text/10 pb-1">
                <span>Kernel</span>
                <span className="font-bold text-right">Next.js_15 / React_19</span>
            </div>
            <div className="flex justify-between border-b border-text/10 pb-1">
                <span>Deployment</span>
                <span className="font-bold text-right">Vercel_Edge_Node</span>
            </div>
          </div>
        </div>

        {/* Column 3: Live Output */}
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">[ Local_Time ]</div>
          <div className="p-3 border border-text bg-text text-bg text-sm text-center">
            {time || "INITIALIZING..."}
          </div>
          <div className="flex justify-between items-center text-[10px] uppercase">
            <span>Lat: 46.04</span>
            <span>Long: -73.11</span>
            <span className="animate-pulse text-green-600">● ONLINE</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and License */}
      <div className="border-t border-text/20 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
            {/* Minimal Logo */}
            <div className="w-5 h-5 border border-text flex items-center justify-center font-black text-[10px]">
                G
            </div>
            <span className="text-[10px] uppercase tracking-widest opacity-50">
                Gabriel Laroche // Open-Source License 2026
            </span>
        </div>
        
        <div className="flex gap-6 text-[10px] uppercase tracking-widest opacity-50">
            <a href="#" className="hover:text-text hover:opacity-100">Privacy_Policy</a>
            <a href="#" className="hover:text-text hover:opacity-100">System_Logs</a>
        </div>
      </div>

      {/* Terminal Bottom Accent */}
      <div className="h-1 bg-text w-full" />
    </footer>
  )
}