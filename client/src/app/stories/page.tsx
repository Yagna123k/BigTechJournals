"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import StoriesHeader from "@/components/stories/StoriesHeader";
import FiltersBar from "@/components/stories/FiltersBar";
import StoriesGrid from "@/components/stories/StoriesGrid";
import Pagination from "@/components/stories/Pagination";
import { StoryCardProps } from "@/components/stories/StoryCard";

// --- MOCK DATA ---
const ALL_STORIES: StoryCardProps[] = [
  {
    id: "1",
    title: "I failed 8 interviews before cracking Amazon",
    excerpt:
      "The rejection emails were piling up. My confidence was at an all-time low. Here is exactly what I changed in my preparation strategy to finally get the offer.",
    category: "Interview Prep",
    readTime: "6 min read",
    views: "12.5k",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
    outcome: { type: "positive", text: "Offer Received" },
    careerStage: "Student",
  },
  {
    id: "2",
    title: "From Service-Based to Product-Based: My 6-Month Roadmap",
    excerpt:
      "Switching from a service company to a product giant seemed impossible. I had to unlearn legacy coding practices and master system design. This was my daily schedule.",
    category: "Career Switch",
    readTime: "8 min read",
    views: "8.2k",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    outcome: { type: "positive", text: "Transition Successful" },
    careerStage: "Full-time",
  },
  {
    id: "3",
    title: "My Internship at Google: Expectation vs Reality",
    excerpt:
      "I thought I would be writing code all day. Instead, I spent 40% of my time reading docs and attending meetings. Here is how I still managed to convert it to a PPO.",
    category: "Internships",
    readTime: "5 min read",
    views: "15k",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop",
    outcome: { type: "positive", text: "PPO Secured" },
    careerStage: "Intern",
  },
  {
    id: "4",
    title: "Why I Left My High-Paying Job at a Unicorn Startup",
    excerpt:
      "The money was great, but the burnout was real. I share the red flags I ignored and why prioritizing mental health was the best career decision I ever made.",
    category: "Startups",
    readTime: "7 min read",
    views: "9.1k",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    outcome: { type: "neutral", text: "Resigned" },
    careerStage: "Full-time",
  },
  {
    id: "5",
    title: "Mastering Dynamic Programming: The Pattern That Clicked",
    excerpt:
      "DP was my nemesis. I memorized solutions but didn't understand them. Then I found the 'State-Transition' framework. Let me explain it simply.",
    category: "DSA",
    readTime: "10 min read",
    views: "22k",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
    outcome: { type: "positive", text: "Concept Mastered" },
    careerStage: "Student",
  },
  {
    id: "6",
    title: "Negotiating My Salary: How I Increased My Offer by 40%",
    excerpt:
      "I was terrified to ask for more. But with a little market research and a script, I managed to get a significant bump. Here is the exact email I sent.",
    category: "Growth After Joining",
    readTime: "4 min read",
    views: "18k",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop",
    outcome: { type: "positive", text: "Salary Hiked" },
    careerStage: "Full-time",
  },
  {
    id: "7",
    title: "The Reality of Layoffs: My Story of Getting Fired and Hired",
    excerpt:
      "It happened on a Tuesday morning via Zoom. Panic set in. But 30 days later, I had two better offers. This is how I navigated the toughest month of my life.",
    category: "Career Switch",
    readTime: "6 min read",
    views: "11k",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop",
    outcome: { type: "positive", text: "Bounced Back" },
    careerStage: "Full-time",
  },
  {
    id: "8",
    title: "Building a System Design Portfolio as a Fresher",
    excerpt:
      "Most freshers ignore system design. I didn't. I built a URL shortener and a chat app, and documented the architecture. It was the main talking point in my interviews.",
    category: "Interview Prep",
    readTime: "9 min read",
    views: "7.5k",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
    outcome: { type: "positive", text: "Portfolio Ready" },
    careerStage: "Student",
  },
];

const CATEGORIES = [
  "All",
  "Internships",
  "Full-Time",
  "Interview Prep",
  "DSA",
  "Career Switch",
  "Startups",
  "Growth After Joining",
];

const SORT_OPTIONS = ["Latest", "Most Viewed"];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Latest");
  const [stories, setStories] = useState<StoryCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Simulate initial fetch
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      filterAndSortStories();
      setIsLoading(false);
    }, 1500); // Fake delay for skeleton demo
  }, [selectedCategory, selectedSort]);

  const filterAndSortStories = () => {
    let filtered = [...ALL_STORIES];

    if (selectedCategory !== "All") {
      filtered = filtered.filter((s) => s.category === selectedCategory);
    }

    if (selectedSort === "Most Viewed") {
      filtered.sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
    } else {
      // Mock "Latest" - just reverse for demo or keep original order
      filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }

    setStories(filtered);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setPage((p) => p + 1);
      setIsLoadingMore(false);
      // In a real app, we would append new stories here
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Navbar />

      <main className="pt-16">
        <StoriesHeader />

        <FiltersBar
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortOptions={SORT_OPTIONS}
          selectedSort={selectedSort}
          onSelectSort={setSelectedSort}
        />

        <StoriesGrid stories={stories} isLoading={isLoading} />

        <Pagination
          currentPage={page}
          totalPages={3} // Mock
          onLoadMore={handleLoadMore}
          isLoadingMore={isLoadingMore}
          totalStories={stories.length} // Just showing count of current filtered set for demo
          shownStories={stories.length}
        />
      </main>
    </div>
  );
}
