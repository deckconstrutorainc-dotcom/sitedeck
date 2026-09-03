import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deck-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/marca/logo-horizontal-branca.png"
              alt="Deck Construtora e Incorporadora"
              width={168}
              height={60}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              Deck Construtora e Incorporadora. Mais de 30 anos entregando
              obras públicas e privadas com precisão técnica e gestão
              inteligente.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-white/35">Empresa</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li><Link href="/sobre" className="hover:text-white">Sobre a Deck</Link></li>
              <li><Link href="/servicos" className="hover:text-white">Serviços</Link></li>
              <li><Link href="/equipe" className="hover:text-white">Equipe</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-white/35">Obras</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li><Link href="/portfolio" className="hover:text-white">Portfólio completo</Link></li>
              <li><Link href="/contato" className="hover:text-white">Solicite um orçamento</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-white/35">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li className="leading-relaxed">
                Rua Capitão Domingos, 80 — Sala 514
                <br />
                Santa Lúcia, Vitória - ES
                <br />
                CEP 29056-915
              </li>
              <li>
                <a href="tel:+552732914003" className="hover:text-white">
                  (27) 3291-4003
                </a>
              </li>
              <li>
                <a href="mailto:deck@deckconstrutora.com.br" className="hover:text-white">
                  deck@deckconstrutora.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-6 text-xs text-white/30 sm:px-8">
          © {new Date().getFullYear()} Deck Construtora e Incorporadora. Todos
          os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
