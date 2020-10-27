<template>
    <component
        :is="tag"
        :class="classObject"
    >
        <slot />
    </component>
</template>

<script>
export default {
    name: 'heading',
    props: {
        tag: {
            type: String,
            default: 'h1'
        },
        text: {
            type: String,
            default: ''
        },
        brackets: Boolean,
        bordered: Boolean
    },
    computed: {
        classObject () {
            return [
                `heading heading--${this.tag}`,
                {
                    'heading--brackets': this.brackets,
                    'heading--bordered': this.bordered
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.heading {
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
    line-height: 1;
    font-weight: 700;
    color: $dark-grey;

    &--brackets {

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

    &--bordered {
        padding-bottom: 1rem;
        border-bottom: 3px solid $lite-grey;
    }

    &--h1 {
        font-size: 3rem;
        text-transform: uppercase;

        @include breakpoint(v-mobile) {
            padding: 0 1rem;
            font-size: 2rem;
            text-align: center;
        }
    }

    &--h2 {
        font-size: 2rem;
    }

    &--h3 {
        font-size: 1.5rem;
    }

    &--h4 {
        font-size: 1.25rem;
    }

    &--h5 {
        font-size: 1.125rem;
    }

    &--h6 {
        font-size: 1rem;
    }
}
</style>
