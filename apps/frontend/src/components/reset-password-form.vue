<script setup lang="ts">
import AppDivider from '@components/UI/AppDivider.vue'
import InputField from '@components/UI/InputField.vue'
import LabelField from '@components/UI/LabelField.vue'
import type { ResetPassword } from '@interfaces/reset-password.interface'
import resetPassword from '@services/auth/reset-password.service'
import { resetPasswordSchema } from '@validations/reset-password.validation'
import { toast } from 'vue-sonner'

const { errors, meta, isSubmitting, handleSubmit, resetForm } = useForm<ResetPassword>({
	validationSchema: resetPasswordSchema
})
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const onSubmit = handleSubmit(async (data: ResetPassword) => {
	try {
		await resetPassword(data)
		toast.success('Nova senha criada com sucesso!')
		resetForm()
	} catch (error) {
		console.error('Erro resetPassword page:', error)

		const err = error as AuthClientError

		if (err.code) {
			toast.error(err.message || 'Erro ao criar nova senha. Tente novamente mais tarde.')
		} else {
			toast.error('Erro inesperado. Tente novamente mais tarde.')
		}
	}
})
</script>
<template>
	<form class="resetPassword-form" @submit.prevent="onSubmit">
		<div class="field-container">
			<LabelField label="Nova senha" for="password" />
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
			<LabelField label="Confirmar nova senha" for="confirmPassword" />
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
		<div class="password-tip">
			<p>
				<strong>Dica:</strong>
				Use uma senha com pelo menos 6 caracteres, combinando letras, números e símbolos para maior
				segurança.
			</p>
		</div>
		<button class="btn btn--submit" type="submit" :disabled="!meta.valid">
			<template v-if="!isSubmitting">Redefinir senha</template>
			<template v-else>
				<AppLoading />
			</template>
		</button>
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
.resetPassword {
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
	}
}

.password-tip {
	background-color: #efebe780;
	padding: 1.2rem;
	border-radius: 1.4rem;

	p {
		font: 400 1.2rem / 1.6 $font-body;
		color: #756157;
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
