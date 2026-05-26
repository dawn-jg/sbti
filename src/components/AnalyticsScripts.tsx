"use client";
import Script from "next/script";

/**
 * AnalyticsScripts — Google AdSense (via next/script) + 51.la fallback
 *
 * 51.la uses polling to ensure init runs after SDK loads (static-export safe).
 */
export default function AnalyticsScripts() {
  return (
    <>
      {/* Google AdSense */}
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
      {/* 51.la Analytics — plain script tag, static-export safe */}
      <script
        src="https://sdk.51.la/js-sdk-pro.min.js"
        async
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var t=setInterval(function(){if(typeof LA!=="undefined"){clearInterval(t);try{LA.init({id:"LCNALnTMSNRBVZry",ck:"LCNALnTMSNRBVZry"})}catch(e){console.warn(e)}}},100)})()`
        }}
      />
    </>
  );
}
