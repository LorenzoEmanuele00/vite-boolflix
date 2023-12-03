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
            return Math.ceil(this.filmObject.vote_average / 2) ;
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
        <h2 v-else class="placeholder">NO POSTER AVAIBLE</h2>       
    </div>

    <div class="card card-text" :class="!flag ? 'd-none' : ''" @mouseleave="changeFalse()">
        <p><span class="text-before">TITOLO: </span><br> {{ filmObject.title ? filmObject.title : filmObject.name }}</p>
        <p><span class="text-before">TITOLO ORIGINALE: </span><br> {{ filmObject.original_title ? filmObject.original_title : filmObject.original_name }}</p>
        <p v-if="!hasFlag"><span class="text-before">LINGUA: </span> {{ filmObject.original_language }}</p>
        <img class="language" v-else :src="getImagePath(filmObject.original_language)" alt="">
        <div class="votation">
            <p><span class="text-before">VOTO: </span> {{ roundedNumber }}</p>
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
        <p v-show="filmObject.overview !==''"><span class="text-before">SOMMARIO: </span><br> {{ filmObject.overview }}</p>
        
    </div>
</template>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";

.card {
    height: 100%;
    aspect-ratio: 1.5 / 2;
    &.card-image {
        .poster {
            display: block;
            height: 100%;
            aspect-ratio: 1.5 / 2;
        }
        .placeholder {
            height: 100%;
            aspect-ratio: 1.5 / 2;
            text-align: center;
            padding-top: 50px;
            background-color: white;
        }
    }
    
    &.d-none {
        display: none;
    }
    &.card-text {
        background-color: black;
        color: white;
        padding: 10px;
        overflow-y: auto;
        p {
            padding: 5px;
        }
        .text-before {
            font-weight: bold;
        }
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
