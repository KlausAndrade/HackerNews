<template>
  <div>
    <h1>Top stories from HackerNews</h1>

    <div class="stories-bg">
      <img src="/dummy.webp" />
    </div>

    <div class="stories-grid" ref="gridContainer">
      <div class="stories-grid__item" v-for="story in stories" :key="story.id">
        <StoryCard :story="story" />
      </div>
    </div>
    <div v-if="loading" class="loading">
      <p>Loading more stories...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchTopStories, fetchStory, fetchUser } from '@/services/api';
import type { ExtendedHackerNewsStory } from '@/types/hackerNews';

const stories = ref<ExtendedHackerNewsStory[]>([]);
const pageSize = 20;
const loading = ref(false);
let allStoryIds: number[] = [];
let currentPage = ref(0);

const fetchStories = async () => {
  if (loading.value) return;

  loading.value = true;
  const start = currentPage.value * pageSize;
  const end = start + pageSize;

  const storyPromises = allStoryIds.slice(start, end).map(async (id) => {
    const story = await fetchStory(id);
    if (story && story.type === 'story') {
      const user = await fetchUser(story.by);
      return { ...story, authorKarma: user.karma } as ExtendedHackerNewsStory;
    }
    return null;
  });

  const newStories = (await Promise.all(storyPromises))
    .filter((story): story is ExtendedHackerNewsStory => story !== null)
    .sort((a, b) => a.score - b.score);

  stories.value.push(...newStories);
  currentPage.value++;
  loading.value = false;
};

const setupInfiniteScroll = () => {
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const bottomOfPage = scrollTop + clientHeight >= scrollHeight - 100;

    if (bottomOfPage && !loading.value && currentPage.value * pageSize < allStoryIds.length) {
      fetchStories();
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

onMounted(async () => {
  allStoryIds = await fetchTopStories();
  await fetchStories();
  setupInfiniteScroll();
});
</script>


<style scoped lang="scss">
.stories-bg {
  left: 50%;
  display: flex;
  z-index: -1;
  position: fixed;
  translate: -50%;
  opacity: .3;
}

.stories-grid {
  column-gap: 1rem;
  margin: .5rem 0;
}

.stories-grid__item {
  break-inside: avoid;
  margin-bottom: 1.1rem;
}

@media (min-width: 768px) {
  .stories-grid {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .stories-grid {
    column-count: 3;
  }
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  margin: 2rem 0;
}
</style>