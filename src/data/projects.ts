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
  description?: string[];
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
    "A community history archive for San Ysidro (92173). I designed it in Figma and built it with React, Vite, and Tailwind. It now holds around 200 photos and is still growing.",
  description: [
    "San Ysidro (92173) is my hometown, a community rich with history but with no single place to explore it. We started the San Ysidro Archive to change that: a digital home for the neighborhood's stories, photos, and people, now holding around 200 photographs and growing.",
    "I led the design and development of the site end to end. I designed the visual identity and user experience in Figma, then built it with React, Vite, and Tailwind CSS, deployed on GitHub Pages.",
    "To make the archive easy to explore, I built a masonry-style Library for browsing photos, a Collections system that groups material into themed sets, and a Neighbors section with profiles of community members featuring embedded YouTube interviews. The homepage uses a filmstrip-inspired layout that reflects the archive's photographic roots.",
    "Behind the scenes, I built an image compression pipeline so archival photos load quickly without losing quality, fixed client-side routing so every page works reliably on static hosting, and added Open Graph metadata so links share cleanly across social platforms. I also wrote a Terms of Use page covering how the archive's content can be used.",
    "Beyond the web, I brought the archive back to the community through an in-person event, giving these shared memories a physical space for neighbors to gather and connect.",
  ],
  role: "Design + Development",
  year: "2026",
  image: "/projects/sydro-ss4.png",
  link: "https://sanysidroarchive.org",
  gallery: [
    { src: "/projects/sydro1.png" },
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
    role: "Design + Development",
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