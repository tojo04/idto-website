import { Helmet } from "react-helmet-async";

type SEOHeadProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

const SITE_URL = "https://idto.ai";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEOHead({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
}: SEOHeadProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
