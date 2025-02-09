<template>
    <div class="min-h-screen bg-gradient-to-r from-green-400 to-teal-500 text-white p-4">
        <div class="container mx-auto">
            <h1 class="text-3xl font-bold text-center mb-6">Settings ⚙️</h1>
            <div class="flex flex-col gap-4">
                <label for="currency" class="text-xl">Select Your Base Currency</label>
                <select v-model="selectedCurrency" id="currency" class="p-2 rounded">
                    <option v-for="currency in currencies" :key="currency" :value="currency">
                        {{ currency }}
                    </option>
                </select>
                <button @click="saveSettings" class="bg-green-600 text-white p-2 rounded hover:bg-green-700 mt-4">
                    Save Settings
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCurrency: "USD",
            currencies: ["USD", "EUR", "GBP", "JPY", "AUD"],
        };
    },
    methods: {
        saveSettings() {
            localStorage.setItem("baseCurrency", this.selectedCurrency);
            this.$router.push({ name: "Home" });
        },
    },
};
</script>

<style scoped></style>