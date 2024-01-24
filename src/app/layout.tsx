"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider } from "react-redux";
import { store } from "@/redux-toolkit/store";
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import theme from "@/styles/theme";
import { GreenBanner, NavigationBar, Footer } from "@/containers";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
          <ThemeProvider theme={theme}>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <CssBaseline />

              <main>
                <GreenBanner />

                <NavigationBar />

                <div style={{ minHeight: "100vh" }}>{children}</div>

                <Footer />
              </main>

              <ToastContainer
                autoClose={3000}
                theme="colored"
                position="bottom-right"
              />
            </AppRouterCacheProvider>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
