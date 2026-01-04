"use client"
import { useEffect, useState } from "react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Gabriel"; 
  const [loopNum, setLoopNum] = useState(0);
  
  const typingSpeed = 150;
  const pauseDuration = 3000;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && text.length < fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === fullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, 50);
    } else if (isDeleting && text.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText]);

  return (
    <section className="relative mx-auto max-w-content px-6 py-20 md:py-32 overflow-hidden border-b border-text flex flex-col md:flex-row items-center gap-12">
      
      <div className="relative z-10 flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-text text-[10px] uppercase tracking-[0.3em] mb-4">
          <span className="w-2 h-2 bg-text animate-pulse" />
          [ System Status: {isDeleting ? "Reloading" : "Running"} ]
        </div>

        <h1 className="text-6xl md:text-9xl font-black leading-none uppercase tracking-tighter min-h-[1.2em]">
          Hi, I’m <br className="md:hidden" />
          <span 
            className="text-outline-text transition-all duration-75"
            style={{ WebkitTextStroke: '2px black', color: isDeleting ? 'black' : 'transparent' }}
          >
            {text}
          </span>
          <span className={`inline-block w-3 h-10 md:w-6 md:h-20 bg-text ml-2 align-middle ${isDeleting ? 'animate-none opacity-20' : 'animate-pulse'}`} />
        </h1>

        <p className="text-lg md:text-xl font-mono leading-relaxed italic max-w-xl border-t border-text/10 pt-6">
          {`> Web and game developer focused on gameplay systems, UI clarity, and technical design.`}
        </p>
      </div>

      <div className="relative w-full md:w-100 aspect-square flex items-center justify-center">
        <div className="absolute inset-0 border border-text/20 pointer-events-none">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-text" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-text" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-text" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-text" />
        </div>
        
        <div className="absolute top-4 left-4 text-[9px] font-mono opacity-40 uppercase leading-tight">
            Object: Core_Node_01<br/>
            Render: Wireframe_Active<br/>
            Cycle: {loopNum}
        </div>

        <div className="w-full h-full opacity-90 contrast-125">
            <HeroVisual />
        </div>
      </div>
    </section>
  )
}