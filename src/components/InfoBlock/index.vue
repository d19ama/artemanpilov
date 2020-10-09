<template>
    <div class="info-block">
        <span
            v-if="first"
            class="info-block__row info-block__row--first"
        >{{ first }}</span>
        <span
            v-if="second"
            class="info-block__row info-block__row--second"
        >{{ second }}</span>
        <span
            v-if="third"
            class="info-block__row info-block__row--third"
        >{{ third }}</span>
    </div>
</template>

<script>
export default {
    name: 'info-block',
    props: {
        first: {
            type: String,
            default: ''
        },
        second: {
            type: String,
            default: ''
        },
        third: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.info-block {

    &__row {
        display: block;

        &+& {
            margin-top: 1rem;
        }

        &--first {
            font-weight: 700;
            font-size: 1.25rem;
        }

        &--second {
            font-size: 1.125rem;
        }

        &--third {
            font-size: .875rem;
        }
    }
}
</style>
