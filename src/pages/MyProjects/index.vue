<template>
    <portfolio
        :data="data"
    />
</template>

<script>
export default {
    name: 'my-projects',
    data () {
        return {
            data: this.$root.app.pages.projects
        }
    }
}
</script>
