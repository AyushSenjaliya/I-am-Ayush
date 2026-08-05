import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1080px'
			}
		},
		extend: {
			colors: {
				bg: 'var(--bg)',
				surface: 'var(--surface)',
				'surface-2': 'var(--surface-2)',
				line: 'var(--line)',
				text: 'var(--text)',
				muted: 'var(--muted)',
				gold: 'var(--gold)',
				coral: 'var(--coral)',
			},
			fontFamily: {
				display: ['"Space Grotesk"', 'sans-serif'],
				body: ['"Inter"', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			borderRadius: {
				lg: '16px',
				md: '12px',
				sm: '8px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
