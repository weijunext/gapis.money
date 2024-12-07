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
        title="周刊"
        className={cn("link-default", pathname === "/" ? "link-underline" : "")}
        prefetch={false}
      >
        周刊
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link
        href="/blogs"
        title="博客"
        className={cn(
          "link-default",
          pathname === "/blogs" ? "link-underline" : ""
        )}
        prefetch={false}
      >
        博客
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link
        href="/rss.xml"
        title="RSS"
        className="link-default"
        prefetch={false}
      >
        RSS
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link
        // href="https://noteforms.com/forms/bvjqwl"
        href="https://quail.ink/gapismoney"
        title="邮件订阅"
        className="link-default"
        target="_blank"
        rel="noopener noreferrer nofollow"
        prefetch={false}
      >
        邮件订阅
      </Link>
    </>
  );
};

export default HeaderMenu;
