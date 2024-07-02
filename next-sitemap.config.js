/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://gapis.money",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    "**/*.webp", // 这将排除所有以 .webp 结尾的URL
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/", // 允许爬虫访问所有内容
        disallow: ["/assets/"], // 所有.webp文件存储在/assets/目录
      },
    ],
  },
};
