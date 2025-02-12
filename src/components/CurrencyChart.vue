<template>
    <div class="bg-white text-black p-4 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-bold text-center mb-4">Exchange Rate Chart</h2> 
        <select v-model="selectedCurrency" @change="updateChart" class="mb-4 p-2 border rounded">
            <option v-for="currency in currencies" :key="currency" :value="currency">
                {{ currency }}
            </option>
        </select>

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
    },
    methods: {
        updateChart() {
            console.log(`Tanlangan valyuta: ${this.selectedCurrency}`);
        }
    }
};
</script>