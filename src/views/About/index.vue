<template>
    <div class="content">
        <app-title
            comment
        >about</app-title>
        <div class="about">
            <div class="about__image">
                <img
                    :src="data.image.src"
                    :alt="data.image.alt"
                />
            </div>
            <div class="about__info">
                <div
                    :key="index"
                    class="about__info-block"
                    v-for="(item, index) in data.info"
                >
                    <app-title
                        tag="h2"
                    >{{ item.title }}</app-title>
                    <ul class="ul-list">
                        <li
                            :key="index2"
                            v-for="(data, index2) in item.data"
                        >{{ data }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    data () {
        return {
            data: this.$root.app.pages.about
        }
    }
}
</script>

<style lang="scss">
.about {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;

    &__info {
        width: 50%;

        @include breakpoint(mobile) {
            width: 100%;
        }

        @include breakpoint(v-mobile) {
            padding: 0 1rem;
        }

        &-block {

            &+& {
                margin-top: 2rem;
            }
        }
    }

    &__image {
        width: calc(50% - 3rem);
        overflow: hidden;

        @include breakpoint(mobile) {
            width: 100%;
            margin-bottom: 3rem;
        }

        @include breakpoint(v-mobile) {
            margin-bottom: 1rem;
        }

        img {
            vertical-align: middle;
            max-width: 100%;
        }
    }
}
</style>
