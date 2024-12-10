import type { HackerNewsStory, HackerNewsUser } from '@/types/hackerNews';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchTopStories(): Promise<number[]> {
  const response = await fetch(`${BASE_URL}/topstories.json`);
  if (!response.ok) throw new Error('Failed to fetch top stories');
  return response.json();
}

export async function fetchStory(id: number): Promise<HackerNewsStory> {
  const response = await fetch(`${BASE_URL}/item/${id}.json`);
  if (!response.ok) throw new Error(`Failed to fetch story with id ${id}`);
  return response.json();
}

export async function fetchUser(id: string): Promise<HackerNewsUser> {
  const response = await fetch(`${BASE_URL}/user/${id}.json`);
  if (!response.ok) throw new Error(`Failed to fetch user with id ${id}`);
  return response.json();
}