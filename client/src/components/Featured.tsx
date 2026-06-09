"use client";
import Image from "next/image";
import {
  ArrowUpRight,
  Headphones,
  ImageIcon,
  Video,
  FileText,
} from "lucide-react";

const FEATURED_POSTS = [
  {
    id: 1,
    title:
      "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    category: "Development • Artificial Intelligence",
    date: "Oct 19",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    type: "audio",
    className: "lg:col-span-2",
  },
  {
    id: 2,
    title: "Insightful Analysis for Informed Investing",
    category: "Finance • Market",
    date: "Oct 19",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    type: "image",
    className: "lg:col-span-1",
  },
  {
    id: 3,
    title: "Understanding the Reality of Modern Journalism",
    category: "Media • Society",
    date: "Oct 19",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
    type: "video",
    className: "lg:col-span-1",
  },
  {
    id: 4,
    title: "The Art of Origami and Financial Growth",
    category: "Creative • Finance",
    date: "Oct 19",
    readTime: "10 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1701121214648-245e9c86cc92?q=80&w=880&auto=format&fit=crop",
    type: "video",
    className: "lg:col-span-1",
  },
  {
    id: 5,
    title: "Reading Between the Lines: A Guide",
    category: "Education • Literature",
    date: "Oct 19",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
    type: "image",
    className: "lg:col-span-1",
  },
];

const FeaturedCard = ({ post }: { post: (typeof FEATURED_POSTS)[0] }) => {
  let Icon = FileText;
  if (post.type === "audio") Icon = Headphones;
  if (post.type === "image") Icon = ImageIcon;
  if (post.type === "video") Icon = Video;

  return (
    <div
      className={`relative group overflow-hidden rounded-4xl h-[300px] lg:h-[400px] w-full ${
        post.className || ""
      }`}
    >
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

      <div className="absolute top-6 left-6 bg-white/90 p-2.5 rounded-full backdrop-blur-sm">
        <Icon className="w-5 h-5 text-slate-900" />
      </div>
      <div className="absolute top-6 right-6 bg-white/90 py-1.5 px-4 rounded-full backdrop-blur-sm">
        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          Featured
        </span>
      </div>

      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-white">
        <div className="text-xs md:text-sm font-medium text-slate-300 mb-2 md:mb-3 flex items-center gap-2">
          {post.category}
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 line-clamp-2 leading-tight">
          {post.title}
        </h3>
        <div className="text-xs text-slate-400 font-medium">
          {post.date} • {post.readTime}
        </div>
      </div>
    </div>
  );
};

export default function Featured() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
            See Our
          </span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Featured Blogs
          </h2>
        </div>
        <button className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer">
          View All Blogs <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {FEATURED_POSTS.map((post) => (
          <FeaturedCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
