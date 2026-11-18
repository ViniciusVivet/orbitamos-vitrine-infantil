# Vitrine Infantil — demonstração Orbitamos

Catálogo demonstrativo de moda infantil em Next.js. Preserva a experiência visual e os filtros, mas não vende produtos: nomes, fotos, variações e preços são exemplos. Todos os contatos comerciais levam à Orbitamos.

## Execução local

```bash
npm ci
npm run dev
```

## Dados e operação

- Produtos estáticos em `data/products.ts`; categorias derivadas dos produtos.
- WhatsApp e Instagram da Orbitamos em `data/store.ts`.
- Sem banco, login, painel editável, cron, checkout ou pagamento.
- `/admin` é apenas uma tela informativa da Orbitamos.
- Imagens remotas não passam pela otimização da Vercel (`images.unoptimized: true`).

## Publicação

Criar um repositório Git e um projeto Vercel independentes do site original. Usar o domínio `orbitamos-vitrine-infantil.vercel.app` ou atualizar `app/layout.tsx`, `app/robots.ts` e `app/sitemap.ts` se o endereço mudar. Não vincular variáveis de ambiente nem o banco do projeto original.
