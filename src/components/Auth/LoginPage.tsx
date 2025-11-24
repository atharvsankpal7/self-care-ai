import { Mail, Lock, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthLayout } from "./AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Welcome back" subtitle="Please enter your details">
      <form className="space-y-5">
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
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <input type="checkbox" className="peer sr-only" />
              <div className="w-5 h-5 rounded border border-slate-300 bg-white peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-colors" />
              <Check size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Remember for 30 days</span>
          </label>
          <Link to="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:underline">
            Forgot password
          </Link>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
