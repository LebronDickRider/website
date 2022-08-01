/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: { domains: ["i.imgur.com"] },
    webpack: (config) => {
        config.experiments = { topLevelAwait: true, layers: true };
        return config;
    },
    async rewrites() {
        return [
            {
                source: "/feed",
                destination: "/api/feed/rss",
            },
            {
                source: "/feed/:slug",
                destination: "/api/feed/:slug",
            },
        ];
    },
    async redirects() {
        return [
            {
                source: "/blog/post/:slug",
                destination: "/article/:slug",
                permanent: true,
            },
            { source: "/creations", destination: "/showcase", permanent: true },
            {
                source: "/articles/:slug",
                destination: "/tag/:slug",
                permanent: true,
            },
            {
                source: "/notes/:slug",
                destination: "/tag/:slug",
                permanent: true,
            },
        ];
    },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
