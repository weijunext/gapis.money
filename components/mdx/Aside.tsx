import { cn } from "@/lib/utils";
import Link from "next/link";

interface AsideProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
  showSponsor?: 0 | 1;
}

export function Aside({
  children,
  icon,
  type = "default",
  showSponsor = 1,
  ...props
}: AsideProps) {
  return (
    <div
      className={cn(
        "flex border-5 py-3 px-4 ms-2 ms-md-0 my-10 rounded rounded-1 shadow",
        "bg-[#6edff633] border-[#6edff633] border-l-[#6edff6]"
      )}
      {...props}
    >
      <div className="rounded rounded-1 text-center h-8 w-8 bg-[#6edff6] text-2xl relative top-[-30px] left-[-30px]">
        {icon || "💡"}
      </div>
      <div>
        {children}

        {showSponsor === 1 ? (
          <div>
            赞助列表：
            <br />
            <li>
              <Link
                href="https://PHCopilot.AI/?utm_source=gap.weijunext.com"
                title="PHCopilot.AI"
                target="_blank"
                className="link-underline"
                prefetch={false}
              >
                PHCopilot.AI
              </Link>
              ：快速生成 ProductHunt 高质量打榜评论，轻松升级金牌账号。
            </li>
            <li>
              <Link
                href="https://ship.weijunext.com/"
                title="PHCopilot.AI"
                target="_blank"
                className="link-underline"
                rel="noopener norefferer nofollow"
                prefetch={false}
              >
                《Chrome插件全栈开发实战》
              </Link>
              ：真实出海项目的实战教学课，帮助你半个月内成为全栈出海工程师。
            </li>
            <li>
              <Link
                href="https://nextjscn.org/docs?utm_source=gap.weijunext.com"
                title="Next.js 中文文档"
                target="_blank"
                className="link-underline"
                prefetch={false}
              >
                Next.js 中文文档
              </Link>
              ：样式和官网一样的中文文档，创造沉浸式Next.js中文学习体验。
            </li>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
