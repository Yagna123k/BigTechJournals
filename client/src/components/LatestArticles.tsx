import JournalCard from "./JournalCard";
import { ArrowUpRight } from "lucide-react";

const latestJournals = [
  {
    title: "How I cracked Morgan Stanley Internship in 1st Year",
    preview:
      "I didn't come from a top school. Here is the exact roadmap, resources, and mistakes I avoided to crack the offer.",
    role: "SDE Intern",
    company: "Morgan Stanley",
    readTime: "10 min read",
    author: "Yagna Kusumanchi",
    date: "July 2, 2024",
    category: "Internships",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "From Service-Based to Product-Based: My Roadmap",
    preview:
      "A complete 6-month study plan that helped me switch from TCS to Amazon. Focus on DSA and System Design basics.",
    role: "SDE II",
    company: "Amazon",
    readTime: "12 min read",
    author: "Maria Rosand",
    date: "July 5, 2024",
    category: "Career Switch",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "System Design mistakes that cost me the Uber offer",
    preview:
      "I focused too much on scaling and forgot the basic API design. Here are the 5 red flags interviewers look for.",
    role: "Staff Engineer",
    company: "Uber",
    readTime: "6 min read",
    author: "Daniel Hamilton",
    date: "July 8, 2024",
    category: "Mistakes",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Art of Cold Emailing for Research Internships",
    preview:
      "How I got a research position at IIT Hyderabad by writing emails that actually get valid responses.",
    role: "Research Intern",
    company: "IIT Hyderabad",
    readTime: "5 min read",
    author: "Stephanie W.",
    date: "July 9, 2024",
    category: "Growth",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function LatestArticles() {
  return (
    <section className="py-14 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider block">
              Read the
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Latest Articles
            </h2>
          </div>

          <button className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors shadow-sm inline-flex items-center justify-center gap-2">
            View All Blogs <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Articles */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {latestJournals.map((journal, idx) => (
            <JournalCard key={idx} {...journal} />
          ))}
        </div>
      </div>
    </section>
  );
}
