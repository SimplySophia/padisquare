interface Props {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function ProductSearchBar({ searchQuery, onSearchChange }: Props) {
  return (
    <div className="flex gap-3">
      <div className="relative flex-1">
        <input
          className="w-full h-12 pl-11 pr-4 rounded-lg bg-[#1A1A1A] border border-white/10 text-white placeholder:text-white/30 focus:border-[#159C47] focus:ring-1 focus:ring-[#159C47]"
          placeholder="Search collection..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}
