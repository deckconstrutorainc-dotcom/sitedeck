"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Eyebrow from "./Eyebrow";

// Marcos baseados nas obras documentadas no portfólio do cliente.
const MARCOS = [
  {
    periodo: "Anos 1990",
    texto:
      "Início das atividades no mercado da construção civil no Espírito Santo, com foco em edificações e reformas.",
  },
  {
    periodo: "Anos 2000",
    texto:
      "Consolidação em obras públicas e privadas, ampliando a atuação em edificações institucionais e escolares.",
  },
  {
    periodo: "2020 – 2021",
    texto:
      "Execução de obras de grande porte como o Parque Tecnológico, o CIE e serviços no Estádio Kleber Andrade.",
  },
  {
    periodo: "2023 – 2025",
    texto:
      "Novos empreendimentos residenciais e comerciais, com adoção de processos digitais e metodologia BIM.",
  },
];

const PASSO = 3;

export default function Trajetoria() {
  const [inicio, setInicio] = useState(0);
  const reduce = useReducedMotion();
  const maxInicio = Math.max(0, MARCOS.length - PASSO);
  const visiveis = MARCOS.slice(inicio, inicio + PASSO);

  return (
    <section className="relative overflow-hidden bg-deck-ink py-24 text-white">
      <Image
        src="/images/obras/parque-tecnologico/foto-09-full.webp"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-deck-ink/70" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Eyebrow tom="claro">Nossa trajetória</Eyebrow>

        <h2 className="display mt-8 max-w-2xl text-4xl sm:text-5xl">
          Mais de três décadas de obras entregues
        </h2>

        {/* trilha com marcadores */}
        <div className="mt-16 flex items-center gap-4">
          {visiveis.map((m, i) => (
            <div key={m.periodo} className="flex flex-1 items-center gap-4">
              <span className="relative flex h-3 w-3 flex-none items-center justify-center">
                <span className="absolute h-6 w-6 rounded-full bg-deck-accent/20" />
                <span className="h-2 w-2 rounded-full bg-deck-accent" />
              </span>
              {i < visiveis.length - 1 && <span className="h-px flex-1 bg-white/15" />}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visiveis.map((m, i) => (
              <motion.div
                key={m.periodo}
                layout
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-xl p-7 ${
                  i === 1
                    ? "bg-deck-accent text-deck-ink"
                    : i === 2
                      ? "bg-deck-ink-soft text-white"
                      : "bg-deck-bone-soft text-deck-ink"
                }`}
              >
                <h3
                  className={`text-xl font-semibold ${
                    i === 2 ? "text-deck-accent" : ""
                  }`}
                >
                  {m.periodo}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i === 2 ? "text-white/65" : i === 1 ? "text-deck-ink/70" : "text-deck-ink/65"
                  }`}
                >
                  {m.texto}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setInicio((v) => Math.max(0, v - 1))}
            disabled={inicio === 0}
            aria-label="Marcos anteriores"
            className="flex h-11 w-12 items-center justify-center rounded-md bg-deck-accent text-deck-ink transition-opacity disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H6M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setInicio((v) => Math.min(maxInicio, v + 1))}
            disabled={inicio >= maxInicio}
            aria-label="Próximos marcos"
            className="flex h-11 w-12 items-center justify-center rounded-md bg-deck-accent text-deck-ink transition-opacity disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
