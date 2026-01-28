import z from 'zod'

export const passwordSchema = z
	.string({ error: 'Senha é obrigatória' })
	.nonempty({ error: 'Senha é obrigatória' })
	.min(6, { error: 'Senha precisa ter pelo menos 6 caracteres' })
