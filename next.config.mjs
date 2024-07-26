/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact-us", // The path you want to redirect from
        destination: "/contact", // The path you want to redirect to
        permanent: true, // Indicates that this is a permanent redirect
      },
      {
        source: "/company-overview", // The path you want to redirect from
        destination: "/about-us", // The path you want to redirect to
        permanent: true, // Indicates that this is a permanent redirect
      },
      {
        source: "/careers", // The path you want to redirect from
        destination: "/career", // The path you want to redirect to
        permanent: true, // Indicates that this is a permanent redirect
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rodicwebsite.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
