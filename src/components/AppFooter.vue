<template>
	<footer class="footer">
		<AppContainer>
			<div class="footer__box">
				<div class="footer__content">
					<AppLink to="/">
						<SvgIcon
							name="rdc-logo"
							label="Logo Receitas de Crochê"
							role="img"
							width="186"
							height="13"
							color="#683000"
						/>
					</AppLink>
					<section class="footer__policies">
						<AppLink to="/politica-de-privacidade">Política de Privacidade</AppLink>
						|
						<AppLink to="/politica-de-troca-devolucao-e-reembolso">Troca e Reembolso</AppLink>
					</section>
				</div>
				<section class="footer__copyright">
					© {{ currentYear }} Receitas de Crochê. Todos os direitos reservados.
				</section>
			</div>
		</AppContainer>
	</footer>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
<style scoped lang="scss">
.footer {
	background-color: $color-secondary;
	padding: 1.6rem 0;
	display: flex;
	align-items: center;
	justify-content: center;

	&__box {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		@include tablet {
			flex-direction: row;
			align-items: end;
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;

		@include tablet {
			align-items: start;
		}
	}

	&__copyright,
	&__policies {
		font: 400 1.2rem / 1.2 $font-sans;
		color: $color-primary;
		text-align: center;

		strong {
			font-weight: 700;
		}
	}
}
</style>
