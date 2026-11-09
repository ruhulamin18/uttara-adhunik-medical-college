import type { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

/**
 * Public site layout — wraps every public page with the shared chrome.
 *
 * The admin panel will NOT use this layout: it lives in its own route
 * group with its own dashboard chrome (sidebar, topbar, etc.).
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}