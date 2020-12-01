<template>
    <div class="about row">
        <div class="col-default-4 col-v-mobile-12">
            <div class="about__image margin-bottom--s">
                <img
                    :src="data.image.src"
                    :alt="data.image.alt"
                />
            </div>
            <list
                no-markers
                class="margin-bottom--s"
            >
                <list-item>
                    <a
                        class="link"
                        :title="data.email"
                        :href="`mailto:${data.email}`"
                    >
                        <i class="icon icon-mail2"></i>
                        {{ data.email }}
                    </a>
                </list-item>
                <list-item>
                    <a
                        class="link"
                        target="_blank"
                        title="Download CV"
                        :href="data.cv"
                    >
                        <i class="icon icon-download"></i>
                        Download CV
                    </a>
                </list-item>
            </list>
        </div>
        <div class="col-default-8 col-v-mobile-12">
            <div class="about__info margin-bottom--l">
                <app-title
                    tag="h1"
                    bordered
                    class="margin-bottom--xs"
                >{{ data.name }}</app-title>
                <app-title
                    tag="h3"
                    weight="normal"
                    class="margin-bottom--xs"
                >{{ data.experience }}</app-title>
                <app-title
                    tag="h4"
                    weight="normal"
                >{{ data.location }}</app-title>
            </div>
            <div class="about__info margin-bottom--l">
                <app-title
                    tag="h3"
                    bordered
                    class="margin-bottom--xs"
                >Skills</app-title>
                <div class="row">
                    <div
                        :key="key.name"
                        v-for="key in data.skills"
                        class="col-default-3 col-tablet-4 col-mobile-6"
                    >
                        <key-indicator
                            :name="key.name"
                            :value="key.experience"
                        />
                    </div>
                </div>
            </div>
            <div class="about__info margin-bottom--l">
                <app-title
                    tag="h3"
                    bordered
                    class="margin-bottom--xs"
                >Tools</app-title>
                <div class="row">
                    <div
                        :key="key.name"
                        v-for="key in data.tools"
                        class="col-default-3 col-tablet-4 col-mobile-6"
                    >
                        <key-indicator
                            :name="key.name"
                        />
                    </div>
                </div>
            </div>
            <div class="about__info margin-bottom--l">
                <app-title
                    tag="h3"
                    bordered
                    class="margin-bottom--xs"
                >Hobby</app-title>
                <div class="row">
                    <div
                        :key="key.name"
                        v-for="key in data.hobby"
                        class="col-default-3 col-tablet-4 col-mobile-6"
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
