<template>
    <div id="app">
        <navbar></navbar>
        <router-view/>
        <footer-component></footer-component>
    </div>
</template>

<style>
    #app {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
</style>

<script>
    import "./assets/happypoint.css"
    import 'bulma/css/bulma.min.css'
    import Navbar from "./components/navbar";
    import FooterComponent from "./components/footerComponent";

    export default {
        components: {FooterComponent, Navbar},
        data() {
            return {
                baseUrl: "http://localhost:8080"
            }
        }
    }
</script>

