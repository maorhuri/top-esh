/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true, // חשוב מאוד ל-static!
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'topesh.co.il',
      },
      {
        protocol: 'https',
        hostname: 'www.bmfsolutions.com',
      },
    ],
  },
};

export default nextConfig;
