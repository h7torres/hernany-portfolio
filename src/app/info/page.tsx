export const metadata = { title: "Info — Hernany Torres" };

const contacts = [
  { label: "email", value: "h7torres@ucsd.edu", href: "mailto:h7torres@ucsd.edu" },
  { label: "instagram", value: "@hhernanyy", href: "https://instagram.com/hhernanyy" },
  { label: "github", value: "h7torres", href: "https://github.com/h7torres" },
  { label: "linkedin", value: "hernanyt", href: "https://www.linkedin.com/in/hernanyt/" }
];

export default function InfoPage() {
  return (
    <section className="mx-auto max-w-md md:pt-12">
      {/* <h2 className="text-base text-neutral-400">about</h2> */}
      <p className="mt-4 text-base leading-relaxed">
        from san diego, california 
      </p>

      {/* <h2 className="mt-16 text-base text-neutral-400">contact</h2> */}
      <ul className="mt-4 text-base">
        {contacts.map(({ label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-baseline justify-between gap-4 py-3 hover:underline"
            >
              <span className="text-s text-base">{label}</span>
              <span>{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}