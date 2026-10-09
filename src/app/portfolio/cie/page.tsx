import type { Metadata } from "next";
import CaseObra from "@/components/CaseObra";

export const metadata: Metadata = {
  title: "CIE — Estação Cidadania-Esporte | Portfólio Deck Construtora",
  description:
    "Construção do Centro de Iniciação ao Esporte de Vila Nova de Colares, na Serra - ES: ginásio poliesportivo coberto de 1.795 m², estrutura metálica com vão livre de 30 m, pista de atletismo sintética e pista de salto, executados pela Deck Construtora.",
};

export default function ObraCiePage() {
  return (
    <CaseObra
      slug="cie"
      titulo="CIE — Estação Cidadania-Esporte"
      capaAlt="Ginásio poliesportivo do Centro de Iniciação ao Esporte de Vila Nova de Colares"
      descricao="Projeto executado pela Deck Construtora, reunindo diferentes ambientes e soluções construtivas em uma intervenção voltada à funcionalidade, qualidade e melhoria da infraestrutura existente."
      ficha={[
        { label: "Cliente", valor: "Prefeitura Municipal da Serra" },
        { label: "Localização", valor: "Vila Nova de Colares, Serra - ES" },
        { label: "Tipo de obra", valor: "Construção de centro esportivo" },
        { label: "Status", valor: "Concluída" },
      ]}
      // Área: ARTs CREA-ES 0820170120769 e 0820240259662. Demais: soma dos
      // quantitativos da planilha contratual (CT 138/2017), arredondados para baixo.
      numeros={[
        { valor: "1.795 m²", label: "de área construída" },
        { valor: "+4.000 m²", label: "de estrutura metálica em treliças, vão livre de 30 m" },
        { valor: "+3.800 m²", label: "de cobertura termoacústica" },
        { valor: "+250 m³", label: "de concreto usinado" },
        { valor: "+11 t", label: "de aço em armaduras" },
        { valor: "+1.300 m²", label: "de piso esportivo sintético" },
        { valor: "885 m²", label: "de pista de atletismo sintética" },
        { valor: "225 kVA", label: "de transformador de energia" },
      ]}
      secoes={[
        {
          eyebrow: "Ginásio poliesportivo",
          titulo: "Quadra oficial coberta com piso esportivo sintético",
          layout: "destaque",
          fotos: [
            { src: "ginasio", alt: "Ginásio poliesportivo com piso sintético e demarcação oficial" },
            { src: "ginasio-quadra", alt: "Quadra do ginásio com tabelas de basquete e traves" },
            { src: "ginasio-arquibancada", alt: "Arquibancada e tabela de basquete móvel no ginásio" },
          ],
        },
        {
          eyebrow: "Implantação geral",
          titulo: "Ginásio, pista de atletismo e urbanização integrados",
          layout: "panorama",
          fotos: [{ src: "implantacao-aerea", alt: "Vista aérea do ginásio, da pista de atletismo e do estacionamento" }],
        },
        {
          eyebrow: "Estrutura e áreas de apoio",
          titulo: "Estrutura metálica com vão livre de 30 metros",
          layout: "grade3",
          fundo: "suave",
          fotos: [
            { src: "estrutura-cobertura", alt: "Treliças metálicas da cobertura do ginásio" },
            { src: "circulacao-superior", alt: "Circulação superior com piso emborrachado e guarda-corpo" },
            { src: "piso-emborrachado", alt: "Área com piso emborrachado e equipamentos de combate a incêndio" },
          ],
        },
        {
          eyebrow: "Áreas externas",
          titulo: "Pista de atletismo, pista de salto e entorno",
          layout: "grade2",
          fotos: [
            { src: "pista-atletismo", alt: "Pista de atletismo sintética com raias numeradas" },
            { src: "pista-salto", alt: "Pista de salto em distância e gramado" },
            { src: "vista-aerea-ginasio", alt: "Vista aérea do ginásio e das áreas externas" },
            { src: "estacionamento", alt: "Estacionamento pavimentado com vaga acessível" },
          ],
        },
      ]}
      intervencoes={[
        "Fundações e estrutura de concreto armado",
        "Estrutura metálica e cobertura termoacústica do ginásio",
        "Quadra poliesportiva com piso sintético e equipamentos oficiais",
        "Pista de atletismo sintética, pista de salto e área de arremesso",
        "Vestiários, instalações hidrossanitárias e aquecimento solar",
        "Instalações elétricas, iluminação do ginásio, SPDA e transformador",
        "Reservatório metálico de 20 mil litros e acessibilidade",
      ]}
      videos={["/videos/cie-01.mp4", "/videos/cie-02.mp4"]}
    />
  );
}
