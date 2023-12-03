<script>
import AppSearch from "./AppSearch.vue";
import { store } from "../store.js";
import axios from "axios";
export default {
  components: {
    AppSearch,
  },
  data() {
    return {
      store
    };
  },
  created() {
    this.searchPopular();
  },
  methods: {
    handleSearch() {
      const params= {
        api_key: "13a00727a823b611cbc82074c48a77bb",
        query: this.store.searchName,
      }

      // REQUEST FOR MOVIE
      axios
        .get(`${this.store.apiURL}/search/movie`, {params})
        .then((resp) => {
          this.store.films = resp.data.results;
          console.log(this.store.films);
        })

      // REQUEST FOR TV SERIES
      axios
        .get(`${this.store.apiURL}/search/tv`, {params})
        .then((resp) => {
          this.store.tvSeries = resp.data.results;
          console.log(this.store.tvSeries);
        })
    },
    searchPopular() {
      const params= {
        api_key: "13a00727a823b611cbc82074c48a77bb",
      }

      // REQUEST FOR MOVIE
      axios
        .get(`${this.store.apiURL}/movie/popular`, {params})
        .then((resp) => {
          this.store.films = resp.data.results;
          console.log(this.store.films);
        })

      // REQUEST FOR TV SERIES
      axios
        .get(`${this.store.apiURL}/tv/popular`, {params})
        .then((resp) => {
          this.store.tvSeries = resp.data.results;
          console.log(this.store.tvSeries);
        })
    }
  }
}
</script>
  
<template>
  <div class="header">
    <h1>BOOLFLIX</h1>
    <AppSearch @search="handleSearch()" />
  </div>
</template>

<style lang="scss" scoped>
  .header {
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 50px;
    h1 {
      color: red;
    }
  }
</style>
