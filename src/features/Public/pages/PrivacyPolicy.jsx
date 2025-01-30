import React from "react";
import Header from "../components/Header";
import Container from "../../../components/Container";

const PrivacyPolicy = () => {
  return (
    <section>
      <Container>
        <div className="pb-32 xl:pb-40">
          <Header className="bg-customPurple-400" />
          <div className="pt-20 flex flex-col gap-3 h-72 xl:h-96">
            <h1 className="text-center text-blue-950 text-4xl xl:text-6xl font-normal font-heading mt-auto">
              Infinity Lux.com Privacy Policy
            </h1>
            <p className="text-center text-gray-500 text-base xl:text-xl font-normal">
              Update on Dec 7 2024
            </p>
          </div>
          <div className="pt-10 xl:pt-20 w-[83%] mx-auto tracking-normal flex flex-col gap-6 md:gap-9 xl:gap-11">
            {/* --------------introduction--------------- */}
            <div className=" ">
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                Introduction
              </h1>
              <p className="text-gray-500  text-base xl:text-xl font-normal py-1 md:py-2 xl:py-4">
                TripNest committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website, www.tripnest.com.
                Please read this policy carefully to understand our views and
                practices regarding your information and how we will treat it.
              </p>
            </div>
            {/* -------------- Information We Collect--------------- */}
            <div>
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                Information We Collect
              </h1>
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500  text-base xl:text-xl font-normal pt-4">
                  We may collect information about you in various ways. The
                  information we may collect on the Website includes:
                </p>
                <h6 className="text-gray-500  text-base xl:text-xl font-semibold">
                  {" "}
                  Personal Data
                </h6>
                <p className="text-gray-500  text-base xl:text-xl font-normal">
                  Personal information, such as your name, email address, phone
                  number, and payment information, that you voluntarily provide
                  when creating an account, submitting a booking inquiry, or
                  contacting us.
                </p>
                <h6 className="text-gray-500  text-base xl:text-xl font-semibold">
                  {" "}
                  Non-Personal Data
                </h6>
                <p className="text-gray-500  text-base xl:text-xl font-normal">
                  Information automatically collected when you access the
                  Website, such as your IP address, browser type, operating
                  system, access times, and the pages you view.
                </p>
                <h6 className="text-gray-500  text-base xl:text-xl font-semibold">
                  Cookies and Tracking Technologies
                </h6>
                <p className="text-gray-500  text-base xl:text-xl font-normal">
                  We may use cookies, web beacons, and other tracking
                  technologies to collect information about your activities on
                  the Website.
                </p>
              </div>
            </div>
            {/* -------------- How We Use Your Information--------------- */}
            <div>
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                How We Use Your Information
              </h1>
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500  text-base xl:text-xl font-normal pt-4">
                  We use the information we collect about you to:
                </p>
                <ul className="text-gray-500  text-base xl:text-xl font-normal pt-4 xl:pt-8 pl-3 ml-3 list-disc">
                  <li>
                    Facilitate bookings and other services on the Website.
                  </li>
                  <li>
                    Send administrative information, including confirmations,
                    invoices, and updates.
                  </li>
                  <li>Respond to inquiries and customer service requests.</li>
                  <li>Personalize your experience on the Website.</li>
                  <li>Improve our Website’s functionality and content.</li>
                  <li>Conduct analytics and monitor usage trends.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>
            </div>
            {/* -------------- Sharing Your Information--------------- */}
            <div>
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                Sharing Your Information
              </h1>
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500  text-base xl:text-xl font-normal pt-4">
                  We may share your information with:
                </p>
                <ul className="text-gray-500  text-base xl:text-xl font-normal pt-4 xl:pt-8 pl-2 ml-3 list-disc">
                  <li>
                    Service Providers: Third parties that perform services on
                    our behalf, such as payment processing and website hosting.
                  </li>
                  <li>
                    Business Partners: When you book services or accommodations
                    provided by third-party partners.
                  </li>
                  <li>
                    Legal Obligations: If required by law, to comply with legal
                    processes, or to protect our rights.
                  </li>
                  <li>
                    Business Transfers: In connection with or during
                    negotiations of any merger, sale of company assets,
                    financing, or acquisition of all or a portion of our
                    business.
                  </li>
                  <li>Improve our Website’s functionality and content.</li>
                </ul>
              </div>
            </div>
            {/* -------------- Your Rights--------------- */}
            <div>
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                Your Rights
              </h1>
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500  text-base xl:text-xl font-normal pt-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="text-gray-500  text-base xl:text-xl font-normal pt-4 xl:pt-8 pl-2 ml-3 list-disc">
                  <li>Access, correct, or delete your personal data.</li>
                  <li>
                    Restrict or object to certain processing of your personal
                    data.
                  </li>
                  <li>
                    Withdraw consent where processing is based on your consent.
                  </li>
                  <li>
                    Lodge a complaint with a data protection authority if you
                    believe your rights have been violated.
                  </li>
                </ul>
                <p className="text-gray-500  text-base xl:text-xl font-normal">
                  To exercise your rights, contact us at tripnest@gmail.com.
                </p>
              </div>
            </div>
            {/* -------------- Data Security--------------- */}
            <div>
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                Data Security
              </h1>
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500  text-base xl:text-xl font-normal pt-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal data. However, no method of
                  transmission over the Internet or electronic storage is
                  completely secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>
            {/* -------------- Third-Party Links--------------- */}
            <div>
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                Third-Party Links
              </h1>
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500  text-base xl:text-xl font-normal pt-4">
                  The Website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of such
                  sites. We encourage you to read their privacy policies before
                  providing any personal information.
                </p>
              </div>
            </div>
            {/* -------------- Children's Privacy--------------- */}
            <div>
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                Children’s Privacy
              </h1>
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500  text-base xl:text-xl font-normal pt-4">
                  Our Website is not directed to individuals under the age of
                  13, and we do not knowingly collect personal information from
                  children. If you believe we have collected information from a
                  child under 13, please contact us at tripnest@gmail.com.
                </p>
              </div>
            </div>

            {/* -------------- Children's Privacy--------------- */}
            <div>
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                Changes to This Privacy Policy
              </h1>
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500  text-base xl:text-xl font-normal pt-4">
                  We may update this Privacy Policy from time to time. We
                  encourage you to review this Privacy Policy periodically to
                  stay informed about how we are protecting the information we
                  collect.
                </p>
              </div>
            </div>

            {/* -------------- Your Rights--------------- */}
            <div>
              <h1 className="text-[#141414] text-xl md:text-2xl xl:text-[32px] font-normal font-heading py-1 md:py-2 xl:py-4">
                Contact Us
              </h1>
              <div className="flex flex-col gap-4">
                <p className="text-gray-500  text-base xl:text-xl font-normal pt-4">
                  If you have any questions or concerns about this Privacy
                  Policy or our practices, please contact us at:
                </p>

                <div className="text-gray-500  text-base xl:text-xl font-normal">
                  <p>Email: tripnest@gmail.com</p>
                  <p>Phone: +959756895143</p>
                  <p>
                    Address: No 101, Kan Street, Hlaing, Township, Yangon,
                    Myanmar, 11051
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
