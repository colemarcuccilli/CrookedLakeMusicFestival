/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS ? '/CrookedLakeMusicFestival' : '';

const nextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
