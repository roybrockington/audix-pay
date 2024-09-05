/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.scvdistribution.co.uk',
      },
    ],
  },

}


export default nextConfig;
