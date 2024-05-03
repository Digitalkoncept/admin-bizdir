/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir: true,
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    BACKEND_URL:process.env.BACKEND_URL,
  },
  
  reactStrictMode: true,
}

module.exports = nextConfig
