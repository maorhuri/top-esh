/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
