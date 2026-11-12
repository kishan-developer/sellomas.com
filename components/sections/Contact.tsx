"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import { CONTACT } from "@/lib/data";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import { ArrowIcon } from "../Icon";
import { ENQUIRE_EVENT, type EnquireDetail } from "../useEnquire";

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onEnquire = (e: Event) => {
      const { product, category } = (e as CustomEvent<EnquireDetail>).detail;
      const select = categoryRef.current;
      if (category && select && [...select.options].some((o) => o.value === category)) select.value = category;
      if (product && messageRef.current) messageRef.current.value = `I'd like a quote for: ${product}\nQuantity: `;
    };
    window.addEventListener(ENQUIRE_EVENT, onEnquire);
    return () => window.removeEventListener(ENQUIRE_EVENT, onEnquire);
  }, []);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const split = SplitText.create(root.current!.querySelector(".contact-title"), {
          type: "chars,words",
          mask: "words",
          wordsClass: "split-word",
        });

        gsap.from(split.chars, {
          yPercent: 110,
          rotate: 8,
          stagger: 0.025,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-title", start: "top 90%", end: "top 45%", scrub: 1 },
        });

        gsap.fromTo(
          ".contact-bg-text",
          { xPercent: 10 },
          { xPercent: -30, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } },
        );

        gsap.from([".contact-info li", ".contact-form"], {
          y: 50,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-grid", start: "top 80%" },
        });

        return () => split.revert();
      });
    },
    { scope: root },
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Enquiry from ${data.get("name")} — ${data.get("category")}`;
    const body = `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nCategory: ${data.get("category")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section ref={root} id="contact" className="section contact">
      <div className="contact-bg-text" aria-hidden="true">
        SELLOMAS · SELLOMAS ·
      </div>
      <div className="container">
        <p className="eyebrow">
          <span className="dot" /> Get in touch
        </p>
        <h2 className="contact-title">
          Need a part? <span className="accent">Let&apos;s talk.</span>
        </h2>

        <div className="contact-grid">
          <ul className="contact-info">
            <li>
              <span>Visit</span>
              <p>{CONTACT.address}</p>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <span>Call</span>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
          </ul>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input name="name" required placeholder="Your name" autoComplete="name" />
              </label>
              <label className="field">
                <span>Phone</span>
                <input name="phone" type="tel" required placeholder="+91" autoComplete="tel" />
              </label>
            </div>
            <label className="field">
              <span>Category</span>
              <select ref={categoryRef} name="category" defaultValue={PRODUCT_CATEGORIES[0].title}>
                {PRODUCT_CATEGORIES.map((c) => (
                  <option key={c.slug}>{c.title}</option>
                ))}
                <option>Agro Machinery</option>
                <option>Consultancy / Services</option>
                <option>Other</option>
              </select>
            </label>
            <label className="field">
              <span>Requirement</span>
              <textarea
                ref={messageRef}
                name="message"
                rows={4}
                required
                placeholder="Part number, machine model, quantity…"
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              {sent ? "Opening your email app…" : "Send Enquiry"} <ArrowIcon className="btn-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
