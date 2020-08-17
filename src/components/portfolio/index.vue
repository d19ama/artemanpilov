<template>
	<section class="portfolio">
		<a
			:key="item.id"
			target="_blank"
			:href="item.link"
			class="portfolio__item"
			v-for="item in portfolio"
			:style="`background-image: url(${item.image})`"
		></a>
	</section>
</template>

<script>
export default {
	name: 'app-portfolio',
	data () {
		return {
			portfolio: this.$root.app.components.portfolio
		}
	}
}
</script>

<style lang="scss">
.portfolio {
	display: flex;
	flex-flow: row wrap;
	padding: 0;

	&__item {
		display: block;
		width: 20%;
		height: 50vh;
		overflow: hidden;
		position: relative;
		border-right: 2px solid $lite-grey;
		border-bottom: 2px solid $lite-grey;
		background-color: $white;
		background-position: center;
		background-repeat: no-repeat;
		filter: grayscale(100%);
		box-shadow: 0 1.875rem 4.75rem 0.25rem transparent;
		transition: all .2s;

		@include breakpoint(tablet) {
			width: calc(100%/3);
			filter: grayscale(0%);

			@media screen and (orientation: portrait) {
				height: calc(100vh/3);
			}
		}

		@include breakpoint(mobile) {

			@media screen and (orientation: landscape) {
				width: 50%;
			}
		}

		@include breakpoint(v-mobile) {
			width: 100%;
			height: calc(100vh/3);
		}

		&:hover {
			z-index: 2;
			filter: grayscale(0%);
			box-shadow: 0 1.875rem 4.75rem 0.25rem rgba(4, 20, 38, 0.1);
		}
	}
}
</style>
