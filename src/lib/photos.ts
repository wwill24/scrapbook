import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

export type PhotosByYear = Record<string, string[]>; // year -> ["/photos/2024/img.jpg", ...]

export async function getPhotosByYear(): Promise<PhotosByYear> {
  const publicDir = path.join(process.cwd(), "public");
  const photosRoot = path.join(publicDir, "photos");
  const byYear: PhotosByYear = {};

  if (!fs.existsSync(photosRoot)) return byYear;

  const yearDirs = fs
    .readdirSync(photosRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  for (const year of yearDirs) {
    const yearPath = path.join(photosRoot, year);
    const files = fs
      .readdirSync(yearPath, { withFileTypes: true })
      .filter((f) => f.isFile() && IMAGE_EXTENSIONS.has(path.extname(f.name).toLowerCase()))
      .map((f) => `/photos/${year}/${f.name}`)
      .sort();
    if (files.length) byYear[year] = files;
  }

  return byYear;
}


