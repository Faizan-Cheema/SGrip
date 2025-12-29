import Hero from "./components/home/Hero";
import OurProducts from "./components/home/OurProducts";
import Features from "./components/home/Features";
import OurCustomers from "./components/home/OurCustomers";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurProducts />
      <Features />
      <OurCustomers />
    </div>
  );
}
