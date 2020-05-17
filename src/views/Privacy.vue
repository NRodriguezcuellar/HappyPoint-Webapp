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
                <div class="large-icon"><img src="~@/assets/securityLarge.png" alt="privacy icon"/></div>
                <div class="medium-icon"><img src="~@/assets/securityMedium.png" alt="privacy icon"/></div>
                <div class="small-icon"><img src="~@/assets/securitySmall.png" alt="privacy icon"/></div>
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

    .image-wrapper {
        min-height: 300px;
        min-width: 300px;
    }

    .large-icon {
        display: flex;
        justify-content: flex-start;
        padding: 5px;
    }

    .medium-icon {
        justify-content: flex-end;
        display: flex;
    }
    .small-icon {
        display: flex;
        justify-content: start;
        padding-left: 50px;

    }




</style>