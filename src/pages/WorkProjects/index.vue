<template>
    <portfolio
        :data="data"
    />
</template>

<script>
export default {
    name: 'work-projects',
    data () {
        return {
            data: this.$root.app.pages.portfolio
        }
    }
}
</script>
