import App from '@/app.vue'
import AppHeader from '@/components/AppHeader.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

describe('App.vue', async () => {
	it('should include the AppHeader', async () => {
		const wrapper = await mountSuspended(App)
		const header = wrapper.findComponent(AppHeader)
		expect(header.exists()).toBe(true)
	})
})
