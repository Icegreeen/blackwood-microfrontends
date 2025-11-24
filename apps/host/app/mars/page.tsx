import VueRemoteWrapper from "@/lib/microfrontends/vue-remote-wrapper"

export default function MarsPage() {
  return (
    <div className="lg:h-[calc(100svh-2rem)] rounded-3xl border border-white/10 overflow-hidden">
      <VueRemoteWrapper remoteUrl="http://localhost:3001" />
    </div>
  )
}

