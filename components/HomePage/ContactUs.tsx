"use client";
import React, { useState } from "react";

const ContactUs = () => {
  // Track form and checkbox states
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [notificationsAccepted, setNotificationsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Extra safeguard: prevent submission if terms aren't accepted
    if (!termsAccepted) return;

    // Show success state (no API for now)
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setTermsAccepted(false);
    setNotificationsAccepted(false);
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 font-outfit"
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            <div>
              <p className="text-[#118C4F] text-sm font-bold uppercase tracking-[0.15em] mb-3">
                Send A Message
              </p>
              <h2 className="text-[#051923] text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-4 tracking-tight">
                We're Ready To
                <br />
                Help.
              </h2>
              <p className="text-base md:text-lg text-[#6E6E73] font-medium leading-relaxed max-w-lg">
                Fill out the form and our customer care team will use your
                details to respond to your inquiry, support request, or service
                question.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-2 max-w-lg">
              <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 sm:p-6 transition-all hover:shadow-md">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6E6E73] mb-1.5">
                  Email
                </p>
                <p className="text-lg font-semibold text-[#01497C]">
                  info@getpiepay.com
                </p>
              </div>

              <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 sm:p-6 transition-all hover:shadow-md">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6E6E73] mb-1.5">
                  Phone
                </p>
                <p className="text-lg font-semibold text-[#051923]">
                  +1 (855) 720 1568
                </p>
              </div>

              <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 sm:p-6 transition-all hover:shadow-md">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6E6E73] mb-1.5">
                  Company
                </p>
                <p className="text-lg font-semibold text-[#051923]">
                  GO FREE PAY LLC
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-gray-100 flex flex-col justify-center min-h-[500px]">
            {isSubmitted ? (
              /* Success State UI */
              <div className="flex flex-col items-center justify-center text-center space-y-5 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#118C4F]/10 rounded-full flex items-center justify-center mb-2">
                  <svg
                    className="w-10 h-10 text-[#118C4F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#051923]">
                  Thank You!
                </h3>
                <p className="text-lg text-[#6E6E73] font-medium max-w-md leading-relaxed">
                  Your form has been submitted successfully. Our customer care
                  team will get back to you shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 font-outfit cursor-pointer text-[#01497C] font-bold hover:text-[#01497C]/80 transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Standard Form UI */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#051923]">
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01497C] focus:border-transparent transition-all text-[#051923] placeholder:text-gray-400 font-medium bg-gray-50/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#051923]">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your business"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01497C] focus:border-transparent transition-all text-[#051923] placeholder:text-gray-400 font-medium bg-gray-50/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#051923]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 000 000 0000"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01497C] focus:border-transparent transition-all text-[#051923] placeholder:text-gray-400 font-medium bg-gray-50/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#051923]">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01497C] focus:border-transparent transition-all text-[#051923] placeholder:text-gray-400 font-medium bg-gray-50/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#051923]">
                    Message *
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01497C] focus:border-transparent transition-all resize-none text-[#051923] placeholder:text-gray-400 font-medium bg-gray-50/50"
                    required
                  ></textarea>
                </div>

                <div className="space-y-5 bg-gray-50/50 p-5 rounded-lg border border-gray-100">
                  {/* Checkbox 1: Terms & Privacy (COMPULSORY) */}
                  <div className="flex items-start gap-3">
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-[#01497C] focus:ring-[#01497C] cursor-pointer"
                        required
                      />
                    </div>
                    <label
                      htmlFor="terms"
                      className="text-sm text-[#6E6E73] font-medium leading-relaxed cursor-pointer"
                    >
                      I agree to the{" "}
                      <a
                        href="/terms-and-conditions"
                        className="font-bold text-[#01497C] hover:text-[#01497C]/80 transition-colors"
                      >
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy-policy"
                        className="font-bold text-[#01497C] hover:text-[#01497C]/80 transition-colors"
                      >
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>

                  {/* Checkbox 2: Notifications Opt-In (OPTIONAL) */}
                  <div className="flex items-start gap-3">
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        type="checkbox"
                        id="notifications"
                        checked={notificationsAccepted}
                        onChange={(e) =>
                          setNotificationsAccepted(e.target.checked)
                        }
                        className="w-4 h-4 rounded border-gray-300 text-[#01497C] focus:ring-[#01497C] cursor-pointer"
                      />
                    </div>
                    <label
                      htmlFor="notifications"
                      className="text-sm text-[#6E6E73] font-medium leading-relaxed cursor-pointer"
                    >
                      <span className="font-bold">Optional:</span> I agree to
                      receive customer care and support text messages from GO
                      FREE PAY LLC / PiePay at the phone number provided.
                      Message frequency may vary. Message and data rates may
                      apply. Reply HELP for help or STOP to opt out. Consent is
                      not a condition of purchase, service, support, or
                      transaction.
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!termsAccepted}
                    className={`w-full font-outfit bg-[#01497C] text-white px-6 py-3 rounded-md text-lg font-normal transition-all duration-300 ${
                      termsAccepted
                        ? "hover:bg-[#01497C]/80 cursor-pointer"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
