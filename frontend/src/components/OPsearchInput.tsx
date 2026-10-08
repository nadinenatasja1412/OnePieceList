interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchInput({ searchTerm, onSearchChange }: SearchInputProps) {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Cari arc (contoh: Alabasta, Wano, Ep 1-3)..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 pl-11 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition shadow-inner"
      />
      <svg className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
  );
}