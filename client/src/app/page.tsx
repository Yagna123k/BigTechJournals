import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Categories from "@/components/Categories";
import Trending from "@/components/Trending";
import LatestArticles from "@/components/LatestArticles";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Topics from "@/components/Topics";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-0"> {/* Padding managed in Hero */}
        <Hero />
        <LogoCloud />
        <Categories />
        <Trending />
        <LatestArticles />
        <Featured />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}