"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type ItemAccordion = { titulo: string; texto: string };

export default function Accordion({
  itens,
  aberturaInicial = 0,
}: {
  itens: ItemAccordion[];
  aberturaInicial?: number | null;
}) {
  const [aberto, setAberto] = useState<number | null>(aberturaInicial);
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-deck-ink/10">
      {itens.map((item, i) => {
        const ativo = aberto === i;
        return (
          <div key={item.titulo} className={ativo ? "bg-deck-ink rounded-xl my-2" : ""}>
            <button
              type="button"
              onClick={() => setAberto(ativo ? null : i)}
              aria-expanded={ativo}
              className={`flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors ${
                ativo ? "text-deck-accent" : "text-deck-ink hover:text-deck-navy"
              }`}
            >
              <span className="text-lg font-medium">{item.titulo}</span>
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-transform duration-300 ${
                  ativo ? "rotate-45 bg-deck-accent text-deck-ink" : "bg-deck-ink/5 text-deck-ink"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {ativo && (
                <motion.div
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-7 leading-relaxed text-white/60">
                    {item.texto}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
