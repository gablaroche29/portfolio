"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length < 3 ? prev + "." : "")
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-text text-bg font-mono p-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden break-all text-[10px] leading-none">
        {Array(200).fill("ERROR_404_PAGE_NOT_FOUND_SYSTEM_FAILURE_REBOOT_REQUIRED_").join(" ")}
      </div>

      <div className="relative z-10 max-w-2xl w-full border-2 border-bg p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-bg text-text px-3 py-1 font-black text-xl animate-pulse">
            FATAL_ERROR
          </div>
          <span className="text-xs uppercase tracking-[0.4em]">Stop Code: 0x00000404</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
          Kernel_Panic: <br />
          Path_Not_Found
        </h1>

        <div className="space-y-4 text-sm md:text-base border-t border-bg/30 pt-6">
          <p>{`> A fatal exception has occurred at 0x404:PAGE_MISSING.`}</p>
          <p>{`> The requested resource does not exist or has been moved to a secure sector.`}</p>
          <p>{`> System check: [FAILED]`}</p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-6 items-center">
          <Link 
            href="/" 
            className="w-full md:w-auto text-center bg-bg text-text px-8 py-4 font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            Reboot System (Home)
          </Link>
          
          <span className="text-[10px] uppercase opacity-60">
            Attempting auto-recovery{dots}
          </span>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-size-[100%_2px,3px_100%] z-50" />
    </div>
  )
}