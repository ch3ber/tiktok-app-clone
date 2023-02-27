/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['p16-sign-va.tiktokcdn.com', 'picsum.photos']
  },
  env: {
    API_URL: process.env.API_URL,
    X_RapidAPI_Key: process.env.X_RapidAPI_Key,
    X_RapidAPI_Host: process.env.X_RapidAPI_Host
  }
}

module.exports = nextConfig
