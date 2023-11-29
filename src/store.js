import { reactive } from "vue";

export const store = reactive({
    films: [],
    tvSeries: [],
    searchName: "",

    // API for search general
    apiURL: "https://api.themoviedb.org/3",
    // API key for autorization
    apikey: "13a00727a823b611cbc82074c48a77bb",
})