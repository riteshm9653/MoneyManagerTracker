import { Link } from "react-router-dom";
import {
  Wallet,
  Target,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Users,
  Heart,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";
import Footer from "../pages/Footer";
import Header from "./Header";

const values = [
  {
    icon: <Target className="w-6 h-6 text-white" />,
    color: "bg-purple-600 shadow-purple-600/30",
    title: "Clarity first",
    desc: "No jargon, no clutter. Just a clean ledger that shows exactly where every rupee comes from and goes.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    color: "bg-emerald-500 shadow-emerald-500/30",
    title: "Privacy by design",
    desc: "JWT-secured sessions and encrypted data. Your financial life stays yours — no ads, no data selling.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    color: "bg-sky-400 shadow-sky-400/30",
    title: "Built for growth",
    desc: "Visual trends, monthly reports, and category insights that actually help you save more, not just log more.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    color: "bg-pink-500 shadow-pink-500/30",
    title: "Made for India",
    desc: "Native ₹ formatting with the Indian numbering system — built around how you actually manage money.",
  },
];

const stats = [
  { label: "Built with", value: "React + Spring Boot" },
  { label: "Currency support", value: "INR (₹)" },
  { label: "Reports", value: "Excel & Email" },
  { label: "Security", value: "JWT Encrypted" },
];

const About = () => {
  return (
    
        <div className="bg-white font-sans text-gray-800">
            <Header />
    <div className="bg-slate-50/50 text-gray-900 font-sans antialiased overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-purple-50/60 via-white to-slate-50/40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] sm:h-[420px] bg-gradient-to-r from-purple-400/20 via-indigo-300/20 to-pink-400/20 blur-3xl -z-10 rounded-full opacity-60 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-sm mb-6">
            <Wallet className="w-4 h-4 text-purple-600" />
            <span>About Money Manager</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
            We built the finance app{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              we wished existed
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Money Manager started as a simple idea — a personal ledger that speaks in rupees,
            not generic dollars, and shows your money story in one clear screen instead of
            ten confusing tabs.
          </p>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-base sm:text-lg font-extrabold text-purple-700">{s.value}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/40 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Why we started</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Most finance apps are built for someone else currency and someone else
                  spending habits. We wanted something that felt native — ₹ formatting,
                  category tags that make sense for Indian households, and reports you can
                  actually hand to your CA without reformatting them first.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                Our mission is simple
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Give every person a clear, honest picture of their money — without spreadsheets,
                without guesswork, and without handing your data to advertisers.
              </p>
              <div className="mt-8">
                <Link to="/signup" className="inline-block w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-lg shadow-purple-600/25 transition-all duration-200 hover:-translate-y-0.5">
                    <span>Start your ledger</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES GRID ================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              What we stand for
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              A few principles that shape every feature we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 pt-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="relative bg-slate-50/60 rounded-2xl p-6 pt-10 border border-gray-100 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`absolute -top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${v.color}`}
                >
                  {v.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM / MAKER CARD ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-xl text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mx-auto shadow-lg shadow-purple-600/30">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-5 text-xl sm:text-2xl font-bold text-gray-900">
              Built independently, one release at a time
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Money Manager is developed as a personal project — every feature, from the
              dashboard charts to the Excel exports, is built and tested end to end before
              it ships.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default About;