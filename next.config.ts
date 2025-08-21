import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.ts$/, // Apply this rule to .ts files
            resourceQuery: /raw/, // Only apply when ?raw is appended to the import
            use: "raw-loader",
        });
        return config;
    },
};

export default nextConfig;
