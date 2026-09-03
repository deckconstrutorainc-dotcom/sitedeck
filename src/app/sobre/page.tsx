import Image from "next/image";
import type { Metadata } from "next";
import CtaContato from "@/components/CtaContato";

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
    <div>
      <section className="bg-deck-navy-dark py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-deck-slate">
            Sobre a Deck
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
            Experiência, tecnologia e gestão inteligente em cada obra
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl order-2 md:order-1">
            <Image
              src="/images/obras/sml/foto-01-medium.webp"
              alt="Obra recente da Deck Construtora"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-deck-graphite">Quem somos</h2>
            <p className="mt-4 leading-relaxed text-deck-graphite/80">
              A Deck Construtora e Incorporadora LTDA atua há mais de 30 anos
              no mercado da construção civil, oferecendo soluções completas em
              engenharia e edificações públicas e privadas. Combinamos
              experiência, tecnologia e gestão inteligente para entregar obras
              de alto desempenho — desde reformas e ampliações até
              empreendimentos de grande porte — sempre com foco em qualidade,
              eficiência e sustentabilidade.
            </p>
            <p className="mt-4 leading-relaxed text-deck-graphite/80">
              Nosso compromisso é construir com inovação, responsabilidade e
              precisão técnica, superando as expectativas de nossos clientes e
              fortalecendo parcerias duradouras baseadas em confiança e
              resultados.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-deck-mist">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-deck-navy">Nossa Missão</h3>
            <p className="mt-4 leading-relaxed text-deck-graphite/80">
              Executar obras e serviços de engenharia com excelência e
              responsabilidade, aplicando tecnologias modernas e práticas
              sustentáveis que garantam segurança, qualidade e inovação.
              Geramos valor para nossos clientes e para a sociedade,
              contribuindo para o desenvolvimento de espaços inteligentes,
              funcionais e sustentáveis.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-deck-navy">Nossa Visão</h3>
            <p className="mt-4 leading-relaxed text-deck-graphite/80">
              Ser reconhecida nacionalmente como uma construtora de referência
              em qualidade, inovação e sustentabilidade, destacando-se pela
              entrega de resultados sólidos, pela adoção de soluções
              tecnológicas e processos digitais e pelo compromisso com o
              desenvolvimento das pessoas e do meio ambiente.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-deck-navy">
            Nossos valores
          </span>
          <h2 className="mt-2 text-3xl font-bold text-deck-graphite">
            Os pilares que sustentam nossa trajetória
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {VALORES.map((v) => (
            <div key={v.titulo} className="rounded-2xl border border-black/5 p-6">
              <h3 className="font-semibold text-deck-navy">{v.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-deck-graphite/70">
                {v.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-deck-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Compromisso com a Qualidade</h2>
          <p className="mt-6 leading-relaxed text-white/80">
            Na Deck Construtora, cada projeto é guiado por planejamento
            estratégico, gestão de dados e acompanhamento técnico rigoroso,
            garantindo previsibilidade, eficiência e excelência em todas as
            entregas. Acreditamos que a verdadeira qualidade nasce da união
            entre competência técnica, inovação e engajamento humano — pilares
            que sustentam nossa trajetória e fortalecem nossa reputação como
            uma empresa sólida, moderna e comprometida com o futuro da
            construção civil.
          </p>
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
