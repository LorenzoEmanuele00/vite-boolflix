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
      axios
        .get(`${this.store.apiURL}/search/movie`, {
          params: {
            api_key: "13a00727a823b611cbc82074c48a77bb",
            query: this.store.searchName,
          },
        })
        .then((resp) => {
          this.store.films = resp.data.results;
          console.log(resp);
          console.log(this.store.searchName);
        })
    }
  }
}
</script>
  
<template>
  <AppSearch @searchTitle="handleSearch()" />
</template>

<style lang="scss" scoped>

</style>
