import { reactive } from "vue";

export const store = reactive({
    films: [],
    tvSeries: [],
    searchName: "",
    popularF: true,
    popularS: true,
    loadingF: false,
    loadingS: false,

    baseImageURL: "https://image.tmdb.org/t/p/original",

    // API for search general
    apiURL: "https://api.themoviedb.org/3",
    // API key for autorization
    apikey: "13a00727a823b611cbc82074c48a77bb",
})