<script >
import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";
import { store } from "./store.js";
export default {
    components: {
        AppHeader,
        AppCard,
    },
    data() {
        return {
            store,
        };
    },

}
</script>

<template>
    <AppHeader />
    <!-- FILM CARDS -->
    <section>
        <div v-for="film in store.films">
            <AppCard :filmObject="film" :posterImg="store.baseImageURL"/>
        </div>
    </section>
    <!-- SERIE CARDS -->
    <section>
        <div v-for="serie in store.tvSeries">
            <AppCard :filmObject="serie" :posterImg="store.baseImageURL"/>
        </div>
    </section>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
