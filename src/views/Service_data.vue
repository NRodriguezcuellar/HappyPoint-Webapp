<template>
    <div class="root-container">
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "Service_heatmap",
        mounted() {
            this.$router.push(`/service/${this.$route.params.building}/0`)
        }

    }
</script>

<style scoped>


</style>