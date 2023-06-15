/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "res.cloudinary.com",
        },
    ],
    // enable AVIF support
    formats: ["image/avif", "image/webp"],
    // allow SVG type
    dangerouslyAllowSVG: true,
},
}

module.exports = nextConfig
