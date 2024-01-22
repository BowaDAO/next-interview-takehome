"use client";

import {
  Header,
  FeaturedProducts,
  FeaturedServices,
  FeaturedPosts,
  Testimonials,
  CallToAction,
} from "@/containers";
import { store } from "@/redux-toolkit/store";
import { fetchProductsList } from "@/redux-toolkit/slices/productSlice";

// store.dispatch(fetchProductsList({ limit: 10, page: 1 }));

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
