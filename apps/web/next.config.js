/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  transpilePackages: ["@the-church-co/ui"],
};

export default nextConfig;
