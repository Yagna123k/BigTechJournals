"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import CategoryHeader from "@/components/category/CategoryHeader";
import StartHere from "@/components/category/StartHere";
import FiltersBar from "@/components/stories/FiltersBar";
import StoriesGrid from "@/components/stories/StoriesGrid";
import { StoryCardProps } from "@/components/stories/StoryCard";

// --- MOCK DATA FOR SPECIFIC CATEGORIES ---
const CATEGORY_DATA: Record<
  string,
  {
    title: string;
    description: string;
    stats: { count: string; audience: string; outcomes: string };
    startHere: string[]; // IDs of foundational stories
  }
> = {
  internships: {
    title: "Internships",
    description:
      "Stories from students who secured internships at Big Tech and product companies. Focused on preparation strategy, timing, mistakes, and real outcomes.",
    stats: {
      count: "42 stories",
      audience: "Students",
      outcomes: "Internships, PPOs",
    },
    startHere: ["3"], // ID '3' is the Google Internship story
  },
  "career-switch": {
    title: "Career Switch",
    description:
      "Real journeys of people moving from non-tech or service roles into product and Big Tech companies, including failures and recovery paths.",
    stats: {
      count: "28 stories",
      audience: "Professionals",
      outcomes: "New Roles, Hikes",
    },
    startHere: ["2", "7"], // Service-to-Product, Layoff story
  },
  // Fallback for others
  default: {
    title: "Featured Stories",
    description: "Curated tech journeys from this category.",
    stats: { count: "10+ stories", audience: "Everyone", outcomes: "Various" },
    startHere: [],
  },
};

// Reusing ALL_STORIES from Stories page (Ideally this would be in a shared file)
// For now, I will include a subset here for the demo to work without import issues
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
  // Add dummy data to show grid fill
  {
    id: "9",
    title: "Why I refused a Manager role to stay an IC",
    excerpt:
      "Management isn't the only path forward. I explain why I chose deep technical work over people management.",
    category: "Career Switch",
    readTime: "7 min read",
    views: "5k",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    outcome: { type: "neutral", text: "Decision Made" },
    careerStage: "Full-time",
  },
  {
    id: "10",
    title: "Cracking the Meta Internship Interview",
    excerpt:
      "The questions were harder than LeetCode Hard. But the pattern was familiar.",
    category: "Internships",
    readTime: "9 min read",
    views: "20k",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2674&auto=format&fit=crop",
    outcome: { type: "positive", text: "Offer Received" },
    careerStage: "Intern",
  },
];

const SORT_OPTIONS = ["Latest", "Most Viewed"];

// Helper to normalized slug to category name for basic matching
// In a real app, this would be a proper slugify/lookup
const getCategoryFromSlug = (slug: string) => {
  if (slug === "internships") return "Internships";
  if (slug === "career-switch") return "Career Switch";
  return "All"; // Fallback
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const pageData = CATEGORY_DATA[slug] || CATEGORY_DATA["default"];

  // If default, try to generate title from slug
  const displayTitle =
    pageData === CATEGORY_DATA["default"] && slug
      ? slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")
      : pageData.title;

  const [selectedSort, setSelectedSort] = useState("Most Viewed");
  // Pre-filter stories based on category slug
  const categoryName = getCategoryFromSlug(slug);

  // separate start here vs others
  const startHereStories = ALL_STORIES.filter((s) =>
    pageData.startHere.includes(s.id),
  );

  // For the grid, use stories that match the category but NOT already in Start Here
  // If "default" category (e.g. unknown slug), show random subset or empty
  const gridStories = ALL_STORIES.filter((s) => {
    if (pageData.startHere.includes(s.id)) return false;
    if (categoryName === "All") return true;
    return s.category === categoryName;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Navbar />

      <main className="pt-16">
        <CategoryHeader
          title={displayTitle}
          description={pageData.description}
          stats={pageData.stats}
        />

        <StartHere
          items={startHereStories.map((s) => ({
            id: s.id,
            title: s.title,
            excerpt: s.excerpt,
            image: s.image,
            readTime: s.readTime,
          }))}
        />

        <FiltersBar
          categories={[displayTitle]} // Only show current category
          selectedCategory={displayTitle} // Selected
          onSelectCategory={() => {}}
          sortOptions={SORT_OPTIONS}
          selectedSort={selectedSort}
          onSelectSort={setSelectedSort}
          readOnly={true} // Disable category switching
        />

        <StoriesGrid stories={gridStories} isLoading={false} />
      </main>
    </div>
  );
}
