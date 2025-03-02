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
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextStep AI",
  description: "AI career coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
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

            <Toaster richColors />

            {/* Footer */}
            <footer className="bg-secondary/50 border-t mt-20">
              <div className="container mx-auto px-4 sm:px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                  {/* Company Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                      NextStep AI
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                      Empowering careers through AI-driven guidance and
                      professional development solutions.
                    </p>
                    <div className="flex space-x-5">
                      <a
                        href="https://twitter.com"
                        className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/zufiyaidrisi9797"
                        className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com"
                        className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold">Quick Links</h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/about"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/features"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pricing"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blog"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Resources */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold">Resources</h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/documentation"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="/help"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="/careers"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Newsletter */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground">
                      Subscribe to our newsletter for the latest updates and
                      insights.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2.5 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/50">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-muted-foreground order-2 sm:order-1">
                      &copy; {new Date().getFullYear()} NextStep AI. Developed
                      by{" "}
                      <a
                        href="https://www.linkedin.com/in/zufiyaidrisi9797/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Zufiya Idrisi
                      </a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground order-1 sm:order-2">
                      <a
                        href="/privacy"
                        className="hover:text-primary transition-colors"
                      >
                        Privacy Policy
                      </a>
                      <a
                        href="/terms"
                        className="hover:text-primary transition-colors"
                      >
                        Terms of Service
                      </a>
                      <a
                        href="/cookies"
                        className="hover:text-primary transition-colors"
                      >
                        Cookie Policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
