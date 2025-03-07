"use client";

import Script from "next/script";

const GoogleAdsense = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID ? (
        <>
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default GoogleAdsense;
