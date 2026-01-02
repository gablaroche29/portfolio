import { useState, useRef, useEffect } from "react"

type WindowProps = {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Window({ title, isOpen, onClose, children }: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      })
    }
  }

  const handleMouseUp = () => setDragging(false)

  useEffect(() => {
    if (isOpen && windowRef.current) {
      const { innerWidth, innerHeight } = window
      const rect = windowRef.current.getBoundingClientRect()
      setPosition({
        x: (innerWidth - rect.width) / 2,
        y: (innerHeight - rect.height) / 2,
      })
    }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={windowRef}
        className="border border-text bg-bg min-w-250 min-h-150 z-50 absolute"
        style={{ left: position.x, top: position.y }}
      >
        <div 
            className="flex items-center justify-between gap-2 px-3 h-8 border-b border-text bg-subtle"
            onMouseDown={handleMouseDown}
        >
          <span className="ml-2 text-xs font-medium truncate">{title}.exe</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 border border-text" />
            <span className="w-2 h-2 border border-text" />
            <span className="w-2 h-2 border border-text" />
          </div>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  )
}
