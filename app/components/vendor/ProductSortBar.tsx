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

      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-[#0F0F0F]">
        <p className="text-white/40 text-sm">Sort:</p>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="
            bg-[#0F0F0F]
            text-white
            text-sm
            font-semibold
            border-none
            focus:outline-none
            focus:ring-0
            cursor-pointer
            appearance-none
            pr-6
          "
        >
          <option value="newest" className="bg-[#0F0F0F] text-white text-center">
            Most Recent
          </option>
          <option value="price-low" className="bg-[#0F0F0F] text-white text-center">
            Price: Low to High
          </option>
          <option value="price-high" className="bg-[#0F0F0F] text-white text-center">
            Price: High to Low
          </option>
        
        </select>
      </div>
    </div>
  );
}
