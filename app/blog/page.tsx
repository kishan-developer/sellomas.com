import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Contact from "@/components/sections/Contact";
import ScrollReveals from "@/components/ScrollReveals";
import { ArrowIcon } from "@/components/Icon";
import { BLOG_POSTS, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides and insights on pneumatics, batch coding, bearings and energy-efficient machinery from Sellomas.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights from the shop floor."
        lead="Practical guides on choosing, maintaining and upgrading machinery parts — written by the Sellomas team."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="section section--tight">
        <div className="container">
          <Link href={`/blog/${featured.slug}`} className="blog-featured" data-reveal>
            <div className="blog-featured-visual">
              <Image src={featured.image} alt={featured.title} fill className="blog-featured-img" />
              <span className="product-tag">Featured</span>
            </div>
            <div className="blog-featured-body">
              <div className="blog-meta">
                <span>{featured.category}</span>
                <span>{formatDate(featured.date)}</span>
                <span>{featured.readTime}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className="category-link">
                Read article <ArrowIcon className="btn-icon" />
              </span>
            </div>
          </Link>

          <div className="blog-grid">
            {rest.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" data-reveal>
                <div className="blog-card-media">
                  <Image src={post.image} alt={post.title} fill className="blog-card-img" />
                </div>
                <span className="blog-card-num">{String(i + 2).padStart(2, "0")}</span>
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-foot">
                  <span>{formatDate(post.date)}</span>
                  <ArrowIcon className="btn-icon" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <ScrollReveals />
    </>
  );
}
