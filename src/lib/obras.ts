import manifest from "../../public/images/obras/manifest.json";

export type Obra = {
  slug: string;
  titulo: string;
  categoria: string;
  local: string;
  ano: string;
  resumo: string;
  /** Foto usada como capa em cards e hero — escolhida manualmente por obra. */
  capa: string;
  fotos: number;
};

export const obras: Obra[] = [
  {
    slug: "sml",
    titulo: "SML — Polícia Científica",
    categoria: "Edificação pública",
    local: "Espírito Santo",
    ano: "2025",
    resumo:
      "Obra do Serviço de Medicina Legal e Criminalística, contemplando fachada, salas técnicas, laboratórios e urbanização externa, atendendo às exigências do órgão público.",
    capa: "foto-11",
    fotos: manifest["sml"]?.length ?? 0,
  },
  {
    slug: "parque-tecnologico",
    titulo: "Parque Tecnológico",
    categoria: "Edificação institucional",
    local: "Vitória - ES",
    ano: "2020",
    resumo:
      "Edifício institucional executado da estrutura ao acabamento, com brises de fachada, geração solar fotovoltaica e paisagismo.",
    capa: "foto-05",
    fotos: manifest["parque-tecnologico"]?.length ?? 0,
  },
  {
    slug: "cie",
    titulo: "CIE — Estação Cidadania-Esporte",
    categoria: "Equipamento esportivo",
    local: "Serra - ES",
    ano: "2020",
    resumo:
      "Centro de Iniciação ao Esporte com ginásio poliesportivo coberto, quadra oficial, vestiários e áreas de apoio.",
    capa: "foto-13",
    fotos: manifest["cie"]?.length ?? 0,
  },
  {
    slug: "estadio-kleber-andrade",
    titulo: "Estádio Kleber Andrade",
    categoria: "Reforma e manutenção",
    local: "Cariacica - ES",
    ano: "2021",
    resumo:
      "Instalação de escada rolante e serviços de pintura em torre, arquibancada e pisos, executados em estádio em operação.",
    capa: "foto-08",
    fotos: manifest["estadio-kleber-andrade"]?.length ?? 0,
  },
  {
    slug: "benicio-goncalves",
    titulo: "Escola Benício Gonçalves",
    categoria: "Edificação escolar",
    local: "Vitória - ES",
    ano: "2023",
    resumo:
      "Reforma e ampliação de unidade escolar, incluindo cobertura metálica de quadra, fechamentos e revitalização de fachada.",
    capa: "foto-02",
    fotos: manifest["benicio-goncalves"]?.length ?? 0,
  },
  {
    slug: "vale-encantado",
    titulo: "Escola Vale Encantado",
    categoria: "Edificação escolar",
    local: "Espírito Santo",
    ano: "2023",
    resumo:
      "Unidade escolar entregue com salas de aula, cozinha industrial, biblioteca, quadra coberta e área de convivência.",
    capa: "foto-13",
    fotos: manifest["vale-encantado"]?.length ?? 0,
  },
  {
    slug: "cat-bombeiros",
    titulo: "CAT Bombeiros",
    categoria: "Edificação pública",
    local: "Espírito Santo",
    ano: "2021",
    resumo:
      "Obra executada para o Corpo de Bombeiros, da armação e concretagem de lajes aos acabamentos internos e fachada.",
    capa: "foto-03",
    fotos: manifest["cat-bombeiros"]?.length ?? 0,
  },
  {
    slug: "escola-gomes-cardim",
    titulo: "Escola Gomes Cardim",
    categoria: "Acessibilidade e reforma",
    local: "Vitória - ES",
    ano: "2021",
    resumo:
      "Intervenção de acessibilidade em unidade escolar, com implantação de elevador, escada metálica e rampas com guarda-corpo.",
    capa: "foto-04",
    fotos: manifest["escola-gomes-cardim"]?.length ?? 0,
  },
  {
    slug: "cond-morada-do-vale",
    titulo: "Cond. Morada do Vale",
    categoria: "Empreendimento residencial",
    local: "Espírito Santo",
    ano: "2021",
    resumo:
      "Condomínio residencial multifamiliar, com blocos de apartamentos, reservatórios, piscina e áreas comuns.",
    capa: "foto-02",
    fotos: manifest["cond-morada-do-vale"]?.length ?? 0,
  },
  {
    slug: "cond-vista-do-mar",
    titulo: "Cond. Vista do Mar",
    categoria: "Incorporação residencial",
    local: "Espírito Santo",
    ano: "2021",
    resumo:
      "Empreendimento residencial da Deck Incorporadora, com apartamentos de dois quartos, área gourmet e piscina.",
    capa: "foto-14",
    fotos: manifest["cond-vista-do-mar"]?.length ?? 0,
  },
];

export function getObraBySlug(slug: string): Obra | undefined {
  return obras.find((o) => o.slug === slug);
}

export function getObraFotos(slug: string): string[] {
  return (manifest as Record<string, string[]>)[slug] ?? [];
}

export const temVideo = (slug: string) => slug === "cie";
