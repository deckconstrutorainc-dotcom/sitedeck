"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/equipe", label: "Equipe" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [rolou, setRolou] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou || open ? "bg-deck-ink/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <Image
            src="/images/marca/logo-horizontal-branca.png"
            alt="Deck Construtora e Incorporadora"
            width={180}
            height={64}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => {
            const ativo = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  ativo ? "text-deck-accent" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href="/contato"
            className="group flex items-center overflow-hidden rounded-md"
          >
            <span className="flex h-11 w-11 items-center justify-center bg-deck-accent-strong text-deck-ink transition-colors group-hover:bg-deck-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="eyebrow bg-deck-accent px-5 py-[0.95rem] text-deck-ink transition-colors group-hover:bg-deck-accent-strong">
              Solicite um orçamento
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-deck-ink px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 text-sm text-white/80 hover:text-deck-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="eyebrow mt-5 block rounded-md bg-deck-accent px-5 py-3 text-center text-deck-ink"
          >
            Solicite um orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}
