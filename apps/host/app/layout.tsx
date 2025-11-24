import type { Metadata } from 'next'
import './globals.css'
import BrandonSidebar from '@/components/brandon-sidebar'

export const metadata: Metadata = {
  title: 'Blackwook - [Microfrontend]',
  description: 'Blackwook - [Microfrontend]',
  generator: 'Blackwook - [Microfrontend]',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-sans: "Geist", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
            --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          }
          html { font-family: var(--font-sans); }
        `}</style>
      </head>
      <body>
        <main className="bg-neutral-950 text-white">
          <section className="px-4 pt-4 pb-16 lg:pb-4">
            <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
              <BrandonSidebar />
              {children}
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}
