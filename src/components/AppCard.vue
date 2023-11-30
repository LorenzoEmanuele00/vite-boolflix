<script>
export default {
    props: {
        filmObject: Object,
        posterImg: String,
    },
    data() {
        return {
            flags: ["it", "en", "fr", "es", "ja"]
        };
    },
    methods: {
        getImagePath(language) {
            return new URL (`../assets/img/${language}.png`, import.meta.url).href;
        },
    },
    computed: {
        getPoster() {
            return `${this.posterImg}${this.filmObject.poster_path}`;
        },
        hasFlag() {
            return this.flags.includes(this.filmObject.original_language);
        },
        roundedNumber() {
            return Math.round(this.filmObject.vote_average / 2) ;
        },
    }
}
</script>

<template>
    
    <div class="card">
        <img class="poster" :src="getPoster" alt="">
        <h3>{{ filmObject.title ? filmObject.title : filmObject.name }}</h3>
        <h4>{{ filmObject.original_title ? filmObject.original_title : filmObject.original_name }}</h4>
        <p v-if="!hasFlag">{{ filmObject.original_language }}</p>
        <img class="language" v-else :src="getImagePath(filmObject.original_language)" alt="">
        <div class="votation">
            <p>{{ roundedNumber }}:</p>
            <i v-if="roundedNumber < 1" class="fa-regular fa-star"></i>
            <i v-else class="fa-solid fa-star"></i>
            <i v-if="roundedNumber < 2" class="fa-regular fa-star"></i>
            <i v-else class="fa-solid fa-star"></i>
            <i v-if="roundedNumber < 3" class="fa-regular fa-star"></i>
            <i v-else class="fa-solid fa-star"></i>
            <i v-if="roundedNumber < 4" class="fa-regular fa-star"></i>
            <i v-else class="fa-solid fa-star"></i>
            <i v-if="roundedNumber < 5" class="fa-regular fa-star"></i>
            <i v-else class="fa-solid fa-star"></i>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";
.poster {
    width: 200px;
}
.card {
    border: 1px solid black;
    .language {
        width: 80px;
        aspect-ratio: 2 / 1;
        border: 1px solid black;
        border-radius: 10px;
    }
    .votation {
        display: flex;
    }
}
</style>
