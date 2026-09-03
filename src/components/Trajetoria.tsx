"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionLabel from "./SectionLabel";

// Marcos baseados nas obras documentadas no portfólio do cliente.
const MARCOS = [
  {
    periodo: "1990",
    texto:
      "Início das atividades no mercado da construção civil no Espírito Santo, com foco em edificações e reformas.",
  },
  {
    periodo: "2000",
    texto:
      "Consolidação em obras públicas e privadas, ampliando a atuação em edificações institucionais e escolares.",
  },
  {
    periodo: "2020",
    texto:
      "Execução de obras de grande porte como o Parque Tecnológico, o CIE e serviços no Estádio Kleber Andrade.",
  },
  {
    periodo: "2026",
    texto:
      "Novos empreendimentos residenciais e comerciais, com adoção de processos digitais e metodologia BIM.",
  },
];

export default function Trajetoria() {
  const [ativo, setAtivo] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="bg-deck-bone-soft py-24 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <SectionLabel numero="05">Trajetória</SectionLabel>

        <h2 className="display mt-8 max-w-2xl text-4xl text-deck-ink sm:text-5xl">
          Mais de três décadas de obras entregues.
        </h2>

        {/* trilha de anos */}
        <div className="mt-16 flex items-center gap-1 overflow-x-auto sm:gap-2">
          {MARCOS.map((m, i) => (
            <button
              key={m.periodo}
              type="button"
              onClick={() => setAtivo(i)}
              className="group flex flex-1 flex-col items-start gap-4 py-4 text-left"
            >
              <span
                className={`display text-2xl transition-colors sm:text-3xl ${
                  ativo === i ? "text-deck-ink" : "text-deck-ink/30"
                }`}
              >
                {m.periodo}
              </span>
              <span
                className={`h-px w-full transition-colors ${
                  ativo === i ? "bg-deck-accent" : "bg-deck-line group-hover:bg-deck-ink/30"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="mt-10 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={ativo}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg leading-relaxed text-deck-grey"
            >
              {MARCOS[ativo].texto}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="relative mt-14 aspect-[16/7] overflow-hidden rounded-sm">
          <Image
            src="/images/obras/parque-tecnologico/foto-05-full.webp"
            alt="Obra Deck Construtora"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
