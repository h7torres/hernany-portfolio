import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { asset } from "@/lib/asset";

// Pre-builds one page per project so the site works as static files.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article>
      <p className="text-xs text-neutral-400">
        {[project.role, project.year].filter(Boolean).join(" · ")}
      </p>
      <h2 className="mt-1 text-4xl font-extralight">{project.title}</h2>

      <div className="mt-6 aspect-[956/453] w-full overflow-hidden border border-black bg-white">
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
            <img src={asset(project.image)} alt={project.title} className="h-full w-full object-cover" />        )}
      </div>

      <p className="mt-6 max-w-xl text-base leading-relaxed">{project.summary}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-xs text-neutral-400 hover:text-black"
        >
          visit site ↗
        </a>
      )}
    </article>
  );
}