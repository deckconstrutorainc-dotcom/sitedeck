import type { Metadata } from "next";
import CaseObra from "@/components/CaseObra";

export const metadata: Metadata = {
  title: "Obra Maria Olinda | Portfólio Deck Construtora",
  description:
    "Reforma e ampliação da EEEFM Professora Maria Olinda de Oliveira Menezes, em Serra - ES: 2.205 m² de intervenção, nova cobertura metálica do bloco escolar, conclusão da quadra coberta e das mini-quadras de vôlei, subestação de 150 kVA e urbanização do entorno, executados pela Deck Construtora.",
};

export default function ObraMariaOlindaPage() {
  return (
    <CaseObra
      slug="obra-maria-olinda"
      titulo="Obra Maria Olinda"
      capaAlt="Vista aérea do bloco escolar reformado da EEEFM Professora Maria Olinda de Oliveira Menezes"
      descricao="Projeto executado pela Deck Construtora, reunindo diferentes ambientes e soluções construtivas em uma intervenção voltada à funcionalidade, qualidade e melhoria da infraestrutura existente."
      ficha={[
        { label: "Cliente", valor: "Secretaria de Estado da Educação (SEDU-ES)" },
        { label: "Localização", valor: "Cidade Continental, Serra - ES" },
        { label: "Tipo de obra", valor: "Reforma e ampliação de edificação escolar" },
        { label: "Status", valor: "Concluída" },
      ]}
      // Áreas: ARTs CREA-ES 0820230015612 e 0820230274076. Demais: soma dos
      // quantitativos da planilha contratual (CT 006/2023), arredondados para baixo.
      numeros={[
        { valor: "2.205 m²", label: "de área total de intervenção" },
        { valor: "969 m²", label: "de estruturas metálicas montadas" },
        { valor: "+10 t", label: "de perfis metálicos estruturais" },
        { valor: "+1.850 m²", label: "de cobertura termoacústica" },
        { valor: "+3.100 m²", label: "de piso intertravado" },
        { valor: "+1.400 m²", label: "de porcelanato" },
        { valor: "+21 km", label: "de cabos elétricos" },
        { valor: "150 kVA", label: "de subestação elétrica" },
      ]}
      secoes={[
        {
          eyebrow: "Bloco escolar",
          titulo: "Reforma completa e nova cobertura metálica",
          layout: "destaque",
          fotos: [
            { src: "bloco-escada", alt: "Bloco escolar reformado com nova cobertura e escada metálica" },
            { src: "bloco-fachada", alt: "Fachada do bloco escolar com gradis e esquadrias novas" },
            { src: "bloco-acesso", alt: "Acesso lateral do bloco escolar com escada e muro de fechamento" },
          ],
        },
        {
          eyebrow: "Implantação geral",
          titulo: "Intervenção em todo o conjunto escolar",
          layout: "panorama",
          fotos: [{ src: "implantacao-aerea", alt: "Vista aérea da implantação do bloco escolar no entorno urbano" }],
        },
        {
          eyebrow: "Quadra poliesportiva",
          titulo: "Conclusão da quadra coberta com estrutura metálica",
          layout: "destaque",
          fundo: "suave",
          fotos: [
            { src: "quadra", alt: "Quadra poliesportiva coberta concluída" },
            { src: "quadra-estrutura", alt: "Estrutura metálica e cobertura termoacústica da quadra" },
            { src: "quadra-arquibancada", alt: "Área de arquibancada e bancos ao redor da quadra coberta" },
          ],
        },
        {
          eyebrow: "Áreas externas",
          titulo: "Mini-quadras de vôlei, pátio e urbanização",
          layout: "grade2",
          fotos: [
            { src: "mini-quadras", alt: "Vista aérea das mini-quadras de vôlei e da quadra coberta" },
            { src: "mini-quadras-quadra", alt: "Mini-quadras de vôlei concluídas em frente à quadra poliesportiva" },
            { src: "patio-pergolados", alt: "Pátio com pergolados e piso intertravado em frente ao bloco escolar" },
            { src: "patio-amplo", alt: "Pátio externo pavimentado entre a quadra e o bloco escolar" },
          ],
        },
      ]}
      intervencoes={[
        "Reforma do bloco escolar, com nova cobertura metálica termoacústica",
        "Ampliação da edificação escolar",
        "Conclusão da quadra poliesportiva coberta",
        "Conclusão das mini-quadras de vôlei",
        "Urbanização do entorno e das áreas externas",
        "Instalações elétricas e subestação de 150 kVA",
        "Cabeamento estruturado e climatização",
      ]}
    />
  );
}
