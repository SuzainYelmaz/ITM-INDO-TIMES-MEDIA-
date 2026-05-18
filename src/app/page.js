import HeroStory from "@/components/HeroStory";
import Sidebar from "@/components/Sidebar";
import NewsGrid from "@/components/NewsGrid";

export default function Home() {
  return (
    <main className="container">
      <div className="main-content">
        <HeroStory />
        <Sidebar />
      </div>
      <NewsGrid />
    </main>
  );
}
