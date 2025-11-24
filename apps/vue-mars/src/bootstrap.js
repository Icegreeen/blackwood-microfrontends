import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

let appInstance = null

export function mount(el) {
  if (appInstance) {
    return appInstance
  }
  
  appInstance = createApp(App)
  appInstance.mount(el)
  return appInstance
}

export function unmount() {
  if (appInstance) {
    appInstance.unmount()
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

