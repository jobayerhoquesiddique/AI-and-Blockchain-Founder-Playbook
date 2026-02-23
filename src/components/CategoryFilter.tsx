import { ServiceCategory, categories } from "@/data/services";

interface CategoryFilterProps {
  active: ServiceCategory | "All";
  onChange: (cat: ServiceCategory | "All") => void;
  counts: Record<string, number>;
}

const CategoryFilter = ({ active, onChange, counts }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("All")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          active === "All"
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        All ({counts["All"] || 0})
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
            active === cat
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {cat} ({counts[cat] || 0})
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
