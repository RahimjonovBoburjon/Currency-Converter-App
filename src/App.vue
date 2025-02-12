<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-center mb-6">Currency Converter 💱</h1>
      <CurrencySelector @convert="handleConversion" />
      <ConversionResult :result="conversionResult" />
      <CurrencyChart :history="conversionHistory" />
    </div>

    <div class="container mx-auto mt-4">
      <NewsSection />
    </div>

    <footer
      class="bg-gradient-to-r from-purple-400 to-blue-500 text-white text-lg py-4 fixed bottom-0 left-0 right-0 shadow-lg rounded-t-lg">
      <p class="font-semibold text-center">
        Powered by <span class="text-yellow-300"><a href="https://github.com/RahimjonovBoburjon">Bobur</a></span>
      </p>
    </footer>

  </div>
</template>

<script>
import CurrencySelector from "./components/CurrencySelector.vue";
import ConversionResult from "./components/ConversionResult.vue";
import CurrencyChart from "./components/CurrencyChart.vue";
import NewsSection from "./components/NewsSection.vue";

export default {
  components: { CurrencySelector, ConversionResult, CurrencyChart, NewsSection },
  data() {
    return {
      conversionResult: null,
      conversionHistory: [],
    };
  },
  methods: {
    handleConversion(result, history) {
      this.conversionResult = result;
      this.conversionHistory = history;
    },
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;
  text-align: center;
  font-size: 1.125rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

footer p {
  margin: 0;
}

footer span {
  font-weight: bold;
  color: #e2fb24;
}
</style>