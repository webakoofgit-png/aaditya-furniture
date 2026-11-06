import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { products, whatsappLink, type Product } from "@/lib/furniture-data";
export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="product-card">
      <div className="product-image image-reveal">
        <Link to="/products/$productId" params={{ productId: product.id }}>
          <img src={product.image} alt={product.name} loading="lazy" width="900" height="1000" />
        </Link>
        <button className="quick-view" onClick={() => setOpen(true)}>
          Quick view <ArrowUpRight size={14} />
        </button>
      </div>
      <div className="product-info">
        <span className="eyebrow">{product.category}</span>
        <h3>
          <Link to="/products/$productId" params={{ productId: product.id }}>
            {product.name}
          </Link>
        </h3>
        <p>{product.material}</p>
        <div className="product-meta">
          <span>{product.finishes.join(" / ")}</span>
          <a href={whatsappLink(`Interested in ${product.name}`)} target="_blank" rel="noreferrer">
            Enquire ↗
          </a>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="quick-dialog">
          <img src={product.image} alt={product.name} />
          <DialogTitle className="serif">{product.name}</DialogTitle>
          <p>{product.description}</p>
          <p>{product.material}</p>
          <Link to="/products/$productId" params={{ productId: product.id }} className="text-link">
            Explore this piece →
          </Link>
        </DialogContent>
      </Dialog>
    </article>
  );
}
export function ProductGrid({ items = products }: { items?: Product[] }) {
  return (
    <div className="product-grid">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
