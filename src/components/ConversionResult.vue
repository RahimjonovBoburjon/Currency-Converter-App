<template>
    <div v-if="result" class="bg-green-500 p-4 rounded-lg shadow-md text-center mt-4">
        <p class="text-2xl font-bold">Converted Amount:</p>
        <p class="text-4xl">{{ result.toFixed(2) }}</p>
    </div>
</template>

<script>
export default {
    props: {
        result: Number,
    },
};
</script>