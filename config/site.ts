import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiJuejin } from "react-icons/si";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
const AUTHOR_NAME = process.env.NEXT_PUBLIC_AUTHOR_NAME;
const TWITTER_USERNAME = process.env.NEXT_PUBLIC_TWITTER_USERNAME;

const baseSiteConfig = {
  name: SITE_NAME || '信息差——独立开发者出海周刊',
  description: SITE_DESCRIPTION || 'Knowledge is power, info-gap is money!「信息差——独立开发者出海周刊」是一个帮助独立开发者缩小信息差的技术周刊。',
  url: SITE_URL || 'https://gap.weijunext.com',
  metadataBase: '/',
  keywords: ["信息差", "indie hacker", "独立开发者", "周刊", "独立开发者出海"],
  authors: [
    {
      name: AUTHOR_NAME || 'weijunext',
      url: SITE_URL || 'https://gap.weijunext.com',
      twitter: `https://x.com/${TWITTER_USERNAME || 'weijunext'}`,
    }
  ],
  creator: `@${AUTHOR_NAME}`,
  defaultNextTheme: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'issues', text: '投稿⤴', href: "https://github.com/weijunext/gap.weijunext.com/issues" },
    // { name: 'repo', href: "https://github.com/weijunext/gap.weijunext.com", icon: BsGithub },
    { name: 'twitter', href: "https://x.com/weijunext", icon: BsTwitterX },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'twitter', href: "https://x.com/weijunext", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/weijunext/", icon: BsGithub },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    { name: 'weChat', href: "https://weijunext.com/make-a-friend", icon: BsWechat },
    { name: 'email', href: "mailto:weijunext@gmail.com", icon: MdEmail },
  ],
  footerProducts: [
    // { url: 'https://weijunext.com/', name: 'J实验室' },
    // { url: 'https://gap.weijunext.com/', name: '独立开发者出海周刊' },
    // { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    // { url: 'https://weekly.weijunext.com/', name: 'Weekly Boilerplate' },
    // { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    // { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    // { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    // { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.jpg`],
    creator: baseSiteConfig.creator,
  },
}
