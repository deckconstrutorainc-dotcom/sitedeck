import manifest from "../../public/images/obras/manifest.json";

export type Obra = {
  slug: string;
  titulo: string;
  categoria: string;
  local: string;
  ano: string;
  resumo: string;
  fotos: number;
};

export const obras: Obra[] = [
  {
    slug: "parque-tecnologico",
    titulo: "Parque Tecnológico",
    categoria: "Edificação institucional",
    local: "Vitória - ES",
    ano: "2020",
    resumo:
      "Acompanhamento completo da obra, da estrutura ao acabamento, com controle rigoroso de cronograma e qualidade.",
    fotos: manifest["parque-tecnologico"]?.length ?? 0,
  },
  {
    slug: "cie",
    titulo: "CIE",
    categoria: "Edificação institucional",
    local: "Vitória - ES",
    ano: "2020",
    resumo:
      "Execução de obra institucional com registro em vídeo das etapas de acabamento e entrega.",
    fotos: manifest["cie"]?.length ?? 0,
  },
  {
    slug: "estadio-kleber-andrade",
    titulo: "Estádio Kleber Andrade",
    categoria: "Reforma e manutenção",
    local: "Cariacica - ES",
    ano: "2021",
    resumo:
      "Instalação de escada rolante e serviços de pintura em torre, arquibancada e piso do estádio.",
    fotos: manifest["estadio-kleber-andrade"]?.length ?? 0,
  },
  {
    slug: "benicio-goncalves",
    titulo: "Escola Benício Gonçalves",
    categoria: "Edificação escolar",
    local: "Vitória - ES",
    ano: "2023",
    resumo:
      "Obra de reforma e ampliação em unidade escolar, com foco em segurança e continuidade das atividades.",
    fotos: manifest["benicio-goncalves"]?.length ?? 0,
  },
  {
    slug: "escola-gomes-cardim",
    titulo: "Escola Gomes Cardim",
    categoria: "Edificação escolar",
    local: "Vitória - ES",
    ano: "2021",
    resumo: "Intervenção construtiva em unidade escolar, atendendo a padrões técnicos e prazos definidos.",
    fotos: manifest["escola-gomes-cardim"]?.length ?? 0,
  },
  {
    slug: "cat-bombeiros",
    titulo: "CAT Bombeiros",
    categoria: "Edificação pública",
    local: "Espírito Santo",
    ano: "2021",
    resumo: "Obra executada para o Corpo de Bombeiros, com exigências técnicas e normativas específicas.",
    fotos: manifest["cat-bombeiros"]?.length ?? 0,
  },
  {
    slug: "vale-encantado",
    titulo: "Vale Encantado",
    categoria: "Empreendimento residencial",
    local: "Espírito Santo",
    ano: "2023",
    resumo: "Acompanhamento fotográfico da evolução construtiva do empreendimento residencial.",
    fotos: manifest["vale-encantado"]?.length ?? 0,
  },
  {
    slug: "cond-morada-do-vale",
    titulo: "Cond. Morada do Vale",
    categoria: "Empreendimento residencial",
    local: "Espírito Santo",
    ano: "2021",
    resumo: "Obra em condomínio residencial, com gestão de cronograma e qualidade construtiva.",
    fotos: manifest["cond-morada-do-vale"]?.length ?? 0,
  },
  {
    slug: "cond-vista-do-mar",
    titulo: "Cond. Vista do Mar",
    categoria: "Empreendimento residencial",
    local: "Espírito Santo",
    ano: "2021",
    resumo: "Execução de obra residencial em condomínio, com acompanhamento técnico das etapas construtivas.",
    fotos: manifest["cond-vista-do-mar"]?.length ?? 0,
  },
  {
    slug: "sml",
    titulo: "SML",
    categoria: "Edificação comercial",
    local: "Espírito Santo",
    ano: "2025",
    resumo: "Uma das obras mais recentes da Deck, com registro fotográfico atualizado das etapas de execução.",
    fotos: manifest["sml"]?.length ?? 0,
  },
];

export function getObraBySlug(slug: string): Obra | undefined {
  return obras.find((o) => o.slug === slug);
}

export function getObraFotos(slug: string): string[] {
  return (manifest as Record<string, string[]>)[slug] ?? [];
}

export const temVideo = (slug: string) => slug === "cie";
