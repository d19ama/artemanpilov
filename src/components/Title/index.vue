<template>
    <component
        :is="tag"
        :class="`title title--${tag}`"
    >
        <slot />
    </component>
</template>

<script>
export default {
    name: 'app-title',
    props: {
        tag: {
            type: String,
            default: 'h1'
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.title {
    $parent: &;

    display: flex;
    flex-flow: row wrap;
    align-items: baseline;

    &--h1 {
        margin: 0 0 5rem;
        font-size: 2rem;
        font-weight: 700;
        line-height: 3rem;
        text-transform: uppercase;

        @include breakpoint(v-mobile) {
            padding: 0 1rem;
            margin: 0 0 1rem;
            font-size: 1.5rem;
            text-align: center;
        }

        &:before {
            content: '/*';
            margin-right: 1.25rem;
        }

        &:after {
            content: '*/';
            margin-left: 1.25rem;
        }

        &:before,
        &:after {
            color: $middle-grey;
        }
    }

    &--h2 {
        margin: 0 0 1rem;
        font-size: 1rem;
        font-weight: 700;
        color: $dark-grey;
        line-height: 1.5rem;
    }
}
</style>
