import App from './App.svelte'
import './app.css'

let appInstance = null

export function mount(el) {
  if (appInstance) {
    return appInstance
  }
  
  appInstance = new App({
    target: el,
  })
  
  return appInstance
}

export function unmount() {
  if (appInstance) {
    appInstance.$destroy?.()
    appInstance = null
  }
}

// Auto-mount se estiver rodando standalone
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('app')
  if (el) {
    mount(el)
  }
}

