"use client";
import Script from "next/script";

export default function AnalyticsScripts() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7487473818971469"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        id="ADSENSE"
      />
      <Script id="ADSENSE_AUTO" strategy="afterInteractive">
        {`(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-7487473818971469",enable_page_level_ads:true})`}
      </Script>
      <Script
        src="//sdk.51.la/js-sdk-pro.min.js"
        strategy="afterInteractive"
        id="LA_COLLECT"
        onLoad={() => {
          try {
            // @ts-ignore
            LA.init({ id: "LCNALnTMSNRBVZry", ck: "LCNALnTMSNRBVZry" });
          } catch (e) {
            console.warn("51.la init failed", e);
          }
        }}
      />
    </>
  );
}
