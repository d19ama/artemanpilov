<template>
    <div class="main">
        <app-title
            comment
        >Frontend developer</app-title>
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
    height: 100%;

    &__image {
        width: calc(50% - 3rem);
        overflow: hidden;

        img {
            vertical-align: middle;
            max-width: 100%;
        }
    }
}
</style>
