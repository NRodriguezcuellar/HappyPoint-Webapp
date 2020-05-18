<template>
    <section class="section is-flex is-vertical">
        <div class="container easy-font is-title ">
            <h1 class="p-b-xl has-text-centered">{{text}}</h1>

            <div class="container level">
                <div class="level-item ">
                    <button class="button is-info download-app-button" @click="Soon()" disabled>App Store <span
                            class="p-l-sm"><i
                            class=" fab fa-apple"></i></span>
                    </button>
                </div>
                <div class="level-item ">
                    <button class="button is-success download-app-button" @click="Soon()" disabled>Play Store <span
                            class="p-l-sm" ><i
                            class="fab fa-android"></i></span></button>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "downloadSection",
        methods: {
            Soon() {
                alert('Soon');
            }
        },
        props: {
            text: String
        }
    }
</script>

<style scoped>

    .download-app-button {
        min-width: 130px;
    }

</style>