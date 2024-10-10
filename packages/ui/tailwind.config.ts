import type { Config } from "tailwindcss"
import baseConfig from "@repo/tailwind-config/tailwind.config"

const config: Config = {
  presets: [baseConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}

console.log(config);

export default config;