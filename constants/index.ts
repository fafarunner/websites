import { ExtType, SystemOS } from "@/types/common";

export const cacheLngKey: string = "__fafa_runner_lng__";
export const cacheThemeKey: string = "__fafa_runner_theme__";
export const basePath =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "/fafarunner" : "";
export const domain =
  process.env.NODE_ENV === "production"
    ? `https://chenyifaer.com${basePath}`
    : `http://localhost:3000${basePath}`;
export const platforms: Record<SystemOS, ExtType[]> = {
  ios: [".ipa"],
  android: [".apk", ".aab"],
  macos: [
    ".dmg",
    ".pkg",
    { name: ".zip", include: true },
    { name: ".tar.gz", include: true },
  ],
  windows: [".exe", ".msix", { name: ".zip", include: true }],
  linux: [
    ".AppImage",
    ".deb",
    ".rpm",
    ".snap",
    ".flatpak",
    { name: ".zip", include: true },
    { name: ".tar.gz", include: true },
  ],
};
export const pageSize: number = 10;
export const sitemapUrls = ["release"];
