/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mirrorpad.in",
      },
      {
        protocol: "https",
        hostname: "novelsigner.com",
      },
    ],
  },
};

export default nextConfig;
