"use client"

import { useState, useRef, useEffect } from "react"

type WindowProps = {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Window({ title, isOpen, onClose, children }: WindowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [drag, setDrag] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isOpen || !ref.current) return
    const { innerWidth, innerHeight } = window
    const r = ref.current.getBoundingClientRect()
    setPos({
      x: (innerWidth - r.width) / 2,
      y: (innerHeight - r.height) / 2,
    })
    
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  const onMouseDown = (e: React.MouseEvent) => {
    setDrag(true)
    setOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    })
  }

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!drag || !ref.current) return

      const { innerWidth, innerHeight } = window
      const r = ref.current.getBoundingClientRect()

      let newX = e.clientX - offset.x
      let newY = e.clientY - offset.y

      newX = Math.max(0, Math.min(newX, innerWidth - r.width))
      newY = Math.max(0, Math.min(newY, innerHeight - r.height))

      setPos({ x: newX, y: newY })
    }

    const up = () => setDrag(false)
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose()

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", up)
    window.addEventListener("keydown", esc)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseup", up)
      window.removeEventListener("keydown", esc)
    }
  }, [drag, offset, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none bg-black/10 backdrop-blur-[1px]">
      <div
        ref={ref}
        style={{ 
          left: `${pos.x}px`, 
          top: `${pos.y}px` 
        }}
        className="
          absolute border-2 border-text bg-bg pointer-events-auto
          min-w-75 md:min-w-150 max-w-[95vw]
          shadow-[8px_8px_0px_0px_rgba(var(--text-rgb),1)]
          flex flex-col
        "
      >
        <div
          onMouseDown={onMouseDown}
          className="
            flex items-center justify-between
            px-3 h-10
            border-b-2 border-text bg-text text-bg
            cursor-move select-none shrink-0
          "
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
               <div className="w-1.5 h-1.5 bg-bg" />
               <div className="w-1.5 h-1.5 bg-bg opacity-50" />
            </div>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
              {title}.sys
            </span>
          </div>

          <button
            onClick={onClose}
            className="h-6 w-6 flex items-center justify-center border border-bg hover:bg-bg hover:text-text transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="
          p-8 overflow-y-auto max-h-[75vh] 
          overscroll-contain
          scrollbar-thin scrollbar-thumb-text
        ">
          {children}
        </div>
      </div>
    </div>
  )
}