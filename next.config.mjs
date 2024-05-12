// /** @type {import('next').NextConfig} */
// import { withContentlayer } from "next-contentlayer";
// const nextConfig = withContentlayer({
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "avatars.githubusercontent.com",
//       },
//       {
//         protocol: "https",
//         hostname: "lh3.googleusercontent.com",
//       },
//       {
//         protocol: "https",
//         hostname: "randomuser.me",
//       },
//     ],
//   },
//   experimental: {
//     // serverComponentsExternalPackages: ["@prisma/client"],
//     turbo: {
//       rules: {
//         "*.svg": {
//           loaders: ["@svgr/webpack"],
//           as: "*.js",
//         },
//       },
//     },
//   },
// });

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
