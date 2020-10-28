<template>
    <div class="content">
        <app-title
            comment
        >contacts</app-title>
        <ul class="contacts">
            <li
                :key="item.id"
                v-for="item in data"
                class="contacts__item"
            >
                <a
                    target="_blank"
                    :href="item.link"
                    :title="item.name"
                    class="contacts__link"
                >
                    <span
                        class="contacts__icon"
                        :style="buildStyle(item.src)"
                    ></span>
                    <span>{{ item.name }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'contacts',
    data () {
        return {
            data: this.$root.app.pages.contacts
        }
    },
    methods: {
        buildStyle (src) {
            return {
                backgroundImage: `url(${src})`
            }
        }
    }
}
</script>

<style lang="scss">
.contacts {
    display: flex;
    flex-flow: row wrap;

    @include breakpoint(v-mobile) {
        padding: 0 2rem;
    }

    &__item {
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
        width: 50%;
        margin-top: 3rem;

        @include breakpoint(mobile) {
            width: 100%;
        }

        @include breakpoint(v-mobile) {
            margin-top: 1.5rem;
        }
    }

    &__icon {
        display: block;
        width: 4rem;
        height: 4rem;
        margin-right: 2rem;
        background-size: 90%;
        background-position: center;
        background-repeat: no-repeat;
        filter: drop-shadow(0 0.2rem 0.25rem rgba($dark-grey, 0.2));

        @include breakpoint(v-mobile) {
            width: 2rem;
            height: 2rem;
        }
    }

    &__link {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        font-size: 2rem;
        transition: color .3s;

        @include breakpoint(v-mobile) {
            font-size: 1.5rem;
        }

        &:hover {
            color: $red;
        }
    }
}
</style>
