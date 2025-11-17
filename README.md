# Plataforma de Engenharia de Prompt

Uma aplicação web moderna para fornecer guias e melhores práticas sobre engenharia de prompt para equipes internas, com exemplos práticos e detalhados organizados por departamento.

## 🚀 Tecnologias

- **Next.js**: 15.1.0
- **React**: 19.0.0
- **TypeScript**: 5.7.2
- **Tailwind CSS**: 3.4.17
- **Shadcn UI**: Componentes de UI modernos e acessíveis

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

## 🛠️ Instalação

1. Clone o repositório (ou navegue até o diretório do projeto)

2. Instale as dependências:

```bash
npm install
```

## 🏃 Executando o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
├── app/                    # Rotas e páginas (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── rh/                # Seção de RH
│   ├── comercial/         # Seção Comercial
│   ├── pricing/           # Seção Pricing
│   └── logistica/         # Seção Logística
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes Shadcn UI
│   ├── navigation.tsx    # Componente de navegação
│   ├── hero.tsx          # Hero section
│   ├── introduction.tsx  # Seção de introdução
│   └── features.tsx      # Seção de features
├── lib/                  # Utilitários
│   └── utils.ts          # Funções auxiliares
└── .cursorrules          # Regras do projeto (versões específicas)
```

## 🎨 Seções Disponíveis

- **Início**: Introdução à engenharia de prompt e conceitos básicos
- **RH**: Guias para recrutamento, avaliações e gestão de pessoas
- **Comercial**: Prompts para prospecção, negociação e relacionamento
- **Pricing**: Estratégias para análise de preços e cotações
- **Logística**: Guias para gestão de estoque e operações

## 📝 Versões Específicas

Este projeto utiliza versões específicas e fixas:
- Next.js: `15.1.0`
- React: `^19.0.0`
- React DOM: `^19.0.0`

Consulte o arquivo `.cursorrules` para mais detalhes sobre as regras de versões.

## 🔧 Desenvolvimento

O projeto utiliza:
- **App Router** do Next.js 15
- **Server Components** por padrão
- **Client Components** apenas quando necessário (interatividade)
- **TypeScript** para type safety
- **Tailwind CSS** para estilização
- **Shadcn UI** para componentes de interface

## 📄 Licença

Este projeto é de uso interno.

