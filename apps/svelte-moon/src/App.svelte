<main class="min-h-screen bg-neutral-950 text-white">
  <article class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <header class="mb-12">
      <div class="mb-4">
        <span class="text-sm font-semibold tracking-widest text-slate-400/70 uppercase">Lunar Exploration</span>
      </div>
      <h1 class="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6 bg-gradient-to-r from-slate-200 to-slate-500 bg-clip-text text-transparent">
        Journey Back to the Moon
      </h1>
      <p class="text-xl text-white/70 max-w-2xl">
        Humanity is returning to the Moon with the goal of building a sustainable presence that will propel the next era of deep-space exploration.
      </p>
    </header>

    <div class="relative w-full h-72 rounded-2xl overflow-hidden border border-white/10 mb-12">
      <img
        src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&w=1600&q=80"
        alt="Astronaut on the Moon"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <div class="text-6xl mb-3">🌕</div>
          <p class="text-2xl font-bold text-white">Living Beyond Earth</p>
        </div>
      </div>
    </div>

    <div class="prose prose-invert prose-lg max-w-none">
      <div class="space-y-8 text-white/90">
        <section>
          <h2 class="text-3xl font-bold mb-4 text-white">A New Lunar Era</h2>
          <p class="mb-4">
            More than fifty years after the first moonwalk, humanity is returning with a radically different mindset.
            The objective is no longer a quick visit—it is to build a sustainable foothold that will support missions deeper into the solar system.
          </p>
          <p class="mb-4">
            NASA's Artemis program, in collaboration with international agencies and private companies, is leading this new era with plans for a
            lunar-orbiting Gateway station and permanent surface bases.
          </p>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-4 text-white">Mission Objectives</h2>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li><strong>Scientific Discovery:</strong> Study lunar geology and hunt for frozen water at the poles</li>
            <li><strong>Mars Preparation:</strong> Test life-support systems and habitats for future interplanetary crews</li>
            <li><strong>Permanent Presence:</strong> Build infrastructure and power systems for long-duration stays</li>
            <li><strong>Space Economy:</strong> Develop industries such as resource extraction and cislunar logistics</li>
          </ul>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-4 text-white">Innovative Technologies</h2>
          <div class="grid gap-6 md:grid-cols-2 mt-6">
            <div class="p-6 rounded-2xl border border-white/10 bg-neutral-900/60">
              <h3 class="text-xl font-bold mb-2 text-slate-300">Lunar Gateway</h3>
              <p class="text-white/70">A modular space station in lunar orbit serving as a staging point for surface missions.</p>
            </div>
            <div class="p-6 rounded-2xl border border-white/10 bg-neutral-900/60">
              <h3 class="text-xl font-bold mb-2 text-slate-300">Surface Mobility</h3>
              <p class="text-white/70">Pressurized rovers and autonomous vehicles designed for long-range traverses.</p>
            </div>
            <div class="p-6 rounded-2xl border border-white/10 bg-neutral-900/60">
              <h3 class="text-xl font-bold mb-2 text-slate-300">Inflatable Habitats</h3>
              <p class="text-white/70">Modular living spaces that can be expanded as missions grow in complexity.</p>
            </div>
            <div class="p-6 rounded-2xl border border-white/10 bg-neutral-900/60">
              <h3 class="text-xl font-bold mb-2 text-slate-300">Life-Support Systems</h3>
              <p class="text-white/70">Closed-loop recycling technologies for water, air, and consumables.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-4 text-white">Lunar Resources</h2>
          <p class="mb-4">
            The Moon holds valuable resources that can sustain explorers and refuel missions heading farther out.
            Water ice trapped in permanently shadowed craters can be split into hydrogen and oxygen, enabling in-situ propellant production.
          </p>
          <p>
            The lunar far side also provides an unmatched platform for radio astronomy, free from Earth's interference, and a natural lab to study
            radiation, dust, and low-gravity effects on biology and technology.
          </p>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-4 text-white">The Road Ahead</h2>
          <p class="mb-4">
            Returning to the Moon is more than achieving another milestone—it's a stepping stone to becoming a multiplanetary civilization.
            Every mission teaches us how to live and work in harsh environments, preparing crews for Mars and beyond.
          </p>
          <p>
            With international partnerships and a thriving commercial sector, the Moon is no longer the final destination; it is the launch pad for the cosmos.
          </p>
        </section>
      </div>
    </div>

    <footer class="mt-16 pt-8 border-t border-white/10">
      <p class="text-sm text-white/50">
        Article built with Svelte as part of the microfrontend architecture.
      </p>
    </footer>
  </article>
</main>

<style>
  .prose h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .prose p {
    margin-bottom: 1rem;
  }
</style>

