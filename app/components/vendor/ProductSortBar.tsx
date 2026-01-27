interface Props {
  total: number;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export default function ProductSortBar({ total, sortBy, onSortChange }: Props) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-white/60 text-sm font-medium">
        {total} products found
      </p>

      <div className="flex items-center gap-2 bg-transparent px-3 py-2 rounded-lg border border-white/10">
        <p className="text-white/40 text-sm">Sort:</p>
        <select
          className="bg-transparent text-white text-sm font-bold border-none focus:ring-0 cursor-pointer rounded-lg"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="newest" className="bg-transparent">Newest</option>
          <option value="price-low" className="bg-transparent">Price: Low to High</option>
          <option value="price-high" className="bg-transparent">Price: High to Low</option>
          <option value="popularity" className="bg-transparent">Popularity</option>
        </select>
      </div>
    </div>
  );
}
