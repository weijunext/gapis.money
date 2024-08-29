import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const HeaderLinks = () => {
  const links = siteConfig.headerLinks;

  return (
    <div className="flex flex-row items-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          title={link.name}
          target="_blank"
          rel="noopener norefferer nofollow"
          className="mx-3 flex items-center w-max"
        >
          {link.text}
          {link.icon &&
            React.createElement(link.icon, { className: "text-lg" })}
        </Link>
      ))}
    </div>
  );
};
export default HeaderLinks;
