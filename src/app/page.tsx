"use client";

import {
  GreenBanner,
  NavigationBar,
  Header,
  FeaturedProducts,
  FeaturedServices,
  FeaturedPosts,
} from "@/containers";
import { store } from "@/redux-toolkit/store";
import { fetchProductsList } from "@/redux-toolkit/slices/productSlice";

store.dispatch(fetchProductsList({ limit: 10, page: 1 }));

export default function Home() {
  return (
    <main>
      <GreenBanner />

      <NavigationBar />

      <Header />

      <FeaturedProducts />

      <FeaturedServices />

      <FeaturedPosts />
    </main>
  );
}
