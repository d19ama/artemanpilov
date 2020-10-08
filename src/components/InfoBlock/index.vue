<template>
    <div class="info-block">
        <span class="info-block__value info-block__value--first">{{ first }}</span>
        <span class="info-block__value info-block__value--second">{{ second }}</span>
        <span class="info-block__value info-block__value--third">{{ third }}</span>
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

    &__value {
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
