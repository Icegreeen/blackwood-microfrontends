// Module Federation types for runtime loading
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

export {}

