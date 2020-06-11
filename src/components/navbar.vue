<template>
    <nav class="navbar is-spaced " role="navigation" aria-label="main navigation">
        <div class="navbar-brand easy-font">
            <router-link class="navbar-item p-sm" to="/">
                <img
                        src="img/logo.png"
                        alt="Happy point logo"
                        class="image is-32x32"
                />
                <h2>
                    HappyPoint
                </h2>
            </router-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" id="navburger" aria-expanded="false"
               @click="navbarToggle" :class="{ 'is-active': toggled}">
                <span aria-hidden="true" class="is-hp-green"></span>
                <span aria-hidden="true" class="is-hp-green"></span>
                <span aria-hidden="true" class="is-hp-green"></span>
            </a>
        </div>

        <div id="navbar" class="navbar-menu " :class="{ 'is-active': toggled}">
            <div class="navbar-end easy-font">
                <router-link
                        class="navbar-item" to="/service">
                    Search
                </router-link>
                <router-link
                        class="navbar-item" to="/about">
                    About us
                </router-link>
                <router-link
                        class="navbar-item" to="/privacy">
                    Privacy
                </router-link>


            </div>

        </div>
    </nav>

</template>

<script>
    export default {
        name: "navbar",
        data: function () {
            return {
                toggled: false
            }
        },
        methods: {
            navbarToggle() {
                this.toggled = !this.toggled
            }
        },
        watch: {
            $route() {
                this.toggled = false
            }
        }
    }
</script>

<style scoped>

</style>