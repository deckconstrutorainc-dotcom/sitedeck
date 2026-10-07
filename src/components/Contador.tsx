"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Contador({
  valor,
  sufixo = "",
  prefixo = "",
}: {
  valor: number;
  sufixo?: string;
  prefixo?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [atual, setAtual] = useState(reduce ? valor : 0);

  // IntersectionObserver nativo: o useInView do framer-motion falha em telas
  // estreitas com React 19 e deixava o número parado em 0.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) {
      setAtual(valor);
      return;
    }
    let controls: ReturnType<typeof animate> | undefined;
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        obs.disconnect();
        controls = animate(0, valor, {
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => setAtual(Math.round(v)),
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      controls?.stop();
    };
  }, [valor, reduce]);

  return (
    <span ref={ref}>
      {prefixo}
      {atual}
      {sufixo}
    </span>
  );
}
