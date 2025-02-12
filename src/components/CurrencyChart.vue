<template>
    <div class="bg-white text-black p-4 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-bold text-center mb-4">Real-Time Exchange Rates 💹</h2>
        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <button v-for="currency in currencies" :key="currency" @click="updateChart(currency)"
                class="px-6 py-2 bg-indigo-500 text-white border-2 rounded-lg hover:bg-indigo-700 transition">
                {{ currency }}
            </button>
        </div>

        <div v-if="selectedSymbol">
            <iframe :key="selectedSymbol"
                :src="`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${selectedSymbol}&symbol=${selectedSymbol}&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=light&style=1&timezone=Etc/UTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en`"
                width="100%" height="400" frameborder="0" allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedSymbol: "FX:EURUSD",
            currencies: ["USD", "RUB", "UZS", "EUR", "GBP", "JPY", "AUD"]
        };
    },
    methods: {
        updateChart(currency) {
            if (currency === "USD") {
                this.selectedSymbol = "FX:USDCHF";
            }
            else if (currency === "RUB") {
                this.selectedSymbol = "FX_IDC:RUBUSD";
            }
            else if (currency === "UZS") {
                this.selectedSymbol = "FX_IDC:USDUZS";
            }
            else if (currency === "JPY") {
                this.selectedSymbol = "FX:USDJPY";
            }
            else {
                this.selectedSymbol = `FX:${currency}USD`;
            }
        }
    }
};
</script>