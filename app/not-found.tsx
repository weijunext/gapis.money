import FollowButton from "@/components/FollowButton";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="mx-automax-h-screen flex flex-col items-center">
      <Image src="/404.svg" alt="404" width={128} height={128} />
      <div className="w-full text-center mt-8 flex flex-col sm:flex-row gap-2">
        <FollowButton name="回到首页" href="/" target="_self"></FollowButton>
        <FollowButton
          name="Twitter/X"
          href="https://twitter.com/weijunext/"
        ></FollowButton>
        <FollowButton
          name="Github"
          href="https://github.com/weijunext/"
        ></FollowButton>
        <FollowButton
          name="掘金"
          href="https://juejin.cn/user/26044008768029"
        ></FollowButton>
      </div>
    </div>
  );
}
