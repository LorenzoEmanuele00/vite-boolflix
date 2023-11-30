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
    }
  }
}
</script>
  
<template>
  <h1>BOOLFLIX</h1>
  <AppSearch @search="handleSearch()" />
</template>

<style lang="scss" scoped>

</style>
