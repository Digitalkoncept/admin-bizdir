/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    BACKEND_URL:process.env.BACKEND_URL,
  },
  
  reactStrictMode: true,
}

module.exports = nextConfig
