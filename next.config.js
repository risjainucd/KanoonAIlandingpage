/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this to help with Netlify deployment
  target: 'serverless'
}

module.exports = nextConfig