<template>
    <div class="bg-white text-black p-4 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-bold text-center mb-4">Exchange Rate Chart</h2>
        <div id="tradingview-widget" class="h-96"></div>
    </div>
</template>

<script>
export default {
    props: {
        symbol: {
            type: String,
            default: "USD/EUR",
        },
    },
    mounted() {
        if (!window.TradingView) {
            console.error("TradingView script yuklanmagan!");
            return;
        }

        new window.TradingView.widget({
            container_id: "tradingview-widget",
            width: "100%",
            height: "400px",
            symbol: this.symbol.replace("/", ""),
            interval: "D", 
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_side_toolbar: true,
        });
    },
};
</script>

<style scoped>
#tradingview-widget {
    min-height: 400px;
}
</style>