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
    <div>
      {itens.map((item, i) => {
        const ativo = aberto === i;
        return (
          <div key={item.titulo} className="border-t border-deck-line last:border-b">
            <button
              type="button"
              onClick={() => setAberto(ativo ? null : i)}
              aria-expanded={ativo}
              className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors"
            >
              <span
                className={`display text-xl sm:text-2xl ${
                  ativo ? "text-deck-ink" : "text-deck-ink/50"
                }`}
              >
                {item.titulo}
              </span>
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-transform duration-300 ${
                  ativo ? "rotate-45 border-deck-ink text-deck-ink" : "border-deck-line text-deck-ink/40"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  <p className="max-w-2xl pb-7 leading-relaxed text-deck-grey">
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
