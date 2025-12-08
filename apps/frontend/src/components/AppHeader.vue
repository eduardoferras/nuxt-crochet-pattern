<template>
	<header :class="{ 'header--sticky': isSticky }" class="header">
		<AppContainer>
			<div class="header__content">
				<AppLink to="/">
					<SvgIcon
						name="rdc-logo"
						label="Logo Receitas de Crochê"
						role="img"
						width="186"
						height="13"
						color="#683000"
					/>
				</AppLink>
				<p class="header__text">
					Receitas de Crochê para
					<strong>Vestuário</strong>
					,
					<strong>Amigurumi</strong>
					e
					<strong>Datas Comemorativas</strong>
				</p>
			</div>
		</AppContainer>
	</header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)

function handleScroll() {
	isSticky.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped lang="scss">
.header {
	background-color: $color-secondary;
	height: 6.8rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;

	&--sticky {
		position: sticky;
		top: 0;
		z-index: 1000;
	}

	&__content {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		@include tablet {
			flex-direction: row;
		}
	}

	&__text {
		font: 400 1.4rem / 1.14 $font-sans;
		color: $color-primary;
		text-align: center;

		strong {
			font-weight: 700;
		}
	}
}
</style>
