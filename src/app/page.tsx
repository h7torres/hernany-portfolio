import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <section>
      <h2 className="text-base text-neutral-400">featured</h2>
      <div className="mt-1 flex flex-col gap-16 md:gap-[72px]">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}