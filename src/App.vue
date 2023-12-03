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
            <h2 v-if="store.searchName != ''" class="sec">FILM</h2>
            <h2 v-else class="sec">FILM POPOLARI</h2>
            <section class="scroll">
                <div class="row">
                    <div class="col" v-for="film in store.films">
                        <AppCard :filmObject="film" :posterImg="store.baseImageURL"/>
                    </div>
                </div>
            </section>
            <!-- SERIE CARDS -->
            <h2 v-if="store.searchName != ''" class="sec">SERIE TV</h2>
            <h2 v-else class="sec">SERIE TV POPOLARI</h2>
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
