<template>
    <div class="social">
        <a
            target="_blank"
            :key="item.name"
            :href="item.link"
            :title="item.name"
            v-for="item in data"
            :class="[
                'social__item',
                `social__item--${item.name}`
            ]"
        ></a>
    </div>
</template>

<script>
export default {
    name: 'social',
    data () {
        return {
            data: this.$root.app.social
        }
    }
}
</script>

<style lang="scss">
.social {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;

    &__item {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;

        &+& {
            margin-left: 1rem;
        }

        &--vk {
            background-image: url('~images/icons/vk.svg');
        }

        &--facebook {
            background-image: url('~images/icons/facebook.svg');
        }

        &--instagram {
            background-size: 85%;
            background-image: url('~images/icons/instagram.svg');
        }

        &--telegram {
            background-image: url('~images/icons/telegram.svg');
        }

        &--github {
            background-image: url('~images/icons/github.svg');
        }
    }
}
</style>
