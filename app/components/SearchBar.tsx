'use client';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-4">Search Catalog</h3>
      <div className="relative">
        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search brands, styles, or items..."
          className="w-full bg-[#1a3535] border border-[#2a4545] rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#159C47] focus:ring-1 focus:ring-[#159C47] transition-all"
        />
      </div>
    </div>
  );
}