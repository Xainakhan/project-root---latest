import React from "react";
import logoMain from "../assets/logo-main.svg";
import type { PageType } from "./types";

// Types
interface FooterLink {
  label: string;
  href: string;
  page?: PageType; // Add optional page property for internal navigation
}

interface FooterColumn {
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

// Props interface for Footer component
interface FooterProps {
  onPageChange: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  // Footer data with page mappings
  const footerColumns: FooterColumn[] = [
    {
      links: [
        { label: "About Us", href: "#", page: "about" },
        { label: "Mission Statement", href: "#", page: "mission" },
        { label: "Vision Statement", href: "#", page: "vision" },
        { label: "Store Locator", href: "#", page: "locations" },
      ],
    },
    {
      links: [
        { label: "Contact Us", href: "#", page: "contact" },
        { label: "Global Reviews", href: "#", page: "home" },
        { label: "Careers", href: "#", page: "career" }, // Now links to careers page
        { label: "FAQs", href: "#", page: "faqs" }, // Now links to FAQs page
      ],
    },
    {
      links: [
        { label: "ZEEKR", href: "#", page: "zeekr" },
        { label: "RIDDARA", href: "#", page: "riddara" },
        { label: "FORTHING", href: "#", page: "forthing" },
        { label: "JMEV", href: "#", page: "jmev" },
      ],
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61574102049787",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/hrl_csm/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@CapitalSmartMotors",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.998 2.998 0 0 0-2.114-2.122C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.384.564A2.998 2.998 0 0 0 .502 6.186 31.06 31.06 0 0 0 0 12a31.06 31.06 0 0 0 .502 5.814 2.998 2.998 0 0 0 2.114 2.122C4.495 20.5 12 20.5 12 20.5s7.505 0 9.384-.564a2.998 2.998 0 0 0 2.114-2.122A31.06 31.06 0 0 0 24 12a31.06 31.06 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/capitalsmartmotors",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const legalLinks: FooterLink[] = [
    { label: "Terms Of Service", href: "#", page: "termsAndConditions" },
    { label: "Privacy Policy", href: "#" },
    { label: "Trust & Safety", href: "#" },
    { label: "Law Enforcement", href: "#" },
  ];

  // Handle link clicks
  const handleLinkClick = (
    page: PageType | undefined,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (page) {
      // Internal navigation
      onPageChange(page);
    } else {
      // External links or future functionality - you can handle these as needed
      console.log("Link clicked but no page mapping defined");
    }
  };

  // Handle logo click to go home
  const handleLogoClick = () => {
    onPageChange("home");
  };

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-12">
          {/* Left Section: Logo and Social */}
          <div className="flex flex-col items-start">
            {/* Logo Section */}
            <div className="mb-6">
              <img
                src={logoMain}
                alt="Capital Smart Motors"
                className="h-16 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.page, e)}
                  className="text-gray-800 text-sm hover:text-gray-600 transition-colors font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-800 text-sm font-medium">
              © 2025 Capital Smart Motors
            </div>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-center">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.page, e)}
                  className="text-gray-800 text-sm hover:text-gray-600 transition-colors font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
