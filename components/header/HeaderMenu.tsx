"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={cn("link-default", pathname === "/" ? "link-underline" : "")}
      >
        周刊
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link
        href="/blogs"
        className={cn(
          "link-default",
          pathname === "/blogs" ? "link-underline" : ""
        )}
      >
        博客
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link href="/rss.xml" className="link-default">
        RSS
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link
        href="https://noteforms.com/forms/bvjqwl"
        className="link-default"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        邮件订阅
      </Link>
      {/* <div className="hidden md:block text-gray-600">|</div> */}
      {/* <Link
        href="/thanks"
        className="link-default"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        赞助
      </Link> */}
    </>
  );
};

export default HeaderMenu;
