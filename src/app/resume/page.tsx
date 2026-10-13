export const metadata = { title: "Resume — Hernany Torres" };

// Put your PDF at public/resume.pdf. Files in public/ don't get the basePath added
// automatically, so the repo name is included here. Remove it if you drop basePath.
const PDF_URL = "/resume.pdf";

type Entry = {
  title: string;
  org: string;
  place?: string;
  dates: string;
  points?: string[];
};

const experience: Entry[] = [
  {
    title: "Computer Engineer / Web Developer",
    org: "KSDT Radio",
    place: "UCSD",
    dates: "May 2026 – Present",
    points: [
      "- develop the station’s website with a student dev team using Next.js and TypeScript, collaborating through GitHub",
      "- build pages from shared figma designs, translating UI mockups into responsive components",
    ],
  },
  {
    title: "Apprentice, Project Manager",
    org: "Design for America IDEA Program",
    place: "UCSD",
    dates: "Sep 2025 – Jan 2026",
    points: [
      "- managed a design team focused on UI/UX innovation for The Nature Conservancy",
      "- set project goals, aligning design and research efforts toward measurable impact",
      "- led team meetings, set deadlines, and coordinated communication among designers",
    ],
  },
  {
    title: "Research Assistant",
    org: "Bilingualism in Context",
    place: "UCSD",
    dates: "Sep 2025 – Dec 2025",
    points: [
      "- analyzed English and Spanish audio stimuli to collect and code linguistic data",
      "- contributed to data quality control and organization in Excel",
    ],
  },
  {
    title: "App Developer",
    org: "GATE Center for Electric Drive Transportation",
    place: "SDSU",
    dates: "Jun 2024 – Oct 2024",
    points: [
      "- designed and developed an Android app with post-doctoral EEs to track and visualize research data",
      "- built features in Kotlin and ran design iterations and usability testing with engineering researchers",
    ],
  },
  {
    title: "Owner",
    org: "Vintage Clothing Seller",
    dates: "Aug 2020 – Present",
    points: [
      "- source, price, and curate vintage inventory based on resale and seasonal market research",
      "- plan and manage pop-up events, vendor collaborations, and logistics",
      "- photograph products and edit images to maintain a consistent visual brand",
    ],
  },
];

const projects: Entry[] = [
  {
    title: "Web Developer",
    org: "San Ysidro Archive",
    dates: "Jun 2026 – Present",
    points: [
      "- designed and built a community history site with a photo library, collections, and video profiles",
      "- curated and organized archival data, artifacts, and documents",
      "- built an image compression pipeline and fixed SPA routing issues to improve load performance",
    ],
  },
];

const work: Entry[] = [
  { title: "Barista", org: "Starbucks", dates: "Apr 2026 – Present" },
  //{ title: "Retail Sales Associate", org: "PacSun", dates: "Nov 2025 – May 2026" },
  { title: "Associate", org: "In-N-Out", dates: "Sep 2022 – Apr 2024" },
];

const education: Entry[] = [
  {
    title: "B.S. Cognitive Science, Design and Interaction",
    org: "University of California San Diego",
    dates: "Expected Jun 2027",
  },
  {
    title: "A.S. Liberal Arts and Sciences: Mathematics and Pre-Engineering",
    org: "San Diego City College",
    dates: "Sep 2022 – Jun 2025",
  },
];

const skills = [
  {
    label: "research",
    items: "usability testing, user interviews, qualitative data coding, synthesis, information architecture",
  },
  {
    label: "design",
    items: "wireframing, prototyping, responsive ui design, visual design",
  },
  {
    label: "tools",
    items: "figma, framer, photoshop, illustrator, lightroom, indesign, notion",
  },
  {
    label: "development",
    items: "react, next.js, typescript, javascript, tailwind css, html, git/github, kotlin, mongodb",
  },
  { label: "languages", items: "English and Spanish (bilingual)" },
];

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-14">
      <h2 className="text-base text-neutral-400">{label}</h2>
      <div className="mt-4 space-y-7">{children}</div>
    </div>
  );
}

function Item({ entry }: { entry: Entry }) {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <p className="text-base">
          {entry.org}
          <span className="text-neutral-400">
            {" "}
            · {entry.title}
            {entry.place && `, ${entry.place}`}
          </span>
        </p>
        <p className="shrink-0 text-xs text-neutral-400">{entry.dates}</p>
      </div>
      {entry.points && (
        <ul className="mt-2 space-y-1 text-sm leading-relaxed">
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ResumePage() {
  return (
    <section>
      <a
        href={PDF_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-block text-xs text-neutral-400 transition-colors hover:text-black"
      >
        download pdf ↗
      </a>
        <Section label="education">
        {education.map((e) => (
          <Item key={e.org} entry={e} />
        ))}
      </Section>  

    <Section label="skills">
        <dl className="space-y-3 text-sm leading-relaxed">
          {skills.map(({ label, items }) => (
            <div key={label} className="grid gap-1 sm:grid-cols-[110px_1fr]">
              <dt className="text-xs text-neutral-400">{label}</dt>
              <dd>{items}</dd>
            </div>
          ))}
        </dl>
      </Section>
      
      <Section label="experience">
        {experience.map((e) => (
          <Item key={e.org} entry={e} />
        ))}
      </Section>

      <Section label="projects">
        {projects.map((e) => (
          <Item key={e.org} entry={e} />
        ))}
      </Section>



      <Section label="work">
        {work.map((e) => (
          <Item key={e.org} entry={e} />
        ))}
      </Section>

      
    </section>
  );
}