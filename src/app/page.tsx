import Image from "next/image";
import Link from "next/link";
import CardObra from "@/components/CardObra";
import CtaContato from "@/components/CtaContato";
import { obras } from "@/lib/obras";

const VALORES = [
  { titulo: "Excelência", texto: "Superar padrões de qualidade e eficiência em todas as etapas do projeto." },
  { titulo: "Inovação", texto: "Tecnologias construtivas, metodologias BIM e processos digitais." },
  { titulo: "Comprometimento", texto: "Ética, responsabilidade e foco em honrar prazos e contratos." },
  { titulo: "Segurança", texto: "Ambientes de trabalho seguros e conformes às normas técnicas." },
];

const ESTATISTICAS = [
  { valor: "30+", label: "anos de mercado" },
  { valor: "10+", label: "obras em portfólio" },
  { valor: "100%", label: "compromisso com prazos" },
  { valor: "ES", label: "atuação em todo o estado" },
];

const destaque = obras.slice(0, 3);

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-deck-navy-dark text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/obras/parque-tecnologico/foto-06-full.webp"
            alt="Obra Deck Construtora"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deck-navy-dark via-deck-navy-dark/70 to-deck-navy-dark/40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-deck-slate">
            Engenharia e construção civil
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Construindo com precisão, tecnologia e mais de 30 anos de experiência
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            A Deck Construtora e Incorporadora entrega obras públicas e
            privadas de alto desempenho, unindo gestão inteligente e
            compromisso com a qualidade em cada etapa.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-deck-navy transition-colors hover:bg-deck-mist"
            >
              Ver portfólio de obras
            </Link>
            <Link
              href="/contato"
              className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-deck-mist">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4">
          {ESTATISTICAS.map((e) => (
            <div key={e.label} className="text-center">
              <div className="text-3xl font-bold text-deck-navy sm:text-4xl">{e.valor}</div>
              <div className="mt-1 text-sm text-deck-graphite/70">{e.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-deck-navy">
              Quem somos
            </span>
            <h2 className="mt-2 text-3xl font-bold text-deck-graphite">
              Mais de 30 anos entregando obras de alto desempenho
            </h2>
            <p className="mt-4 leading-relaxed text-deck-graphite/80">
              A Deck Construtora e Incorporadora LTDA atua há mais de 30 anos
              no mercado da construção civil, oferecendo soluções completas em
              engenharia e edificações públicas e privadas. Combinamos
              experiência, tecnologia e gestão inteligente para entregar obras
              de alto desempenho — desde reformas e ampliações até
              empreendimentos de grande porte.
            </p>
            <Link
              href="/sobre"
              className="mt-6 inline-block text-sm font-semibold text-deck-navy hover:underline"
            >
              Conheça nossa história →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/obras/cie/foto-03-medium.webp"
              alt="Obra CIE - Deck Construtora"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-deck-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-deck-navy">
              Nossos valores
            </span>
            <h2 className="mt-2 text-3xl font-bold text-deck-graphite">
              O que guia cada obra que entregamos
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {VALORES.map((v) => (
              <div key={v.titulo} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-deck-navy">{v.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-deck-graphite/70">
                  {v.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-deck-navy">
              Portfólio
            </span>
            <h2 className="mt-2 text-3xl font-bold text-deck-graphite">
              Obras em destaque
            </h2>
          </div>
          <Link href="/portfolio" className="text-sm font-semibold text-deck-navy hover:underline">
            Ver todas as obras →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {destaque.map((obra) => (
            <CardObra key={obra.slug} obra={obra} />
          ))}
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
