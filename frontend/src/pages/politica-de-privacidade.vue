<template>
	<section class="privacy-policy">
		<AppContainer>
			<header>
				<h1 class="privacy-policy__title">Política de Privacidade</h1>
			</header>
			<section>
				<h2 class="privacy-policy__subtitle">Coleta de Informações Pessoais</h2>
				<p class="privacy-policy__text">
					Ao acessar nosso site ou utilizar nossos serviços, certas informações são registradas para
					melhorar sua experiência. Os dados coletados podem incluir nome, e-mail, telefone,
					localização, gênero, faixa etária, entre outros. Esse processo respeita a Lei de Proteção
					de Dados Pessoais de 26 de outubro de 1998 (Lei nº 67/98). Ao navegar em nosso site,
					entende-se que você concorda com este termo. Reservamo-nos o direito de atualizar este
					documento sem aviso prévio. Recomendamos que consulte periodicamente nossas políticas.
				</p>
			</section>
			<section>
				<h2 class="privacy-policy__subtitle">Dados de Publicidade Online</h2>
				<p class="privacy-policy__text">
					Ao interagir com nossos anúncios, dados como IP, provedor de acesso, navegador, tempo de
					permanência e conteúdos acessados podem ser coletados para aprimorar campanhas
					publicitárias.
				</p>
			</section>
			<section>
				<h2 class="privacy-policy__subtitle">Dados de Navegação no Site</h2>
				<p class="privacy-policy__text">
					Informações como endereço IP, navegador, provedor de Internet e dados pessoais podem ser
					armazenadas via cookies e web beacons. Essas tecnologias ajudam a entender sua interação
					com o site e melhoram nossos serviços. Você pode desativar os cookies nas configurações do
					navegador, mas isso pode afetar funcionalidades do site.
				</p>
			</section>
			<section>
				<h2 class="privacy-policy__subtitle">Sites Externos</h2>
				<p class="privacy-policy__text">
					Este site pode conter links para páginas externas. Nossa política de privacidade não se
					aplica a esses sites. Recomendamos que você leia os termos de privacidade deles. Não nos
					responsabilizamos por práticas de terceiros.
				</p>
			</section>
		</AppContainer>
	</section>
</template>
<script setup lang="ts">
useHead({
	title: 'Política de Privacidade'
})
</script>
<style scoped lang="scss">
.privacy-policy {
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
}
</style>
