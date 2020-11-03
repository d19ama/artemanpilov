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
    name: 'app-title',
    props: {
        tag: {
            type: String,
            default: 'h1'
        },
        text: {
            type: String,
            default: ''
        },
        weight: {
            type: String,
            default: 'bold'
        },
        comment: Boolean,
        bordered: Boolean,
        uppercase: Boolean
    },
    computed: {
        classObject () {
            return [
                'app-title',
                `app-title--${this.tag}`,
                `app-title--${this.weight}`,
                {
                    'app-title--comment': this.comment,
                    'app-title--bordered': this.bordered,
                    'app-title--uppercase': this.uppercase
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.app-title {
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
    line-height: 1;
    color: $dark-grey;

    &--comment {

        &:before {
            content: '//';
            margin-right: 1.25rem;
            color: $middle-grey;
        }
    }

    &--bordered {
        padding-bottom: 1rem;
        border-bottom: 3px solid $lite-grey;
    }

    &--uppercase {
        text-transform: uppercase;
    }

    &--normal {
        font-weight: 400;
    }

    &--bold {
        font-weight: 700;
    }

    &--h1 {
        font-size: 4rem;
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
