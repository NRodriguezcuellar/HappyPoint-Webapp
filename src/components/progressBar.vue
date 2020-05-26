<template>
    <div id="progress-bar-root">
        <div class="progress-bar-parent-container">
            <div><h1 class="is-title progress-title has-text-white">Overview</h1></div>
            <div class="progress-container">
                <div class="progress-element">
                    <h2 class="progress-floor-name">Floor 1</h2>
                    <progress class="progress is-primary" value="50" max="100"></progress>
                    <div class="progress-percentage">50%</div>
                </div>
                <div class="progress-element">
                    <h2 class="progress-floor-name">Floor 2</h2>
                    <progress class="progress is-primary" value="50" max="100"></progress>
                    <div class="progress-percentage">50%</div>
                </div>
                <div class="progress-element">
                    <h2 class="progress-floor-name">Floor 3</h2>
                    <progress class="progress is-primary" value="50" max="100"></progress>
                    <div class="progress-percentage">50%</div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "progressBar"
    }
</script>

<style scoped>
    .progress-percentage {
        padding-bottom: 35px;
        padding-left: 10px;
        color: white;
    }
    .progress-floor-name {
        min-width: 80px;
        padding-bottom: 35px;
        padding-left: 10px;
        padding-right: 10px;
        color: white;
    }

    .progress-element {
        display: flex;
    }

    .progress-bar-parent-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 1rem;
        border-radius: 10px;
    }

    .progress-title {
        padding: 1rem;
    }

    .progress-container {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;


    }

    .progress {
        min-width: 250px;
    }

</style>