import z from 'zod'

export const confirmPasswordSchema = z
	.string({ error: 'Confirmação de senha é obrigatória' })
	.nonempty({ error: 'Confirmação de senha é obrigatória' })
	.min(6, { error: 'Senha precisa ter pelo menos 6 caracteres' })
