import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' }]
		}
	},
	compatibilityDate: '2025-05-15',
	nitro: {
		preset: process.env.NITRO_PRESET
	},
	runtimeConfig: {
		public: {
			apiUrl: process.env.NUXT_PUBLIC_API_URL,
			whatsAppSales: '',
			gtm: {
				id: process.env.NUXT_PUBLIC_GTM_ID as string,
				enabled: process.env.NODE_ENV === 'production',
				loadScript: true,
				enableRouterSync: true,
				defer: true,
				debug: process.env.NODE_ENV !== 'production'
			}
		}
	},
	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		'@nuxt/icon',
		'@nuxt/eslint',
		'@nuxt/test-utils/module',
		'@nuxtjs/fontaine',
		'@nuxtjs/google-fonts',
		'@zadigetvoltaire/nuxt-gtm'
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
