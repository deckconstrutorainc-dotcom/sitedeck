"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SESSION_KEY = "deck-intro-visto";

export default function IntroSplash() {
  const [visivel, setVisivel] = useState(false);
  const [saindo, setSaindo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let jaVisto = false;
    try {
      jaVisto = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      jaVisto = false;
    }
    if (!jaVisto) setVisivel(true);
  }, [reduce]);

  function fechar() {
    setSaindo(true);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage indisponível — segue sem persistir
    }
    setTimeout(() => setVisivel(false), 500);
  }

  if (!visivel) return null;

  return (
    <AnimatePresence>
      {!saindo && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            ref={videoRef}
            src="/videos/intro-logo.mp4"
            autoPlay
            muted
            playsInline
            onEnded={fechar}
            className="h-full w-full object-contain sm:h-[85vh] sm:w-auto sm:max-w-none sm:object-cover"
          />
          <button
            type="button"
            onClick={fechar}
            className="eyebrow absolute bottom-8 right-8 rounded-md border border-deck-ink/15 px-5 py-3 text-deck-ink/60 transition-colors hover:border-deck-ink/30 hover:text-deck-ink"
          >
            Pular
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
