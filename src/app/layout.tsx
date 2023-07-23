import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { ModeToggle } from "@/components/ModeToggle";
import { UserNav } from "@/components/user-nav";
import { Search } from "@/components/Search";
import { MainNav } from "@/components/main-nav";
//
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Generate Users",
  description: "Add users in each formation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} px-24`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="border-b">
              <div className="flex items-center h-16 px-4">
                <MainNav className="mx-6" />
                <div className="flex items-center ml-auto space-x-4">
                  <Search />
                  <UserNav />
                  <ModeToggle />
                </div>
              </div>
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
