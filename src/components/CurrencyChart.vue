<template>
    <div class="bg-white text-black p-4 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-bold text-center mb-4">Exchange Rate Chart</h2>
        <div class="flex justify-center gap-2 mb-4">
            <button v-for="currency in currencies" :key="currency" @click="selectedCurrency = currency"
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                {{ currency }}
            </button>
        </div>

        <div v-if="selectedCurrency">
            <iframe :key="selectedCurrency"
                :src="`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${selectedCurrency}&symbol=FX:${selectedCurrency}USD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=light&style=1&timezone=Etc/UTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en`"
                width="100%" height="400" frameborder="0" allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCurrency: "USD",
            currencies: ["USD", "RUB", "UZS", "EUR", "GBP", "JPY", "AUD"]
        };
    }
};
</script>