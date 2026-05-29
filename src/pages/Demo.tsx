import React from "react";
import SEOHead from "../components/SEOHead";

const Demo: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <SEOHead
        title="Live Demo — Try idto.ai Identity Verification"
        description="Try the idto.ai identity platform live: KYC, KYB, BAV and DigiLocker workflows in a real sandbox. No card required."
        path="/demo"
        noindex
      />
      <iframe
        src="https://v2-demo.idto.ai"
        title="IDTO Demo"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="clipboard-read; clipboard-write; fullscreen; autoplay; encrypted-media;"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

export default Demo;