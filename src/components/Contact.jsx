import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import Footer from "../pages/Footer";
import Header from "./Header";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await axiosConfig.post(API_ENDPOINTS.CONTACT, form);

      setSubmitted(true);
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      id: "email",
      icon: <Mail className="w-5 h-5 text-white" />,
      color: "bg-purple-600 shadow-purple-600/30",
      title: "Email us",
      value: "riteshm9052@gmail.com",
      href: "mailto:riteshm9052@gmail.com",
    },
    {
      id: "phone",
      icon: <Phone className="w-5 h-5 text-white" />,
      color: "bg-emerald-500 shadow-emerald-500/30",
      title: "Call us",
      value: "+91 9653249052",
      href: "tel:+919653249052",
    },
    {
      id: "location",
      icon: <MapPin className="w-5 h-5 text-white" />,
      color: "bg-blue-500 shadow-blue-500/30",
      title: "Based in",
      value: "Mumbai, Maharashtra, India",
      href: null,
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <div className="bg-slate-50/50 text-gray-900 font-sans antialiased overflow-hidden">
        {/* ================= HERO ================= */}
        <section className="relative pt-16 pb-14 sm:pt-24 sm:pb-16 bg-gradient-to-b from-purple-50/60 via-white to-slate-50/40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] sm:h-[400px] bg-gradient-to-r from-purple-400/20 via-indigo-300/20 to-pink-400/20 blur-3xl -z-10 rounded-full opacity-60 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-sm mb-6">
              <MessageCircle className="w-4 h-4 text-purple-600" />
              <span>Get in touch</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              We would love to{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
                hear from you
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Questions, feedback, or a feature you would like to see? Drop us a message and we will
              get back to you as soon as we can.
            </p>
          </div>
        </section>

        {/* ================= FORM + INFO ================= */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Contact Info Column */}
              <div className="lg:col-span-4 order-2 lg:order-1 space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.id}
                    className="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs flex items-start gap-4"
                  >
                    <div
                      className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center shadow-lg ${info.color}`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        {info.title}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm sm:text-base font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-semibold text-gray-900">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="bg-purple-600 rounded-2xl p-5 shadow-lg shadow-purple-600/25 flex items-center gap-3 text-white">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium">
                    Your details are never shared. We only use them to reply to you.
                  </p>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-100/40 rounded-full blur-2xl pointer-events-none" />

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-12">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        Message sent!
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-sm">
                        Thanks for reaching out. We usually reply within 24-48 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-sm font-semibold text-purple-600 hover:text-purple-700 cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 relative">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Your name <span className="text-purple-600">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Kartik Maurya"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50/60 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Email address <span className="text-purple-600">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="kartik9653@gmail.com"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50/60 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50/60 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Message <span className="text-purple-600">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us what's on your mind..."
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50/60 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-lg shadow-purple-600/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;