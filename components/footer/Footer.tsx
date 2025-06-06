"use client";

import { Divider } from "@nextui-org/react";
import React from "react";

import FooterLinks from "@/components/footer/FooterLinks";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const footerNavigation = {
  blog: [
    {
      name: "J实验室",
      href: "https://weijunext.com/?utm_source=gapismoney&utm_medium=referral",
    },
    {
      name: "Next.js 中文文档",
      href: "https://nextjscn.org/?utm_source=gapismoney&utm_medium=referral",
    },
    {
      name: "全栈出海SaaS开发",
      href: "https://ship.weijunext.com/",
      rel: "noopener noreferrer nofollow",
    },
  ],
  openSource: [
    { name: "Next.js SaaS 全栈模板", href: "https://nexty.dev/" },
    { name: "Next 多语言模板", href: "https://nextforge.dev/" },
    { name: "博客模板", href: "https://weekly.weijunext.com/" },
  ],
  indieHacker: [
    {
      name: "Indie Hacker Tools",
      href: "https://github.com/weijunext/indie-hacker-tools",
      rel: "noopener noreferrer nofollow",
    },
  ],
  tools: [
    {
      name: "nTab",
      href: "https://ntab.dev/?utm_source=gap.weijunext.com",
    },
    {
      name: "OG Image Generator",
      href: "https://ogimage.click/?utm_source=gap.weijunext.com",
    },
    {
      name: "ChatHub",
      href: "https://app.chathub.gg/?ref=gapismoney",
      rel: "noopener noreferrer nofollow",
    },
  ],
};

export default function Footer() {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;
  const renderList = React.useCallback(
    ({
      title,
      items,
    }: {
      title: string;
      items: { name: string; href: string; rel?: string }[];
    }) => (
      <div>
        <h3 className="text-small font-semibold">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                className="text-default-500 text-sm"
                href={item.href}
                title={item.name}
                target="_blank"
                prefetch={false}
                rel={item.rel || "noopener noreferrer"}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    []
  );

  return (
    <footer className="flex w-full flex-col border-t border-gray-600">
      <div className="px-6 py-8 mt-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8 mt-6">
            <div className="flex items-center justify-start">
              <h1 className="text-medium font-medium">{siteConfig.name}</h1>
            </div>
            <span className="text-small text-default-500">
              {siteConfig.description}
            </span>
            <FooterLinks />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: "博客/教程",
                  items: footerNavigation.blog,
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({
                  title: "开源项目",
                  items: footerNavigation.openSource,
                })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                {renderList({
                  title: "独立开发者出海",
                  items: footerNavigation.indieHacker,
                })}
              </div>
              <div>
                {renderList({
                  title: "工具推荐",
                  items: footerNavigation.tools,
                })}
              </div>
            </div>
          </div>
        </div>
        <Divider className="my-8" />
        <div className="flex space-x-2">
          <div>{`©${currentYear}`}</div>{" "}
          <Link
            href={authors[0].twitter || authors[0].url}
            title={authors[0].name}
            target="_blank"
            prefetch={false}
          >
            {authors[0].name}
          </Link>{" "}
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
