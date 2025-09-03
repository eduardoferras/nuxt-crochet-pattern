<template>
	<section class="refund-policy">
		<AppContainer>
			<header>
				<h1 class="refund-policy__title">Política de Troca, Devolução e Reembolso</h1>
				<p class="refund-policy__text">
					Por se tratar de produtos digitais, a loja adota critérios específicos para devoluções e
					reembolsos com o objetivo de garantir transparência e segurança para todos os clientes.
				</p>
			</header>
			<section>
				<h2 class="refund-policy__subtitle">Produtos digitais</h2>
				<p class="refund-policy__text">
					Todas as receitas de crochê disponíveis neste e-commerce são entregues em formato digital
					(PDF, imagens, vídeos ou outros formatos eletrônicos), sem envio físico.
				</p>
			</section>
			<section>
				<h2 class="refund-policy__subtitle">Cancelamento e Reembolso</h2>
				<ul class="refund-policy__list">
					<li class="refund-policy__item">
						Após a confirmação de pagamento, o acesso ao conteúdo digital é liberado imediatamente.
					</li>
					<li class="refund-policy__item">
						Como o produto é digital e de acesso instantâneo, não realizamos reembolso após o
						download ou visualização do material.
					</li>
					<li class="refund-policy__item">
						Em casos excepcionais, como erro técnico no site ou pagamento duplicado, o cliente pode
						solicitar análise para reembolso via nosso canal de atendimento em até 7 dias corridos
						após a compra.
					</li>
				</ul>
			</section>
			<section>
				<h2 class="refund-policy__subtitle">Suporte e Dúvidas</h2>
				<p class="refund-policy__text">
					Se houver qualquer problema com o arquivo, dificuldades no acesso ou inconsistência nas
					informações da receita adquirida, nosso suporte está disponível para ajudar. Entre em
					contato através do WhatsApp.
				</p>
			</section>
			<section>
				<h2 class="refund-policy__subtitle">Como esta Política é Aplicada</h2>
				<p class="refund-policy__text">
					Esta política possui caráter complementar e não substitui, em hipótese alguma, os direitos
					garantidos pelas leis de proteção ao consumidor, como o Código de Defesa do Consumidor. Em
					caso de divergência, prevalecerá sempre a legislação vigente.
				</p>
			</section>
			<section>
				<h2 class="refund-policy__subtitle">Concordância com os Termos</h2>
				<p class="refund-policy__text">
					Ao finalizar a compra, o cliente declara estar de acordo com os termos desta política e
					ciente de que o produto é digital e não elegível para devolução após acesso.
				</p>
			</section>
		</AppContainer>
	</section>
</template>
<script setup lang="ts">
useHead({
	title: 'Política de Troca, Devolução e Reembolso'
})
</script>
<style scoped lang="scss">
.refund-policy {
	&__title,
	&__subtitle,
	&__text {
		color: #000000;
	}

	&__title {
		font: 700 2.4rem / 1.2 $font-sans;
	}

	&__subtitle {
		font: 700 2rem / 1.2 $font-sans;
		margin-top: 1.6rem;
	}

	&__text {
		font: 400 1.6rem / 1.2 $font-body;
		margin-top: 1.6rem;
	}

	&__list {
		list-style: disc;
		margin-left: 3.2rem;
	}

	&__item {
		font: 400 1.6rem / 1.2 $font-body;
		margin-top: 0.8rem;
	}
}
</style>
