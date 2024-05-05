/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://gapis.money",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
