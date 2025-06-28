export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/eslint'],
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
	}
})
