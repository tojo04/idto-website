import React, { useEffect } from "react";
import SEOHead from "../components/SEOHead";
import { trackEvent } from "../lib/analytics";

const DEMO_IFRAME_URL = "https://v2-demo.idto.ai";

const Demo: React.FC = () => {
  useEffect(() => {
    trackEvent("Live Demo Opened", {
      demo_url: DEMO_IFRAME_URL,
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <SEOHead
        title="Live Demo — Try idto.ai Identity Verification"
        description="Try the idto.ai identity platform live: KYC, KYB, BAV and DigiLocker workflows in a real sandbox. No card required."
        path="/demo"
        noindex
      />
      <iframe
        src={DEMO_IFRAME_URL}
        title="IDTO Demo"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="clipboard-read; clipboard-write; fullscreen; autoplay; encrypted-media;"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        onLoad={() => {
          trackEvent("Live Demo Iframe Loaded", {
            demo_url: DEMO_IFRAME_URL,
          });
        }}
      />
    </div>
  );
};

export default Demo;
