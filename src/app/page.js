import FeatureSection from "@/components/sections/home/featureSection";
import FlashSalesSection from "@/components/sections/home/flashSalesSection";
import {Separator} from "@/components/ui/separator";
import CategoryShowcase from "@/components/sections/home/categoryShowcase";
import BestSellersSection from "@/components/sections/home/bestSellers";

export default function Home() {
  return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FeatureSection />
      <Separator />
      <FlashSalesSection />
      <Separator />
      <CategoryShowcase />
      <Separator />
      <BestSellersSection />
      <Separator />
      {/* Add more sections as needed */}
      {/* Example: */}
      {/* <CategorySection /> */}
      {/* <BestSellersSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <NewsletterSection /> */}
      {/* <Footer /> */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Everything Beaded</h1>
        <p className="text-lg">Your beautiful e-commerce platform is live! 🎉</p>
      </div>
      </main>
    
  );
}
