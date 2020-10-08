<template>
    <div class="content">
        <heading
            brackets
            class="margin-bottom--xl"
        >CV</heading>
        <div class="page-cv row">
            <div class="col-default-4">
                <div class="page-cv__image">
                    <img
                        :src="data.photo"
                        :alt="`${data.firstName} ${data.lastName}`"
                    />
                </div>
                <heading
                    tag="h4"
                >{{ data.firstName }} {{ data.lastName }}</heading>
            </div>
            <div class="col-default-8">
                <heading
                    tag="h2"
                    brackets
                    class="margin-bottom--s"
                >Summary</heading>
                <text-block
                    italic
                    :text="data.summary"
                    class="margin-bottom--s"
                />
                <heading
                    tag="h2"
                    brackets
                    class="margin-bottom--s"
                >Skills</heading>
                <list>
                    <list-item
                        :key="index"
                        v-for="(item, index) in data.skills"
                    >{{ item }}</list-item>
                </list>
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

    &__info {

        &+& {
            margin-top: 2rem;
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
