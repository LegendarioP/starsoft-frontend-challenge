# 🎨 Starsoft NFT Marketplace

Marketplace de NFTs desenvolvido como desafio técnico para a Starsoft. Uma aplicação moderna e performática para visualização e compra de NFTs, construída com Next.js 16, React 19 e as melhores práticas de desenvolvimento.

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)
![Tests](https://img.shields.io/badge/Tests-79%20passing-success?style=flat)

---

## Funcionalidades

- **Listagem de NFTs** com paginação infinita
- **Carrinho de compras** com gerenciamento de estado persistente
- **Animações fluidas** em todos os componentes
- **Design responsivo** para todas as telas
- **Acessibilidade** com ARIA labels e navegação por teclado
- **Performance otimizada** com React Compiler e SSR
- **79 testes automatizados** com 100% de aprovação
- **SEO otimizado** com sitemap e meta tags

---

## Instalação e Execução

### Pré-requisitos

- Node.js 20.x ou superior
- NPM ou Docker

### Via NPM

1. **Clone o repositório:**
```bash
git clone https://github.com/LegendarioP/starsoft-frontend-challenge
cd starsoft-frontend
```

2. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env
```

3. **Instale as dependências:**
```bash
npm install
```

4. **Execute em modo de desenvolvimento:**
```bash
npm run dev
```

5. **Acesse a aplicação:**
```
http://localhost:3000
```

### Via Docker

1. **Build e execute com Docker Compose:**
```bash
docker-compose up --build
```

2. **Acesse a aplicação:**
```
http://localhost:3000
```

### Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria build de produção
npm run start        # Inicia o servidor de produção
npm run test         # Executa os testes
npm run test:watch   # Executa os testes em modo watch
npm run test:coverage # Gera relatório de cobertura
npm run lint         # Executa o linter
```

## Estrutura do Projeto

```
starsoft-frontend/
├── docker/                    # Configurações Docker
│   └── Dockerfile
├── public/                    # Arquivos estáticos
├── src/
│   ├── assets/               # Imagens e recursos
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── ProductCard/
│   │   ├── PriceBadge/
│   │   ├── sidebar/
│   │   │   ├── Drawer/       # Carrinho lateral
│   │   │   └── ProductCheckout/
│   │   └── icons/
│   ├── hooks/                # Custom hooks
│   │   ├── useProducts.ts    # Hook de listagem/filtros
│   │   ├── useFilters.ts     # Gerenciamento de filtros
│   │   └── useRedux.ts       # Tipagem do Redux
│   ├── lib/                  # Utilitários
│   │   ├── api.ts           # Configuração da API
│   │   └── registry.tsx     # SSR do Styled Components
│   ├── pages/               # Páginas Next.js
│   │   ├── _app.tsx         # Configuração global
│   │   ├── index.tsx        # Página principal
│   │   └── products/
│   │       └── [id].tsx     # Página de detalhes (SSR)
│   ├── queries/             # React Query hooks
│   │   └── products-query.ts
│   ├── services/            # Chamadas à API
│   │   ├── products.ts
│   │   └── queries.ts
│   ├── store/               # Redux Store
│   │   ├── index.ts
│   │   └── slices/
│   │       └── cartSlice.ts
│   ├── styles/              # Estilos globais
│   │   └── globals.tsx
│   ├── tests/               # Configuração de testes
│   │   ├── setup.ts
│   │   └── test-utils.tsx
│   └── types/               # Tipos TypeScript
│       └── product.ts
├── .env.example             # Variáveis de ambiente
├── docker-compose.yml       # Orquestração Docker
├── next-sitemap.config.js   # Configuração do sitemap
├── package.json
├── tsconfig.json
└── vitest.config.ts         # Configuração dos testes
```

---

## Funcionalidades Implementadas

### Obrigatórias

- [x] **Listagem de NFTs** com dados da API fornecida
- [x] **Paginação infinita** (scroll infinito) com indicador visual de progresso
- [x] **Carrinho de compras funcional**
  - Adicionar/remover produtos
  - Controle de quantidade
  - Cálculo automático do total
  - Persistência no localStorage
- [x] **Animações**
  - Entrada dos cards
  - Abertura/fechamento do drawer
  - Hover effects
  - Loading states
- [x] **Rotas dinâmicas** para detalhes dos produtos com SSR
- [x] **Testes automatizados** (79 testes com Jest/Testing Library)
- [x] **TypeScript** em todo o projeto
- [x] **Docker** configurado para produção

### Desejáveis

- [x] **Animações avançadas** com Framer Motion
- [x] **Next.js 14+** (versão 16.1.4)
- [x] **Pré-renderização** com getServerSideProps
- [x] **Responsividade** implementada
- [x] **Acessibilidade** (ARIA labels, navegação por teclado)
- [x] **SEO otimizado** (meta tags, sitemap, robots.txt)

---

## Testes

### Cobertura Completa - 79 Testes

```bash
✓ src/hooks/useProducts.spec.ts (16 tests)
✓ src/store/slices/index.spec.ts (16 tests)
✓ src/components/Footer/index.spec.tsx (3 tests)
✓ src/components/PriceBadge/index.spec.tsx (7 tests)
✓ src/components/ProductCard/index.spec.tsx (7 tests)
✓ src/components/Header/index.spec.tsx (7 tests)
✓ src/components/sidebar/ProductCheckout/index.spec.tsx (9 tests)
✓ src/components/sidebar/Drawer/index.spec.tsx (14 tests)

Test Files  8 passed (8)
Tests       79 passed (79)
```

### Executar Testes

```bash
# Todos os testes
npm test

# Modo watch
npm run test:watch

# Com cobertura
npm run test:coverage
```

### O que é Testado

- **Componentes UI**: Renderização, interações, estados
- **Redux**: Actions, reducers, cenários complexos
- **Acessibilidade**: ARIA labels e roles
- **Integração**: Interação entre componentes e store

---

## Responsividade

Layout totalmente responsivo implementado com media queries em Styled Components:

-  **Mobile**: 320px - 767px
-  **Tablet**: 768px - 1023px
-  **Desktop**: 1024px+

---

## Acessibilidade

Implementação completa de boas práticas de acessibilidade:

- **ARIA Labels** descritivos em todos os botões
- **Roles semânticos** (list, button, status)
- **Navegação por teclado** (ESC para fechar drawer)
- **Alt text** em todas as imagens
- **Focus states** visíveis
- **Feedback de loading** com aria-busy
- **Estados de botões** (disabled) com labels descritivos
- **Live regions** para atualizações dinâmicas

---

## SEO

### Implementações

- **Meta tags globais** (viewport, theme-color, favicon)
- **robots.txt** gerado automaticamente
- **sitemap.xml** gerado no build
- **Server-Side Rendering** nas páginas de produto
- **Imagens otimizadas** com next/image
- **URLs amigáveis** (/products/[id])

### Configuração

```javascript
// next-sitemap.config.js
siteUrl: process.env.NEXT_PUBLIC_SITE_URL
generateRobotsTxt: true
```