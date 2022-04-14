/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    return [
      { source: "/simple-redirect", destination: "/simple-redirect-result", permanent: false },
      { source: "/splat-redirect/:splat", destination: "/splat-redirect-result/:splat", permanent: false },
      { source: "/wildcard-redirect/:wildcard*", destination: "/simple-redirect-result/:wildcard*", permanent: false },
    ]
  }
}

module.exports = nextConfig
