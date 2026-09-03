"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function ContadorAnimado({ valor, sufixo }: { valor: number; sufixo: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [atual, setAtual] = useState(reduce ? valor : 0);
  const [emVista, setEmVista] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEmVista(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce]);

  useEffect(() => {
    if (!emVista || reduce) return;
    const controls = animate(0, valor, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setAtual(Math.round(v)),
    });
    return () => controls.stop();
  }, [emVista, valor, reduce]);

  return (
    <span ref={ref}>
      {atual}
      {sufixo}
    </span>
  );
}

export default function Metric({
  valor,
  sufixo = "",
  label,
}: {
  valor: number;
  sufixo?: string;
  label: string;
}) {
  return (
    <div className="border-t border-deck-line pt-6">
      <div className="display text-6xl text-deck-ink sm:text-7xl">
        <ContadorAnimado valor={valor} sufixo={sufixo} />
      </div>
      <div className="eyebrow mt-4 text-deck-grey">{label}</div>
    </div>
  );
}
