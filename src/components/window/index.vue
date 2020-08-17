<template>
	<div
		v-if="opened"
		class="window"
	>
		<div class="window__inner"></div>
		<a
			role="button"
			class="window__close"
			@click="opened = false"
			href="javascript: void(0)"
		></a>
	</div>
</template>

<script>
export default {
	name: 'app-window',
	props: {
		active: Boolean
	},
	data() {
		return {
			opened: this.active
		}
	}
}
</script>

<style lang="scss">
.window {
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 90;
	background-color: $white;

	&__close {
		width: 3rem;
		height: 3rem;
		padding: 0;
		position: absolute;
		top: 2rem;
		right: 2rem;
		z-index: 2;
		border: 0;
		outline: 0;
		background-color: transparent;
		transition: opacity .3s;
		cursor: pointer;

		&:hover {
			opacity: .5;
		}

		&:after,
		&:before {
			content: '';
			display: block;
			width: 3rem;
			height: 2px;
			position: absolute;
			top: 50%;
			left: 50%;
			background-color: $dark-grey;
		}

		&:before {
			transform: translate(-50%, -50%) rotate(45deg);
		}

		&:after {
			transform: translate(-50%, -50%) rotate(-45deg);
		}
	}
}
</style>
