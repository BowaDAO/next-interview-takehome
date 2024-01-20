"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider } from "react-redux";
import { store } from "@/redux-toolkit/store";
import { ReactQueryProvider } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={montserrat.className}>
        <Provider store={store}>
          <ReactQueryProvider>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              {children}
            </AppRouterCacheProvider>
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  );
}
