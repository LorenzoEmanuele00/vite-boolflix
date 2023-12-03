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
            <h2 v-if="store.popularF" class="sec">FILM POPOLARI</h2>
            <h2 v-else class="sec">FILM</h2>
            <section class="scroll">
                <h2 class="load" v-if="store.loadingF"> BOOLFLIX FILM LOADING...</h2>
                <div v-else class="row">
                    <h2 v-if="store.tvSeries.length === 0">NESSUN FILM TROVATO</h2>
                    <div v-else class="col" v-for="film in store.films">
                        <AppCard :filmObject="film" :posterImg="store.baseImageURL"/>
                    </div>
                </div>
            </section>
            <!-- SERIE CARDS -->
            <h2 v-if="store.popularS" class="sec">SERIE TV POPOLARI</h2>
            <h2 v-else class="sec">SERIE TV</h2>
            <section class="scroll">
                <h2 class="load" v-if="store.loadingS"> BOOLFLIX SERIE TV LOADING...</h2>
                <div v-else class="row">
                    <h2 v-if="store.tvSeries.length === 0">NESSUNA SERIE TROVATA</h2>
                    <div v-else class="col" v-for="serie in store.tvSeries">
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
        background-color: rgb(63, 63, 63);
        height: calc(100% - 50px);
        .sec {
            color: white;
            padding: 10px 20px;
            height: 50px;
        }
        .scroll {
            overflow-x: auto;
            height: calc( (100% - 100px ) / 2);
            padding: 0 10px 10px 10px;
            .load {
                color: white;
                padding: 50px;
            }
            .row {
                height: 100%;
                display: flex;
                gap: 5px;
                .col {
                    height: 100%;
                }
            }
        }
    }
}
</style>
