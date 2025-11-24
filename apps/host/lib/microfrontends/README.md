# Module Federation - Configurações e Como Funciona

Este diretório contém os wrappers que carregam e integram os microfrontends remotos no host Next.js.

## 📁 Estrutura

```
lib/microfrontends/
├── vue-remote-wrapper.tsx      # Wrapper para Vue Mars (porta 3001)
├── svelte-remote-wrapper.tsx    # Wrapper para Svelte Moon (porta 3002)
└── README.md                    # Esta documentação
```

## 🔧 Configurações de Module Federation

### 1. **Vue Mars (Remote) - `apps/vue-mars/vite.config.js`**

```javascript
federation({
  name: 'vue_mars',                    // Nome único do remote (exposto em window.vue_mars)
  filename: 'remoteEntry.js',          // Arquivo gerado pelo build
  exposes: {
    './App': './src/App.vue',          // Expõe o componente App
    './MarsContent': './src/App.vue',  // Alias alternativo
    './bootstrap': './src/bootstrap.js' // Função de mount/unmount
  },
  shared: {
    vue: {
      singleton: true,                 // Garante uma única instância do Vue
      requiredVersion: '^3.4.21'       // Versão compartilhada
    }
  }
})
```

**O que isso faz:**
- Gera `remoteEntry.js` no build que contém os módulos expostos
- Expõe `./bootstrap` que contém as funções `mount()` e `unmount()`
- Compartilha Vue como singleton (evita múltiplas instâncias)

### 2. **Svelte Moon (Remote) - `apps/svelte-moon/vite.config.js`**

```javascript
federation({
  name: 'svelte_moon',                  // Nome único do remote (exposto em window.svelte_moon)
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App.svelte',
    './MoonContent': './src/App.svelte',
    './bootstrap': './src/bootstrap.js'
  },
  shared: {
    svelte: {
      singleton: true,
      requiredVersion: '^4.2.12'
    }
  }
})
```

### 3. **Bootstrap Functions - `apps/*/src/bootstrap.js`**

Cada remote expõe funções de ciclo de vida:

**Vue:**
```javascript
export function mount(el) {
  appInstance = createApp(App)
  appInstance.mount(el)
  return appInstance
}

export function unmount() {
  appInstance.unmount()
  appInstance = null
}
```

**Svelte:**
```javascript
export function mount(el) {
  appInstance = new App({ target: el })
  return appInstance
}

export function unmount() {
  appInstance.$destroy?.()
  appInstance = null
}
```

### 4. **Host Wrappers - `lib/microfrontends/*-remote-wrapper.tsx`**

Os wrappers fazem o seguinte:

1. **Carrega iframe imediatamente** (fallback rápido)
2. **Tenta Module Federation em background:**
   - Busca `remoteEntry.js` do remote
   - Injeta script no DOM
   - Acessa `window.vue_mars.get('./bootstrap')`
   - Chama `bootstrap()` para obter `mount/unmount`
   - Substitui iframe pelo componente montado

3. **Cleanup:** Chama `unmount()` quando componente desmonta

### 5. **TypeScript Types - `apps/host/types/module-federation.d.ts`**

Define os tipos para `window.vue_mars` e `window.svelte_moon`:

```typescript
declare global {
  interface Window {
    vue_mars?: {
      get: (module: string) => Promise<() => Promise<any>>
    }
    svelte_moon?: {
      get: (module: string) => Promise<() => Promise<any>>
    }
  }
}
```

## 🔄 Fluxo de Carregamento

```
1. Host renderiza wrapper
   ↓
2. Wrapper carrega iframe (fallback imediato)
   ↓
3. Wrapper tenta carregar remoteEntry.js
   ↓
4. remoteEntry.js expõe window.vue_mars
   ↓
5. window.vue_mars.get('./bootstrap') retorna função
   ↓
6. bootstrap() retorna { mount, unmount }
   ↓
7. mount(container) renderiza componente Vue/Svelte
   ↓
8. iframe é removido, componente integrado renderiza
```

## 🎯 Conceitos Importantes

### **Module Federation**
- Permite carregar código JavaScript de outros aplicativos em runtime
- Não requer build-time coupling (host e remotes são independentes)
- Compartilha dependências (singleton) para evitar duplicação

### **remoteEntry.js**
- Arquivo gerado pelo build que contém os módulos expostos
- É carregado dinamicamente via script tag
- Expõe uma função `get()` para acessar módulos

### **Bootstrap Pattern**
- Padrão comum em microfrontends
- Expõe `mount()` e `unmount()` para controle do ciclo de vida
- Permite que o host monte/desmonte o componente quando necessário

### **Fallback Strategy**
- Iframe como fallback garante que conteúdo sempre aparece
- Module Federation tenta em background
- Se MF falhar, iframe continua funcionando

## 📚 Arquivos de Configuração

- **Vue Mars:** `apps/vue-mars/vite.config.js`
- **Svelte Moon:** `apps/svelte-moon/vite.config.js`
- **Bootstrap Vue:** `apps/vue-mars/src/bootstrap.js`
- **Bootstrap Svelte:** `apps/svelte-moon/src/bootstrap.js`
- **Types:** `apps/host/types/module-federation.d.ts`
- **Wrappers:** `apps/host/lib/microfrontends/*.tsx`

