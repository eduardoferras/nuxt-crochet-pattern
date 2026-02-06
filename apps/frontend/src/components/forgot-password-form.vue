<script setup lang="ts">
import AppDivider from '@components/UI/AppDivider.vue'
import InputField from '@components/UI/InputField.vue'
import LabelField from '@components/UI/LabelField.vue'
import type { ForgotPassword } from '@interfaces/forgot-password.interface'
import forgotPassword from '@services/auth/forgot-password.service'
import { forgotPasswordSchema } from '@validations/forgot-password.validation'
import { toast } from 'vue-sonner'

const { errors, meta, isSubmitting, handleSubmit, resetForm } = useForm<ForgotPassword>({
	validationSchema: forgotPasswordSchema
})

const onSubmit = handleSubmit(async (data: ForgotPassword) => {
	try {
		await forgotPassword(data)
		toast.success('Link de redefinição enviado, caso o e-mail esteja cadastrado.')
		resetForm()
	} catch (error) {
		console.error('Erro forgotPassword page:', error)

		const err = error as AuthClientError

		if (err.code) {
			toast.error(err.message || 'Erro ao redefinir senha. Tente novamente mais tarde.')
		} else {
			toast.error('Erro inesperado. Tente novamente mais tarde.')
		}
	}
})
</script>
<template>
	<form class="forgotPassword-form" @submit.prevent="onSubmit">
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
		<button class="btn btn--submit" type="submit" :disabled="!meta.valid">
			<template v-if="!isSubmitting">Enviar link de redefinição</template>
			<template v-else>
				<AppLoading />
			</template>
		</button>
		<p class="login-container">
			<AppLink to="/entrar" class="login-link">Voltar para o login</AppLink>
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
.forgotPassword {
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
