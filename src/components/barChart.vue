<template>
    <div class="chart-container">
        <canvas width="300px" height="540px" id="overview-chart"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js'

    export default {
        components: {},
        methods: {
            createChart: function (chartId, chartData) {
                const ctx = document.getElementById(chartId);
                new Chart(ctx, {
                    type: this.typeOfChart,
                    data: chartData,
                    options: this.options,
                });


            }

        },
        data: function () {
            return {
                values: {
                    labels: ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5'],
                    datasets: [
                        {
                            label: 'Bar dataset',
                            backgroundColor: 'rgba(74,144,226,0.59)',
                            data: [20, 50, 62, 70, 23],
                            borderColor: "rgba(74,144,226,1)",
                            borderWidth: 2
                        }

                    ]
                },
                options: {
                    legend: {
                        display: false
                    },

                    scales: {
                        xAxes: [{

                            ticks: {
                                beginAtZero: true,
                                max: 100

                            },
                            gridLines: {
                                display: false,
                                zeroLineColor: "#7ED321",
                                lineWidth: 2
                            },
                            scaleLabel: {
                                display: true,
                                labelString: "Busyness in %"
                            }

                        }],
                        yAxes: [{
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }


                        }]
                    }

                },
                typeOfChart: 'horizontalBar'
            }
        },

        mounted() {
            this.createChart('overview-chart', this.values)

        }


    }
</script>

<style scoped>
    .chart-container {
        position: relative;
        background-color: white;
        border-radius: 10px;
        padding: 10px;

    }

</style>