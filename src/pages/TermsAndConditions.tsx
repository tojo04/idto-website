import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";

export default function TermsAndConditions() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Terms and Conditions | idto.ai"
        description="Terms governing access to and use of idto.ai's websites, APIs, dashboards, and SDKs by Payvriz Technologies Private Limited."
        path="/terms"
      />
      <Header />

      <main className="max-w-[900px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="font-heading text-3xl lg:text-4xl text-black tracking-[0.6px] mb-2">
          Terms And Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: 30 April 2026 · Draft pending final legal review.
        </p>

        <div className="text-gray-600 text-base leading-[1.7] space-y-6">
          <p>
            These Terms and Conditions ("Terms") govern your access to and use
            of the websites, APIs, dashboards, SDKs, and related services
            (collectively, the "Services") provided by Payvriz Technologies
            Private Limited, doing business as idto.ai ("idto.ai", "we", "our",
            "us"), with registered office at: 3rd Floor, Orchid Centre, Golf
            Course Road, Sector 53, Gurugram, Haryana – 122002, India. By
            accessing or using the Services, you ("Customer", "you", "your")
            agree to be bound by these Terms and our Privacy Policy.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By creating an account, accessing the dashboard, calling our
              APIs, embedding our SDKs, or otherwise using the Services, you
              represent that (a) you have full legal capacity to enter into
              these Terms, (b) if entering on behalf of an organisation you
              have authority to bind that organisation, and (c) your use of
              the Services complies with all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              2. Eligibility &amp; Account
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                You must be a legally registered business entity with a valid
                tax/identification number in your jurisdiction.
              </li>
              <li>
                You are responsible for safeguarding API keys, dashboard
                credentials, and any access tokens issued to you.
              </li>
              <li>
                You must promptly notify us of any unauthorised access or
                suspected compromise of your account.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              3. License &amp; Permitted Use
            </h2>
            <p>
              Subject to these Terms, idto.ai grants you a non-exclusive,
              non-transferable, revocable license to access and use the
              Services solely for your internal business purposes and only in
              accordance with the documentation, applicable rate limits, and
              the commercial agreement signed between the parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              4. Acceptable Use
            </h2>
            <p>You will not, and will not permit any third party to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                use the Services to violate any law, regulation, or third-party
                right (including UIDAI, RBI, SEBI, IRDAI, MeitY, and DPDP Act
                obligations);
              </li>
              <li>
                resell, white-label, or redistribute the Services without
                written consent;
              </li>
              <li>
                reverse-engineer, scrape, or otherwise extract source code,
                models, or training data from the Services;
              </li>
              <li>
                upload data you do not have lawful authority to process, or
                process data in a manner that exceeds the consent obtained
                from data principals;
              </li>
              <li>
                interfere with the integrity, performance, or security of the
                Services or attempt to gain unauthorised access.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              5. Customer Data &amp; Privacy
            </h2>
            <p>
              Your use of the Services is also governed by our{" "}
              <a className="text-blue-600 underline" href="/privacy">
                Privacy Policy
              </a>
              , which describes how we process personal data. As between the
              parties, you retain ownership of all data you submit to the
              Services. You grant idto.ai a limited license to process such
              data solely to provide and improve the Services in accordance
              with the Privacy Policy and any data processing addendum.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              6. Fees &amp; Payment
            </h2>
            <p>
              Fees are set out in your order form, pricing page, or executed
              commercial agreement. All amounts are exclusive of applicable
              taxes (including GST) which you are responsible for paying.
              Late payments may attract interest and may result in suspension
              of the Services after notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              7. Service Levels &amp; Support
            </h2>
            <p>
              Service availability targets, support response times, and
              incident-handling commitments are described in the applicable
              Service Level Agreement, which is incorporated by reference for
              customers on paid plans.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              8. Intellectual Property
            </h2>
            <p>
              idto.ai retains all right, title, and interest in and to the
              Services, including all software, models, documentation, and
              trademarks. No rights are granted other than those expressly
              stated in these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              9. Confidentiality
            </h2>
            <p>
              Each party will protect the other's confidential information
              with the same degree of care it uses for its own confidential
              information, and in no event less than reasonable care, and use
              such information only as permitted under these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              10. Warranties &amp; Disclaimer
            </h2>
            <p>
              The Services are provided "as is" and "as available". Except as
              expressly stated in a written agreement, idto.ai disclaims all
              warranties, whether express, implied, or statutory, including
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement, to the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              11. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, neither party will be
              liable for indirect, incidental, special, consequential, or
              punitive damages, or for loss of profits, revenue, or data.
              Each party's aggregate liability arising out of or relating to
              these Terms will not exceed the fees paid by you to idto.ai
              during the twelve (12) months preceding the event giving rise
              to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              12. Indemnification
            </h2>
            <p>
              You will indemnify and hold idto.ai harmless from third-party
              claims arising out of (a) your use of the Services in breach of
              these Terms, (b) data you submit to the Services, or (c) your
              violation of applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              13. Term &amp; Termination
            </h2>
            <p>
              These Terms apply for as long as you use the Services. Either
              party may terminate for material breach not cured within thirty
              (30) days of written notice. Upon termination, your right to
              use the Services will cease and we will, upon request, return
              or delete Customer data in accordance with the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              14. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of India. The courts at
              Gurugram, Haryana will have exclusive jurisdiction over any
              dispute arising out of or in connection with these Terms,
              subject to any binding arbitration agreed in a separate written
              instrument.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              15. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Material changes
              will be communicated via the Services or by email; continued
              use of the Services after the effective date constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              16. Contact
            </h2>
            <p>
              For questions about these Terms or to request a signed copy,
              contact us at:
            </p>
            <p className="mt-2">Email: legal@idto.ai</p>
            <p>
              Address: Payvriz Technologies Pvt Ltd, 3rd Floor, Orchid Centre,
              Golf Course Road, Gurugram, Haryana – 122002, India
            </p>
          </section>
        </div>

        <div className="mt-12">
          <button
            onClick={bookDemo}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Book a demo
          </button>
        </div>
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
