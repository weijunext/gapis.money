import HeaderLinks from "@/components/header/HeaderLinks";
import SearchBar from "@/components/header/SearchBar";
import { siteConfig } from "@/config/site";
import { WeeklyPost } from "@/types/weekly";
import Image from "next/image";
import Link from "next/link";

const Header = ({ posts }: { posts: WeeklyPost[] }) => {
  return (
    <header>
      <div className="mx-auto max-w-4xl px-4 py-3 border-b border-gray-600">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" className="flex items-center space-x-1 font-bold">
              <Image
                alt={siteConfig.name}
                src="/logo.svg"
                className="w-8 h-8"
                width={24}
                height={24}
              />
              <span className="text-gray-100 hidden sm:block">开源周刊</span>
            </Link>
            <div className="hidden md:flex md:gap-x-6"></div>
          </div>

          <div className="flex items-center">
            <SearchBar posts={posts} />
            <HeaderLinks />
            {/* <ThemedButton /> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
