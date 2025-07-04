# ULTRAMEGA - BELZ SEGUROS

Uma aplicação Next.js moderna para análise comparativa de seguros empresariais, desenvolvida para apresentar propostas da Belz Corretora de Seguros.

## 🚀 Características

- **Design Moderno**: Interface responsiva com gradientes e animações sutis
- **Análise Comparativa**: Comparação visual entre seguros atuais e propostas Belz
- **Dashboard Interativo**: Cards de resumo com métricas de economia
- **Documentos PDF**: Acesso organizado a todas as propostas e documentos
- **Relatórios Detalhados**: Geração automática de relatórios em nova janela
- **Otimizado**: Construído com Next.js 14 e Tailwind CSS

## 🛠️ Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling moderno e responsivo
- **React** - Interface de usuário
- **ESLint** - Linting e qualidade de código

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout principal
│   └── globals.css       # Estilos globais
├── components/
│   ├── common/           # Componentes reutilizáveis
│   │   ├── Button.js
│   │   ├── PDFLink.tsx
│   │   ├── PDFSection.tsx
│   │   └── Logo.tsx
│   └── dashboard/        # Componentes do dashboard
└── data/
    └── companyData.js    # Dados da empresa ULTRAMEGA

public/
├── logos/                # Logos das empresas
│   ├── ultramega.png
│   └── belz.png
└── arquivos/            # Documentos PDF
    ├── hapvida-atual.pdf
    ├── segurodevida-*.pdf
    ├── segurofrota-*.pdf
    └── segurosaude-*.pdf
```

## 🎨 Funcionalidades

### Dashboard Principal
- Cards de resumo com economia mensal, anual e percentual
- Comparação lado a lado entre situação atual e proposta Belz
- Design com cores distintas para diferenciação visual

### Seção de Documentos
- PDFs organizados por categoria (Atuais vs Propostas Belz)
- Links diretos para visualização dos documentos
- Interface visual diferenciada por tipo de proposta

### Relatórios
- Geração automática de relatórios detalhados
- Abertura em nova janela para impressão
- Formatação profissional com dados completos

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar a aplicação:**
   ```
   http://localhost:3000
   ```

## 📊 Dados da Empresa

Os dados são centralizados no arquivo `src/data/companyData.js` incluindo:
- Informações da empresa ULTRAMEGA
- Custos atuais de todos os seguros
- Propostas da Belz Corretora
- Cálculos automáticos de economia

## 🎯 Objetivos

Esta aplicação foi desenvolvida para:
- Apresentar de forma clara as vantagens das propostas Belz
- Demonstrar economia potencial de forma visual
- Facilitar o acesso a documentos e propostas
- Gerar relatórios profissionais para tomada de decisão

## 📝 Licença

Desenvolvido para ULTRAMEGA - Belz Corretora de Seguros
