"use client";

import { useState, type FormEvent } from "react";
import { PERGUNTAS, type PerguntaId } from "@/lib/orcamento";

type Status = "editando" | "enviando" | "enviado" | "erro";

const Seta = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ContatoForm() {
  const [etapa, setEtapa] = useState<1 | 2>(1);
  const [respostas, setRespostas] = useState<Partial<Record<PerguntaId, string>>>({});
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [site, setSite] = useState("");
  const [status, setStatus] = useState<Status>("editando");
  const [erro, setErro] = useState("");

  const filtroCompleto = PERGUNTAS.every((p) => respostas[p.id]);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setStatus("enviando");
    setErro("");
    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...respostas, nome, email, telefone, mensagem, site }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.erro ?? "Não foi possível enviar.");
      setStatus("enviado");
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Não foi possível enviar.");
      setStatus("erro");
    }
  }

  const campo =
    "mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 transition-colors focus:border-deck-accent focus:outline-none";

  if (status === "enviado") {
    return (
      <div className="rounded-2xl bg-deck-ink p-8 sm:p-10">
        <span className="eyebrow text-deck-accent">Solicitação recebida</span>
        <h2 className="display mt-5 text-3xl text-white">Obrigado, {nome.split(" ")[0]}!</h2>
        <p className="mt-5 leading-relaxed text-white/60">
          Sua solicitação foi enviada para a nossa equipe. Entraremos em contato
          em breve pelo e-mail ou telefone informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="rounded-2xl bg-deck-ink p-8 sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <span className="eyebrow text-deck-accent">Envie uma mensagem</span>
        <span className="eyebrow text-white/30">Etapa {etapa} de 2</span>
      </div>
      <h2 className="display mt-5 text-3xl text-white">Solicite um orçamento</h2>

      {etapa === 1 ? (
        <div className="mt-9 space-y-8">
          {PERGUNTAS.map((p) => (
            <fieldset key={p.id}>
              <legend className="eyebrow text-white/40">{p.titulo}</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.opcoes.map((op) => {
                  const ativo = respostas[p.id] === op;
                  return (
                    <button
                      key={op}
                      type="button"
                      aria-pressed={ativo}
                      onClick={() => setRespostas((r) => ({ ...r, [p.id]: op }))}
                      className={`rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        ativo
                          ? "border-deck-accent bg-deck-accent text-deck-ink"
                          : "border-white/10 bg-white/5 text-white/75 hover:border-white/30"
                      }`}
                    >
                      {op}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <button
            type="button"
            disabled={!filtroCompleto}
            onClick={() => setEtapa(2)}
            className="group flex w-full items-center justify-center gap-3 rounded-lg bg-deck-accent px-6 py-4 text-deck-ink transition-colors hover:bg-deck-accent-strong disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="eyebrow">Continuar</span>
            <Seta className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      ) : (
        <div className="mt-9 space-y-6">
          <div className="rounded-lg border border-white/10 p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="eyebrow text-white/40">Resumo</span>
              <button
                type="button"
                onClick={() => setEtapa(1)}
                className="eyebrow text-deck-accent hover:underline"
              >
                Alterar
              </button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {PERGUNTAS.map((p) => respostas[p.id]).join(" · ")}
            </p>
          </div>

          <div>
            <label htmlFor="nome" className="eyebrow text-white/40">Nome</label>
            <input id="nome" required value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome completo" className={campo} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="eyebrow text-white/40">E-mail</label>
              <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className={campo} />
            </div>
            <div>
              <label htmlFor="telefone" className="eyebrow text-white/40">Telefone</label>
              <input id="telefone" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(27) 00000-0000" className={campo} />
            </div>
          </div>

          <div>
            <label htmlFor="mensagem" className="eyebrow text-white/40">Mensagem</label>
            <textarea id="mensagem" required rows={5} value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Conte-nos sobre o seu projeto: local, escopo, prazos…" className={campo} />
          </div>

          <input
            type="text"
            name="site"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            value={site}
            onChange={(e) => setSite(e.target.value)}
            className="hidden"
          />

          {status === "erro" && (
            <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {erro} Tente novamente ou ligue para{" "}
              <a href="tel:+552732914003" className="underline">(27) 3291-4003</a>.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "enviando"}
            className="group flex w-full items-center justify-center gap-3 rounded-lg bg-deck-accent px-6 py-4 text-deck-ink transition-colors hover:bg-deck-accent-strong disabled:opacity-60"
          >
            <span className="eyebrow">{status === "enviando" ? "Enviando…" : "Enviar mensagem"}</span>
            <Seta className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </form>
  );
}
