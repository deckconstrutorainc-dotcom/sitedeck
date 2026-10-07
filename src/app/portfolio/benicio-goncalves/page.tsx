import type { Metadata } from "next";
import CaseObra from "@/components/CaseObra";

export const metadata: Metadata = {
  title: "Obra Benício Gonçalves | Portfólio Deck Construtora",
  description:
    "Reforma da EEEFM Benício Gonçalves e reconstrução da quadra esportiva, em Vila Velha - ES: 3.830 m² de intervenção, mais de 25 toneladas de estrutura metálica, cobertura termoacústica e nova fachada com brises, executados pela Deck Construtora.",
};

export default function ObraBenicioPage() {
  return (
    <CaseObra
      slug="benicio-goncalves"
      titulo="Obra Benício Gonçalves"
      capaAlt="Quadra esportiva coberta reconstruída da EEEFM Benício Gonçalves"
      descricao="Projeto executado pela Deck Construtora, reunindo diferentes ambientes e soluções construtivas em uma intervenção voltada à funcionalidade, qualidade e melhoria da infraestrutura existente."
      ficha={[
        { label: "Cliente", valor: "Secretaria de Estado da Educação (SEDU-ES)" },
        { label: "Localização", valor: "Vale Encantado, Vila Velha - ES" },
        { label: "Tipo de obra", valor: "Reforma escolar e reconstrução de quadra esportiva" },
        { label: "Status", valor: "Concluída" },
      ]}
      // Áreas: ARTs CREA-ES 0820220151696 e 0820220241837. Demais: soma dos
      // quantitativos da planilha contratual (CT 108/2022), arredondados para baixo.
      numeros={[
        { valor: "3.830 m²", label: "de área total de intervenção" },
        { valor: "861 m²", label: "de estruturas metálicas montadas" },
        { valor: "+25 t", label: "de perfis metálicos estruturais" },
        { valor: "+860 m²", label: "de cobertura termoacústica" },
        { valor: "666 m²", label: "de piso de concreto da quadra" },
        { valor: "+250 m²", label: "de fechamento em chapa perfurada" },
        { valor: "194 m²", label: "de brises em alumínio na fachada" },
        { valor: "+2.300 m²", label: "de pintura de paredes e fachadas" },
      ]}
      secoes={[
        {
          eyebrow: "Quadra esportiva",
          titulo: "Reconstrução completa da quadra coberta",
          layout: "destaque",
          fotos: [
            { src: "quadra-alambrado", alt: "Quadra coberta com alambrado e rede de proteção" },
            { src: "quadra", alt: "Quadra esportiva reconstruída com piso de concreto e demarcação" },
            { src: "quadra-cobertura", alt: "Cobertura termoacústica sobre estrutura metálica da quadra" },
          ],
        },
        {
          eyebrow: "Estrutura metálica",
          titulo: "Mais de 25 toneladas de aço em pórticos, terças e fechamentos",
          layout: "grade3",
          fundo: "suave",
          fotos: [
            { src: "estrutura-chapa", alt: "Pórticos metálicos e fechamento em chapa perfurada" },
            { src: "estrutura-porticos", alt: "Pórticos e terças metálicas sob a cobertura termoacústica" },
            { src: "estrutura-telhado", alt: "Estrutura metálica e fechamento lateral da quadra" },
          ],
        },
        {
          eyebrow: "Fachada",
          titulo: "Revitalização da fachada do prédio escolar",
          layout: "grade2",
          fotos: [
            { src: "fachada-acesso", alt: "Fachada do prédio escolar com nova pintura e marquise de acesso" },
            { src: "fachada-brise", alt: "Fachada lateral com brises em alumínio e pintura nova" },
          ],
        },
        {
          eyebrow: "Entorno da quadra",
          titulo: "Urbanização e acabamentos no entorno",
          layout: "grade2",
          fundo: "suave",
          fotos: [
            { src: "entorno-quadra", alt: "Quadra coberta vista do entorno gramado" },
            { src: "entorno-lateral", alt: "Lateral da quadra com muretas, alambrado e calçada" },
            { src: "entorno-alambrado", alt: "Circulação lateral entre o muro e a quadra coberta" },
            { src: "entorno-circulacao", alt: "Circulação entre a quadra e o prédio escolar, com canaleta de drenagem" },
          ],
        },
      ]}
      intervencoes={[
        "Reconstrução da quadra esportiva, com novo piso de concreto",
        "Estrutura metálica e cobertura termoacústica da quadra",
        "Fechamento em chapa perfurada, alambrado e rede de proteção",
        "Reforma da fachada do prédio escolar, com brises em alumínio",
        "Intervenções civis no entorno da quadra",
        "Instalações elétricas e iluminação em LED da quadra",
        "Sistema de proteção contra descargas atmosféricas (SPDA)",
      ]}
    />
  );
}
