import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ReadingProgress from "@/components/ReadingProgress";
import Contact from "@/components/sections/Contact";
import ScrollReveals from "@/components/ScrollReveals";
import { ArrowIcon } from "@/components/Icon";
import { BLOG_POSTS, formatDate, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <ReadingProgress target=".article" />
      <PageHero
        eyebrow={`${post.category} · ${post.readTime}`}
        title={post.title}
        lead={post.excerpt}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
      />

      <section className="section section--tight">
        <div className="container article-wrap">
          <aside className="article-aside">
            <div className="blog-meta blog-meta--stack">
              <span>Published</span>
              <strong>{formatDate(post.date)}</strong>
              <span>Author</span>
              <strong>Team Sellomas</strong>
            </div>
            <Link href="/blog" className="article-back">
              ← All articles
            </Link>
          </aside>

          <article className="article">
            <figure className="article-cover" data-reveal>
              <Image src={post.image} alt={post.title} width={960} height={540} className="article-cover-img" />
            </figure>
            {post.sections.map((section, i) => (
              <div key={i} className="article-section">
                {section.heading && <h2 data-reveal>{section.heading}</h2>}
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)} data-reveal>
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul data-reveal>
                    {section.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Keep reading
            </p>
          </div>
          <div className="blog-grid blog-grid--2">
            {more.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card" data-reveal>
                <div className="blog-meta">
                  <span>{p.category}</span>
                  <span>{p.readTime}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="blog-card-foot">
                  <span>{formatDate(p.date)}</span>
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
