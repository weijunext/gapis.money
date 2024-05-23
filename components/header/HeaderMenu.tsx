import Link from "next/link";

const HeaderMenu = () => {
  return (
    <>
      <Link href="/" className="link-default">
        首页
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link href="/rss.xml" className="link-default">
        RSS
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link
        href="https://github.com/weijunext/gapis.money/issues"
        className="link-default"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        投稿
      </Link>
    </>
  );
};

export default HeaderMenu;
