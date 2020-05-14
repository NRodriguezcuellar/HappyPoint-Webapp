<template>
    <div class=" columns">
        <div class=" section column">
            <div class="columns">
                <div class="column" v-for="(section, titles) in privacySections" :key="titles">
                    <H1 class="is-title p-md has-text-centered"> {{titles}}</H1>
                    <div class="has-text-centered"> {{section}}</div>
                </div>
            </div>
        </div>
        <div class="column image-wrapper">
            <div>

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
    .columns {
        flex-direction: column;
    }
    .image-wrapper {
        min-height: 800px;
        min-width: 40vw;
    }

</style>