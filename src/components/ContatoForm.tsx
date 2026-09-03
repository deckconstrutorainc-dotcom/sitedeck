"use client";

import { useState, type FormEvent } from "react";

export default function ContatoForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviar(e: FormEvent) {
    e.preventDefault();
    const corpo = `Nome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\n\n${mensagem}`;
    const mailto = `mailto:deck@deckconstrutora.com.br?subject=${encodeURIComponent(
      "Contato via site - " + nome,
    )}&body=${encodeURIComponent(corpo)}`;
    window.location.href = mailto;
  }

  const campo =
    "mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 transition-colors focus:border-deck-accent focus:outline-none";

  return (
    <form onSubmit={enviar} className="rounded-2xl bg-deck-ink p-8 sm:p-10">
      <span className="eyebrow text-deck-accent">Envie uma mensagem</span>
      <h2 className="display mt-5 text-3xl text-white">
        Solicite um orçamento
      </h2>

      <div className="mt-9 space-y-6">
        <div>
          <label htmlFor="nome" className="eyebrow text-white/40">
            Nome
          </label>
          <input
            id="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome completo"
            className={campo}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="eyebrow text-white/40">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className={campo}
            />
          </div>
          <div>
            <label htmlFor="telefone" className="eyebrow text-white/40">
              Telefone
            </label>
            <input
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(27) 00000-0000"
              className={campo}
            />
          </div>
        </div>

        <div>
          <label htmlFor="mensagem" className="eyebrow text-white/40">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            required
            rows={5}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Conte-nos sobre o seu projeto"
            className={campo}
          />
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-lg bg-deck-accent px-6 py-4 transition-colors hover:bg-deck-accent-strong"
        >
          <span className="eyebrow text-deck-ink">Enviar mensagem</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-deck-ink transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}
