<script>
export default {
    props: {
        filmObject: Object,
    },
    data() {
        return {
            
        };
    },
}
</script>

<template>
    <div class="card">
        <h2>{{ filmObject.title ? filmObject.title : filmObject.name }}</h2>
        <h3>{{ filmObject.original_title ? filmObject.original_title : filmObject.original_name }}</h3>
        <p>{{ filmObject.original_language }}</p>
        <p>{{ filmObject.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>
