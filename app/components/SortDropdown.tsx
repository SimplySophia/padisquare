'use client';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: Props) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">Sort By</h3>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#1a3535] border border-[#2a4545] rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-[#159C47] focus:ring-1 focus:ring-[#159C47] transition-all cursor-pointer"
        >
          <option value="recent">Newest Arrivals</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Alphabetical</option>
        </select>
        <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
}