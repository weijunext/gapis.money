import { WeeklyPost } from "@/types/weekly";
import dayjs from "dayjs";
import { Link } from "next-view-transitions";
// import Link from "next/link";

export default async function WeeklyList({
  isSide,
  posts,
  sectionType,
}: {
  isSide?: boolean;
  posts: WeeklyPost[];
  sectionType: string;
}) {
  const renderPosts = posts.filter((i) => i.visible);
  return (
    <ul className="flex flex-col gap-4">
      {renderPosts.map((post) => (
        <li
          id={post.id}
          key={post.metadata.slug}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          {isSide ? (
            <></>
          ) : (
            <span className="text-[#8585a8] min-w-28">
              {dayjs(post.metadata.date).format("YYYY-MM-DD")}
            </span>
          )}
          <Link
            href={`/${sectionType || "weekly"}/${post.metadata.slug}`}
            title={post.title}
            className="link-default w-full transition-colors duration-500 ease-in-out flex justify-start items-center"
          >
            {post.metadata.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
