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

store.dispatch(fetchProductsList({ page: 1, limit: 10 }));

export default function Home() {
  return (
    <>
      <Header />

      <FeaturedProducts />

      <FeaturedServices />

      <FeaturedPosts />

      <Testimonials />

      <CallToAction />
    </>
  );
}
