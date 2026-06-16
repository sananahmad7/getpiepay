"use client";
import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLock,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

interface SectionTitleProps {
  number: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title }) => {
  return (
    <div className="flex items-start gap-4 mb-4">
      <span className="min-w-10 h-10 rounded-full bg-[#01497C]/10 text-[#01497C] flex items-center justify-center text-sm font-bold">
        {number}
      </span>
      <h2 className="text-2xl md:text-[28px] font-bold text-[#01497C] tracking-tight">
        {title}
      </h2>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <main className="w-full font-outfit bg-gray-50 overflow-hidden">
      {/* HERO */}
      <section className="relative w-full pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gray-50 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[55%] h-full bg-gradient-to-bl from-[#01497C]/5 to-transparent -skew-x-12 opacity-90"></div>
          <div className="absolute bottom-[-120px] left-[-120px] w-[280px] h-[280px] bg-[#01497C]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex mb-6 px-3 py-1 bg-[#01497C]/10 text-[#01497C] text-xs font-bold tracking-widest uppercase rounded-sm">
              Privacy & Data Protection
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold text-[#01497C] leading-tight tracking-tight mb-4">
              Privacy <span className="text-[#01497C]">Policy.</span>
            </h1>

            <p className="text-base md:text-lg text-[#6E6E73] font-medium leading-relaxed max-w-3xl">
              GO FREE PAY LLC respects your privacy. This policy explains how we
              collect, use, disclose, and protect your information.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 bg-[#01497C] text-white px-5 py-3 rounded-lg shadow-md">
              <FaLock className="text-[#118C4F]" />
              <span className="text-sm font-bold tracking-wide">
                Effective Date: 1 July 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DARK INTRO */}
      <section className="bg-[#01497C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed">
                This Privacy Policy explains how we collect, use, disclose, and
                protect information when you visit our website, contact us, use
                our services, or communicate with us by phone, email, SMS, or
                other communication channels.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.03] p-6 rounded-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#118C4F] font-bold mb-2">
                Privacy First
              </p>
              <h3 className="text-2xl md:text-[28px] font-bold">
                Secure. Clear. Responsible.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Sidebar Quick Links */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                <p className="text-xs uppercase tracking-widest text-[#6E6E73] font-bold mb-4">
                  Quick Links
                </p>

                <div className="flex flex-col gap-4">
                  <Link
                    href="/terms"
                    className="group flex items-center justify-between text-sm font-bold text-[#01497C] hover:text-[#01497C] transition-colors"
                  >
                    Terms & Conditions
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/#contact"
                    className="group flex items-center justify-between text-sm font-bold text-[#01497C] hover:text-[#01497C] transition-colors"
                  >
                    Contact Us
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Policy Content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle number="01" title="Information We Collect" />

                <p className="text-[#6E6E73] font-medium leading-relaxed mb-6">
                  We may collect the following types of information:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Name",
                    "Phone number",
                    "Email address",
                    "Business name",
                    "Account or support request details",
                    "Messages, inquiries, and communication history",
                    "Information submitted through contact forms, support forms, or service requests",
                    "Technical information such as IP address, browser type, device information, and website usage data",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-gray-50 border border-gray-100 p-4 rounded-xl"
                    >
                      <FaCheckCircle className="text-[#118C4F] mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium text-[#6E6E73]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-[#6E6E73] font-medium leading-relaxed mt-6">
                  We collect this information when you voluntarily provide it to
                  us, such as when you contact our customer support team,
                  request assistance, submit a form, communicate with our
                  agents, or opt in to receive SMS messages.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle number="02" title="How We Use Your Information" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Respond to customer inquiries",
                    "Provide customer support",
                    "Send account, service, or support-related updates",
                    "Confirm callbacks, appointments, or service requests",
                    "Communicate with you about your account or inquiry",
                    "Improve our website, services, and customer support operations",
                    "Maintain records for business, security, and compliance purposes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-gray-50 border border-gray-100 p-4 rounded-xl"
                    >
                      <FaCheckCircle className="text-[#01497C] mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium text-[#6E6E73]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#01497C] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
                <SectionTitle number="03" title="SMS Communications" />

                <p className="text-white/80 font-medium leading-relaxed">
                  By providing your mobile phone number and opting in, you agree
                  to receive SMS/text messages from GO FREE PAY LLC. These
                  messages may include customer care messages, support
                  responses, callback confirmations, service updates, and
                  replies to your inquiries.
                </p>

                <div className="mt-6 bg-white/[0.03] border border-white/10 p-5 sm:p-6 rounded-xl">
                  <p className="text-white/80 font-medium leading-relaxed">
                    Message frequency may vary depending on your interaction
                    with us. Message and data rates may apply. You may opt out
                    at any time by replying{" "}
                    <strong className="text-white font-bold">STOP</strong>. You
                    may request assistance by replying{" "}
                    <strong className="text-white font-bold">HELP</strong>.
                  </p>
                  <p className="font-bold text-[#118C4F] mt-4">
                    SMS consent is not a condition of purchase.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle
                  number="04"
                  title="SMS Consent and Data Sharing"
                />

                <div className="space-y-4 text-[#6E6E73] font-medium leading-relaxed">
                  <p>
                    GO FREE PAY LLC does not sell, rent, or share SMS opt-in
                    consent, phone numbers, or text messaging data with third
                    parties or affiliates for marketing or promotional purposes.
                  </p>
                  <p>
                    No mobile information will be shared with third parties or
                    affiliates for marketing or promotional purposes. All the
                    above categories exclude text messaging originator opt-in
                    data and consent; this information will not be shared with
                    any third parties.
                  </p>
                  <p>
                    We may share limited information with service providers only
                    as necessary to deliver our services, operate our
                    communication systems, comply with legal requirements, or
                    protect our rights. These service providers are not
                    permitted to use SMS consent data for their own marketing
                    purposes.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle number="05" title="How We Share Information" />

                <p className="text-[#6E6E73] font-medium leading-relaxed mb-6">
                  We may share your information with:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Service providers who help us operate our business, website, customer support, or communication systems",
                    "Legal, regulatory, or government authorities when required by law",
                    "Professional advisors such as legal, accounting, or compliance consultants",
                    "Business partners only when necessary to fulfill services you requested",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-gray-50 border border-gray-100 p-4 rounded-xl"
                    >
                      <FaCheckCircle className="text-[#118C4F] mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium text-[#6E6E73]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-bold text-[#01497C]">
                  We do not sell your personal information.
                </p>
              </div>

              {[
                {
                  number: "06",
                  title: "Data Security",
                  body: "We use reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission or electronic storage is completely secure, and we cannot guarantee absolute security.",
                },
                {
                  number: "07",
                  title: "Data Retention",
                  body: "We retain personal information only as long as reasonably necessary for business, support, legal, regulatory, and compliance purposes.",
                },
                {
                  number: "08",
                  title: "Your Choices",
                  body: "You may contact us to request access, correction, or deletion of your personal information, subject to applicable legal and business record requirements. You may opt out of SMS messages at any time by replying STOP.",
                },
                {
                  number: "09",
                  title: "Links to Other Websites",
                  body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices, policies, or content of third-party websites.",
                },
                {
                  number: "10",
                  title: "Changes to This Privacy Policy",
                  body: "We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.",
                },
              ].map((section) => (
                <div
                  key={section.number}
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm"
                >
                  <SectionTitle number={section.number} title={section.title} />
                  <p className="text-[#6E6E73] font-medium leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle number="11" title="Contact Us" />
                <p className="text-[#6E6E73] font-medium leading-relaxed mb-6">
                  If you have questions about this Privacy Policy or our privacy
                  practices, please contact us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="mailto:info@getpiepay.com"
                    className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-[#01497C] transition-all"
                  >
                    <FaEnvelope className="text-[#01497C] mb-3 text-lg" />
                    <p className="text-xs uppercase tracking-widest text-[#6E6E73] font-bold mb-1">
                      Email
                    </p>
                    <p className="font-bold text-[#01497C] break-all">
                      info@getpiepay.com
                    </p>
                  </a>

                  <a
                    href="tel:+18557201568"
                    className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-[#01497C] transition-all"
                  >
                    <FaPhoneAlt className="text-[#01497C] mb-3 text-lg" />
                    <p className="text-xs uppercase tracking-widest text-[#6E6E73] font-bold mb-1">
                      Phone
                    </p>
                    <p className="font-bold text-[#01497C]">
                      +1 (855) 720 1568
                    </p>
                  </a>

                  <a
                    href="https://getpie.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-[#01497C] transition-all"
                  >
                    <FaGlobe className="text-[#01497C] mb-3 text-lg" />
                    <p className="text-xs uppercase tracking-widest text-[#6E6E73] font-bold mb-1">
                      Website
                    </p>
                    <p className="font-bold text-[#01497C]">getpie.io</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
