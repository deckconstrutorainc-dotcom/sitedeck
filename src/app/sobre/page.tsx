import Image from "next/image";
import type { Metadata } from "next";
import CtaContato from "@/components/CtaContato";
import HeroInterno from "@/components/HeroInterno";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conheça a história, missão, visão e valores da Deck Construtora e Incorporadora, referência em engenharia e construção civil no Espírito Santo.",
};

const VALORES = [
  { titulo: "Excelência", texto: "Superar padrões de qualidade e eficiência em todas as etapas do projeto." },
  { titulo: "Inovação", texto: "Tecnologias construtivas modernas, metodologias BIM e processos digitais." },
  { titulo: "Comprometimento", texto: "Ética, responsabilidade e foco em resultados, honrando prazos e contratos." },
  { titulo: "Transparência", texto: "Relações claras, éticas e colaborativas com clientes, parceiros e equipes." },
  { titulo: "Segurança", texto: "Integridade das pessoas e ambientes de trabalho seguros e conformes às normas." },
  { titulo: "Sustentabilidade", texto: "Práticas ESG, redução de impactos ambientais e otimização de recursos naturais." },
  { titulo: "Valorização das pessoas", texto: "Talento, crescimento profissional, diversidade e trabalho em equipe." },
];

export default function SobrePage() {
  return (
    <div className="bg-deck-bone">
      <HeroInterno
        eyebrow="Empresa"
        titulo="Experiência, tecnologia e gestão inteligente em cada obra"
        descricao="Há mais de 30 anos construindo edificações públicas e privadas no Espírito Santo, com precisão técnica e compromisso com o futuro da construção civil."
        imagem="/images/institucional/quem-somos.webp"
      />

      {/* QUEM SOMOS */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-36">
        <SectionLabel numero="01">Quem somos</SectionLabel>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="display max-w-xl text-4xl text-deck-ink sm:text-5xl">
              Construir com inovação, responsabilidade e precisão técnica.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-md space-y-5 text-lg leading-relaxed text-deck-grey">
              <p>
                A Deck Construtora e Incorporadora atua há mais de 30 anos no
                mercado da construção civil, oferecendo soluções completas em
                engenharia e edificações públicas e privadas — desde reformas
                e ampliações até empreendimentos de grande porte.
              </p>
              <p>
                Nosso compromisso é construir com inovação, responsabilidade e
                precisão técnica, superando as expectativas de nossos
                clientes e fortalecendo parcerias duradouras.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSÃO E VISÃO */}
      <section className="border-t border-deck-line">
        <div className="grid lg:grid-cols-2">
          <Reveal className="border-b border-deck-line lg:border-b-0 lg:border-r">
            <div className="flex h-full flex-col justify-center gap-8 px-5 py-20 sm:px-8 lg:py-28">
              <span className="eyebrow text-deck-grey">Missão</span>
              <p className="display max-w-md text-2xl leading-snug text-deck-ink sm:text-3xl">
                Executar obras e serviços de engenharia com excelência,
                aplicando tecnologias modernas e práticas sustentáveis que
                garantam segurança, qualidade e inovação.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-center gap-8 px-5 py-20 sm:px-8 lg:py-28">
              <span className="eyebrow text-deck-grey">Visão</span>
              <p className="display max-w-md text-2xl leading-snug text-deck-ink sm:text-3xl">
                Ser reconhecida nacionalmente como referência em qualidade,
                inovação e sustentabilidade, com compromisso com o
                desenvolvimento das pessoas e do meio ambiente.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALORES */}
      <section className="border-t border-deck-line bg-deck-ink py-24 text-white lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <SectionLabel numero="02" tom="claro">Valores</SectionLabel>
          <h2 className="display mt-10 max-w-2xl text-4xl sm:text-5xl">
            Os pilares que sustentam nossa trajetória.
          </h2>

          <ul className="mt-16 grid gap-x-10 sm:grid-cols-2">
            {VALORES.map((v, i) => (
              <Reveal key={v.titulo} delay={(i % 4) * 0.06}>
                <li className="flex items-baseline gap-5 border-t border-white/10 py-6">
                  <span className="eyebrow text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">{v.titulo}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/50">
                      {v.texto}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPROMISSO COM A QUALIDADE */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/institucional/compromisso-qualidade.webp"
                alt="Equipe técnica da Deck Construtora em obra"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow text-deck-grey">Compromisso com a qualidade</span>
            <p className="display mt-8 text-2xl leading-snug text-deck-ink sm:text-3xl">
              &ldquo;A verdadeira qualidade nasce da união entre competência
              técnica, inovação e engajamento humano — pilares que sustentam
              nossa trajetória e fortalecem nossa reputação como uma empresa
              sólida, moderna e comprometida com o futuro da construção
              civil.&rdquo;
            </p>
            <p className="mt-8 text-sm text-deck-grey">
              Deck Construtora e Incorporadora
            </p>
          </Reveal>
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
