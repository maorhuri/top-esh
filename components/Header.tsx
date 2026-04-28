"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: siteContent.navigation.home, href: "/" },
    { name: siteContent.navigation.equipment, href: "/equipment" },
    { name: siteContent.navigation.services, href: "/services" },
    { name: siteContent.navigation.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-center md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo01.jpg"
              alt={siteContent.company.name}
              width={120}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 transition-colors hover:text-primary-red"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md bg-primary-red px-6 py-2.5 text-base font-bold text-white transition-all hover:bg-red-700 hover:shadow-lg"
            >
              צור קשר
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden absolute left-4 rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="תפריט"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 py-2 transition-colors hover:text-primary-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md bg-primary-red px-6 py-3 text-center text-base font-bold text-white transition-all hover:bg-red-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              צור קשר
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

