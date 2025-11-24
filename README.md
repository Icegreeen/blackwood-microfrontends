# 🚀 Microfrontend com Module Federation

Projeto demonstrando arquitetura de microfrontends usando **Module Federation** - padrão da indústria para integrar múltiplos frameworks em uma única aplicação.

## 📦 Estrutura

```
apps/
├── host/          # Next.js 15 + React 19 (aplicação principal)
├── vue-mars/      # Vue 3 + Vite (microfrontend remoto)
└── svelte-moon/   # Svelte 4 + Vite (microfrontend remoto)
```

## 🛠️ Stack Tecnológica

- **Host**: Next.js 15 + React 19
- **Remotes**: Vue 3 + Svelte 4 (ambos com Vite)
- **Module Federation**: `@module-federation/vite`
- **Monorepo**: pnpm workspaces

## 🚀 Como Rodar

### Pré-requisitos

```bash
# Instalar dependências
pnpm install
```

### Desenvolvimento

Abra **3 terminais** e execute:

**Terminal 1 - Vue Mars (porta 3001):**
```bash
pnpm dev:mars
```

**Terminal 2 - Svelte Moon (porta 3002):**
```bash
pnpm dev:moon
```

**Terminal 3 - Host (porta 3000):**
```bash
pnpm dev
```

**Acesse:**
- `http://localhost:3000` - Página inicial
- `http://localhost:3000/mars` - Microfrontend Vue
- `http://localhost:3000/moon` - Microfrontend Svelte

### Produção

**1. Build de todos os projetos:**
```bash
pnpm build
```

**2. Inicie os servidores (3 terminais):**

**Terminal 1 - Vue Mars:**
```bash
pnpm preview:mars
```

**Terminal 2 - Svelte Moon:**
```bash
pnpm preview:moon
```

**Terminal 3 - Host:**
```bash
pnpm start
```

**Acesse:** `http://localhost:3000`

## 🏗️ Como Funciona

1. **Remotes** (Vue Mars e Svelte Moon) expõem componentes via `remoteEntry.js` usando Module Federation
2. **Host** (Next.js) carrega `remoteEntry.js` dinamicamente em runtime
3. Componentes Vue/Svelte são montados dentro do React host
4. **Fallback automático** para iframe se Module Federation falhar

### Fluxo de Carregamento

```
Host renderiza → Carrega iframe (fallback) → Tenta Module Federation → 
Carrega remoteEntry.js → Obtém bootstrap → Monta componente → Remove iframe
```

## 📚 Conceitos Demonstrados

- ✅ **Module Federation** - Padrão da indústria para microfrontends
- ✅ **Multi-framework** - React, Vue e Svelte na mesma aplicação
- ✅ **Dynamic Loading** - Carregamento de módulos em runtime
- ✅ **Shared Dependencies** - Compartilhamento de libs (singleton)
- ✅ **Fallback Strategy** - Iframe como fallback se MF falhar

## 📖 Documentação Detalhada

Para entender melhor as configurações de Module Federation, veja:
- `apps/host/lib/microfrontends/README.md` - Explicação detalhada das configurações

---

**Desenvolvido com Module Federation**
