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
      "The new website for KSDT, UCSD’s student radio station, built with a student dev team using Next.js and TypeScript. I worked closely with designers to translate their Figma designs into responsive pages for mobile and desktop. From there, we integrated Sanity CMS for content and embedded the Radio.co live stream, creating a fully functional radio site for the UCSD community to tune in.",
    image: "/projects/ksdt-page.png",
    link: "https://ksdtradio.org/",
    gallery: [{ src: "/projects/ksdt-page1.png" }],
    featured: true,
  },
  {
    slug: "galeria-de-home",
    title: "Galeria De HOMÈ",
    summary:
      "A San Diego art and clothing brand where I lead brand direction, keeping the look and voice consistent across the website, Instagram, and the clothing itself. I help take pieces like screen-printed trucker hats from design to production, and run the brand's Instagram. I also rebuilt galeriadehome.com as a standalone React, Vite, and Tailwind site for videos, the GDH Arts Magazine, a photo gallery, and About, with Shopify still handling the shop and checkout.",
    year: "2025",
    link:"https://galeriadehome.com/",
    // Add screenshots to /public/projects/ and uncomment:
    image: "/projects/home1.png",
    gallery: [{ src: "/projects/home1.png" },{ src: "/projects/home2.png" }, { src: "/projects/home3.png" }],
    featured: true,
  },
  
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}