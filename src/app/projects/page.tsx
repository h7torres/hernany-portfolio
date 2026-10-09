import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects — Hernany Torres" };

export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-base text-neutral-400">projects</h2>
      <ul className="mt-4 divide-y divide-zinc-300 border-y border-zinc-300">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}/`}
              className="flex items-baseline justify-between gap-4 py-3 hover:underline"
            >
              <span>{p.title}</span>
              <span className="text-xs text-neutral-400">{p.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}