"use client";

import { Divider, Link } from "@nextui-org/react";
import React from "react";

import FooterLinks from "@/components/footer/FooterLinks";
import { siteConfig } from "@/config/site";

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
    {
      name: "Smart Excel AI",
      href: "https://smartexcel.cc/?utm_source=gapismoney&utm_medium=referral",
    },
    {
      name: "Landing Page Boilerplate",
      href: "https://landingpage.weijunext.com/?utm_source=gapismoney&utm_medium=referral",
    },
    {
      name: "Weekly Boilerplate",
      href: "https://weekly.weijunext.com/?utm_source=gapismoney&utm_medium=referral",
    },
  ],
  indieHacker: [
    {
      name: "独立开发者出海周刊",
      href: "https://gapis.money/?utm_source=gapismoney&utm_medium=referral",
    },
    {
      name: "Indie Hacker Tools",
      href: "https://github.com/weijunext/indie-hacker-tools",
    },
  ],
  tools: [
    { name: "PH Copilot", href: "https://PHCopilot.AI/?utm_source=gapismoney" },
    {
      name: "Youtube中文配音",
      href: "https://yd.transduck.com/admin/signup?code=24796&utm_source=gapismoney&utm_medium=referral",
    },
    {
      name: "ChatHub",
      href: "https://app.chathub.gg/?ref=gapismoney",
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
                className="text-default-500"
                href={item.href}
                title={item.name}
                target="_blank"
                size="sm"
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
          >
            {authors[0].name}
          </Link>{" "}
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
