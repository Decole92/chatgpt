/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {domains: ["uploads-ssl.webflow.com","lh3.googleusercontent.com"]}

}

module.exports = nextConfig
