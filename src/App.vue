<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-center mb-6">Currency Converter 💱</h1>
      <CurrencySelector @convert="handleConversion" />
      <ConversionResult :result="conversionResult" />
      <CurrencyChart :history="conversionHistory" />
    </div>
  </div>
</template>

<script>
import CurrencySelector from "./components/CurrencySelector.vue";
import ConversionResult from "./components/ConversionResult.vue";
import CurrencyChart from "./components/CurrencyChart.vue";

export default {
  components: { CurrencySelector, ConversionResult, CurrencyChart },
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

<style scoped></style>