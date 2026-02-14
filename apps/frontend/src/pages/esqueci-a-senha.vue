<script setup lang="ts">
useHead({
	title: 'Esqueci a Senha'
})

definePageMeta({
	layout: false
})
</script>
<template>
	<div class="wrapper">
		<AppContainer>
			<div class="content">
				<AppLink to="/" class="link-home">
					<Icon name="material-symbols:arrow-back" size="16" />
					Voltar para a loja
				</AppLink>
				<div class="forgotPassword-container">
					<div class="forgotPassword-header">
						<Icon
							class="forgotPassword-logo"
							name="local:rdc-short-logo"
							size="36"
							style="color: #683000"
							aria-label="Logo Receitas de Crochê"
						/>
						<h1 class="forgotPassword-title">Redefinir senha</h1>
						<p class="forgotPassword-description">
							Digite seu e-mail para receber o link de redefinição
						</p>
					</div>
					<ForgotPasswordForm />
				</div>
			</div>
		</AppContainer>
	</div>
</template>
<style lang="scss">
.wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	background: linear-gradient(to bottom right, #c93f1d, #c93f1de6, #f96706);
}

.content {
	padding: 1.6rem 0;
	margin: 0 auto;
	width: 100%;
	max-width: 44.8rem;
	flex: 1;
}

.link-home {
	display: flex;
	align-items: center;
	gap: 0.8rem;
	margin-bottom: 2.4rem;
	font: 400 1.6rem / 1.2 $font-body;
	color: #eee3d3;
	width: fit-content;
}

.forgotPassword {
	&-container {
		background-color: #fffffff2;
		border-radius: 1.4rem;
		padding: 2.4rem;
	}

	&-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;
	}

	&-logo {
		margin-bottom: 0.8rem;
	}

	&-title {
		font: 700 2.4rem / 1.2 $font-heading;
		color: #281c15;
	}

	&-description {
		font: 400 1.4rem / 1.2 $font-body;
		text-align: center;
		color: #756157;
		margin-bottom: 1.6rem;
	}
}
</style>
