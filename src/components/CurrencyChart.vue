<template>
    <div class="bg-white text-black p-4 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-bold text-center mb-4">Exchange Rate History</h2>
        <canvas id="chart"></canvas>
    </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
    props: {
        history: Object,
    },
    mounted() {
        const ctx = document.getElementById("chart").getContext("2d");
        new Chart(ctx, {
            type: "line",
            data: {
                labels: Object.keys(this.history),
                datasets: [
                    {
                        label: "Exchange Rate",
                        data: Object.values(this.history),
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 2,
                        fill: false,
                    },
                ],
            },
        });
    },
};
</script>