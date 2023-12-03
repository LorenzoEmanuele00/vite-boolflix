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
    <label for="searchbar">CERCA FILM O SERIE TV </label>
    <input @keyup-enter="$emit('search')" id="searchbar" type="text" v-model="store.searchName">
    <i @click="$emit('search')" class="fa-solid fa-magnifying-glass"></i>
  </div>
</template>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";
div {
  color: white;
  i {
    padding-left: 5px;
  }
}
</style>
