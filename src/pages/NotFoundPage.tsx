import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";

export default function NotFoundPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Page Not Found | idto.ai"
        description="The page you are looking for does not exist."
        path="/404"
        noindex={true}
      />
      <Header />
      <main className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <p className="text-8xl font-bold text-primary leading-none">404</p>
        <h1 className="mt-6 text-3xl font-semibold text-dark">Page not found</h1>
        <p className="mt-4 text-lg text-gray-500 max-w-md">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="mt-8 inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to home
        </a>
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
