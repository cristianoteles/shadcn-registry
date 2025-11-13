//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
import { MetadataRoute } from "next"

const info: MetadataRoute.Manifest = {
  id: "pwa-web",
  name: "ADAPT Condominio Web",
  short_name: "ADAPT Condominio",
  description: "ADAPT ADAPT Condominio Web",
  start_url: "/?start=a2hs",
  scope: "/",
  display: "standalone",
  //display_override: ['fullscreen', 'minimal-ui'],
  orientation: "portrait",
  //background_color: "#0B6046",
  //theme_color: "#0B6046",
  screenshots: [
    {
      src: "/assets/screenshots/login.png",
      sizes: "360x740",
      type: "image/png",
      form_factor: "narrow",
    },
    {
      src: "/assets/screenshots/dashboard.png",
      sizes: "360x740",
      type: "image/png",
      form_factor: "narrow",
    },
    {
      src: "/assets/screenshots/dashboard.png",
      sizes: "360x740",
      type: "image/png",
      form_factor: "narrow",
    },
    {
      src: "/assets/screenshots/dashboard_desktop.png",
      sizes: "1280x800",
      type: "image/png",
      form_factor: "wide",
    },
  ],
  icons: [
    {
      src: "favicon.ico",
      sizes: "any",
      type: "image/x-icon",
      purpose: "maskable"
    },
    {
      src: "/assets/icons/icon-192x192.png",
      sizes: "any",
      type: "image/png",
      purpose: "maskable"
    },
    {
      src: "/assets/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable",
    },
    {
      src: "/assets/icons/icon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      src: "/assets/icons/icon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      src: "/assets/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
}

export default function manifest(): MetadataRoute.Manifest {
  return info
}
