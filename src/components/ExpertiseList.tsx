"use client";

import Image from "next/image";
import { useState } from "react";

export type ExpertiseItem = {
  numero: string;
  titulo: string;
  texto: string;
  imagem: string;
};

export default function ExpertiseList({ itens }: { itens: ExpertiseItem[] }) {
  const [ativo, setAtivo] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <ul>
        {itens.map((item, i) => (
          <li key={item.titulo} className="border-t border-deck-line last:border-b">
            <button
              type="button"
              onMouseEnter={() => setAtivo(i)}
              onFocus={() => setAtivo(i)}
              className="group flex w-full items-baseline justify-between gap-6 py-7 text-left"
            >
              <span className="flex items-baseline gap-5">
                <span className="eyebrow text-deck-grey">{item.numero}</span>
                <span
                  className={`display text-2xl transition-colors sm:text-3xl ${
                    ativo === i ? "text-deck-ink" : "text-deck-ink/45"
                  }`}
                >
                  {item.titulo}
                </span>
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`flex-none transition-all ${
                  ativo === i ? "translate-x-0 text-deck-accent opacity-100" : "-translate-x-1 text-deck-ink/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {ativo === i && (
              <p className="max-w-md pb-7 text-sm leading-relaxed text-deck-grey lg:hidden">
                {item.texto}
              </p>
            )}
          </li>
        ))}
      </ul>

      <div className="relative hidden aspect-[4/3] overflow-hidden rounded-sm lg:block">
        {itens.map((item, i) => (
          <Image
            key={item.titulo}
            src={item.imagem}
            alt={item.titulo}
            fill
            sizes="40vw"
            className={`object-cover transition-opacity duration-700 ${
              ativo === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deck-ink/70 to-transparent p-8">
          <p className="max-w-sm text-sm leading-relaxed text-white/85">
            {itens[ativo].texto}
          </p>
        </div>
      </div>
    </div>
  );
}
