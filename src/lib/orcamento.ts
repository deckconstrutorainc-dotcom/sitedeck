export const PERGUNTAS = [
  {
    id: "servico",
    titulo: "Qual o tipo de serviço?",
    opcoes: [
      "Construção",
      "Reforma ou ampliação",
      "Perícia ou laudo técnico",
      "Manutenção predial",
      "Outro",
    ],
  },
  {
    id: "porte",
    titulo: "Qual o porte da obra?",
    opcoes: [
      "Pequeno (até 200 m²)",
      "Médio (200 a 1.000 m²)",
      "Grande (acima de 1.000 m²)",
      "Ainda não sei",
    ],
  },
  {
    id: "cliente",
    titulo: "Para quem é a obra?",
    opcoes: ["Órgão público", "Empresa", "Pessoa física"],
  },
  {
    id: "prazo",
    titulo: "Quando pretende iniciar?",
    opcoes: [
      "Imediatamente",
      "Em 1 a 3 meses",
      "Em 3 a 6 meses",
      "Ainda estou avaliando",
    ],
  },
] as const;

export type PerguntaId = (typeof PERGUNTAS)[number]["id"];
export type Respostas = Record<PerguntaId, string>;

export type Orcamento = Respostas & {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};
