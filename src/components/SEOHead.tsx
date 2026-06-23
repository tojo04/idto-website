import { Helmet } from "react-helmet-async";

type SEOHeadProps = {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
};

export default function SEOHead({ title, noindex = false }: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      {noindex && <meta name="robots" content="noindex,follow" />}
    </Helmet>
  );
}
