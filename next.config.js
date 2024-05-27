/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    BACKEND_URL:process.env.BACKEND_URL,
  },
  images:{
    loader:'cloudinary',
    path:'https://res.cloudinary.com/da9vqy7zm/image/upload/v1685007698',
    domains: ["fakestoreapi.com","<random_string>.supabase.in","lh3.googleusercontent.com"],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
