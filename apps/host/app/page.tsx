import ProjectCard from "@/components/project-card"

export default function Page() {
  const projects = [
    {
      title: "Journey to Mars (Vue)",
      subtitle: "Exploring the red planet",
      imageSrc: "/images/marte.jpg",
      tags: ["Vue", "Space", "Exploration"],
      href: "/mars",
      priority: true,
    },
    {
      title: "Journey to the Moon (Svelte)",
      subtitle: "The modern lunar journey",
      imageSrc: "/images/space.jpg",
      tags: ["Svelte", "Moon", "Mission"],
      href: "/moon",
      priority: false,
    },
  ]

  return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols- lg:grid-rows-2 lg:h-[calc(100svh-2rem)] lg:overflow-y-auto">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-full"
                revealDelay={idx * 0.06}
              />
            ))}
        </div>
  )
}
