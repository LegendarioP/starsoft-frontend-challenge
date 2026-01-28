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

1. **Certifique-se de ter o Docker e Docker Compose instalados**

2. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env
```

3. **Execute o container:**
```bash
docker-compose up --build
```

4. **Acesse a aplicação:**
```
http://localhost:3000
```

5. **Para parar:**
```bash
docker-compose down
```

**Detalhes da Configuração Docker:**
- Arquivo `Dockerfile` multi-stage para otimização de tamanho
- Imagem base: `node:20-alpine` (leve e segura)
- Build em modo produção
- Porta 3000 exposta
- docker-compose.yml orquestra o serviço completo

### Scripts Disponíveis

```bash
npm run dev           # Inicia o servidor de desenvolvimento
npm run build         # Cria build de produção
npm run start         # Inicia o servidor de produção
npm run lint          # Executa o linter (ESLint)
npm run format        # Formata o código com Prettier
npm run format:check  # Verifica formatação sem modificar
npm run test          # Executa os testes
npm run test:watch    # Executa os testes em modo watch
npm run test:coverage # Gera relatório de cobertura
```

---

##  Padrões de Código

### ESLint

O projeto utiliza ESLint com as configurações do Next.js para garantir qualidade e consistência do código:

```javascript
// eslint.config.mjs
- eslint-config-next/core-web-vitals
- eslint-config-next/typescript
- eslint-config-prettier (desabilita regras conflitantes)
```

**Executar o linter:**
```bash
npm run lint
```

### Prettier

Configurado para formatação automática e consistente do código:

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

**Comandos:**
```bash
npm run format        # Formata todos os arquivos
npm run format:check  # Verifica formatação
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
├── .prettierrc              # Configuração do Prettier
├── .prettierignore          # Arquivos ignorados pelo Prettier
├── docker-compose.yml       # Orquestração Docker
├── eslint.config.mjs        # Configuração do ESLint
├── next-sitemap.config.js   # Configuração do sitemap
├── package.json
├── tsconfig.json
└── vitest.config.ts         # Configuração dos testes
```

---

## 🎯 Funcionalidades Implementadas

###  Obrigatórias

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
- [x] **Testes automatizados** (79 testes com Vitest/Testing Library)
- [x] **TypeScript** em todo o projeto
- [x] **Docker** configurado para produção
- [x] **ESLint e Prettier** configurados e integrados

###  Desejáveis

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

## 🛠️ Tecnologias e Justificativas Técnicas

### Frontend Framework

- **Next.js 16.1.4**: Escolhido por oferecer SSR (Server-Side Rendering) nativo, otimização automática de imagens, code splitting, e sistema de rotas baseado em arquivos. Essencial para SEO e performance.
- **React 19.2.3 com React Compiler**: Versão mais recente com auto-memoização, eliminando necessidade de useMemo/useCallback manual, resultando em código mais limpo e performático.

### Gerenciamento de Estado

- **Redux Toolkit 2.11.2**: Escolhido pela simplicidade na configuração de slices, imutabilidade nativa (Immer), e excelente DevTools. Preferível ao Context API para estados complexos e compartilhados.
- **redux-persist 6.0.0**: Persistência automática do carrinho no localStorage, evitando perda de dados ao recarregar a página.

### Data Fetching

- **TanStack React Query 5.90.19**: Cache inteligente, invalidação automática, infinite scroll nativo, e melhor UX com estados de loading/error. Superior ao fetch direto ou useEffect manual.

### Estilização e Animações

- **Styled Components 6.3.8**: CSS-in-JS com TypeScript support, theming global, e componentes isolados. Preferível ao SASS por co-localizar estilos com componentes.
- **Framer Motion 12.29.2**: Biblioteca declarativa para animações complexas, com suporte a gestures, variants, e performance otimizada via GPU.

### Qualidade de Código

- **TypeScript 5.x (strict mode)**: Type safety, autocomplete, e detecção de erros em tempo de desenvolvimento. Reduz bugs em produção.
- **ESLint 9 + Prettier 3.4.2**: Consistência de código, integração sem conflitos, e formatação automática. Essencial para trabalho em equipe.
- **Vitest 4.0.18**: Test runner moderno, compatível com ES modules, mais rápido que Jest, e melhor integração com TypeScript.

### DevOps

- **Docker + docker-compose**: Ambiente consistente entre desenvolvimento e produção, eliminando "funciona na minha máquina". Facilita onboarding de novos desenvolvedores.

---

## Possíveis Limitações e Melhorias Futuras

### Limitações Atuais

1. **API Mock**: Dados da API são estáticos. Em produção, seria necessário backend real com autenticação.
2. **Pagamento**: Carrinho não integra com gateway de pagamento (Stripe, PayPal).
3. **Autenticação**: Não há sistema de login/registro de usuários.
4. **Favoritos**: Funcionalidade de "wishlist" não implementada.
5. **Filtros Avançados**: Apenas listagem básica, sem filtros por preço, categoria, ou raridade.

### Melhorias Futuras

#### Funcionalidades
- [ ] **Sistema de autenticação** com NextAuth.js (OAuth com Google, Metamask)
- [ ] **Integração Web3** para compra real de NFTs (ethers.js, wagmi)
- [ ] **Perfil de usuário** com histórico de compras e coleção
- [ ] **Sistema de favoritos** persistido no backend
- [ ] **Filtros e busca avançada** (preço, raridade, blockchain, categoria)
- [ ] **Notificações** (toast messages para ações do carrinho)
- [ ] **Compartilhamento social** (Open Graph, Twitter Cards)

#### Performance
- [ ] **Imagens otimizadas** com Cloudflare Images ou Cloudinary
- [ ] **Service Worker** para cache offline (PWA)
- [ ] **Skeleton loading** em mais componentes (já implementado em ProductCard)
- [ ] **Lazy loading** de componentes pesados
- [ ] **Bundle analysis** para otimização de tamanho

#### Qualidade
- [ ] **Testes E2E** com Playwright ou Cypress
- [ ] **Testes de performance** com Lighthouse CI
- [ ] **Storybook** para documentação de componentes
- [ ] **Análise de acessibilidade** com axe-core
- [ ] **Cobertura de testes** acima de 90%

#### DevOps
- [ ] **CI/CD** com GitHub Actions (lint, test, build, deploy)
- [ ] **Deploy automatizado** na Vercel ou AWS
- [ ] **Monitoramento** com Sentry (error tracking)
- [ ] **Analytics** com Google Analytics ou Plausible
- [ ] **Health checks** e logs estruturados

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

---

## 📝 Histórico de Commits

O desenvolvimento foi organizado em commits claros e objetivos, refletindo o progresso incremental:

- Setup inicial do projeto (Next.js + TypeScript + Redux Toolkit)
- Configuração do Redux Store e slices (cartSlice)
- Integração com React Query para listagem de produtos
- Desenvolvimento dos componentes UI (Header, ProductCard, Footer)
- Implementação do carrinho com Drawer e animações
- Migração completa para Styled Components
- Adição de testes automatizados (79 testes)
- Configuração de Docker e docker-compose
- Implementação de SEO (sitemap, robots.txt, meta tags)
- Configuração de ESLint e Prettier
- Documentação final do README

---