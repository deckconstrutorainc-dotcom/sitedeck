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

  return (
    <form onSubmit={enviar} className="rounded-2xl border border-black/5 p-8 shadow-sm">
      <h2 className="text-xl font-semibold text-deck-graphite">Envie uma mensagem</h2>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="nome" className="text-sm font-medium text-deck-graphite">
            Nome
          </label>
          <input
            id="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 text-sm focus:border-deck-navy focus:outline-none"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-deck-graphite">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 text-sm focus:border-deck-navy focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="text-sm font-medium text-deck-graphite">
              Telefone
            </label>
            <input
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 text-sm focus:border-deck-navy focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="mensagem" className="text-sm font-medium text-deck-graphite">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            required
            rows={5}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 text-sm focus:border-deck-navy focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-deck-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-deck-navy-dark"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  );
}
