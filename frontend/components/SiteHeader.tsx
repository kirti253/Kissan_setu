"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLeaf } from "react-icons/lu";

export function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className={`site-header ${isHomePage ? "site-header-home" : ""}`}>
      <Link href="/" className="brand-mark">
        <LuLeaf className="brand-logo-icon" />
        <div>
          <strong>Kissan Setu</strong>
          <span>Direct crop trading </span>
        </div>
      </Link>

      <nav className="site-nav">
        <Link href="/#features">Features</Link>
        <Link href="/#preview">Preview</Link>
        <Link href="/#testimonials">Stories</Link>
        <Link href="/auth" className="button button-secondary button-sm nav-cta-secondary">
          Login
        </Link>
        <Link href="/auth" className="button button-primary button-sm nav-cta">
          Get started
        </Link>
      </nav>
    </header>
  );
}
