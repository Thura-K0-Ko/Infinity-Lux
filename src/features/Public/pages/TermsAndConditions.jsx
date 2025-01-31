import React from "react";
import Header from "../components/Header";
import Container from "../../../components/Container";

const TermsAndConditions = () => {
  return (
    <section>
      <Container>
        <div className="pb-32 xl:pb-40">
          <Header className="bg-customPurple-400" />
          <div className="pt-20 flex flex-col gap-3 h-64 md:h-96">
            <h1 className="text-center text-blue-950 text-2xl md:text-6xl font-normal font-heading mt-auto ">
              Infinity Lux.com Terms & Conditions
            </h1>
            <p className="text-center text-gray-500 text-base md:text-xl font-normal">
              Update on Dec 7 2024
            </p>
          </div>
          <div className="pt-10 xl:pt-20 md:w-[83%] mx-auto flex flex-col gap-6 md:gap-9">
            {/* -------------- Acceptance of Terms--------------- */}
            <div className=" ">
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Acceptance of Terms
              </h1>
              <p className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4">
                By accessing or using this website, you agree to be bound by
                these Terms & Conditions. If you do not agree, please refrain
                from using the site.
              </p>
            </div>
            {/* -------------- Use of the Website--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Use of the Website
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    This website is intended for individuals seeking information
                    about TripNest and its services.
                  </li>
                  <li>
                    You may not use the website for any unlawful or prohibited
                    purposes, including but not limited to the dissemination of
                    harmful or malicious content.
                  </li>
                </ul>
              </div>
            </div>
            {/* -------------- Intellectual Property--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Intellectual Property
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    ll content, images, trademarks, and logos displayed on this
                    website are the property of TripNest or its licensors.
                  </li>
                  <li>
                    Unauthorized use, reproduction, or distribution of website
                    content is strictly prohibited.
                  </li>
                </ul>
              </div>
            </div>
            {/* --------------Booking Policies--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Booking Policies
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    Reservations made through this website are subject to the
                    hotel’s booking terms and conditions, including cancellation
                    and refund policies.
                  </li>
                  <li>
                    Accurate information must be provided during the booking
                    process. The hotel reserves the right to cancel bookings for
                    false or incomplete information.
                  </li>
                </ul>
              </div>
            </div>

            {/* --------------Payment and Pricing--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Payment and Pricing
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    Prices displayed on the website are subject to change
                    without notice.
                  </li>
                  <li>
                    Payment terms, taxes, and additional charges will be clearly
                    stated during the booking process.
                  </li>
                </ul>
              </div>
            </div>

            {/* --------------Cancellation and Refunds--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Cancellation and Refunds
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    The cancellation policy, including applicable fees and
                    refund timelines, is detailed in the booking confirmation.
                  </li>
                  <li>
                    Refunds, if applicable, will be processed as per the
                    specified terms.
                  </li>
                </ul>
              </div>
            </div>

            {/* --------------User Account--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                User Account
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    Users may be required to create an account for booking or
                    accessing exclusive features.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account credentials. Any activity under your account is
                    your responsibility.
                  </li>
                </ul>
              </div>
            </div>

            {/* --------------Privacy and Data Protection--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Privacy and Data Protection
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    Personal information collected on this website is governed
                    by our Privacy Policy.
                  </li>
                  <li>
                    By using the website, you consent to the collection, use,
                    and storage of your information as described in the policy.
                  </li>
                </ul>
              </div>
            </div>

            {/* --------------Third-Party Links--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Third-Party Links
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    This website may contain links to third-party websites.
                  </li>
                  <li>
                    TripNest is not responsible for the content, policies, or
                    practices of these websites. Use of third-party sites is at
                    your own risk.
                  </li>
                </ul>
              </div>
            </div>
            {/* --------------Liability Disclaimer--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Liability Disclaimer
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    TripNest does not guarantee the accuracy or completeness of
                    information on this website.
                  </li>
                  <li>
                    The hotel is not liable for any direct, indirect, or
                    consequential damages arising from the use of this website.
                  </li>
                </ul>
              </div>
            </div>

            {/* --------------Modifications to Terms--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Modifications to Terms
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    TripNest reserves the right to modify these terms and
                    conditions at any time without prior notice.
                  </li>
                  <li>
                    Users are encouraged to review the terms periodically.
                  </li>
                </ul>
              </div>
            </div>
            {/* --------------Contact Information--------------- */}
            <div>
              <h1 className="text-customGray-500 text-2xl md:text-[32px] font-normal font-heading py-2 md:py-4">
                Contact Information
              </h1>
              <div>
                <ul className="text-gray-500 text-base md:text-xl font-normal py-2 md:py-4 pl-6 list-disc list-outside">
                  <li>
                    For questions or concerns regarding these terms, please
                    contact us:
                  </li>
                  <li>Email: tripnest@gmail.com</li>
                  <li>Phone: +959756895143</li>
                  <li>
                    Address: No 101, Kan Street, Hlaing, Township, Yangon,
                    Myanmar, 11051
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TermsAndConditions;
