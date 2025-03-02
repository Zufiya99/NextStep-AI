import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextStep AI",
  description: "AI career coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-[#3C3C3C] dark:text-gray-100`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="min-h-screen">{children}</main>

            <Toaster richColors/>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-200 py-5">
              <div className="container mx-auto px-6 text-center">
                <p className="text-sm">
                  &copy; {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.linkedin.com/in/zufiyaidrisi9797/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    Zufiya Idrisi
                  </a>{" "}
                  | All rights reserved
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
