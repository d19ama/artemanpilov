<template>
    <div class="about row">
        <div class="col-default-4">
            <div class="about__image margin-bottom--s">
                <img
                    :src="data.image.src"
                    :alt="data.image.alt"
                />
            </div>
            <list no-markers>
                <list-item>
                    <a
                        class="link"
                        :title="data.personal.email"
                        :href="`mailto:${data.personal.email}`"
                    >
                        <i class="icon icon-mail2"></i>
                        {{ data.personal.email }}
                    </a>
                </list-item>
                <list-item>
                    <a
                        class="link"
                        target="_blank"
                        title="Download CV"
                        :href="data.personal.cv"
                    >
                        <i class="icon icon-download"></i>
                        Download CV
                    </a>
                </list-item>
            </list>
        </div>
        <div class="col-default-8">
            <div class="about__info">
                <app-title
                    tag="h3"
                    bordered
                    class="margin-bottom--xs"
                >Personal</app-title>
                <list class="margin-bottom--l">
                    <list-item
                        :key="index"
                        v-for="(item, index) in data.personal.detail"
                    >{{ item }}</list-item>
                </list>
                <app-title
                    tag="h3"
                    bordered
                    class="margin-bottom--xs"
                >Skills</app-title>
                <div class="row">
                    <div
                        :key="key.name"
                        class="col-default-3"
                        v-for="key in data.skills"
                    >
                        <key-indicator
                            :name="key.name"
                            :value="key.experience"
                        />
                    </div>
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

    &__info {

        &-block {

            &+& {
                margin-top: 2rem;
            }
        }
    }

    &__image {
        overflow: hidden;

        img {
            vertical-align: middle;
            max-width: 100%;
        }
    }
}
</style>
