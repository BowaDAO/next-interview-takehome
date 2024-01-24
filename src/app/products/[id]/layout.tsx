"use client";

import "../../globals.css";
import { PartnerCompanies } from "@/components";
import { FeaturedProducts } from "@/containers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}

      <FeaturedProducts />

      <PartnerCompanies />
    </>
  );
}
