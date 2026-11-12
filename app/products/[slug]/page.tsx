import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProductGallery from "@/components/ProductGallery";
import EnquireButton from "@/components/EnquireButton";
import Contact from "@/components/sections/Contact";
import ScrollReveals from "@/components/ScrollReveals";
import { ALL_PRODUCTS, getProduct, relatedProducts } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = getProduct((await params).slug);
  return found ? { title: found.product.name, description: found.product.description } : {};
}

export default async function ProductPage({ params }: Props) {
  const found = getProduct((await params).slug);
  if (!found) notFound();

  const { product, category } = found;
  const related = relatedProducts(product.slug, category.slug, 4);

  return (
    <>
      <PageHero
        eyebrow={category.title}
        title={product.name}
        lead={product.description ?? "Genuine, precision-engineered part — price on request."}
        crumbs={[
          { label: "Products & Services", href: "/products-and-services" },
          { label: category.title },
        ]}
      />

      <section className="section section--tight">
        <div className="container pdp">
          <ProductGallery images={product.images} name={product.name} />

          <aside className="pdp-info">
            <span className="product-tag">{category.title}</span>
            <h2>{product.name}</h2>
            {product.description && <p className="pdp-desc">{product.description}</p>}
            <dl className="pdp-meta">
              <div>
                <dt>Price</dt>
                <dd>On request</dd>
              </div>
              <div>
                <dt>Min. order</dt>
                <dd>1 piece</dd>
              </div>
            </dl>
            <div className="pdp-actions">
              <EnquireButton product={product.name} category={category.title}>
                Send Enquiry
              </EnquireButton>
              <Link href="/products-and-services#catalogue" className="pdp-back">
                ← Back to catalogue
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--alt section--tight">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow" data-reveal>
                <span className="dot" /> You may also need
              </p>
              <h2 data-reveal>
                Related <span className="muted">products.</span>
              </h2>
            </div>
            <div className="catalog-grid">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="catalog-card catalog-card--link">
                  <div className="imagebox">
                    <div className="catalog-card-media">
                      <Image src={p.images[0]} alt={p.name} width={400} height={240} className="catalog-card-img" />
                    </div>
                  </div>
                  <h3>{p.name}</h3>
                  <span className="pdp-related-cat">{category.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Contact />
      <ScrollReveals />
    </>
  );
}
