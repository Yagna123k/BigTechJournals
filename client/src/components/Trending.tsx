"use client";
import { ArrowUpRight, TrendingUp, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trending = [
  {
    id: 1,
    title: "Google L4 Interview: The Hidden Rubric",
    author: "Sarah Jenkins",
    role: "Staff Engineer at Google",
    time: "2 days ago",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/stories/google-l4-rubric",
  },
  {
    id: 2,
    title: "Amazon Leadership Principles in Action",
    author: "Alex Chen",
    role: "Senior PM at Amazon",
    time: "4 hours ago",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/stories/amazon-lp-action",
  },
  {
    id: 3,
    title: "Why I left my $300k Meta job?",
    author: "Mike Ross",
    role: "Ex-Meta Engineer",
    time: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/stories/meta-resignation",
  },
];

export default function Trending() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2 bg-blue-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </span>
              <span className="text-sm font-bold text-blue-500 uppercase tracking-widest">
                Trending Now
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Most Read Stories
            </h2>
          </div>
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm inline-flex items-center gap-2">
            View Full List <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6">
          {trending.map((item, idx) => (
            <Link
              href={item.link}
              key={item.id}
              className="group relative flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center p-4 md:p-6 rounded-3xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              {/* Rank Number */}
              <div className="hidden md:flex flex-col items-center justify-center w-16 md:w-24 shrink-0">
                <span className="text-6xl font-black text-transparent bg-clip-text bg-linear-to-br from-slate-200 to-slate-100 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
                  0{idx + 1}
                </span>
              </div>

              {/* Image */}
              <div className="w-full md:w-64 h-48 md:h-40 rounded-2xl overflow-hidden shrink-0 relative shadow-sm group-hover:shadow-md transition-all">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Mobile Rank Overlay */}
                <span className="md:hidden absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center font-bold text-slate-900 shadow-sm">
                  0{idx + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 py-2">
                <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-blue-500 uppercase tracking-wider">
                  <span>{item.role}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-slate-900">
                    <User className="w-4 h-4 text-slate-400" />
                    {item.author}
                  </span>
                  <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {item.time}
                  </span>
                </div>
              </div>

              {/* Action Icon */}
              <div className="hidden md:flex justify-center items-center w-12 h-12 rounded-full border border-slate-100 text-slate-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all shrink-0">
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
