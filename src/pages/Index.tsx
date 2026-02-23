import { useState, useMemo } from "react";
import { services, ServiceCategory } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import CategoryFilter from "@/components/CategoryFilter";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "All">("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchCat = activeCategory === "All" || s.category === activeCategory;
      const matchSearch =
        !search ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase()) ||
        s.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: services.length };
    services.forEach((s) => {
      c[s.category] = (c[s.category] || 0) + 1;
    });
    return c;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
              🚀 Founder-Engineer Playbook
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              AI + Software +{" "}
              <span className="text-primary glow-text">Blockchain</span>{" "}
              Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              50 high-value, monetizable offers spanning AI automation, Web3 tools,
              SaaS products, and developer kits — each designed to earn{" "}
              <span className="text-accent font-semibold">$700–$2,000+</span> per
              project.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-mono text-muted-foreground">
              <span className="bg-secondary px-3 py-1 rounded-md">⚡ {services.length} Services</span>
              <span className="bg-secondary px-3 py-1 rounded-md">🎯 12 Categories</span>
              <span className="bg-secondary px-3 py-1 rounded-md">💰 $700–$3,000+ Range</span>
            </div>
          </div>
        </div>
      </header>

      {/* Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <input
          type="text"
          placeholder="🔍 Search services, categories, keywords..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md bg-secondary text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
        />
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} counts={counts} />
      </section>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <p className="text-sm text-muted-foreground mb-6 font-mono">
          Showing {filtered.length} of {services.length} services
          {activeCategory !== "All" && (
            <span className="text-primary"> in {activeCategory}</span>
          )}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-4xl mb-4">🔍</p>
            <p>No services found. Try a different search or category.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          ⚡ Built for founder-engineers · AI + Software + Blockchain
        </p>
      </footer>
    </div>
  );
};

export default Index;
