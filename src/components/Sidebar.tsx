"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Clock from "./Clock";

const links = [
  { href: "/", label: "work" },
  { href: "/projects/", label: "projects" },
  { href: "/resume/", label: "resume" },
  { href: "/info/", label: "info" }
  
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
   <aside className="w-full px-6 pt-10 md:fixed md:left-[21px] md:top-0 md:z-10 md:w-[360px] md:px-0 md:pt-2">
      <Link href="/" className="block">
        <h1 className="text-[length:45px] font-extralight leading-tight">Hernany Torres</h1>
      </Link>
      <p className="mt-2 text-xs leading-snug">
        Product Designer and Full Stack Developer
        <br />
        at UC San Diego
      </p>

      <hr className="mt-6 border-zinc-300 md:w-56" />

      <nav className="mt-4 flex gap-5 text-xs md:flex-col md:gap-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors hover:text-black ${
              isActive(pathname, href) ? "text-black" : "text-neutral-400"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <hr className="mt-5 border-zinc-300 md:w-56" />

      <p className="mt-4 text-[10px] text-neutral-400">
        san diego, <Clock />
      </p>
    </aside>
  );
}