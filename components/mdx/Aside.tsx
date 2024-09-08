import { cn } from "@/lib/utils";
import Link from "next/link";

interface AsideProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Aside({
  children,
  icon,
  type = "default",
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
        <div>
          赞助列表：
          <br />
          <li>
            <Link
              href="https://PHCopilot.AI/?utm_source=gapis.money"
              title="PHCopilot.AI"
              target="_blank"
              className="link-underline"
            >
              PHCopilot.AI
            </Link>
            ：快速生成 ProductHunt 高质量打榜评论，助你轻松升级金牌。
          </li>
          <li>
            <Link
              href="https://nextjscn.org/docs?utm_source=gapis.money"
              title="Next.js 中文文档"
              target="_blank"
              className="link-underline"
            >
              Next.js 中文文档
            </Link>
            ：样式和官网一样的中文文档，创造沉浸式Next.js中文学习体验。
          </li>
        </div>
      </div>
    </div>
  );
}
