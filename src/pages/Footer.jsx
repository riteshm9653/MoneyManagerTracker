// import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  Wallet,
  ArrowRight,
  ShieldCheck,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#0d0b18] pt-16 pb-8 text-slate-200 border-t border-purple-900/30 font-sans">
      {/* Top Gradient Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5 text-xl font-extrabold text-white tracking-tight">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-900/40">
                  <Wallet size={20} />
                </div>
                <span>Money Manager</span>
              </Link>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
                A modern personal ledger for tracking income, daily expenses, and automated budgets with native Indian Rupee (₹) support.
              </p>
            </div>

            {/* Social Links */}
            <ul className="flex items-center gap-3 mt-6">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-200 shadow-sm"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-200 shadow-sm"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@moneymanager.com"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-200 shadow-sm"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li><Link to="/dashboard" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">Dashboard</Link></li>
              <li><Link to="/income" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">Income Tracking</Link></li>
              <li><Link to="/expenses" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">Expense Tracking</Link></li>
              <li><Link to="/reports" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">Excel Reports</Link></li>
              <li><Link to="/categories" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">Categories</Link></li>
            </ul>
          </div>

          {/* Support Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li><Link to="/help" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">Help Center</Link></li>
              <li><Link to="/security" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">Security</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">Contact Us</Link></li>
              <li><Link to="/faq" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">FAQs</Link></li>
              <li><Link to="/privacy" className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-150 inline-block">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Stay Updated</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Get monthly financial tips and new feature releases directly to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="w-full">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full py-2.5 pl-4 pr-12 rounded-xl border border-purple-500/25 bg-white/5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 text-white hover:scale-105 transition-all duration-200 shadow-md shadow-purple-900/40"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>

            {/* Form Confirmation Feedback */}
            {subscribed && (
              <div className="flex items-center gap-2 mt-2 text-xs text-emerald-400 transition-all">
                <CheckCircle2 size={14} />
                <span>Successfully subscribed!</span>
              </div>
            )}

            <div className="flex items-center gap-1.5 mt-3 text-xs text-emerald-400">
              <ShieldCheck size={14} />
              <span>JWT Encrypted &amp; Spam-free</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10 border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {currentYear} Money Manager. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Built with <Heart size={13} className="text-pink-500 fill-pink-500 inline" /> for a clearer financial future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;