<template>
	<nav
		class="navigation"
		:class="{
			'is-active': active
		}"
	>
		<a
			:key="item.id"
			:href="item.link"
			class="navigation__link"
			v-for="item in navigation"
		>
			<span>{{ item.name }}</span>
		</a>
	</nav>
</template>

<script>
export default {
	name: 'app-navigation',
	props: {
		active: Boolean
	},
	data () {
		return {
			navigation: this.$root.app.components.navigation
		}
	}
}
</script>

<style lang="scss">
.navigation {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 0;
	text-align: center;
	white-space: nowrap;
	background-color: $white;
	box-shadow: inset 2px 0 0 0 transparent;
	transition: width .3s;

	&__link {
		opacity: 0;
		padding: 0 .75rem;
		transition: opacity .1s;

		span {
			color: $black;
			font-size: 1rem;
			font-weight: 700;
			line-height: 3rem;
			border-bottom: 1px solid rgba($black, .5);
			transition: border-bottom-color .3s;
		}

		&:hover {

			span {
				border-bottom-color: transparent;
			}
		}
	}

	&.is-active {
		width: 16rem;
		box-shadow: inset 2px 0 0 0 $middle-grey;
		transition: width .3s .3s, box-shadow .3s .3s;

		a {
			opacity: 1;
			transition: opacity .3s .5s;
		}
	}
}
</style>
