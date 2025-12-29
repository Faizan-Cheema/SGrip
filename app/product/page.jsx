"use client";

import HeroProduct from "@/app/components/product/HeroProduct";
import ProductList from "@/app/components/product/ProductList";
import PremiumTileBond from "@/app/components/product/PremiumTileBond";

/**
 * ProductPage Component
 * 
 * Main page component for displaying products. Composed of:
 * - HeroProduct: Hero section with main heading and showcase image
 * - ProductList: Grid of product cards with details and actions
 * - PremiumTileBond: Information section about premium tile bonds
 * 
 * @returns {JSX.Element} Complete product page
 */
export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white font-satoshi">
      <HeroProduct />
      <ProductList />
      <PremiumTileBond />
    </div>
  );
}
