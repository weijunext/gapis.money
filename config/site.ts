import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const baseSiteConfig = {
  name: "信息差——独立开发者出海周刊",
  description:
    "Knowledge is power, Gap is money!「信息差——独立开发者出海周刊」是一个帮助独立开发者缩小信息差的技术周刊。",
  url: "https://gapis.money",
  metadataBase: '/',
  keywords: ["信息差", "indie hacker", "独立开发者", "周刊", "独立开发者出海"],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
      twitter: 'https://twitter.com/weijunext',
    }
  ],
  creator: '@weijunext',
  defaultNextTheme: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'issues', text: '投稿⤴', href: "https://github.com/weijunext/gapis.money/issues" },
    // { name: 'repo', href: "https://github.com/weijunext/gapis.money", icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:weijunext@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/weijunext/", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    { name: 'weChat', href: "https://weijunext.com/make-a-friend", icon: BsWechat }
  ],
  footerProducts: [
    // { url: 'https://weijunext.com/', name: 'J实验室' },
    // { url: 'https://gapis.money/', name: '独立开发者出海周刊' },
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
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.jpg`],
    creator: baseSiteConfig.creator,
  },
}
