import DeveloperCard from "@/components/DeveloperCard";
import WeeklyList from "@/components/WeeklyList";
import { getBlogs } from "@/lib/blogs";
import { WeeklyPost } from "@/types/weekly";

export default async function BlogsHome() {
  const { posts }: { posts: WeeklyPost[] } = await getBlogs();

  return (
    <div className="flex flex-row w-full pt-0">
      <div className="hidden md:block md:w-1/5 pl-6"></div>
      <div className="w-full md:w-3/5 px-6">
        <WeeklyList posts={posts} sectionType="blogs" />
        <DeveloperCard />
      </div>
      <div className="hidden md:flex justify-end md:w-1/5 pr-6 text-right"></div>
    </div>
  );
}
