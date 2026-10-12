// Adds the site's base path to files in /public, so images and PDFs load both
// locally and on GitHub Pages.
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;