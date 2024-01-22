"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider } from "react-redux";
import { store } from "@/redux-toolkit/store";
import { ReactQueryProvider } from "@/components";
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import theme from "@/material-ui/theme";
import { GreenBanner, NavigationBar, Footer } from "@/containers";

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
              <ThemeProvider theme={theme}>
                <CssBaseline />

                <GreenBanner />

                <NavigationBar />

                {children}

                <Footer />
              </ThemeProvider>
            </AppRouterCacheProvider>
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  );
}
