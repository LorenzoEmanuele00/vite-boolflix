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
    <label for="searchbar">Cerca il tuo film o serie tv </label>
    <input @keyup-enter="$emit('search')" id="searchbar" type="text" v-model="store.searchName">
    <button @click="$emit('search')">Cerca</button>
  </div>
</template>

<style lang="scss" scoped>
div {
  color: white;
}
</style>
