"use client";

import Link from "next/link";
import { Home, RefreshCw, AlertCircle } from "lucide-react";

export default function NotFound() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 selection:bg-blue-100">
      <div className="text-center space-y-8 max-w-lg w-full">
        <div className="relative inline-flex justify-center items-center">
          <div className="relative bg-white p-4 rounded-full shadow-sm border border-slate-100">
            <AlertCircle className="w-16 h-16 text-blue-600 " />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-7xl font-extrabold text-slate-900 tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-700">Page Not Found</h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            The page you are looking for may have been moved, deleted, or never
            existed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to home
          </Link>

          <button
            onClick={handleRefresh}
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-sm active:scale-95"
          >
            <RefreshCw className="w-5 h-5 group-hover:animate-spin" />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
