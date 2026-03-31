/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  // Em Next 14, `output: "export"` é ótimo para produção/GitHub Pages,
  // mas pode atrapalhar o `next dev` em algumas setups no Windows.
  // Mantemos export estático no build de produção.
  output: isDev ? undefined : "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

module.exports = nextConfig;

