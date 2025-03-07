import BaiDuAnalytics from "@/app/BaiDuAnalytics";
import GoogleAdsense from "@/app/GoogleAdsense";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { TailwindIndicator } from "@/components/theme/TailwindIndicator";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import "@/styles/loading.css";
import { Analytics } from "@vercel/analytics/react";
import { Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  ...siteConfig,
  title: siteConfig.name,
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await createIndex();
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="min-h-screen bg-background antialiased">
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme={siteConfig.defaultNextTheme}
            forcedTheme={siteConfig.defaultNextTheme}
          >
            <Header />
            <main className="flex flex-col items-center py-6">{children}</main>
            <Footer />
            <Analytics />
            <TailwindIndicator />
          </ThemeProvider>
          {process.env.NODE_ENV === "development" ? (
            <></>
          ) : (
            <>
              <GoogleAnalytics />
              <BaiDuAnalytics />
              <GoogleAdsense />
            </>
          )}
        </body>
      </html>
    </ViewTransitions>
  );
}
