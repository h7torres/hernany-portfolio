import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hernany Torres",
  description: "Product Designer and Full Stack Developer at UC San Diego",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Sidebar />
        {/* 300px on each side keeps the column centered on the screen and clear of the sidebar */}
        <main className="flex-1 px-6 pb-24 pt-10 md:px-0 md:pt-[89px]">
          {/* Centered at 768px wide when there's room; on narrower windows it stays clear
              of the sidebar and stretches into the remaining space instead of shrinking. */}
          <div className="w-full md:ml-[max(300px,calc((100vw_-_768px)/2))] md:w-[min(768px,calc(100vw_-_324px))]">
            {children}
          </div>
        </main>

        <footer className="flex h-7 items-center justify-end border border-black/60 px-6">
          <p className="font-serif text-xs text-zinc-300">
            designed and built from scratch
          </p>
        </footer>
      </body>
    </html>
  );
}