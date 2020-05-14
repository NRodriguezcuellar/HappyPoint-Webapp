<template>
    <section class="section">
        <div class="container level">
            <h1 class="level-item value-prop easy-font has-text-weight-semibold has-text-centered">
                {{text}}
            </h1>
        </div>
    </section>

</template>

<script>
    export default {
        name: "valueProp",
        props: {
            text: String
        }
    }
</script>

<style scoped>
    .value-prop {
        font-size: 40px;
    }

</style>