<template>
    <div class="content padding-bottom--xl">
        <heading
            brackets
            class="margin-bottom--xl"
        >CV</heading>
        <div class="page-cv row">
            <div class="col-default-3 col-mobile-4 col-v-mobile-12">
                <div class="page-cv__image">
                    <img
                        :src="data.photo"
                        :alt="`${data.firstName} ${data.lastName}`"
                    />
                </div>
                <heading
                    tag="h2"
                    class="margin-bottom--s"
                >{{ data.firstName }} {{ data.lastName }}</heading>
                <list>
                    <list-item
                        :key="index"
                        v-for="(item, index) in data.hobby"
                    >{{ item }}</list-item>
                </list>
            </div>
            <div class="col-default-9 col-mobile-8 col-v-mobile-12">
                <section class="page-cv__block">
                    <heading
                        tag="h3"
                        brackets
                        bordered
                        class="margin-bottom--s"
                    >Summary</heading>
                    <text-block
                        italic
                        :text="data.summary"
                    />
                </section>
                <section class="page-cv__block">
                    <heading
                        tag="h3"
                        brackets
                        bordered
                        class="margin-bottom--s"
                    >Skills</heading>
                    <div class="row">
                        <div
                            :key="key.name"
                            class="col-default-4"
                            v-for="key in data.skills"
                        >
                            <key-indicator
                                :name="key.name"
                                :value="key.experience"
                            />
                        </div>
                    </div>
                </section>
                <section class="page-cv__block">
                    <heading
                        tag="h3"
                        brackets
                        bordered
                        class="margin-bottom--s"
                    >Experience</heading>
                </section>
                <section class="page-cv__block">
                    <heading
                        tag="h3"
                        brackets
                        bordered
                        class="margin-bottom--s"
                    >Education</heading>
                    <info-block
                        :third="data.education.period"
                        :second="data.education.institution"
                        :first="data.education.specification"
                    />
                </section>
                <section class="page-cv__block">
                    <heading
                        tag="h3"
                        brackets
                        bordered
                        class="margin-bottom--s"
                    >Conferences</heading>
                    <info-block
                        :key="index"
                        :third="item.year"
                        :first="item.name"
                        :second="item.location"
                        v-for="(item, index) in data.conferences"
                    />
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-cv',
    data() {
        return {
            data: this.$root.app.components.cv
        }
    }
}
</script>

<style lang="scss">
.page-cv {

    &__block {

        &+& {
            margin-top: 5rem;
        }
    }

    &__image {
        width: 100%;
        overflow: hidden;
        margin-bottom: 1rem;

        @include breakpoint(mobile) {
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

    &__name {
        font-weight: 700;
        font-size: 1.25rem;
    }
}
</style>
