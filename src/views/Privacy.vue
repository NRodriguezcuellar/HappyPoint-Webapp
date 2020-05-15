<template>

    <div class=" section columns">


        <div class="section column is-half privacy-text-container">
            <div class="container" v-for="(section, titles) in privacySections" :key="titles">
                <H1 class="is-title p-md has-text-centered"> {{titles}}</H1>
                <div class="has-text-centered"> {{section}}</div>
            </div>
        </div>


        <div class="section image-container column is-one-fifth">
            <div class="image-wrapper">
                <img src="~@/assets/privacy.svg" alt="privacy icon"/>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Privacy",
        data() {
            return {
                privacySections: {
                    "Data we collect": " lorem ipsum",
                    "Privacy": "lorepm ipsum"
                }

            }
        }
    }
</script>

<style scoped>

    .privacy-text-container {
        flex-direction: column;
    }

    .image-wrapper {
        min-height: 300px;
        min-width: 300px;

    }

    .image-container {
        display: flex;
        justify-content: center;
    }


</style>