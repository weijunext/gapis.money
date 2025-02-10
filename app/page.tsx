import DeveloperCard from "@/components/DeveloperCard";
import SiteCard from "@/components/SiteCard";
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
    <div className="flex flex-row w-full pt-6">
      <div className="hidden md:block md:w-1/5 pl-6"></div>
      <div className="w-full md:w-3/5 px-6">
        <SiteCard />
        <section className="py-4 mb-8 space-y-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <h3 className="font-bold text-xl text-gray-800">
            📢 本周刊正式停刊公告，欢迎访问升级后的站点：
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <img
                src="/next_idea_logo.svg"
                alt="Next Idea"
                className="w-5 h-5"
              />
              <a
                href="https://nextidea.dev"
                title="Next Idea"
                target="_blank"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                开源项目导航站：Next Idea
              </a>
              <span className="text-gray-600">
                - 发现更多优质开源项目，帮助你找到副业启动项目
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-600">🧩</span>
              <a
                href="https://newtab.nextidea.dev"
                title="Next Idea NewTab"
                target="_blank"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                新标签页插件：Next Idea NewTab
              </a>
              <span className="text-gray-600">
                - 让开发者、产品经历信息获取效率和办公效率更高
              </span>
            </div>
          </div>
        </section>
        <WeeklyList posts={posts} sectionType="weekly" />
        <DeveloperCard />
      </div>
      <div className="hidden md:flex justify-end md:w-1/5 pr-6 text-right">
        <TimeLine postsByMonth={postsByMonth}></TimeLine>
      </div>
    </div>
  );
}
