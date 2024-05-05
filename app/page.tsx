import DeveloperCard from "@/components/DeveloperCard";
import TimeLine from "@/components/TimeLine";
import WeeklyList from "@/components/WeeklyList";
import { getWeeklyPosts } from "@/lib/weekly";
import { PostsByMonth, WeeklyPost } from "@/types/weekly";

export default async function Home() {
  const {
    posts,
    postsByMonth,
  }: { posts: WeeklyPost[]; postsByMonth: PostsByMonth } =
    await getWeeklyPosts();

  return (
    <div className="flex flex-row w-full pt-12">
      <div className="hidden md:block md:w-1/5 pl-6"></div>
      <div className="w-full md:w-3/5 px-6">
        <WeeklyList posts={posts} />
        <DeveloperCard />
      </div>
      <div className="hidden md:flex justify-end md:w-1/5 pr-6 text-right">
        <TimeLine postsByMonth={postsByMonth}></TimeLine>
      </div>
    </div>
  );
}
