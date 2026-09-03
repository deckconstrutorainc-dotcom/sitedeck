import Image from "next/image";
import type { Metadata } from "next";
import CtaContato from "@/components/CtaContato";
import HeroInterno from "@/components/HeroInterno";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Sobre nós | Deck Construtora e Incorporadora",
  description:
    "Conheça a história, missão, visão e valores da Deck Construtora e Incorporadora, referência em engenharia e construção civil no Espírito Santo.",
};

const VALORES = [
  { titulo: "Excelência", texto: "Buscamos constantemente superar padrões de qualidade e eficiência em todas as etapas do projeto." },
  { titulo: "Inovação", texto: "Aplicamos tecnologias construtivas modernas, metodologias BIM e processos digitais." },
  { titulo: "Comprometimento", texto: "Ética, responsabilidade e foco em resultados, honrando prazos e contratos." },
  { titulo: "Transparência", texto: "Relações claras, éticas e colaborativas com clientes, parceiros e equipes." },
  { titulo: "Segurança", texto: "Integridade das pessoas e ambientes de trabalho seguros e conformes às normas." },
  { titulo: "Sustentabilidade", texto: "Práticas ESG, redução de impactos ambientais e otimização de recursos naturais." },
  { titulo: "Valorização das Pessoas", texto: "Talento, crescimento profissional, diversidade e trabalho em equipe." },
];

export default function SobrePage() {
  return (
    <div className="bg-deck-bone">
      <HeroInterno
        eyebrow="Sobre a Deck"
        titulo="Experiência, tecnologia e gestão inteligente em cada obra"
        descricao="Há mais de 30 anos construindo edificações públicas e privadas no Espírito Santo, com precisão técnica e compromisso com o futuro da construção civil."
        imagem="/images/obras/sml/foto-11-full.webp"
      />

      {/* QUEM SOMOS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Quem somos</Eyebrow>
        </Reveal>

        <div className="mt-10 grid gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="display max-w-xl text-4xl text-deck-ink sm:text-5xl">
              Construir com inovação, responsabilidade e precisão técnica
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 leading-relaxed text-deck-ink/70">
              <p>
                A Deck Construtora e Incorporadora LTDA atua há mais de 30 anos
                no mercado da construção civil, oferecendo soluções completas em
                engenharia e edificações públicas e privadas. Combinamos
                experiência, tecnologia e gestão inteligente para entregar obras
                de alto desempenho — desde reformas e ampliações até
                empreendimentos de grande porte — sempre com foco em qualidade,
                eficiência e sustentabilidade.
              </p>
              <p>
                Nosso compromisso é construir com inovação, responsabilidade e
                precisão técnica, superando as expectativas de nossos clientes e
                fortalecendo parcerias duradouras baseadas em confiança e
                resultados.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSÃO E VISÃO — mosaico com imagens, estilo referência */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-deck-accent p-9 text-deck-ink">
              <h3 className="text-3xl font-semibold">Nossa Missão</h3>
              <p className="mt-8 leading-relaxed text-deck-ink/75">
                Executar obras e serviços de engenharia com excelência e
                responsabilidade, aplicando tecnologias modernas e práticas
                sustentáveis que garantam segurança, qualidade e inovação.
                Geramos valor para nossos clientes e para a sociedade,
                contribuindo para o desenvolvimento de espaços inteligentes,
                funcionais e sustentáveis.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative h-72 overflow-hidden rounded-2xl lg:h-full">
              <Image
                src="/images/obras/cie/foto-01-medium.webp"
                alt="Obra da Deck Construtora"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative h-72 overflow-hidden rounded-2xl lg:h-full">
              <Image
                src="/images/obras/cond-morada-do-vale/foto-02-medium.webp"
                alt="Empreendimento residencial Deck"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-deck-ink p-9 text-white">
              <h3 className="text-3xl font-semibold text-deck-accent">Nossa Visão</h3>
              <p className="mt-8 leading-relaxed text-white/65">
                Ser reconhecida nacionalmente como uma construtora de referência
                em qualidade, inovação e sustentabilidade, destacando-se pela
                entrega de resultados sólidos, pela adoção de soluções
                tecnológicas e processos digitais e pelo compromisso com o
                desenvolvimento das pessoas e do meio ambiente.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-deck-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow tom="claro">Nossos valores</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-8 max-w-2xl text-4xl sm:text-5xl">
              Os pilares que sustentam nossa trajetória
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALORES.map((v, i) => (
              <Reveal key={v.titulo} delay={(i % 3) * 0.08}>
                <div
                  className={`h-full rounded-xl p-7 transition-transform duration-500 hover:-translate-y-1 ${
                    i === 0
                      ? "bg-deck-accent text-deck-ink"
                      : "border border-white/10 bg-deck-ink-soft"
                  }`}
                >
                  <span className={`eyebrow ${i === 0 ? "text-deck-ink/50" : "text-white/30"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{v.titulo}</h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      i === 0 ? "text-deck-ink/70" : "text-white/55"
                    }`}
                  >
                    {v.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPROMISSO COM A QUALIDADE */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow text-deck-navy">Compromisso com a qualidade</span>
          <p className="display mt-8 text-2xl leading-snug text-deck-ink sm:text-3xl">
            &ldquo;A verdadeira qualidade nasce da união entre competência
            técnica, inovação e engajamento humano — pilares que sustentam nossa
            trajetória e fortalecem nossa reputação como uma empresa sólida,
            moderna e comprometida com o futuro da construção civil.&rdquo;
          </p>
          <p className="mt-8 text-sm text-deck-ink/50">
            Deck Construtora e Incorporadora
          </p>
        </Reveal>
      </section>

      <CtaContato />
    </div>
  );
}
