export interface HackerNewsStory {
  id: number;
  by: string;
  descendants?: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
}

export interface HackerNewsUser {
  id: string;
  karma: number;
  created: number;
  about?: string;
  submitted?: number[];
}

export interface ExtendedHackerNewsStory extends HackerNewsStory {
  authorKarma?: number;
  kids?: number[]
}
