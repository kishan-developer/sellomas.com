"use client";

import Link from "next/link";
import Image from "next/image";
import { CONTACT, NAV_LINKS } from "@/lib/data";
import { useScrollTo } from "./SmoothScroll";

export default function Footer() {
  const scrollTo = useScrollTo();
              
  return (  
    <footer className="footer" style={{ backgroundColor: "#0b0c0e" }}>
      <div className="container footer-grid">
        {/* Left: Brand Info */}
        <div className="footer-brand" style={{ backgroundColor: "#1e1e1e", paddingLeft: "2rem", paddingRight: "0rem", paddingTop: "2rem", paddingBottom: "0" }}>
          <div className="footer-logo">
            <Image 
              src="/Sellomas_Logo.png"
              alt="Sellomas"
              width={150}
              height={150}
              className="w-32 h-auto"
            />
          </div>
          <p className="footer-description"> 
            Sellomas – Engineering Excellence for Industrial Growth. A globally
            aligned provider of precision-engineered industrial machinery parts,
            pneumatic and electronic components, and advanced industrial machinery
            solutions. Guided by innovation and technical excellence, we deliver
            energy-efficient, high-performance systems tailored to complex
            industrial requirements.
          </p>

          <div className="flex items-center justify-between" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 0, marginTop: "1rem",  }}>

            <div className="footer-company-info" style={{}}>
              <p>Est. 2008 | Technical Services Since 2006</p>
              <p>Varanasi, Uttar Pradesh, India</p>
            </div>

            <div className="footer-social" style={{ backgroundColor: "#0b0c0e", borderRadius: "90px 0px 0px 0px", width: "40%", paddingLeft: "20px", paddingTop: "10px", paddingRight: "0px" }}>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
             
            </div>
            
          </div>
        </div>

        {/* Middle: Navigation */}
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact & Newsletter */}
        <div className="footer-contact-newsletter">
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li className="footer-contact-address">
                {CONTACT.address}
              </li>
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p className="footer-newsletter-text">Stay in the loop</p>
            <form className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter email..."
                className="footer-newsletter-input"
              />
              <button type="submit" className="footer-newsletter-btn">
                SUBMIT →
              </button>
            </form>
            <label className="footer-newsletter-checkbox">
              <input type="checkbox" />
              <span>
                I have read the privacy policy statement on this site and agree to
                receive communications with marketing purposes.
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Made with ❤️ by Media FleetBlue</span>
        <button className="footer-top" onClick={() => scrollTo("body")}>
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
