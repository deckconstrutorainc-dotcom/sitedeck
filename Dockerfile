# Imagem do site para o Coolify (VPS Locaweb).
# Etapa 1 instala dependências e gera o build; etapa 2 leva só o necessário
# para rodar (servidor "standalone" do Next.js), deixando a imagem pequena.

FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
RUN addgroup -S app && adduser -S app -G app
COPY --from=build --chown=app:app /app/.next/standalone ./
COPY --from=build --chown=app:app /app/.next/static ./.next/static
COPY --from=build --chown=app:app /app/public ./public
USER app
EXPOSE 3000
# SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS vêm das variáveis do Coolify.
CMD ["node", "server.js"]
