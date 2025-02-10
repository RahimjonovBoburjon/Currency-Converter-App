<template>
    <div class="bg-white text-black p-4 rounded-lg shadow-md">
        <div class="flex flex-col gap-4">
            <input v-model="amount" type="number" placeholder="Enter amount"
                class="border border-gray-300 rounded p-2 w-full" />
            <div class="flex justify-between gap-4">
                <select v-model="fromCurrency" class="p-2 border rounded w-full">
                    <option v-for="currency in currencies" :key="currency" :value="currency">
                        {{ currency }}
                    </option>
                </select>
                <select v-model="toCurrency" class="p-2 border rounded w-full">
                    <option v-for="currency in currencies" :key="currency" :value="currency">
                        {{ currency }}
                    </option>
                </select>
            </div>
            <button @click="convertCurrency" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Convert
            </button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            amount: 1,
            fromCurrency: "USD",
            toCurrency: "EUR",
            currencies: ["USD", "EUR", "GBP", "JPY", "AUD", "UZS"],
        };
    },
    methods: {
        async convertCurrency() {
            const apiKey = "7efcab883c9c819466a3468c";
            const url = `https://open.er-api.com/v6/latest/${this.fromCurrency}`;
            const response = await axios.get(url);
            const rate = response.data.rates[this.toCurrency];
            const result = this.amount * rate;
            this.$emit("convert", result, response.data.rates);
        },
    },
};
</script>