import type { Config } from 'tailwindcss'
import baseConfig from '@repo/tailwind-config/tailwind.config'

const config = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config

export default config;
