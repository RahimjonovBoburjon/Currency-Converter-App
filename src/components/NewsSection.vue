<template>
    <div class="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl">
        <div class="container mx-auto">
            <h1 class="text-4xl font-bold text-center mb-6">Currency News 📰</h1>

            <div v-if="loading" class="text-center text-lg">Loading news...</div>

            <div v-else>
                <div v-for="(article, index) in news" :key="index"
                    class="bg-white text-black p-6 rounded-xl shadow-xl mb-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <h2 class="font-semibold text-2xl text-gray-800 mb-3">{{ article.title }}</h2>
                    <p class="text-gray-600 mb-3">{{ article.description }}</p>
                    <a :href="article.url" target="_blank" class="text-blue-600 font-bold hover:underline">Read more</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            news: [],
            loading: true,
        };
    },
    mounted() {
        this.fetchNews();
    },
    methods: {
        async fetchNews() {
            try {
                const response = await axios.get('https://api.currentsapi.services/v1/latest-news', {
                    params: {
                        language: 'en',
                        apiKey: import.meta.env.VITE_NEWS_API_KEY,
                    }
                });
                this.news = response.data.news;
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.bg-gradient-to-r {
    background-image: linear-gradient(to right, #1f1f1f, #3a3a3a);
}
</style>