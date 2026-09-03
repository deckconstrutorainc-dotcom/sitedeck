"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/sobre", label: "Empresa" },
  { href: "/portfolio", label: "Obras" },
  { href: "/servicos", label: "Serviços" },
  { href: "/equipe", label: "Equipe" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [rolou, setRolou] = useState(false);
  const pathname = usePathname();
  // A home tem hero de fundo claro; as demais páginas usam HeroInterno (escuro).
  const heroClaro = pathname === "/";
  const escuro = rolou || open || !heroClaro;

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        rolou || open
          ? "bg-deck-ink/90 backdrop-blur-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-21">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <Image
            src={
              escuro
                ? "/images/marca/logo-horizontal-branca.png"
                : "/images/marca/logo-horizontal.png"
            }
            alt="Deck Construtora e Incorporadora"
            width={168}
            height={60}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map((link) => {
            const ativo = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors [text-shadow:0_1px_3px_rgb(0_0_0_/_0.25)] ${
                  ativo
                    ? escuro
                      ? "text-white"
                      : "text-deck-ink"
                    : escuro
                      ? "text-white/80 hover:text-white"
                      : "text-deck-ink/55 hover:text-deck-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contato"
          className={`eyebrow hidden items-center gap-2 border-b pb-0.5 transition-colors lg:flex ${
            escuro
              ? "border-white/30 text-white hover:border-white"
              : "border-deck-ink/30 text-deck-ink hover:border-deck-ink"
          }`}
        >
          Fale conosco
          <span aria-hidden>↗</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className={`flex h-11 w-11 items-center justify-center lg:hidden ${
            escuro ? "text-white" : "text-deck-ink"
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="h-[calc(100vh-5rem)] bg-deck-ink px-5 pb-10 pt-6 sm:px-8 lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/10">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display block py-5 text-3xl text-white/85 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="eyebrow mt-10 inline-flex items-center gap-2 text-white"
          >
            Fale conosco
            <span aria-hidden>↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
