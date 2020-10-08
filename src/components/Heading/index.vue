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
        brackets: Boolean
    },
    computed: {
        classObject() {
            return [
                `heading heading--${this.tag}`,
                {
                    'heading--brackets': this.brackets
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

    &--h1 {
        line-height: 1;
        font-size: 3rem;
        font-weight: 700;
        text-transform: uppercase;

        @include breakpoint(v-mobile) {
            padding: 0 1rem;
            font-size: 2rem;
            text-align: center;
        }
    }

    &--h2 {
        line-height: 1;
        font-weight: 700;
        color: $dark-grey;
        font-size: 2rem;
    }

    &--h3 {
        line-height: 1;
        font-weight: 700;
        font-size: 1.5rem;
        color: $dark-grey;
    }

    &--h4 {
        line-height: 1;
        font-weight: 700;
        color: $dark-grey;
        font-size: 1.25rem;
    }

    &--h5 {
        line-height: 1;
        font-weight: 700;
        color: $dark-grey;
        font-size: 1.125rem;
    }
}
</style>
