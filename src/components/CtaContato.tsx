import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaContato() {
  return (
    <section className="bg-deck-bone px-5 pb-24 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-2xl bg-deck-bone-soft px-6 py-20 text-center sm:px-12">
          <span className="eyebrow text-deck-navy">
            Vamos construir juntos
          </span>
          <h2 className="display mx-auto mt-6 max-w-2xl text-4xl text-deck-ink sm:text-5xl">
            Pronto para tirar seu projeto do papel?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-deck-ink/60">
            Fale com a nossa equipe técnica e descubra como a Deck pode
            entregar sua obra com qualidade, no prazo e com total segurança.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contato"
              className="group flex items-center overflow-hidden rounded-md"
            >
              <span className="eyebrow bg-deck-ink px-6 py-4 text-white transition-colors group-hover:bg-deck-ink-soft">
                Solicite um orçamento
              </span>
              <span className="flex h-[3.25rem] w-12 items-center justify-center bg-deck-accent text-deck-ink transition-colors group-hover:bg-deck-accent-strong">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <a
              href="tel:+552732914003"
              className="eyebrow rounded-md border border-deck-ink/15 px-6 py-4 text-deck-ink transition-colors hover:bg-deck-ink/5"
            >
              (27) 3291-4003
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
