import About from "@/components/about";
import Features from "@/components/features";
import Home from "@/components/home";
import Pricing from "@/components/pricings";
import Reviews from "@/components/reviews";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Features />
      <Pricing />
      <Reviews />
    </main>
  );
}
