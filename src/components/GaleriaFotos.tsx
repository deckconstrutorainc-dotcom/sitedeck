"use client";

import Image from "next/image";
import { useState } from "react";

export default function GaleriaFotos({
  slug,
  fotos,
  titulo,
}: {
  slug: string;
  fotos: string[];
  titulo: string;
}) {
  const [aberta, setAberta] = useState<number | null>(null);

  const fechar = () => setAberta(null);
  const anterior = () =>
    setAberta((i) => (i === null ? null : (i - 1 + fotos.length) % fotos.length));
  const proxima = () =>
    setAberta((i) => (i === null ? null : (i + 1) % fotos.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {fotos.map((foto, i) => (
          <button
            key={foto}
            type="button"
            onClick={() => setAberta(i)}
            className="relative aspect-square overflow-hidden rounded-sm bg-deck-bone-soft"
          >
            <Image
              src={`/images/obras/${slug}/${foto}-thumb.webp`}
              alt={`${titulo} - foto ${i + 1}`}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {aberta !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={fechar}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/obras/${slug}/${fotos[aberta]}-full.webp`}
              alt={`${titulo} - foto ${aberta + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              proxima();
            }}
            aria-label="Próxima foto"
            className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
