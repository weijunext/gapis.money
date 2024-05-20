"use client";

import FooterLinks from "@/components/footer/FooterLinks";
import { siteConfig } from "@/config/site";

export default function SiteCard() {
  return (
    <section className="pt-8 pb-8 mb-12 space-y-8 border-t border-gray-600 border-b">
      <h1 className="my-2 text-main">
        {/* {siteConfig.name} */}
        信息差周刊
      </h1>
      <p>{siteConfig.description}</p>
      <FooterLinks />
    </section>
  );
}
