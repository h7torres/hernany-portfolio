import Link from "next/link";
import type { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}/`} className="group block">
      {/* 956 × 453 frame from the Figma layout, kept as a ratio so it scales on any screen */}
      <div className="aspect-[956/453] w-full overflow-hidden border border-black bg-white">
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(project.image)}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <p className="mt-1 text-base group-hover:underline">{project.title}</p>
    </Link>
  );
}