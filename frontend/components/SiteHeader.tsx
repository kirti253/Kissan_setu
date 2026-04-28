"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLeaf, LuMenu, LuX } from "react-icons/lu";

export function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldHideOnPage = pathname === "/farmer" || pathname === "/marketplace";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleMenuClose = () => setIsMenuOpen(false);

  if (shouldHideOnPage) {
    return null;
  }

  return (
    <header
      className={`site-header ${isHomePage ? "site-header-home" : ""} ${
        isMenuOpen ? "site-header-menu-open" : ""
      }`}
    >
      <div className="site-header-bar">
        <Link href="/" className="brand-mark" onClick={handleMenuClose}>
          <LuLeaf className="brand-logo-icon" />
          <div>
            <strong>Kissan Setu</strong>
            <span>Direct crop trading </span>
          </div>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-controls="site-nav"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="site-nav"
        className={`site-nav ${isMenuOpen ? "site-nav-open" : ""}`}
        aria-label="Primary"
      >
        <Link href="/#features" onClick={handleMenuClose}>
          Features
        </Link>
        <Link href="/#preview" onClick={handleMenuClose}>
          Preview
        </Link>
        <Link href="/#testimonials" onClick={handleMenuClose}>
          Stories
        </Link>
        <Link
          href="/auth"
          className="button button-secondary button-sm nav-cta-secondary"
          onClick={handleMenuClose}
        >
          Login
        </Link>
        <Link
          href="/auth"
          className="button button-primary button-sm nav-cta"
          onClick={handleMenuClose}
        >
          Get started
        </Link>
      </nav>
    </header>
  );
}
