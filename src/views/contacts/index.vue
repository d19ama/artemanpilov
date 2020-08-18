<template>
    <div class="content">
        <h1><span>/*</span>contacts<span>*/</span></h1>
        <ul class="contacts">
            <li
                :key="item.id"
                class="contacts__item"
                v-for="item in contacts"
            >
                <a
                    target="_blank"
                    :href="item.link"
                    :title="item.name"
                    class="contacts__link"
                >
                    <span
                        class="contacts__icon"
                        :style="`background-image: url(${item.src})`"
                    ></span>
                    <span>{{ item.name }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'app-contacts',
    data() {
        return {
            contacts: this.$root.app.components.contacts
        }
    }
}
</script>

<style lang="scss">
.contacts {
    display: flex;
    flex-flow: row wrap;

    &__item {
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
        width: 50%;
        margin-top: 3rem;
    }

    &__icon {
        display: block;
        width: 5rem;
        height: 5rem;
        margin-right: 2rem;
        background-position: center;
        background-repeat: no-repeat;
        filter: drop-shadow(0 0.2rem 0.25rem rgba($dark-grey, 0.2));
    }

    &__link {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        font-size: 2rem;
        transition: color .3s;

        &:hover {
            color: $red;
        }
    }
}
</style>
