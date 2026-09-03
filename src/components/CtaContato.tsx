import Link from "next/link";

export default function CtaContato() {
  return (
    <section className="bg-deck-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Vamos construir seu próximo projeto
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Fale com a nossa equipe e descubra como a Deck pode transformar seu
          projeto em uma obra de qualidade, no prazo e com segurança.
        </p>
        <Link
          href="/contato"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-deck-navy transition-colors hover:bg-deck-mist"
        >
          Fale conosco
        </Link>
      </div>
    </section>
  );
}
