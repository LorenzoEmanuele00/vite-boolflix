<script>
import { store } from "../store.js";
 export default {
    data() {
        return {
            store
        };
    },
    
}
</script>

<template>
  <div>
    <label for="searchbar">Cerca il tuo film</label>
    <input id="searchbar" type="text" v-model="store.searchName">
  </div>
  <button @click="$emit('search')">Cerca</button>
</template>

<style lang="scss" scoped>

</style>
