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
        <p>
          本期由{" "}
          <Link
            href="https://PHCopilot.AI/?utm_source=gapis.money"
            title="PHCopilot.AI"
            target="_blank"
            className="link-underline"
          >
            PHCopilot.AI
          </Link>{" "}
          赞助，PH Copilot 是你的 ProductHunt 助手，为你快速生成高质量评论，升级
          ProductHunt 金牌账号。
        </p>
      </div>
    </div>
  );
}
