<template>
    <section class="">
      <div class="section"></div>
        <div class="columns is-centered">
            <div class="column section">
                <h1 class="easy-font is-title has-text-weight-semibold has-text-centered"> About us </h1>
            </div>
            <div class="column section">
                <vue-slick-carousel class="about-us-carousel" :dots="true">
                    <div class="about-us-column has-bg-blue">
                        <div class="column has-text-centered has-text-white carousel-font-size easy-font">The Mission
                        </div>
                        <div class="column has-text-white has-text-centered">Coming soon</div>
                    </div>
                    <div class="about-us-column has-bg-blue">
                        <div class="column has-text-centered has-text-white carousel-font-size easy-font">The Team
                        </div>
                        <div class="column has-text-white has-text-centered">Coming soon</div>
                    </div>
                </vue-slick-carousel>
            </div>
        </div>
    </section>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


    export default {
        name: "About-us",
        components: {
            VueSlickCarousel
        }

    }

</script>

<style>
    .about-us-column {

    }

</style>