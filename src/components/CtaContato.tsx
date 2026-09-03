import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaContato() {
  return (
    <section className="relative overflow-hidden bg-deck-ink py-28 text-center lg:py-36">
      <Image
        src="/images/institucional/seguranca-full.webp"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deck-ink via-deck-ink/85 to-deck-ink/70" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow text-white/50">Vamos construir juntos</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-6 text-4xl text-white sm:text-5xl">
            Seu próximo projeto começa aqui.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/60">
            Fale com a nossa equipe técnica e descubra como a Deck pode
            entregar sua obra com qualidade, no prazo e com total segurança.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contato"
              className="eyebrow inline-flex items-center gap-2 border-b border-white/40 pb-1 text-white transition-colors hover:border-white"
            >
              Fale com nossa equipe técnica
              <span aria-hidden>↗</span>
            </Link>
            <a
              href="tel:+552732914003"
              className="eyebrow text-white/50 transition-colors hover:text-white"
            >
              (27) 3291-4003
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
