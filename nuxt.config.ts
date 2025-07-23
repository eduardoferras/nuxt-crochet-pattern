import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	nitro: {
		preset: process.env.NITRO_PRESET
	},
	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		'@nuxt/icon',
		'@nuxt/eslint',
		'@nuxt/test-utils/module',
		'@nuxtjs/fontaine',
		'@nuxtjs/google-fonts'
	],
	googleFonts: {
		families: {
			Roboto: [400, 700]
		},
		display: 'swap'
	},
	fontMetrics: {
		fonts: ['Roboto']
	},
	eslint: {
		config: {
			autoInit: false
		}
	},
	srcDir: 'src/',
	css: ['@/assets/styles/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @use "@/assets/styles/abstracts/index" as *;
          `
				}
			}
		}
	},
	alias: {
		'@components': fileURLToPath(new URL('./src/components', import.meta.url))
	}
})
