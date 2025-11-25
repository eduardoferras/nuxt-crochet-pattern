import type FeedbackOption from '@/types/FeedbackOption'

const feedbackOptions: FeedbackOption[] = [
	{
		title: 'Problemas',
		icon: 'clarity:error-standard-solid',
		color: '#d03838',
		placeholder: 'Compartilhe todos os detalhes do problema...'
	},
	{
		title: 'Ideias',
		icon: 'flat-color-icons:idea',
		color: '#000000',
		placeholder: 'Tem uma sugestão para deixar ainda melhor? Adoramos ouvir suas ideias!'
	},
	{
		title: 'Outros',
		icon: 'fluent:chat-24-filled',
		color: '#3d5dac',
		placeholder: 'Queremos saber o que pensa. O que deseja nos dizer?'
	}
]

export default feedbackOptions
