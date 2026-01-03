"use client"
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "I design and build interactive systems.";
  const [loopNum, setLoopNum] = useState(0);
  
  const typingSpeed = 60;
  const pauseDuration = 4000;

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
      }, 20);
    } else {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }, 500); 
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText]);

  return (
    <section className="relative mx-auto max-w-content px-6 py-20 md:py-32 overflow-hidden border-b border-text">
      <div className="absolute mr-10 right-0 top-[-5%] text-[25rem] font-black opacity-[0.03] select-none pointer-events-none leading-none tracking-tighter">
        G
      </div>

      <div className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-text text-[10px] uppercase tracking-[0.3em] mb-4">
          <span className="w-2 h-2 bg-text animate-pulse" />
          [ System Status: {isDeleting ? "Reloading" : "Running"} ]
        </div>

        <h1 className="text-5xl md:text-8xl font-black leading-[1.1] md:leading-none uppercase tracking-tighter min-h-[3.3em] md:min-h-[3em]">
          Hi, I’m Gabriel.<br />
          <span 
            className="text-outline-text transition-all duration-75"
            style={{ 
                WebkitTextStroke: '1.5px black',
                color: isDeleting ? 'black' : 'transparent' 
            }}
          >
            {text}
          </span>
          <span className={`inline-block w-3 h-10 md:w-5 md:h-16 bg-text ml-2 align-middle ${isDeleting ? 'animate-none opacity-20' : 'animate-pulse'}`} />
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
          <div className="max-w-xl space-y-4">
            <p className="text-lg md:text-xl font-mono leading-relaxed italic">
              {`> Web and game developer focused on gameplay systems, UI clarity, and technical design.`}
            </p>
            <div className="h-px w-full bg-text/20 relative overflow-hidden">
                <div 
                    className="absolute inset-0 bg-text transition-all duration-300" 
                    style={{ width: `${(text.length / fullText.length) * 100}%` }} 
                />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 text-[10px] font-mono uppercase opacity-60">
            <span>Location: Sorel-Tracy, QC</span>
            <span>Status: Available for hire</span>
            <span>Cycle: {loopNum}</span>
          </div>
        </div>
      </div>
    </section>
  )
}