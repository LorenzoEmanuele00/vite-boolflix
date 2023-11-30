<script>
export default {
    props: {
        filmObject: Object,
    },
    data() {
        return {
            flags: ["it", "en", "fr", "es", "ja"]
        };
    },
    methods: {
        getImagePath(language) {
            return new URL (`../assets/img/${language}.png`, import.meta.url).href;
        }
    },
    computed: {
        hasFlag() {
            return this.flags.includes(this.filmObject.original_language);
        },
        roundedNumber() {
            return Math.floor(this.filmObject.vote_average);
        },
    }
}
</script>

<template>
    <div class="card">
        <h2>{{ filmObject.title ? filmObject.title : filmObject.name }}</h2>
        <h3>{{ filmObject.original_title ? filmObject.original_title : filmObject.original_name }}</h3>
        <p v-if="!hasFlag">{{ filmObject.original_language }}</p>
        <img v-else :src="getImagePath(filmObject.original_language)" alt="">
        <p>{{ roundedNumber }}</p>
    </div>
</template>

<style lang="scss" scoped>
    img {
        width: 80px;
        aspect-ratio: 2 / 1;
        border: 1px solid black;
        border-radius: 10px;
    }
</style>
