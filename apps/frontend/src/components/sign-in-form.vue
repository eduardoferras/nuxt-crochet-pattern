<script setup lang="ts">
import AppDivider from '@components/UI/AppDivider.vue'
import CheckboxField from '@components/UI/CheckboxField.vue'
import InputField from '@components/UI/InputField.vue'
import LabelField from '@components/UI/LabelField.vue'
import type { SignIn } from '@interfaces/sign-in.interface'
import signIn from '@services/auth/sign-in.service'
import { signInSchema } from '@validations/sign-in.validation'
import { toast } from 'vue-sonner'

const { errors, meta, isSubmitting, handleSubmit } = useForm<SignIn>({
	validationSchema: signInSchema,
	initialValues: {
		rememberMe: true
	}
})

const { value: rememberMe } = useField<boolean>('rememberMe')

const showPassword = ref(false)
const route = useRoute()
const redirect_uri = route.query.redirect ? route.query.redirect.toString() : '/'

const onSubmit = handleSubmit(async (data: SignIn) => {
	try {
		await signIn(data)

		await new Promise((resolve) => setTimeout(resolve, 2000))
		await navigateTo(redirect_uri)
	} catch (error) {
		console.error('Erro ao logar:', error)

		const err = error as AuthClientError

		if (err.code) {
			toast.error(err.message || 'Erro ao entrar. Tente novamente mais tarde.')
		} else {
			toast.error('Erro inesperado. Tente novamente mais tarde.')
		}
	}
})
</script>
<template>
	<form class="signIn-form" @submit.prevent="onSubmit">
		<div class="field-container">
			<LabelField label="Email" for="email" />
			<div class="field-input-container" :class="{ 'field-error': errors.email }">
				<Icon name="material-symbols:mail-outline-rounded" size="16" style="color: #756157" />
				<InputField
					id="email"
					name="email"
					type="email"
					placeholder="seu@email.com"
					autocomplete="email"
				/>
			</div>
			<span v-if="errors.email" class="error">{{ errors.email }}</span>
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
			<span v-if="errors.password" class="error">{{ errors.password }}</span>
		</div>
		<div class="field-actions">
			<div class="remember-me" @click="rememberMe = !rememberMe">
				<CheckboxField id="rememberMe" name="rememberMe" :checked="rememberMe" />
				<LabelField label="Manter conectado" for="rememberMe" />
			</div>
			<span v-if="errors.rememberMe" class="error">{{ errors.rememberMe }}</span>
			<p class="forgot-password">
				<AppLink to="/esqueci-senha" class="login-link">Esqueceu a senha?</AppLink>
			</p>
		</div>
		<button class="btn btn--submit" type="submit" :disabled="!meta.valid">
			<template v-if="!isSubmitting">Entrar</template>
			<template v-else>
				<AppLoading />
			</template>
		</button>
		<p class="login-container">
			Não tem uma conta?
			<AppLink to="/crie-sua-conta" class="login-link">Cadastre-se</AppLink>
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
</template>

<style scoped lang="scss">
.signIn {
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

	&-actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
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

.remember-me {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;

	.field-label {
		line-height: 1.6rem;
		cursor: pointer;
		color: #756157;
		font-weight: 400;
	}
}

.forgot-password {
	text-align: right;
	font-size: 1.4rem;
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
