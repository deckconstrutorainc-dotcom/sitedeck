import nodemailer from "nodemailer";
import { PERGUNTAS, type Orcamento } from "@/lib/orcamento";

const DESTINATARIOS = [
  "orcamento@deckconstrutora.com.br",
  "bruno@deckconstrutora.com.br",
  "deck@deckconstrutora.com.br",
];

const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function texto(valor: unknown, max: number): string {
  return typeof valor === "string" ? valor.trim().slice(0, max) : "";
}

function escapar(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let corpo: Record<string, unknown>;
  try {
    corpo = await req.json();
  } catch {
    return Response.json({ erro: "Requisição inválida." }, { status: 400 });
  }

  // Campo invisível: só robôs preenchem.
  if (texto(corpo.site, 200)) return Response.json({ ok: true });

  const dados = {
    nome: texto(corpo.nome, 120),
    email: texto(corpo.email, 160),
    telefone: texto(corpo.telefone, 40),
    mensagem: texto(corpo.mensagem, 5000),
  } as Orcamento;

  for (const p of PERGUNTAS) {
    const resposta = texto(corpo[p.id], 100);
    if (!(p.opcoes as readonly string[]).includes(resposta)) {
      return Response.json({ erro: "Responda todas as perguntas." }, { status: 400 });
    }
    dados[p.id] = resposta;
  }

  if (!dados.nome || !EMAIL_VALIDO.test(dados.email) || !dados.mensagem) {
    return Response.json({ erro: "Preencha nome, e-mail e mensagem." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("SMTP não configurado");
    return Response.json({ erro: "Envio indisponível no momento." }, { status: 500 });
  }

  const porta = Number(SMTP_PORT ?? 465);
  const transporte = nodemailer.createTransport({
    host: SMTP_HOST,
    port: porta,
    secure: porta === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const linhas: [string, string][] = [
    ...PERGUNTAS.map((p) => [p.titulo, dados[p.id]] as [string, string]),
    ["Nome", dados.nome],
    ["E-mail", dados.email],
    ["Telefone", dados.telefone || "—"],
  ];

  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#0d1b21">Nova solicitação de orçamento</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${linhas
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#667;vertical-align:top">${escapar(k)}</td><td style="padding:6px 0;color:#0d1b21"><strong>${escapar(v)}</strong></td></tr>`,
        )
        .join("")}
    </table>
    <h3 style="font-family:Arial,sans-serif;color:#0d1b21;margin-top:24px">Mensagem</h3>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapar(dados.mensagem)}</p>
  `;

  const textoPuro = [
    ...linhas.map(([k, v]) => `${k}: ${v}`),
    "",
    "Mensagem:",
    dados.mensagem,
  ].join("\n");

  try {
    await transporte.sendMail({
      from: `"Site Deck Construtora" <${SMTP_USER}>`,
      to: DESTINATARIOS,
      replyTo: `"${dados.nome.replace(/"/g, "")}" <${dados.email}>`,
      subject: `Orçamento via site — ${dados.servico} — ${dados.nome}`,
      text: textoPuro,
      html,
    });
  } catch (err) {
    console.error("Falha no envio de e-mail", err);
    return Response.json({ erro: "Não foi possível enviar agora." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
