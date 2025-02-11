<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold text-center mb-6">Currency Exchange App</h1>
        <TradingChart symbol="USD/EUR" />
    </div>
</template>

<script>
import TradingChart from "../components/CurrencyChart.vue";

export default {
    components: {
        TradingChart,
    },
};
</script>