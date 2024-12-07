import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

const LogoLink = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-1 font-bold"
      title={siteConfig.description}
      prefetch={false}
    >
      <Image
        alt={siteConfig.name}
        src="/logo.svg"
        className="w-8 h-8"
        width={24}
        height={24}
      />
      <span className="text-gray-100">{siteConfig.name}</span>
    </Link>
  );
};

export default LogoLink;
