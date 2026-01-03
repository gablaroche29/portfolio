"use client"

import { useState, useRef, useEffect } from "react"

type WindowProps = {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Window({
  title,
  isOpen,
  onClose,
  children,
}: WindowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [drag, setDrag] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMouseDown = (e: React.MouseEvent) => {
    setDrag(true)
    setOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    })
  }

  useEffect(() => {
    if (!isOpen || !ref.current) return
    const { innerWidth, innerHeight } = window
    const r = ref.current.getBoundingClientRect()
    setPos({
      x: (innerWidth - r.width) / 2,
      y: (innerHeight - r.height) / 2,
    })
  }, [isOpen])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!drag) return
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y })
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
    <div className="fixed inset-0 z-50">
      <div
        ref={ref}
        style={{ left: pos.x, top: pos.y }}
        className="
          absolute border border-text bg-bg
          min-w-250 min-h-150 max-w-[90vw]
        "
      >
        <div
          onMouseDown={onMouseDown}
          className="
            flex items-center justify-between
            px-3 h-9
            border-b border-text bg-subtle
            cursor-move select-none
          "
        >
          <span className="text-xs font-mono tracking-wide">
            {title}
          </span>

          <button
            onClick={onClose}
            className="text-sm hover:opacity-60 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  )
}
