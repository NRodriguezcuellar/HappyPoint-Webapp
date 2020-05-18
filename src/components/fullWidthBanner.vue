<template>
    <section class="">

        <!-- Start Carousel -->
        <VueSlickCarousel :arrows="true" :dots="true" class="carousel">

            <div class="carousel-item">
                <div class="is-column has-text-centered has-bg-blue">
                    <div class="has-text-centered has-text-white carousel-font-size easy-font">Heatmaps</div>
                    <div class="container is-carousel-slider-bg has-text-centered slider-1">
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class=" is-column has-bg-blue">
                    <div class="has-text-centered has-text-white carousel-font-size easy-font">Overviews</div>
                    <div class="container is-carousel-slider-bg has-text-centered slider-2">
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="is-column has-bg-blue">
                    <div class="has-text-centered has-text-white carousel-font-size easy-font">Favorites</div>
                    <div class="container is-carousel-slider-bg has-text-centered slider-3">
                    </div>
                </div>
            </div>
        </VueSlickCarousel>
        <!-- End Carousel -->

    </section>

</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: "fullWidthBanner",
        components: {
            VueSlickCarousel

        }
    }
</script>

<style scoped>
    .slider-1 {
        background-image: url("~@/assets/intro_slider_1.png");

    }

    .slider-2 {
        background-image: url("~@/assets/intro_slider_2.png");

    }

    .slider-3 {
        background-image: url("~@/assets/intro_slider_3.png");

    }




    .carousel-font-size {
        font-size: 30px;

    }


</style>