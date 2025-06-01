import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ["stories/", "lib/", "src/"],
  }
}

export default nextConfig
