# 🚀 Portfolio Pessoal - Emanuel Abreu

Portfólio profissional desenvolvido em React + TypeScript + Vite para atrair clientes e mostrar projetos.

## 📋 Pré-requisitos

- **Node.js** versão 18 ou superior ([Download](https://nodejs.org/))
- **npm** (vem com o Node.js)
- Editor de código (recomendo [VS Code](https://code.visualstudio.com/))

## 🛠️ Instalação Passo a Passo

### 1. Criar Estrutura de Pastas

```bash
# Crie a pasta do projeto
mkdir meu-portfolio
cd meu-portfolio

# Crie as subpastas necessárias
mkdir -p src/components src/components/ui src/assets
```

### 2. Copiar Arquivos de Configuração

Crie os seguintes arquivos na raiz do projeto:

- `package.json` (copie do artifact fornecido)
- `vite.config.ts` (copie do artifact fornecido)
- `tsconfig.json` (copie do artifact fornecido)
- `tsconfig.node.json` (copie do artifact fornecido)
- `index.html` (copie do seu documento)

### 3. Criar Arquivos do Projeto

**src/main.tsx:**

```typescript
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

**src/App.tsx:**
Copie o código do artifact "App.tsx Melhorado"

**src/index.css:**
Copie todo o conteúdo do seu arquivo index.css

### 4. Copiar Componentes

Copie todos os arquivos da pasta `src/components` do seu projeto original:

- Header.tsx
- Hero.tsx
- Services.tsx
- Portfolio.tsx
- About.tsx
- Testimonials.tsx
- Contact.tsx
- Footer.tsx
- E todos os componentes da pasta `ui/`

### 5. Adicionar Imagens

Coloque suas imagens na pasta `src/assets/`:

- Logo claro
- Logo escuro
- Foto de perfil

**⚠️ IMPORTANTE:** Atualize os imports de imagens nos componentes:

```typescript
// Em vez de:
import profileImage from "figma:asset/xxx.png";

// Use:
import profileImage from "../assets/profile.png";
```

### 6. Instalar Dependências

```bash
npm install
```

Este comando irá instalar todas as dependências listadas no package.json.

## 🚀 Executando o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

O site abrirá automaticamente em `http://localhost:3000`

### Modo Produção (Build)

```bash
# Criar build de produção
npm run build

# Visualizar o build
npm run preview
```

## 📝 Personalizações Importantes

### 1. Informações Pessoais

Edite os seguintes arquivos com suas informações:

**src/components/About.tsx:**

- Nome
- Biografia
- Experiências
- Habilidades

**src/components/Contact.tsx:**

- Email
- Telefone
- WhatsApp
- Localização

**src/components/Footer.tsx:**

- Links de redes sociais
- Informações de contato

### 2. Projetos do Portfolio

**src/components/Portfolio.tsx:**

Adicione seus projetos reais no array `staticProjects`:

```typescript
const staticProjects = [
  {
    title: "Nome do Projeto",
    client: "Nome do Cliente",
    segment: "Segmento",
    description: "Descrição detalhada",
    problem: "Problema resolvido",
    impact: [
      { label: "Métrica 1", value: "+50%" },
      { label: "Métrica 2", value: "30h/sem" },
    ],
    stack: ["Node.js", "React", "PostgreSQL"],
    color: "#17A2B8",
    image: "URL_DA_IMAGEM",
    url: "https://link-do-projeto.com",
  },
];
```

### 3. Integração com GitHub

Para buscar projetos do GitHub automaticamente, substitua:

```typescript
// Em Portfolio.tsx, linha ~50
const response = await fetch(
  "https://api.github.com/users/SEU_USUARIO/repos?sort=updated&per_page=6"
);
```

### 4. Cores e Tema

Personalize as cores no arquivo `src/index.css`:

```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  /* ... outras variáveis */
}
```

## 🎨 Estrutura do Projeto

```
meu-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes UI reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── assets/          # Imagens e recursos
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── public/              # Arquivos públicos
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🐛 Solução de Problemas Comuns

### Erro: "Cannot find module"

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro de importação de imagens

Verifique se os caminhos das imagens estão corretos:

```typescript
import image from "../assets/nome-da-imagem.png";
```

### Porta 3000 já em uso

Altere a porta no `vite.config.ts`:

```typescript
server: {
  port: 3001, // Mude para outra porta
}
```

## 📦 Deploy (Hospedagem)

### Vercel (Recomendado)

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Vercel detecta automaticamente Vite
4. Deploy automático!

### Netlify

1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `build` após executar `npm run build`
3. Pronto!

### GitHub Pages

```bash
npm install -D gh-pages

# Adicione no package.json:
"homepage": "https://seu-usuario.github.io/nome-repo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy:
npm run deploy
```

## 🔧 Melhorias Implementadas

✅ Remoção de versões específicas nas importações
✅ Detecção automática de tema do sistema
✅ Melhoria na responsividade
✅ Otimização de performance
✅ Melhor tratamento de erros
✅ Código mais limpo e organizado
✅ Comentários explicativos

## 📞 Suporte

Se tiver problemas:

1. Verifique se o Node.js está instalado: `node --version`
2. Verifique se está na pasta correta: `pwd`
3. Tente limpar o cache: `npm cache clean --force`
4. Reinstale as dependências: `rm -rf node_modules && npm install`

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para personalizá-lo!

---

Desenvolvido com ❤️ por Emanuel Abreu
