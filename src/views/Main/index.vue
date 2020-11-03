<template>
    <div class="main">
        <app-title
            comment
            class="main__title"
        >Frontend developer<br/>with team lead skills</app-title>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data () {
        return {
            data: this.$root.app.pages.main
        }
    }
}
</script>

<style lang="scss">
.main {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;

    &__title {
        margin-top: 20rem;
    }
}
</style>
