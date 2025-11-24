import SvelteRemoteWrapper from "@/lib/microfrontends/svelte-remote-wrapper"

export default function MoonPage() {
  return (
    <div className="lg:h-[calc(100svh-2rem)] rounded-3xl border border-white/10 overflow-hidden">
      <SvelteRemoteWrapper remoteUrl="http://localhost:3002" />
    </div>
  )
}

