import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { asset } from "@/lib/asset";

// Pre-builds one page per project so the site works as static files.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Use the gallery if there is one, otherwise fall back to the cover image.
  const shots = project.gallery ?? (project.image ? [{ src: project.image }] : []);

  return (
    <article>
      <h2 className="text-2xl">{project.title}</h2>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-sm underline underline-offset-2 hover:text-neutral-500"
        >
          {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </a>
      )}

        {project.description ? (
        <div className="mt-8 space-y-4">
          {project.description.map((p, i) => (
            <p key={i} className="leading-relaxed">{p}</p>
          ))}
        </div>
      ) : (
        <p className="mt-8 leading-relaxed">{project.summary}</p>
      )}
      

      {(project.role || project.year) && (
        <p className="mt-3 text-xs text-neutral-400">
          {[project.role, project.year].filter(Boolean).join(" · ")}
        </p>
      )}

      <div className="mt-8">
        {shots.map((shot) => (
          <figure key={shot.src} className="border-t border-zinc-300 py-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(shot.src)} alt={shot.caption ?? project.title} className="block w-full" />
            {shot.caption && (
              <figcaption className="mt-2 text-xs text-neutral-400">{shot.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </article>
  );
}