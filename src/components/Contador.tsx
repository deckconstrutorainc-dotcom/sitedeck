"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
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
  const emVista = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [atual, setAtual] = useState(reduce ? valor : 0);

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
      {prefixo}
      {atual}
      {sufixo}
    </span>
  );
}
