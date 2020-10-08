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
    box-shadow: .5rem .5rem rgba($dark-grey, .2);

    &__name {
        display: block;
        margin-bottom: 1.25rem;
        font-weight: 700;
        font-size: 1.25rem;
        color: $dark-grey;
    }

    &__value {
        display: block;
        font-size: 1rem;
        color: rgba($dark-grey, .8);
    }
}
</style>
