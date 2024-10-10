import type { Config } from 'tailwindcss'
import baseConfig from '@repo/tailwind-config/tailwind.config'

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [baseConfig],
} satisfies Config

export default config;
