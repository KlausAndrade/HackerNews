<template>
  <div v-if="loading" class="loading">
    <p>Loading story...</p>
  </div>
  <div v-else-if="story" class="story-page">
    <h1>{{ story.title }}</h1>
    <p><strong>Score:</strong> {{ story.score }}</p>
    <p><strong>Author:</strong> {{ story.by }}</p>
    <p><strong>Author Karma:</strong> {{ story.authorKarma ?? 'N/A' }}</p>
    <p><strong>Date:</strong> {{ formattedDate }}</p>
    <p>
      <strong>Original Link: </strong>
      <a :href="story.url" target="_blank" rel="noopener noreferrer">{{ story.url }}</a>
    </p>
    <div class="navigation-buttons">
      <nuxt-link to="/stories">Back to All Stories</nuxt-link>
    </div>
  </div>
  <div v-else class="error">
    <p>Story not found.</p>
    <nuxt-link to="/stories">Back to All Stories</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchStory, fetchUser } from '@/services/api';
import type { ExtendedHackerNewsStory } from '@/types/hackerNews';

const route = useRoute();
const router = useRouter();

const story = ref<ExtendedHackerNewsStory | null>(null);
const loading = ref(true);

const prevStoryId = ref<number | null>(null);
const nextStoryId = ref<number | null>(null);

onMounted(async () => {
  try {
    const storyId = Number(route.params.id);
    const fetchedStory = await fetchStory(storyId);

    if (fetchedStory?.by) {
      const user = await fetchUser(fetchedStory.by);
      story.value = { ...fetchedStory, authorKarma: user.karma };
    } else {
      story.value = fetchedStory;
    }

    prevStoryId.value = story.value?.kids?.[0] || null;
    nextStoryId.value = story.value?.kids?.[1] || null;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});

// const navigateToPrev = () => {
//   if (prevStoryId.value) {
//     router.push(`/stories/${prevStoryId.value}`);
//   }
// };

// const navigateToNext = () => {
//   if (nextStoryId.value) {
//     router.push(`/stories/${nextStoryId.value}`);
//   }
// };

const formattedDate = computed(() =>
  story.value ? new Date(story.value.time * 1000).toLocaleDateString() : ''
);
</script>

<style scoped>
.story-page {
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.story-page h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.story-page p {
  margin: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.5;
}

.loading,
.error {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
}

.navigation-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.navigation-buttons button {
  background-color: #007acc;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navigation-buttons button:hover {
  background-color: #005f99;
}

.navigation-buttons button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.navigation-buttons a {
  text-decoration: underline;
  color: #007acc;
  font-weight: bold;
}
</style>