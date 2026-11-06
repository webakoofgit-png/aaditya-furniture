import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, WhatsAppButton, SectionHeading } from "@/components/site";
import { ProductGrid } from "@/components/products";
import { products, images } from "@/lib/furniture-data";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
export const Route = createFileRoute("/products/$productId")({
  head: () => ({ meta: [{ title: "Furniture Detail | Aaditya Furniture" }] }),
  component: Detail,
});
function Detail() {
  const { productId } = Route.useParams();
  const p = products.find((p) => p.id === productId);
  const [finish, setFinish] = useState("");
  const [photo, setPhoto] = useState(0);
  const [zoom, setZoom] = useState(false);
  if (!p)
    return (
      <PageShell>
        <section className="section-wrap page-section missing-product">
          <h1 className="serif">This piece is not in our collection.</h1>
          <Link to="/collections">Explore all furniture →</Link>
        </section>
      </PageShell>
    );
  const photos = [p.image, images.craft];
  const selected = p.finishes.includes(finish) ? finish : p.finishes[0];
  return (
    <PageShell>
      <section className="section-wrap product-detail">
        <div>
          <button
            className="detail-photo"
            onClick={() => setZoom(true)}
            aria-label="Zoom product image"
          >
            <img
              src={photos[photo]}
              alt={photo === 0 ? p.name : "Craft and material inspiration"}
            />
            <span>View closer ↗</span>
          </button>
          <div className="thumbnails">
            {photos.map((src, i) => (
              <button
                key={src}
                aria-label={`View ${i === 0 ? "product" : "craft inspiration"}`}
                aria-pressed={photo === i}
                onClick={() => setPhoto(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>
        <div className="detail-copy">
          <Link to="/collections" className="eyebrow">
            Collections / {p.category}
          </Link>
          <h1 className="serif">{p.name}</h1>
          <p>{p.description}</p>
          <span className="eyebrow">Choose a finish · {selected}</span>
          <div className="filter-tabs">
            {p.finishes.map((f) => (
              <button key={f} aria-pressed={selected === f} onClick={() => setFinish(f)}>
                {f}
              </button>
            ))}
          </div>
          <dl>
            <dt>Materials</dt>
            <dd>{p.material}</dd>
            <dt>Dimensions</dt>
            <dd>{p.dimensions}</dd>
            <dt>Availability</dt>
            <dd>Enquire for specifications, lead time and quotation.</dd>
          </dl>
          <WhatsAppButton
            message={`Hello, I would like a quote for ${p.name}. Selected finish: ${selected}. Please share dimensions and availability.`}
          />
          <p className="demo-note">
            Illustrative product. Final materials, dimensions and finishes are confirmed during
            consultation.
          </p>
        </div>
      </section>
      <section className="section-wrap page-section">
        <SectionHeading eyebrow="Together, beautifully" title="You may also like." />
        <ProductGrid items={products.filter((x) => x.id !== p.id).slice(0, 3)} />
      </section>
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="zoom-dialog">
          <DialogTitle>{p.name}</DialogTitle>
          <img src={photos[photo]} alt={p.name} />
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
