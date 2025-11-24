'use client'

import { useEffect, useRef } from 'react'

interface SvelteRemoteWrapperProps {
  remoteUrl?: string
}

export default function SvelteRemoteWrapper({ 
  remoteUrl = 'http://localhost:3002'
}: SvelteRemoteWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<any>(null)

  useEffect(() => {
    let mounted = true
    const container = containerRef.current
    
    if (!container) return

    // Usa iframe imediatamente
    container.innerHTML = `
      <iframe 
        src="${remoteUrl}" 
        style="width: 100%; height: 100vh; border: none;"
        title="Svelte Moon"
      />
    `

    // Tenta Module Federation em background (opcional)
    const tryModuleFederation = async () => {
      if (!mounted) return
      
      try {
        const remoteEntryUrl = `${remoteUrl}/remoteEntry.js`
        const response = await fetch(remoteEntryUrl, { method: 'HEAD' }).catch(() => null)
        
        if (!response?.ok) return
        
        const script = document.createElement('script')
        script.src = remoteEntryUrl
        script.type = 'text/javascript'
        script.async = true
        
        script.onload = () => {
          setTimeout(() => {
            if (!mounted || !container) return
            
            try {
              // @ts-ignore
              if (window.svelte_moon?.get) {
                // @ts-ignore
                window.svelte_moon.get('./bootstrap').then((bootstrap: any) => {
                  bootstrap().then((module: any) => {
                    if (module?.mount && container && mounted) {
                      container.innerHTML = ''
                      appRef.current = module.mount(container)
                    }
                  }).catch(() => {})
                }).catch(() => {})
              }
            } catch (e) {
              // Ignore
            }
          }, 500)
        }
        
        script.onerror = () => {}
        document.head.appendChild(script)
      } catch (err) {
        // Ignore
      }
    }
    
    // Tenta Module Federation em background (não bloqueia)
    tryModuleFederation()

    return () => {
      mounted = false
      if (appRef.current) {
        try {
          // @ts-ignore
          if (window.svelte_moon) {
            // @ts-ignore
            window.svelte_moon.get('./bootstrap').then((bootstrap: any) => {
              bootstrap().then((module: any) => {
                if (module.unmount) {
                  module.unmount()
                }
              })
            }).catch(() => {})
          }
        } catch (e) {
          // Ignore unmount errors
        }
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [remoteUrl])

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-screen"
      style={{ 
        fontFamily: 'var(--font-sans)'
      }}
    />
  )
}

