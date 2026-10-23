/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGithubPages ? '/theConvoLandingPage' : ''

const nextConfig = {
  images: {
    unoptimized: true,
  },
  ...(isGithubPages ? { output: 'export' } : {}),
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
