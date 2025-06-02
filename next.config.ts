import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ["lib/", "src/", ".storybook/", "stories/"],
  }
}

export default nextConfig
