import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";

export default function PrivacyPolicy() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Privacy Policy | idto.ai"
        description="How idto.ai (Payvriz Technologies) collects, uses, and protects personal data under the DPDP Act 2023 and IT Act 2000."
        path="/privacy"
      />
      <Header />

      <main className="max-w-[900px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="font-heading text-3xl lg:text-4xl text-black tracking-[0.6px] mb-8">
          Privacy Policy
        </h1>

        <div className="text-gray-600 text-base leading-[1.7] space-y-6">
          <p>
            Payvriz Technologies Private Limited ("idto.ai", "we", "our", "us"),
            having its registered office at: 3rd floor, Orchid Centre, Golf
            Course Road, Sector 53, Gurugram, Haryana – 122002, India. Email:
            info@idto.ai is committed to protecting the privacy of individuals
            whose information we process in the course of delivering our
            services. This Privacy Policy describes how we collect, use,
            disclose, store, and protect your personal data, in accordance with
            the Digital Personal Data Protection Act, 2023 (DPDP), the
            Information Technology Act, 2000, and other applicable laws in India.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              1. Scope of This Policy
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Visitors to our website (www.idto.ai).</li>
              <li>
                Users interacting with our APIs, SDKs, and related services.
              </li>
              <li>
                Individuals whose personal or sensitive data is processed by us
                in connection with onboarding, verification, fraud prevention,
                and related use cases.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              2. Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-black">Personal Data</strong> – Any data
                about an individual who is identifiable by or in relation to such
                data.
              </li>
              <li>
                <strong className="text-black">Sensitive Personal Data</strong>{" "}
                – Includes government-issued identifiers, financial information,
                biometric data, and other categories defined under applicable
                laws.
              </li>
              <li>
                <strong className="text-black">Data Principal</strong> – The
                individual to whom the personal data relates.
              </li>
              <li>
                <strong className="text-black">Grievance Officer</strong> – The
                person appointed by us to address privacy-related concerns, as
                detailed in Section 12.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              3. How We Collect Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-black">Directly from you</strong> – via
                our website, forms, SDK, APIs, or customer support channels.
              </li>
              <li>
                <strong className="text-black">
                  Through our clients/partners
                </strong>{" "}
                – when they integrate with our platform and provide us your data
                for legitimate business purposes.
              </li>
              <li>
                <strong className="text-black">
                  From authorised third-party data sources
                </strong>{" "}
                – such as government databases, identity verification partners,
                and financial institutions, based on your consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              4. Types of Data We Process
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-black">Identity Data</strong> – Name,
                date of birth, address, photograph, government ID details (e.g.,
                Aadhaar, PAN, passport).
              </li>
              <li>
                <strong className="text-black">Contact Data</strong> – Email
                address, mobile number.
              </li>
              <li>
                <strong className="text-black">Financial Data</strong> – Bank
                account details, credit bureau data.
              </li>
              <li>
                <strong className="text-black">Behavioural Data</strong> –
                Device identifiers, geolocation, fraud risk scores, transaction
                patterns.
              </li>
              <li>
                <strong className="text-black">Documents</strong> – Uploaded
                scans/images for verification.
              </li>
            </ul>
            <p className="mt-3 text-black">
              We only collect data necessary for the stated purpose and limit
              retention as per law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              5. Purpose of Processing
            </h2>
            <p className="mb-2">
              We process personal data for purposes including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Identity verification and KYC (Know Your Customer).
              </li>
              <li>Fraud detection and risk management.</li>
              <li>
                Customer onboarding for financial institutions, fintechs, and
                other regulated entities.
              </li>
              <li>Compliance with applicable legal obligations.</li>
              <li>
                Product development, analytics, and improving our services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              6. Legal Basis for Processing
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-black">Consent</strong> – Where
                required, we obtain explicit consent from you or our
                client/partner on your behalf.
              </li>
              <li>
                <strong className="text-black">Legal obligation</strong> –
                Compliance with laws and regulatory requirements.
              </li>
              <li>
                <strong className="text-black">Legitimate interests</strong> –
                For fraud prevention, security, and improvement of services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              7. Data Sharing & Disclosure
            </h2>
            <p className="mb-2">
              We do not sell your data. We may share your information only with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Authorised financial institutions, clients, or service providers.
              </li>
              <li>
                Government authorities and regulators, where required by law.
              </li>
              <li>
                Third-party vendors supporting identity verification, fraud
                prevention, or analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              8. Data Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures such
              as encryption, access control, and monitoring to safeguard your
              personal data against unauthorised access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              9. Data Retention
            </h2>
            <p>
              We retain data only as long as necessary to fulfil the purposes for
              which it was collected, or as required by applicable law and
              regulatory obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              10. Your Rights
            </h2>
            <p className="mb-2">
              As a Data Principal under the DPDP Act, you have the following
              rights:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to access your personal data.</li>
              <li>Right to correction and erasure.</li>
              <li>
                Right to withdraw consent (where processing is based on
                consent).
              </li>
              <li>Right to grievance redressal.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              11. Cookies & Tracking
            </h2>
            <p>
              Our website may use cookies and similar technologies to enhance
              your browsing experience and for analytics. You can manage cookie
              preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              12. Grievance Officer
            </h2>
            <p className="mb-2">
              For concerns, queries, or to exercise your rights under this
              policy, you may contact our Grievance Officer:
            </p>
            <p>Email: privacy@idto.ai</p>
            <p>
              Address: Payvriz Technologies Pvt Ltd, 3rd Floor, Orchid Centre,
              Golf Course Road, Gurugram, Haryana – 122002
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              13. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated "Last Updated" date.
              Please review periodically.
            </p>
          </section>
        </div>
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
