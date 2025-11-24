import { Mail, Lock, User, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthLayout } from "./AuthLayout";

export const SignupPage = () => {
  return (
    <AuthLayout title="Create account" subtitle="Start your health journey today">
      <form className="space-y-5">
        {/* Name Input */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700" htmlFor="name">
            Full Name
          </label>
          <div className="relative group">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700" htmlFor="email">
            Email address
          </label>
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700" htmlFor="password">
            Password
          </label>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
            <div className="relative mt-0.5">
              <input type="checkbox" className="peer sr-only" />
              <div className="w-5 h-5 rounded border border-slate-300 bg-white peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-colors" />
              <Check size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-sm text-slate-600">
              I agree to the <Link to="#" className="text-emerald-600 hover:underline">Terms of Service</Link> and <Link to="#" className="text-emerald-600 hover:underline">Privacy Policy</Link>
            </span>
        </div>

        {/* Actions */}
        <div className="space-y-4 pt-2">
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300">
            Create account
          </button>
          
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
