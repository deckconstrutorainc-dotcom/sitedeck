import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deck-navy-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/images/marca/logo-horizontal.webp"
            alt="Deck Construtora e Incorporadora"
            width={160}
            height={56}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Mais de 30 anos de experiência em engenharia e construção civil,
            entregando obras públicas e privadas com qualidade, tecnologia e
            gestão inteligente.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/sobre" className="hover:text-white">Sobre a Deck</Link></li>
            <li><Link href="/servicos" className="hover:text-white">Serviços</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfólio de obras</Link></li>
            <li><Link href="/equipe" className="hover:text-white">Equipe</Link></li>
            <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Contato
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Rua Capitão Domingos, 80 - Sala 514</li>
            <li>Santa Lúcia, Vitória - ES, CEP 29056-915</li>
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

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Deck Construtora e Incorporadora LTDA. Todos os direitos reservados.
      </div>
    </footer>
  );
}
