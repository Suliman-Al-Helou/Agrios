import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack configuration
  turbopack: {},

  // // Performance 
  compress: true,

  // // Modern Browser Support - Fix Legacy JavaScript Issue
  experimental: {
    // Skip transpiling modern JS features for modern browsers
    optimizePackageImports: ['motion/react', 'framer-motion', 'lucide-react'],
  },
  images: {
    // 
    formats: ["image/avif", "image/webp"],
    // 
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 
    minimumCacheTTL: 604800,
  },

  // // Headers Security + Cache 
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          { key: "Origin-Agent-Cluster", value: "?1" },
          { key: "X-Robots-Tag", value: "index, follow, noarchive, nosnippet, notranslate, noimageindex" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "Content-Security-Policy", value: "upgrade-insecure-requests" },
        ],
      },
      {
        // Cache 
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache 
        source: "/videos/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },

  // // Compiler Configuration - Reduce Legacy JS
  compiler: {
    // Remove unused CSS and JS
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // // Webpack Configuration - Optimize Bundle
  webpack: (config, { isServer }) => {
    // Reduce bundle size by removing polyfills for modern browsers
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };

      // Optimize chunk splitting
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }

    return config;
  },

};

export default nextConfig;
