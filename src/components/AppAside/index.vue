<template>
    <aside class="app-aside">
        <div class="app-aside__image">
            <img
                :src="data.photo"
                :alt="`${data.firstName} ${data.lastName}`"
            />
        </div>
        <div class="app-aside__block black-bg">
            <heading
                tag="h2"
                class="white-text margin-bottom--xs"
            >{{ data.firstName }} {{ data.lastName }}</heading>
            <heading
                tag="h5"
                class="white-text margin-bottom--xs"
            >{{ data.specialization }}</heading>
            <list
                no-markers
            >
                <list-item>
                    <div class="app-aside__contact">
                        <span
                            class="app-aside__icon"
                            :style="buildStyle(data.location.src)"
                        ></span>
                        <span class="white-text">{{ data.location.name }}</span>
                    </div>
                </list-item>
                <list-item>
                    <a
                        target="_blank"
                        :href="`mailto:${data.email.link}`"
                        class="app-aside__contact white-text"
                    >
                        <span
                            class="app-aside__icon"
                            :style="buildStyle(data.email.src)"
                        ></span>
                        <span>{{ data.email.link }}</span>
                    </a>
                </list-item>
            </list>
        </div>
        <div class="app-aside__block">
            <heading
                tag="h6"
                class="white-text margin-bottom--xs"
            >Social:</heading>
            <list
                no-markers
            >
                <list-item
                    :key="index"
                    v-for="(item, index) in data.contacts"
                >
                    <a
                        target="_blank"
                        :href="item.link"
                        class="app-aside__contact white-text"
                    >
                        <span
                            class="app-aside__icon"
                            :style="buildStyle(item.src)"
                        ></span>
                        <span>{{ item.name }}</span>
                    </a>
                </list-item>
            </list>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'app-aside',
    props: {
        mobile: Boolean
    },
    data() {
        return {
            viewportW: 0,
            hovered: this.mobile,
            data: this.$root.app.components.aside
        }
    },
    watch: {
        mobile(newValue) {
            this.hovered = newValue
        }
    },
    methods: {
        toggle(state) {
            if (this.mobile) return

            this.hovered = state
        },
        buildStyle(src) {
            return {
                backgroundImage: `url(${src})`
            }
        }
    }
}
</script>

<style lang="scss">
.app-aside {
    width: 22rem;
    height: 100vh;
    flex-shrink: 0;
    background-color: $dark-grey;

    @include breakpoint(mobile) {
        width: 100%;
        height: 14rem;
    }

    &__image {
        width: 100%;
        overflow: hidden;

        @include breakpoint(mobile) {
            height: 100%;
        }

        @include breakpoint(v-mobile) {
            display: none;
        }

        img {
            vertical-align: middle;
            max-width: 100%;
            max-height: 100%;
        }
    }

    &__block {
        padding: 1.5rem;
    }

    &__contact {
        display: inline-flex;
        align-items: center;
        flex-flow: row nowrap;
    }

    &__icon {
        display: block;
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
        background-size: 90%;
        background-position: center;
        background-repeat: no-repeat;

        @include breakpoint(v-mobile) {
            width: 2rem;
            height: 2rem;
        }
    }
}
</style>
