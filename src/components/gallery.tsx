import { useState } from "react";
import { projectGallery } from "@/lib/furniture-data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);
  const items = projectGallery.filter((p) => filter === "All" || p.type === filter);
  const current = selected === null ? null : items[selected];
  return (
    <>
      <div className="filter-tabs">
        {["All", "Residential", "Commercial", "Custom Furniture"].map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => {
              setFilter(f);
              setSelected(null);
            }}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {items.map((p, i) => (
          <button
            key={p.title}
            className="gallery-card image-reveal"
            onClick={() => setSelected(i)}
          >
            <img src={p.image} alt={p.title} loading="lazy" />
            <span>
              <small className="eyebrow">{p.type}</small>
              <strong className="serif">{p.title} ↗</strong>
            </span>
          </button>
        ))}
      </div>
      <Dialog
        open={current !== null}
        onOpenChange={(v) => {
          if (!v) setSelected(null);
        }}
      >
        <DialogContent className="zoom-dialog">
          <DialogTitle className="serif">{current?.title}</DialogTitle>
          <DialogDescription>
            Illustrative interior inspiration, not a verified completed project.
          </DialogDescription>
          <img src={current?.image} alt={current?.title} />
          <div className="lightbox-controls">
            <button onClick={() => setSelected((selected! + items.length - 1) % items.length)}>
              ← Previous
            </button>
            <span>
              {(selected ?? 0) + 1} / {items.length}
            </span>
            <button onClick={() => setSelected((selected! + 1) % items.length)}>Next →</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
