<template>
  <main class="min-h-screen bg-neutral-950 text-white">
    <article class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <header class="mb-12">
        <div class="mb-4">
          <span class="text-sm font-semibold tracking-widest text-red-500/70 uppercase">Space Exploration</span>
        </div>
        <h1 class="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
          Journey to Mars
        </h1>
        <p class="text-xl text-white/70 max-w-2xl">
          Humanity's quest to reach the red planet and the challenges of interplanetary colonization.
        </p>
      </header>

      <div class="relative w-full h-72 rounded-2xl overflow-hidden border border-white/10 mb-12">
        <img
          src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&w=1600&q=80"
          alt="Mars horizon"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
      </div>

      <div class="prose prose-invert prose-lg max-w-none">
        <div class="space-y-12 text-white/90">
          <section>
            <h2 class="text-3xl font-bold mb-4 text-white">The Mission</h2>
            <p class="mb-4">
              Mars, the fourth planet from the Sun, has captivated human imagination for centuries. 
              With its thin atmosphere composed primarily of carbon dioxide, extreme temperature 
              variations, and a surface marked by ancient craters and vast valleys, Mars represents 
              humanity's next great frontier in space exploration.
            </p>
            <p class="mb-4">
              Crewed missions to Mars are no longer science fiction. Space agencies worldwide, 
              including NASA, ESA, and private companies like SpaceX, are actively developing 
              technologies and strategies to make this journey a reality within the next two decades.
            </p>
            <p>
              The journey to Mars is approximately 140 million miles (225 million kilometers) 
              at its closest approach, requiring advanced propulsion systems and life support 
              technologies that can sustain human life for extended periods in the harsh 
              environment of deep space.
            </p>
          </section>

          <section>
            <h2 class="text-3xl font-bold mb-4 text-white">Technical Challenges</h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-5 rounded-xl border border-white/10 bg-neutral-900/40">
                <h3 class="text-lg font-bold mb-2 text-red-400">Distance & Duration</h3>
                <p class="text-white/70 text-sm">
                  The journey takes approximately 7-9 months, requiring robust life support systems, 
                  radiation shielding, and psychological support for the crew during the long voyage.
                </p>
              </div>
              <div class="p-5 rounded-xl border border-white/10 bg-neutral-900/40">
                <h3 class="text-lg font-bold mb-2 text-red-400">Radiation Exposure</h3>
                <p class="text-white/70 text-sm">
                  Protection against cosmic radiation during transit and on the Martian surface 
                  is critical. Current shielding technologies are being developed to minimize 
                  long-term health risks.
                </p>
              </div>
              <div class="p-5 rounded-xl border border-white/10 bg-neutral-900/40">
                <h3 class="text-lg font-bold mb-2 text-red-400">Resource Management</h3>
                <p class="text-white/70 text-sm">
                  Producing water, oxygen, and food on Mars through in-situ resource utilization 
                  (ISRU) is essential for sustainable colonization and reducing dependency on 
                  Earth resupply missions.
                </p>
              </div>
              <div class="p-5 rounded-xl border border-white/10 bg-neutral-900/40">
                <h3 class="text-lg font-bold mb-2 text-red-400">Communication Delay</h3>
                <p class="text-white/70 text-sm">
                  Signal delays of up to 22 minutes each way make real-time communication with 
                  Earth impossible, requiring autonomous systems and decision-making capabilities.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold mb-4 text-white">Technologies in Development</h2>
            <div class="grid gap-6 md:grid-cols-2 mt-6">
              <div class="p-6 rounded-2xl border border-white/10 bg-neutral-900/60 hover:border-red-500/30 transition-colors">
                <h3 class="text-xl font-bold mb-2 text-red-400">Advanced Propulsion</h3>
                <p class="text-white/70">
                  Nuclear thermal and electric propulsion systems designed to reduce travel time 
                  from months to weeks, making Mars missions more feasible and reducing crew 
                  exposure to space radiation.
                </p>
              </div>
              <div class="p-6 rounded-2xl border border-white/10 bg-neutral-900/60 hover:border-red-500/30 transition-colors">
                <h3 class="text-xl font-bold mb-2 text-red-400">Inflatable Habitats</h3>
                <p class="text-white/70">
                  Modular, expandable structures that can be deployed on the Martian surface, 
                  providing living space, laboratories, and greenhouses for sustainable 
                  colonization efforts.
                </p>
              </div>
              <div class="p-6 rounded-2xl border border-white/10 bg-neutral-900/60 hover:border-red-500/30 transition-colors">
                <h3 class="text-xl font-bold mb-2 text-red-400">ISRU Systems</h3>
                <p class="text-white/70">
                  In-Situ Resource Utilization technology to extract water from Martian soil, 
                  produce oxygen from the atmosphere, and manufacture fuel for return journeys, 
                  dramatically reducing mission costs.
                </p>
              </div>
              <div class="p-6 rounded-2xl border border-white/10 bg-neutral-900/60 hover:border-red-500/30 transition-colors">
                <h3 class="text-xl font-bold mb-2 text-red-400">Space Agriculture</h3>
                <p class="text-white/70">
                  Controlled environment agriculture using hydroponics, LED lighting, and 
                  advanced nutrient systems to grow food on Mars, ensuring long-term 
                  sustainability for colonists.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold mb-4 text-white">The Future</h2>
            <p class="mb-4">
              Mars colonization is not merely about reaching the planet—it's about establishing 
              a permanent, self-sustaining human presence. This requires not only technological 
              breakthroughs but also deep understanding of human psychology, social systems, 
              and sustainability in extreme environments.
            </p>
            <p class="mb-4">
              As we approach this reality, each discovery, each test, and each mission brings us 
              closer to the moment when humanity becomes a truly multiplanetary species. The 
              challenges are immense, but so is our determination to expand beyond Earth.
            </p>
            <p>
              The journey to Mars represents the greatest adventure of our generation, combining 
              cutting-edge science, engineering excellence, and the indomitable human spirit to 
              explore the unknown and secure our future among the stars.
            </p>
          </section>
        </div>
      </div>

      <footer class="mt-16 pt-8 border-t border-white/10">
        <p class="text-sm text-white/50">
          Article developed with Vue.js 3 as part of a microfrontend architecture. 
          This interactive calculator demonstrates real-time reactivity and component-based development.
        </p>
      </footer>
    </article>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

</script>

<style scoped>
.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}
</style>
