import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PostsByMonth } from "@/types/weekly";
import Link from "next/link";

export default async function TimeLine({
  postsByMonth,
}: {
  postsByMonth: PostsByMonth;
}) {
  return (
    <ScrollArea
      className="h-72 w-32 rounded-md border border-gray-600 sticky top-0"
      style={{ position: "sticky" }}
    >
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          <Link href="/">时间线</Link>
        </h4>
        {Object.keys(postsByMonth).map((month) => (
          <div key={month}>
            <Link href={`#${month}`}>{month}</Link>
            <Separator className="my-2 bg-gray-600" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
