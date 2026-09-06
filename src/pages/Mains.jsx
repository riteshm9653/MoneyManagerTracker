import { Link } from "react-router-dom";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  FileSpreadsheet,
  ShieldCheck,
  Landmark,
  ArrowRight,
  CheckCircle2,
  PieChart,
  Zap,
  Gauge,
} from "lucide-react";
import { motion } from "framer-motion";
const Mains = () => {
  const step = [
  {
    id: 1,
    title: "Have perfect control",
    desc: "over all your daily expenses, income streams, and category-wise spending habits.",
    icon: <Gauge size={28} className="text-white" />,
    color: "bg-emerald-500 shadow-emerald-500/30",
  },
  {
    id: 2,
    title: "Get a quick overview",
    desc: "about your total incomes and expenses at a glance and in one place with live charts.",
    icon: <PieChart size={28} className="text-white" />,
    color: "bg-pink-500 shadow-pink-500/30",
  },
  {
    id: 3,
    title: "Use our smart budgets",
    desc: "to track monthly goals, prevent overspending, and grow your personal savings.",
    icon: <Wallet size={28} className="text-white" />,
    color: "bg-sky-400 shadow-sky-400/30",
  },
  {
    id: 4,
    title: "Export & share reports",
    desc: "download detailed Excel sheets or email financial summaries in one click.",
    icon: <FileSpreadsheet size={28} className="text-white" />,
    color: "bg-purple-600 shadow-purple-600/30",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
  return (
    <div className="">
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28 bg-gradient-to-b from-purple-50/60 via-white to-slate-50/50">
      
      {/* Dynamic Animated Ambient Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] lg:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-purple-500/20 via-indigo-400/20 to-pink-400/20 blur-3xl -z-10 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Main Hero Copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-6 text-center lg:text-left"
          >
            {/* Feature Badge */}
            <motion.div variants={fadeInUp} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-800 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-md">
                <Zap className="w-4 h-4 text-purple-600 fill-purple-600 shrink-0" />
                <span>Smart Personal Finance Tracker</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.12]"
            >
              Take Control of Your{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
                Income & Expenses
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              Track daily cash flow in Indian Rupees (₹), organize transactions with custom categories, analyze visual trends, and export automated Excel reports.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start"
            >
              <Link to="/signup" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-purple-600/30 hover:shadow-purple-600/40 transition-all duration-200"
                >
                  <span>Get Started for Free</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </motion.button>
              </Link>

              <Link to="/login" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-7 py-3.5 rounded-xl font-bold text-base shadow-xs transition-all duration-200"
                >
                  Log In to Account
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 pt-6 border-t border-gray-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs sm:text-sm text-gray-600 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>INR (₹) Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>Excel & Email Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>JWT Secure Session</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive UI Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none relative"
          >
            {/* Background Aura */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 rounded-3xl blur-2xl opacity-30" />

            {/* Main Interactive Floating Dashboard Component */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white/95 backdrop-blur-xl border border-purple-100/80 rounded-2xl shadow-2xl p-5 sm:p-6 space-y-5"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                  Live Preview
                </span>
              </div>

              {/* Balance Header */}
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Ledger Balance</p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-gray-900">₹ 1,24,500.00</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    +12.4%
                  </span>
                </div>
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100/80">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold mb-1">
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Income</span>
                  </div>
                  <span className="font-mono text-base font-bold text-emerald-700">+ ₹ 1,80,000</span>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-100/80">
                  <div className="flex items-center gap-2 text-rose-800 text-xs font-bold mb-1">
                    <TrendingDown className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Expenses</span>
                  </div>
                  <span className="font-mono text-base font-bold text-rose-700">– ₹ 55,500</span>
                </div>
              </div>

              {/* Mock Recent Activity Items */}
              <div className="space-y-2.5 pt-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Recent Activity</p>
                
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-gray-50/80 hover:bg-purple-50/50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-md bg-purple-100 text-purple-700">
                      <PieChart className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Client Retainer</p>
                      <p className="text-[10px] text-gray-500">Income • Today</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-600">+ ₹ 45,000</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-lg bg-gray-50/80 hover:bg-purple-50/50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-md bg-rose-100 text-rose-700">
                      <TrendingDown className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Office Lease</p>
                      <p className="text-[10px] text-gray-500">Expense • Yesterday</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-rose-600">- ₹ 18,500</span>
                </div>
              </div>
            </motion.div>

            {/* Overlay Floating Card 1: Excel Sync Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-purple-100 rounded-xl p-3 shadow-xl flex items-center gap-3 z-10"
            >
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                <FileSpreadsheet className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Excel Export Ready</p>
                <p className="text-[10px] text-gray-500">Auto Email Sync Enabled</p>
              </div>
            </motion.div>

            {/* Overlay Floating Card 2: Security Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-purple-100 rounded-xl p-2.5 shadow-xl flex items-center gap-2 z-10"
            >
              <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
              <span className="text-xs font-bold text-gray-800">256-bit Encrypted</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
    <div className="bg-slate-50/50 text-gray-900 font-sans antialiased overflow-hidden">
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-purple-50/50 via-white to-gray-50/30">
        {/* Decorative Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-purple-400/20 via-indigo-300/20 to-pink-400/20 blur-3xl -z-10 rounded-full opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Copy Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Feature Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-sm font-medium mb-6 shadow-xs backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Built for everyday accounts in ₹</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
                Every rupee,{" "}
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
                  accounted for.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Money Manager keeps your income, expenses, and monthly budget in one clear ledger with real-time analytics and simple automated reports.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signup">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base shadow-lg shadow-purple-500/25 transition-all duration-200 hover:-translate-y-0.5">
                    <span>Create your account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link to="/login">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-semibold text-base shadow-xs transition-all duration-200 hover:-translate-y-0.5">
                    Log in
                  </button>
                </Link>
              </div>
            </div>

            {/* Visual Column (Ledger Preview) */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative">
                {/* Visual Card Blur Halo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-20" />

                <div className="relative bg-white border border-gray-100 rounded-2xl shadow-2xl p-6 sm:p-8">
                  {/* Ledger Header */}
                  <div className="flex justify-between items-baseline pb-4 mb-4 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-500">This months ledger</span>
                    <span className="font-mono text-2xl font-bold text-gray-900">₹ 1,24,500</span>
                  </div>

                  {/* Income Row */}
                  <div className="flex justify-between items-center py-3 border-b border-dashed border-gray-100">
                    <div className="flex items-center gap-2.5 text-gray-600 text-sm font-medium">
                      <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-600">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <span>Income</span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-emerald-600">+ ₹ 1,80,000</span>
                  </div>

                  {/* Expense Row */}
                  <div className="flex justify-between items-center py-3 border-b border-dashed border-gray-100">
                    <div className="flex items-center gap-2.5 text-gray-600 text-sm font-medium">
                      <div className="p-1.5 rounded-md bg-rose-50 text-rose-600">
                        <TrendingDown className="w-4 h-4" />
                      </div>
                      <span>Expenses</span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-rose-600">– ₹ 55,500</span>
                  </div>

                  {/* Total Balance */}
                  <div className="flex justify-between items-center pt-4 mt-2 border-t-2 border-gray-900 font-semibold text-gray-900">
                    <span>Balance carried forward</span>
                    <span className="font-mono text-base">₹ 1,24,500</span>
                  </div>
                </div>

                {/* Sub Card - Excel Report */}
                <div className="mt-4 bg-white/80 backdrop-blur-md border border-gray-200/80 rounded-xl p-4 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Monthly Excel report</h4>
                      <p className="text-xs text-gray-500">Generated & emailed automatically</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                    Ready
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS SECTION ---------- */}
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How it works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Four simple steps between you and complete financial clarity.
          </p>
        </div>

        {/* Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 pt-6">
          {step.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-2xl p-8 pt-12 shadow-xl shadow-slate-200/60 border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50 flex flex-col items-start"
            >
              {/* Top Floating Circular Icon Badge */}
              <div
                className={`absolute -top-8 left-8 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${step.color}`}
              >
                {step.icon}
              </div>

              {/* Step Title & Description */}
              <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
      </section>
      {/* ---------- FEATURE SHOWCASE SECTION ---------- */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Snapshot Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">System Snapshot</h3>
                </div>

                <div className="space-y-4 font-normal">
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-gray-100 text-sm">
                    <span className="text-gray-500">Categorized spending</span>
                    <strong className="font-mono text-gray-900 font-semibold">INR Standard (₹)</strong>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-gray-100 text-sm">
                    <span className="text-gray-500">Monthly exports</span>
                    <strong className="font-mono text-gray-900 font-semibold">Excel & Email</strong>
                  </div>
                  <div className="flex justify-between items-center py-2.5 text-sm">
                    <span className="text-gray-500">Authentication</span>
                    <strong className="font-mono text-gray-900 font-semibold">JWT Secured</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
                Gain financial clarity, one entry at a time
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Manage daily spending, track income, and review monthly trends without digging through raw spreadsheet files yourself.
              </p>

              <div className="mt-8 space-y-4 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Track income and expenses</h4>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Categorize every transaction with custom icons and native rupee formatting built in.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Get complete Excel reports</h4>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Download your monthly data anytime, or have it emailed directly to your inbox automatically.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/login">
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5">
                    <span>Log in to your dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
     </div>
  );
};

export default Mains;