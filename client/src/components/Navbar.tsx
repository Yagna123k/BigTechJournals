"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Stories", href: "/stories" },
  { name: "Internships", href: "/category/internships" },
  { name: "Career Switch", href: "/category/career-switch" },
  { name: "Trending", href: "#" }, // Placeholder
  { name: "Featured", href: "#" }, // Placeholder
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href) && href !== "#";
  };

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto backdrop-blur-xl bg-white/70 border border-white/20 shadow-sm rounded-full px-6 h-16 flex items-center justify-between transition-all duration-300">
          {/* Left: Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2"
            >
              Big Tech Journals
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isActive(link.href)
                      ? "text-brand-blue bg-blue-50/80 shadow-sm"
                      : "text-slate-600 hover:text-brand-blue hover:bg-slate-50/50",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="#"
              className="hidden md:block text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors px-4 py-2 hover:bg-slate-50/50 rounded-full"
            >
              Submit your Story
            </Link>
            <button className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
              Sign In
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2.5 text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
            className="fixed inset-x-4 top-24 z-40 p-6 bg-white/95 backdrop-blur-2xl border border-slate-200/50 shadow-2xl rounded-3xl md:hidden origin-top"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 flex items-center justify-between group",
                    isActive(link.href)
                      ? "text-brand-blue bg-blue-50"
                      : "text-slate-900 hover:bg-slate-50",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  )}
                </Link>
              ))}

              <hr className="border-slate-100 my-4" />

              <Link
                href="#"
                className="px-4 py-3 text-lg font-medium text-slate-900 hover:text-brand-blue transition-colors hover:bg-slate-50 rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Submit your Story
              </Link>
              <button
                className="w-full mt-2 px-5 py-3.5 bg-slate-900 text-white text-base font-medium rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
