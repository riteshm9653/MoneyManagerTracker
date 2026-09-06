// import React from "react";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-purple-50/50 via-white to-gray-50/30">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-purple-400/20 via-indigo-300/20 to-pink-400/20 blur-3xl -z-10 rounded-full opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Feature Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-sm font-medium mb-6 shadow-xs backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <span>Smart Personal Finance Tracker</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
            Take Complete Control of Your{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              Income & Expenses
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Track daily cash flow in Indian Rupees (₹), organize transactions with custom categories, analyze spending visual trends, and export automated Excel reports.
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-purple-600/25 hover:shadow-purple-600/35 transition-all duration-200 active:scale-95"
            >
              Get Started for Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 shadow-xs active:scale-95"
            >
              Log In to Account
            </Link>
          </div>

          {/* Highlights / Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>INR (₹) Standard Formatting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Excel & Email Reports</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>JWT Secure Session</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;