<template>
    <component
        :is="tag"
        class="list"
        :class="`list--${this.tag}`"
    >
        <slot />
    </component>
</template>

<script>
export default {
    name: 'list',
    props: {
        tag: {
            type: String,
            default: 'ul',
            validator: prop => ['ul', 'ol'].includes(prop)
        }
    }
}

</script>

<style lang="scss">
.list {

    &__item {
        padding-left: 2rem;
        position: relative;
        line-height: 1.5;
        font-size: .875rem;

        @include breakpoint(tablet) {
            font-size: .75rem;
        }
    }

    &__item+&__item {
        margin: .5rem 0 0;
    }

    &--ul {

        .list__item {

            &:before {
                content: '// ';
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                font-weight: 700;
                color: $middle-grey;
            }
        }
    }

    &--ol {

        .list__item {

            &:before {
                counter-increment: list;
                content: counter(list);
                width: 1.25rem;
                text-align: left;
                font-weight: 500;
                color: $middle-grey;
            }
        }
    }
}
</style>
