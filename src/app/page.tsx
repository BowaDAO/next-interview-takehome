"use client";

import {
  Header,
  FeaturedProducts,
  FeaturedServices,
  FeaturedPosts,
  Testimonials,
  CallToAction,
} from "@/containers";

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
