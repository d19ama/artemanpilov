<template>
    <div
        class="text-block"
        :class="classObject"
    >
        <template v-if="$slots.default">
            <slot />
        </template>
        <template v-else>
            <p
                v-html="p"
                :key="index"
                v-for="(p, index) in text"
            ></p>
        </template>
    </div>
</template>

<script>
export default {
    name: 'text-block',
    props: {
        text: {
            type: Array,
            default: () => []
        },
        bold: Boolean,
        italic: Boolean
    },
    computed: {
        classObject () {
            return {
                'text-block--bold': this.bold,
                'text-block--italic': this.italic
            }
        }
    }
}
</script>

<style lang="scss">
.text-block {
    padding: 1.5rem 2rem;
    font-size: 1rem;
    line-height: 1.5rem;
    background-color: $lite-grey;
    box-shadow: .5rem .5rem rgba($dark-grey, .2);

    &--bold {
        font-weight: 700;
    }

    &--italic {
        font-style: italic;
    }
}
</style>
