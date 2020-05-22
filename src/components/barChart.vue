<template>
    <div class="small">
        <bar-chart :chart-data="values" :options="options" :styles="style"></bar-chart>
    </div>
</template>

<script>
    import barChart from "../assets/barChart.js";

    export default {
        components: {
            barChart
        },
        data: function () {
            return {
                values: {
                    labels: ['Floor 1', 'Floor 2'],
                    datasets: [
                        {
                            label: 'Busyness in %',
                            backgroundColor: ['rgba(255,0,0,0.5)','rgba(0,255,229,0.5)' ],
                            borderColor: ['rgba(255,0,0,1)','rgba(0,255,229,1)'],
                            data: [20, 50]
                        }

                    ]
                },
                style: {
                    position: 'relative',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    maxWidth: '300px'
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }

                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>