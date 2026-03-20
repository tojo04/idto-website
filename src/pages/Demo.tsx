import React from "react";

const Demo: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
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