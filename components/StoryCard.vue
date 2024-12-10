<template>
<div class="story-card">
  <h2 class="story-card__title">
    <nuxt-link :to="`/stories/${story.id}`">{{ story.title }}</nuxt-link>
  </h2>
  <p class="story-card__meta">
    <span class="story-card__score">Score: {{ story.score }}</span>
    <span class="story-card__author">By: <Tooltip :text="String('Karma: ' + story.authorKarma) ?? 'N/A'">{{ story.by }}</Tooltip></span>
  </p>
  <p class="story-card__date">{{ formattedDate }}</p>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import type { ExtendedHackerNewsStory } from '@/types/hackerNews';

const props = defineProps<{
  story: ExtendedHackerNewsStory;
  prevStoryId?: number;
  nextStoryId?: number;
}>();

const router = useRouter();

const formattedDate = computed(() =>
  props.story.time ? new Date(props.story.time * 1000).toLocaleDateString() : 'N/A'
);

const navigateToPrev = () => {
  if (props.prevStoryId) {
    router.push(`/stories/${props.prevStoryId}`);
  }
};

const navigateToNext = () => {
  if (props.nextStoryId) {
    router.push(`/stories/${props.nextStoryId}`);
  }
};
</script>
<style scoped>
.story-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: .7rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.story-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.story-card__title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #0056b3;
  margin-bottom: .3rem;
  margin-top: .3rem;
  line-height: 1.7rem;
}

.story-card__title a {
  text-decoration: none;
  color: inherit;
}

.story-card__title a:hover {
  text-decoration: underline;
}

.story-card__meta {
  margin: 1rem 0;
  font-size: 0.95rem;
  color: #555;
  line-height: .7rem;
}

.story-card__score {
  display: block;
  margin-bottom: 0.5rem;
}

.story-card__author {
  display: block;
}

.story-card__date {
  font-size: 0.8rem;
  margin: 0;
  font-style: italic;
  color: #777;
  text-align: right;
}
</style>