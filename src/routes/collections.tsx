import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageIntro, PageShell } from "@/components/site";
import { ProductGrid } from "@/components/products";
import { categories, products, images } from "@/lib/furniture-data";
export const Route = createFileRoute("/collections")({
  validateSearch: (s: Record<string, unknown>): { category?: string } =>
    typeof s["category"] === "string" ? { category: s["category"] } : {},
  head: () => ({ meta: [{ title: "Collections | Aaditya Furniture" }] }),
  component: Collections,
});
function Collections() {
  const search = Route.useSearch();
  const [category, setCategory] = useState(search.category ?? "All");
  useEffect(() => setCategory(search.category ?? "All"), [search.category]);
  const [sort, setSort] = useState("curated");
  const [query, setQuery] = useState("");
  const filtered = products
    .filter(
      (p) =>
        (category === "All" || p.category === category) &&
        `${p.name} ${p.material}`.toLowerCase().includes(query.toLowerCase()),
    )
    .sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : sort === "za"
          ? b.name.localeCompare(a.name)
          : 0,
    );
  return (
    <PageShell>
      <PageIntro
        eyebrow="The considered collection"
        title="Find a piece of yourself."
        description="Warm materials. Quiet character. Explore furniture for the way you live."
        image={images.sofa}
      />
      <section className="section-wrap page-section">
        <div className="filter-tabs">
          {[
            "All",
            ...categories.filter((c) => c.name !== "Custom Furniture").map((c) => c.name),
          ].map((c) => (
            <button key={c} aria-pressed={category === c} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="collection-tools">
          <p>{filtered.length} considered pieces · illustrative collection</p>
          <input
            aria-label="Search furniture"
            placeholder="Search pieces or materials"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select aria-label="Sort products" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="curated">Curated order</option>
            <option value="az">Name A–Z</option>
            <option value="za">Name Z–A</option>
          </select>
        </div>
        {filtered.length ? (
          <ProductGrid items={filtered} />
        ) : (
          <div className="empty-state">
            <h2 className="serif">Room for another search.</h2>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters →
            </button>
          </div>
        )}
      </section>
    </PageShell>
  );
}
