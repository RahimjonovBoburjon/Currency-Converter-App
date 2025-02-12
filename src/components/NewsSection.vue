<template>
    <div class="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
        <div class="container mx-auto">
            <h1 class="text-4xl font-bold text-center mb-6">Currency News 📰</h1>

            <div v-if="loading" class="text-center text-lg">Loading news...</div>

            <div v-else>
                <div v-for="(article, index) in news" :key="index"
                    class="bg-white text-black p-4 rounded-lg shadow-md mb-4">
                    <h2 class="font-bold text-xl">{{ article.title }}</h2>
                    <p>{{ article.description }}</p>
                    <a :href="article.url" target="_blank" class="text-blue-600">Read more</a>
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
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: 'us', // or any other country code
                        category: 'business', // for economic/business news
                        apiKey: '5720b6a7cbca44f0b675b5dd0cee2fb2', // Replace with your NewsAPI key
                    }
                });
                this.news = response.data.articles;
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