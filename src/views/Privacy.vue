<template>
    <div>

        <div class=" section columns">


            <div class="section column is-half privacy-text-container">
                 <div><h1 class="easy-font is-title has-text-weight-semibold has-text-centered"> Privacy </h1></div>
                <div class="container" v-for="(section, titles) in privacySections" :key="titles">
                    <H2 class=" p-md has-text-centered"> {{titles}}</H2>
                    <div class="content-text-container">
                        <div class="text-content" v-html="section"></div>
                    </div>
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
    </div>

</template>

<script>
    export default {
        name: "Privacy",
        data() {
            return {
                privacySections: {
                    "Data we collect": " <p>To be able to offer our services we process data. This data is considered <b>confidential</b> and is treated with care.</p>" +
                        "<br> We primarily only <b>process</b> data, if we store data it is not the raw data we collect from the users, it is statistics data about the use of our service and trends that develop so we may further improve the service.",
                    "Privacy": "We value your privacy and also understand that you may not want us to collect data about you, in that case you can opt-out of the service by going to the <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>following page</a>"
                }

            }
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 40px;
    }
    h2 {
        font-size: 25px;
    }
    .content-text-container {
        display: flex;
        justify-content: center;
    }

    .text-content {
        max-width: 450px;
    }

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
        justify-content: flex-start;
        padding-left: 50px;

    }


</style>