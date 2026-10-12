// Every project on the site comes from this list.
// To add one: copy an entry, give it a unique slug, and put its images in /public/projects/.
export type Shot = {
  src: string; // a file in /public, e.g. "/projects/my-project-home.png"
  caption?: string; // optional line of text under the screenshot
};

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  summary: string;
  role?: string;
  year?: string;
  image?: string; // cover image for the home page card
  link?: string; // live site, if there is one
  gallery?: Shot[]; // screenshots shown on the project page, top to bottom
  featured?: boolean; // shows on the home page
};

export const projects: Project[] = [
  {
    slug: "san-ysidro-archive",
    title: "San Ysidro Archive",
    summary:
      "A bilingual community history site for the 92173 zip code, with a photo library, collections, and video profiles.",
    role: "Design + Development",
    year: "2026",
    image: "/projects/sydro-ss4.png",
    link: "https://sanysidroarchive.org",
    gallery: [
      { src: "/projects/sydro1.png" }

    ],
    featured: true,
  },
  {
    slug: "ksdt-radio",
    title: "KSDT Radio",
    summary:
      "The new website for UCSD's student radio station, built with a student dev team in Next.js and TypeScript. I'm building the News, Get Involved, and About pages from the team's Figma designs, for both mobile and desktop, and connecting them to the station's content in Sanity.",
    role: "Web Developer",
    year: "2026",
    image: "/projects/ksdt-page.png",
    link: "https://ksdtradio.org/",
    gallery: [{ src: "/projects/ksdt-page1.png" }],
    featured: true,
  },
  /*
  {
    slug: "project-three",
    title: "Title of Project",
    summary: "One or two sentences about what this project is and what you did.",
    role: "Design + Development",
    year: "2026",
    featured: true,
  },
  */
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}