<template>
    <div class="key-indicator">
        <span class="key-indicator__name">{{ name }}</span>
        <span class="key-indicator__value">{{ value }}</span>
    </div>
</template>

<script>
export default {
    name: 'key-indicator',
    props: {
        name: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.key-indicator {
    padding: 2rem;
    background-color: $lite-grey;

    &__name {
        display: block;
        margin-bottom: 1.25rem;
        font-size: 1rem;
        font-weight: 700;
        color: $dark-grey;
    }

    &__value {
        display: block;
        font-size: .875rem;
        color: rgba($dark-grey, .8);
    }
}
</style>
