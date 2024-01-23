"use client";

import {
  Header,
  // FeaturedProducts,
  FeaturedServices,
  FeaturedPosts,
  Testimonials,
  CallToAction,
} from "@/containers";
import dynamic from "next/dynamic";

const FeaturedProducts = dynamic(
  () => import("../containers/featured-products/featured-products"),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <Header />

      <FeaturedProducts />

      <FeaturedServices />

      <FeaturedPosts />

      <Testimonials />

      <CallToAction />
    </main>
  );
}
