"use client";
import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
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
      <h2 className="text-2xl md:text-[28px] font-bold text-[#051923] tracking-tight">
        {title}
      </h2>
    </div>
  );
};

const TermsAndConditions = () => {
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
              Legal Information
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold text-[#051923] leading-tight tracking-tight mb-4">
              Terms & <span className="text-[#01497C]">Conditions.</span>
            </h1>

            <p className="text-base md:text-lg text-[#6E6E73] font-medium leading-relaxed max-w-3xl">
              These Terms govern your use of the website, services, and
              communication channels provided by GO FREE PAY LLC.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 bg-[#01497C] text-white px-5 py-3 rounded-lg shadow-md">
              <FaCheckCircle className="text-[#118C4F]" />
              <span className="text-sm font-bold tracking-wide">
                Effective Date: 1 July 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO DARK BAND */}
      <section className="bg-[#01497C] text-white border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed">
                These Terms & Conditions (“Terms”) govern your use of the
                website, services, and communication channels provided by GO
                FREE PAY LLC (“Company,” “we,” “our,” or “us”). By using our
                website, submitting information, contacting us, or opting in to
                receive SMS communications, you agree to these Terms.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.03] p-6 rounded-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#118C4F] font-bold mb-2">
                Company
              </p>
              <h3 className="text-2xl md:text-[28px] font-bold">
                GO FREE PAY LLC
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* SIDE CARD */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                <p className="text-xs uppercase tracking-widest text-[#6E6E73] font-bold mb-4">
                  Quick Links
                </p>

                <div className="flex flex-col gap-4">
                  <Link
                    href="/privacy"
                    className="group flex items-center justify-between text-sm font-bold text-[#051923] hover:text-[#01497C] transition-colors"
                  >
                    Privacy Policy
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/#contact"
                    className="group flex items-center justify-between text-sm font-bold text-[#051923] hover:text-[#01497C] transition-colors"
                  >
                    Contact Us
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* LEGAL CONTENT */}
            <div className="space-y-8 lg:space-y-12">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle number="01" title="Use of Our Services" />
                <p className="text-[#6E6E73] font-medium leading-relaxed">
                  GO FREE PAY LLC provides customer care, support, account
                  assistance, and related business services. You agree to use
                  our website and services only for lawful purposes and in
                  accordance with these Terms.
                </p>
                <p className="text-[#6E6E73] font-medium leading-relaxed mt-4">
                  You agree not to misuse our website, communication systems, or
                  services in any way that may interfere with normal operations,
                  violate applicable laws, or harm GO FREE PAY LLC or others.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle
                  number="02"
                  title="Customer Support Communications"
                />
                <p className="text-[#6E6E73] font-medium leading-relaxed">
                  When you contact us by phone, email, website form, SMS, or
                  another communication method, we may use the information you
                  provide to respond to your inquiry, provide support, manage
                  your request, or follow up regarding your account or service
                  matter.
                </p>
              </div>

              <div className="bg-[#01497C] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
                <SectionTitle number="03" title="SMS/Text Messaging Terms" />
                <p className="text-white/80 font-medium leading-relaxed">
                  By providing your mobile phone number and opting in to receive
                  SMS messages from GO FREE PAY LLC, you agree to receive text
                  messages related to customer care and support.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
                  {[
                    "Responses to customer inquiries",
                    "Support request updates",
                    "Callback confirmations",
                    "Account or service-related updates",
                    "Follow-up messages related to your request",
                    "Assistance from our customer care team",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-white/[0.03] border border-white/10 p-4 rounded-xl"
                    >
                      <FaCheckCircle className="text-[#118C4F] mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 space-y-4 text-white/80 font-medium leading-relaxed">
                  <p>
                    Message frequency may vary based on your interaction with GO
                    FREE PAY LLC. Message and data rates may apply.
                  </p>
                  <p>
                    You can opt out of SMS messages at any time by replying{" "}
                    <strong className="text-white font-bold">STOP</strong>.
                    After you reply STOP, we may send one final confirmation
                    message to confirm that you have been unsubscribed. After
                    that, you will no longer receive SMS messages from us unless
                    you opt in again.
                  </p>
                  <p>
                    For help, reply{" "}
                    <strong className="text-white font-bold">HELP</strong> or
                    contact us using the information listed below.
                  </p>
                  <p className="font-bold text-[#118C4F]">
                    SMS consent is not a condition of purchase.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle number="04" title="Opt-In Consent" />
                <p className="text-[#6E6E73] font-medium leading-relaxed">
                  You may opt in to receive SMS messages from GO FREE PAY LLC by
                  submitting a form on our website, requesting support,
                  providing your phone number to our team, or otherwise giving
                  us permission to contact you by text message.
                </p>
                <p className="text-[#6E6E73] font-medium leading-relaxed mt-4">
                  By opting in, you confirm that you are the owner or authorized
                  user of the mobile number provided and that you agree to
                  receive SMS messages from GO FREE PAY LLC.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle number="05" title="Opt-Out Instructions" />
                <p className="text-[#6E6E73] font-medium leading-relaxed">
                  You may opt out of SMS communications at any time by replying:
                </p>

                <div className="my-5 inline-flex bg-[#01497C]/10 text-[#01497C] px-6 py-3 rounded-lg font-bold tracking-widest">
                  STOP
                </div>

                <p className="text-[#6E6E73] font-medium leading-relaxed">
                  You may also contact us directly and request to be removed
                  from SMS communications. After opting out, you may still
                  receive non-SMS communications from us if permitted by law and
                  if necessary to provide services or respond to your requests.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle number="06" title="Carrier Disclaimer" />
                <p className="text-[#6E6E73] font-medium leading-relaxed">
                  Wireless carriers are not liable for delayed or undelivered
                  messages. Message and data rates may apply depending on your
                  mobile carrier and plan.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <SectionTitle number="07" title="Privacy" />
                <p className="text-[#6E6E73] font-medium leading-relaxed">
                  Your use of our website and services is also governed by our
                  Privacy Policy, which explains how we collect, use, and
                  protect your information.
                </p>

                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 mt-5 text-[#01497C] font-bold hover:gap-3 transition-all"
                >
                  View Privacy Policy <FaArrowRight />
                </Link>
              </div>

              {[
                {
                  number: "08",
                  title: "Accuracy of Information",
                  body: "You agree to provide accurate and current information when contacting us, submitting forms, or using our services. GO FREE PAY LLC is not responsible for issues caused by inaccurate, incomplete, or outdated information provided by you.",
                },
                {
                  number: "09",
                  title: "Limitation of Liability",
                  body: "To the maximum extent permitted by law, GO FREE PAY LLC is not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of our website, services, or communications.",
                },
                {
                  number: "10",
                  title: "No Guarantee of Availability",
                  body: "We aim to keep our website, services, and communication channels available and functional, but we do not guarantee uninterrupted access. Services may be unavailable due to maintenance, technical issues, carrier delays, or circumstances beyond our control.",
                },
                {
                  number: "11",
                  title: "Changes to These Terms",
                  body: "We may update these Terms from time to time. Updates will be posted on this page with a revised effective date. Continued use of our website, services, or communication channels after updates means you accept the revised Terms.",
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
                <SectionTitle number="12" title="Contact Us" />
                <p className="text-[#6E6E73] font-medium leading-relaxed mb-6">
                  If you have questions about these Terms or need help, please
                  contact us:
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
                    <p className="font-bold text-[#051923] break-all">
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
                    <p className="font-bold text-[#051923]">
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
                    <p className="font-bold text-[#051923]">getpie.io</p>
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

export default TermsAndConditions;
