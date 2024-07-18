import { PostsByMonth, WeeklyPost } from "@/types/weekly";

interface Cache {
  posts: WeeklyPost[] | null;
  postsByMonth: PostsByMonth | null;
  lastUpdated: number | null;
}

const cache: Cache = {
  posts: null,
  postsByMonth: null,
  lastUpdated: null,
};

const isDevelopment = process.env.NODE_ENV !== 'production';
const cacheDuration = isDevelopment ? 0 : 600000; // 开发环境不缓存，生产环境缓存10分钟

export const getCachedPosts = (): { posts: WeeklyPost[] | null, postsByMonth: PostsByMonth | null } => {
  const currentTime = Date.now();
  if (cache.posts && cache.postsByMonth && cache.lastUpdated && currentTime - cache.lastUpdated < cacheDuration) {
    return {
      posts: cache.posts,
      postsByMonth: cache.postsByMonth
    };
  }
  return {
    posts: null,
    postsByMonth: null
  };
};

export const setCachedPosts = ({ posts, postsByMonth }: { posts: WeeklyPost[], postsByMonth?: PostsByMonth }): void => {
  cache.posts = posts;
  cache.postsByMonth = postsByMonth || null;
  cache.lastUpdated = Date.now();
};
