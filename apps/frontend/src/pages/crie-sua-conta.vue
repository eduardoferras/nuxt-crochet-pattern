<script setup lang="ts">
import AppDivider from '@components/UI/AppDivider.vue'
import InputField from '@components/UI/InputField.vue'
import LabelField from '@components/UI/LabelField.vue'
import type { SignUp } from '@interfaces/sign-up.interface'
import signUp from '@services/auth/sign-up.service'
import { signUpSchema } from '@validations/sign-up.validation'
import { toast } from 'vue-sonner'

useHead({
	title: 'Crie sua conta'
})

definePageMeta({
	layout: false
})

const { errors, meta, isSubmitting, handleSubmit } = useForm({
	validationSchema: signUpSchema
})
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const route = useRoute()
const redirect_uri = route.query.redirect ? route.query.redirect.toString() : '/'

const onSubmit = handleSubmit(async (data: SignUp) => {
	try {
		await signUp(data)
		toast.success('Sua conta foi criada com sucesso!')

		await new Promise((resolve) => setTimeout(resolve, 2000))
		await navigateTo(redirect_uri)
	} catch (error) {
		console.error('Erro ao cadastrar usuário:', error)

		const err = error as AuthClientError

		if (err.code) {
			toast.error(err.message || 'Erro ao realizar cadastro. Tente novamente mais tarde.')
		} else {
			toast.error('Erro inesperado. Tente novamente mais tarde.')
		}
	}
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
				<div class="signUp-container">
					<div class="signUp-header">
						<SvgIcon
							name="short-logo"
							label="Logo Receitas de Crochê"
							role="img"
							width="32"
							height="36"
							color="#683000"
							class="signUp-logo"
						/>
						<h1 class="signUp-title">Crie sua conta</h1>
						<p class="signUp-description">Junte-se à nossa comunidade de crochê</p>
					</div>
					<form class="signUp-form" @submit.prevent="onSubmit">
						<div class="field-container">
							<LabelField label="Nome completo" for="fullName" />
							<div class="field-input-container" :class="{ 'field-error': errors.fullName }">
								<Icon
									name="material-symbols:person-outline-rounded"
									size="16"
									style="color: #756157"
								/>
								<InputField
									id="fullName"
									name="fullName"
									type="text"
									placeholder="Seu nome"
									autocomplete="name"
									autofocus
								/>
							</div>
							<span class="error">{{ errors.fullName }}</span>
						</div>
						<div class="field-container">
							<LabelField label="Email" for="email" />
							<div class="field-input-container" :class="{ 'field-error': errors.email }">
								<Icon
									name="material-symbols:mail-outline-rounded"
									size="16"
									style="color: #756157"
								/>
								<InputField
									id="email"
									name="email"
									type="email"
									placeholder="seu@email.com"
									autocomplete="email"
								/>
							</div>
							<span class="error">{{ errors.email }}</span>
						</div>
						<div class="field-container">
							<LabelField label="Senha" for="password" />
							<div class="field-input-container" :class="{ 'field-error': errors.password }">
								<Icon name="charm:padlock" size="16" style="color: #756157" />
								<InputField
									id="password"
									name="password"
									:type="showPassword ? 'text' : 'password'"
									placeholder="••••••"
									style="padding-top: 0.5rem"
								/>
								<Icon
									:name="
										showPassword
											? 'material-symbols:visibility-off-outline-rounded'
											: 'material-symbols:visibility-outline-rounded'
									"
									size="16"
									style="color: #756157"
									@click="showPassword = !showPassword"
								/>
							</div>
							<span class="error">{{ errors.password }}</span>
						</div>
						<div class="field-container">
							<LabelField label="Confirmar senha" for="confirmPassword" />
							<div class="field-input-container" :class="{ 'field-error': errors.confirmPassword }">
								<Icon name="charm:padlock" size="16" style="color: #756157" />
								<InputField
									id="confirmPassword"
									name="confirmPassword"
									:type="showConfirmPassword ? 'text' : 'password'"
									placeholder="••••••"
									style="padding-top: 0.5rem"
								/>
								<Icon
									:name="
										showConfirmPassword
											? 'material-symbols:visibility-off-outline-rounded'
											: 'material-symbols:visibility-outline-rounded'
									"
									size="16"
									style="color: #756157"
									@click="showConfirmPassword = !showConfirmPassword"
								/>
							</div>
							<span class="error">{{ errors.confirmPassword }}</span>
						</div>
						<button class="btn btn--submit" type="submit" :disabled="!meta.valid">
							<template v-if="!isSubmitting">Criar conta</template>
							<template v-else>
								<AppLoading />
							</template>
						</button>
						<p class="login-container">
							Já tem uma conta?
							<AppLink to="/entrar" class="login-link">Entrar</AppLink>
						</p>
						<AppDivider />
						<p class="accept-terms">
							Ao continuar, você concorda com nossa
							<AppLink
								to="/politica-de-privacidade"
								class="accept-terms-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Política de Privacidade
							</AppLink>
						</p>
					</form>
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

.signUp {
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

	&-form {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
	}
}

.field {
	&-error,
	&-error:focus {
		border: 1px solid #d32f2f !important;
	}

	&-container {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	&-input-container {
		height: 4rem;
		display: flex;
		align-items: center;
		gap: 0.8rem;
		background-color: #ffffff;
		border: #dfd1c380 1px solid;
		border-radius: 1.2rem;
		padding: 0 1.2rem;
		color: #281c15;

		&:focus-within {
			border-color: #ff7f00;
		}

		.error {
			display: none;
		}
	}
}

.btn {
	padding: 1.6rem 0;
}

.error {
	color: #ef4343;
	font: 400 1.4rem / 1.6 $font-body;
	margin-bottom: -0.8rem;
}

.login {
	&-container {
		font: 400 1.6rem / 1.2 $font-body;
		color: #756157;
		text-align: center;
		margin: 1.2rem 0;
	}

	&-link {
		color: #c93f1d;
		font-weight: 600;

		&:hover {
			color: #c93f1dcc;
		}
	}
}

.accept-terms {
	font: 400 1.2rem / 1.2 $font-body;
	color: #756157;
	text-align: center;

	&-link {
		color: #c93f1d;

		&:hover {
			color: #c93f1dcc;
			text-decoration: underline;
		}
	}
}
</style>
