// Every project on the site comes from this list.
// To add one: copy an entry, give it a unique slug, and put its image in /public/projects/.
export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  summary: string;
  role?: string;
  year?: string;
  image?: string; // e.g. "/projects/my-project.png" (leave out to show an empty frame)
  link?: string; // live site, if there is one
  featured?: boolean; // shows on the home page
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Title of Project",
    summary: "One or two sentences about what this project is and what you did.",
    role: "Design + Development",
    year: "2026",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Title of Project",
    summary: "One or two sentences about what this project is and what you did.",
    role: "Design + Development",
    year: "2026",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Title of Project",
    summary: "One or two sentences about what this project is and what you did.",
    role: "Design + Development",
    year: "2026",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}