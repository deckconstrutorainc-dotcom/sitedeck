import type { Metadata } from "next";
import CaseObra from "@/components/CaseObra";

export const metadata: Metadata = {
  title: "Obra Judith | Portfólio Deck Construtora",
  description:
    "Reforma e ampliação da EEEF Judith Leão Castello Ribeiro, em Serra - ES: 2.864 m² de intervenção, quadra poliesportiva coberta, vestiários, castelo d'água, instalações elétricas e urbanização completa, executados pela Deck Construtora.",
};

export default function ObraJudithPage() {
  return (
    <CaseObra
      slug="obra-judith"
      titulo="Obra Judith"
      capaAlt="Quadra poliesportiva coberta da EEEF Judith Leão Castello Ribeiro"
      descricao="Projeto executado pela Deck Construtora, reunindo diferentes ambientes e soluções construtivas em uma intervenção voltada à funcionalidade, qualidade e melhoria da infraestrutura existente."
      ficha={[
        { label: "Cliente", valor: "Secretaria de Estado da Educação (SEDU-ES)" },
        { label: "Localização", valor: "Pitanga, Serra - ES" },
        { label: "Tipo de obra", valor: "Reforma e ampliação de edificação escolar" },
        { label: "Status", valor: "Concluída" },
      ]}
      // Áreas: ARTs CREA-ES 0820260071104 e 0820250219836. Demais: soma dos
      // quantitativos da planilha contratual (CT 130/2022), arredondados para baixo.
      numeros={[
        { valor: "2.864 m²", label: "de área total de intervenção" },
        { valor: "2.102 m²", label: "de estruturas metálicas montadas" },
        { valor: "+14 t", label: "de perfis metálicos estruturais" },
        { valor: "+340 m³", label: "de concreto usinado" },
        { valor: "+22 t", label: "de aço em armaduras" },
        { valor: "+2.000 m²", label: "de cobertura termoacústica" },
        { valor: "+12 km", label: "de cabos elétricos" },
        { valor: "30 mil L", label: "de reservação no castelo d'água" },
      ]}
      secoes={[
        {
          eyebrow: "Quadra e cobertura",
          titulo: "Ginásio poliesportivo coberto, do zero à entrega",
          layout: "destaque",
          fotos: [
            { src: "quadra-estrutura", alt: "Estrutura metálica de cobertura da quadra poliesportiva" },
            { src: "quadra-arquibancada", alt: "Quadra poliesportiva com arquibancada e traves oficiais" },
            { src: "quadra-lateral", alt: "Alambrado e cobertura metálica da quadra poliesportiva" },
          ],
        },
        {
          eyebrow: "Implantação geral",
          titulo: "Reforma e ampliação integradas ao conjunto escolar",
          layout: "panorama",
          fotos: [{ src: "implantacao-aerea", alt: "Vista aérea da implantação do bloco escolar e da quadra coberta" }],
        },
        {
          eyebrow: "Áreas externas",
          titulo: "Urbanização, paisagismo e acessibilidade",
          layout: "grade2",
          fotos: [
            { src: "fachada-grafite", alt: "Fachada externa com paisagismo e acesso da unidade escolar" },
            { src: "fachada-gradil", alt: "Fachada lateral com gradil metálico novo e jardim" },
            { src: "area-convivio", alt: "Área de convívio externa com bancos de concreto e paisagismo" },
            { src: "area-bancos", alt: "Mobiliário urbano externo em concreto e piso intertravado" },
          ],
        },
        {
          eyebrow: "Ambientes internos",
          titulo: "Salas e áreas de uso coletivo reformadas",
          layout: "destaque",
          fundo: "suave",
          fotos: [
            { src: "sala-aula", alt: "Sala de aula reformada com climatização e acabamentos novos" },
            { src: "refeitorio", alt: "Refeitório coberto com estrutura metálica e guichês de atendimento" },
            { src: "sala-apoio", alt: "Sala de apoio com climatização e acabamentos novos" },
          ],
        },
        {
          eyebrow: "Circulação e infraestrutura técnica",
          titulo: "Conexão entre ambientes e suporte operacional",
          layout: "grade3",
          retrato: true,
          fotos: [
            { src: "corredor-interno", alt: "Corredor interno com acabamento padronizado e sinalização de segurança" },
            { src: "acesso-blocos", alt: "Acesso entre o bloco escolar e a quadra poliesportiva" },
            { src: "corredor-externo", alt: "Corredor externo coberto com bancos de concreto" },
            { src: "castelo-dagua", alt: "Castelo d'água construído, com escada de marinheiro e guarda-corpo" },
            { src: "quadro-eletrico", alt: "Quadros de distribuição elétrica e eletrocalhas instalados" },
            { src: "subestacao", alt: "Subestação de energia elétrica protegida por gradil" },
          ],
        },
      ]}
      intervencoes={[
        "Reforma e ampliação do bloco escolar",
        "Construção e cobertura metálica da quadra poliesportiva",
        "Construção de vestiário",
        "Construção de castelo d'água e sistema de recalque",
        "Instalações elétricas, SPDA e cabeamento estruturado",
        "Sistema de climatização",
        "Urbanização, paisagismo e acessibilidade das áreas externas",
      ]}
    />
  );
}
