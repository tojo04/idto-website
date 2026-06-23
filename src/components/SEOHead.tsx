import { Helmet } from "react-helmet-async";

type SEOHeadProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
};

const SITE_URL = "https://idto.ai";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const withTrailingSlash = (path: string) =>
  path === "/" || path.endsWith("/") ? path : `${path}/`;

export default function SEOHead({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogType,
  noindex = false,
}: SEOHeadProps) {
  const url = `${SITE_URL}${withTrailingSlash(path)}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}
      {ogType && <meta property="og:type" content={ogType} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      {ogImage === DEFAULT_OG_IMAGE && (
        <meta property="og:image:width" content="1200" />
      )}
      {ogImage === DEFAULT_OG_IMAGE && (
        <meta property="og:image:height" content="630" />
      )}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
