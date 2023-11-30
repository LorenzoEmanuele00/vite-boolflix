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
    <div class="wrapper">
        <AppHeader />
        <div class="card-container">
            <!-- FILM CARDS -->
            <section class="scroll">
                <div class="row">
                    <div class="col" v-for="film in store.films">
                        <AppCard :filmObject="film" :posterImg="store.baseImageURL"/>
                    </div>
                </div>
            </section>
            <!-- SERIE CARDS -->
            <section class="scroll">
                <div class="row">
                    <div class="col" v-for="serie in store.tvSeries">
                        <AppCard :filmObject="serie" :posterImg="store.baseImageURL"/>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss">
@use "./style/general.scss";
.wrapper {
    width: 100%;
    height: 100vh;
    .card-container {
        background-color: grey;
        height: calc(100% - 50px);
        .scroll {
            overflow-x: auto;
            height: calc(100% / 2);
            .row {
                display: flex;
                .col {
                    display: flex;
                }
            }
        }
    }
}
</style>
