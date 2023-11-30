<script>
export default {
    props: {
        filmObject: Object,
        posterImg: String,
    },
    data() {
        return {
            flags: ["it", "en", "fr", "es", "ja"],
            flag: false
        };
    },
    methods: {
        getImagePath(language) {
            return new URL (`../assets/img/${language}.png`, import.meta.url).href;
        },
        changeTrue() {
            this.flag = true;
        },
        changeFalse() {
            this.flag = false;
        }
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
        hasPoster() {
            return this.filmObject.poster_path !== null
        },
    }
}
</script>

<template>
    <div class="card card-image" @mouseenter="changeTrue()" :class="!flag ? '' : 'd-none'">
        <img v-if="hasPoster" class="poster" :src="getPoster" alt="">
        <h2 v-else class="placeholder">No Poster Avaible</h2>       
    </div>

    <div class="card card-text" :class="!flag ? 'd-none' : ''" @mouseleave="changeFalse()">
        <h3>Titolo: {{ filmObject.title ? filmObject.title : filmObject.name }}</h3>
        <h4>Titolo originale: {{ filmObject.original_title ? filmObject.original_title : filmObject.original_name }}</h4>
        <p v-if="!hasFlag">Lingua: {{ filmObject.original_language }}</p>
        <img class="language" v-else :src="getImagePath(filmObject.original_language)" alt="">
        <div class="votation">
            <p>Voto: {{ roundedNumber }}</p>
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
        <p v-show="filmObject.overview !==''">Sommario: {{ filmObject.overview }}</p>
        
    </div>
</template>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";

.card {
    border: 1px solid black;
    width: 200px;
    height: 350px;
    &.card-image {
        .placeholder {
            text-align: center;
            margin-top: 50px;
        }
    }
    
    &.d-none {
        display: none;
    }
    &.card-text {
        background-color: black;
        color: white;
        padding: 10px;
        width: 200px;
        height: 350px;
        overflow-y: auto;

    }
    .poster {
        width: 200px;
        height: 350px;
        
    }
    .placeholder {
        width: 200px;
    }
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
