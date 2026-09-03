# Site institucional — Deck Construtora e Incorporadora

Site institucional em Next.js (App Router) + TypeScript + Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

- `src/app/` — páginas (Home, Sobre, Serviços, Portfólio, Equipe, Contato)
- `src/components/` — componentes reutilizáveis (Header, Footer, GaleriaFotos, CardObra, etc.)
- `src/lib/obras.ts` — dados das obras do portfólio
- `public/images/obras/` — fotos otimizadas (WebP, em thumb/medium/full) por obra
- `public/images/marca/` — logo e cartão de visita
- `public/videos/` — vídeos da obra CIE

## Scripts de preparação de assets

Os scripts em `scripts/` foram usados para gerar `public/images/` a partir do
material bruto fornecido pelo cliente (fora deste repositório) e não são
necessários no dia a dia — só se novas fotos/obras forem adicionadas:

- `scripts/prepare-assets.mjs` — converte HEIC, redimensiona e otimiza as
  fotos das pastas de obra do cliente para WebP.
- `scripts/extract-pdf-images.mjs` — extrai as imagens embutidas de páginas
  específicas do PDF de portfólio (obras sem pasta de fotos própria).

## Conteúdo pendente

Os textos de "Serviços" e "Equipe" são placeholder — os documentos
institucionais fornecidos pelo cliente não detalhavam essas seções. Ajustar
com o cliente antes da publicação final.
