import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';


const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Uddokta Hut",
  description: "Uddokta hut is a saas ecommerce all in one",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen  font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#05df72"
            initialPosition={0.09}
            crawlSpeed={200}
            height={6}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={600} />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
