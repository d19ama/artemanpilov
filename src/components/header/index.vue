<template>
	<header class="header">
		<div class="logo"></div>
	</header>
</template>

<script>
export default {
	name: 'app-header'
}
</script>

<style lang="scss">
.header {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	height: 4rem;
	padding: 0 2rem;
	background-color: $white;
}
</style>
