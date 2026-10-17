import { type OPdtoTypes } from "../dto/OPdtoTypes";


interface OPArcCardProps {
  arc: OPdtoTypes;
  isBookmarked: boolean;
  onClick: () => void;
  onToggleBookmark: (e: React.MouseEvent, id: string) => void;
}

export default function OPArcCard({ arc, isBookmarked, onClick, onToggleBookmark}: OPArcCardProps) {
 return (
    <div 
      onClick={onClick}
      className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 hover:border-amber-400/50 hover:bg-slate-800 transition shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer group relative"
    >
      <div className="space-y-1.5 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {arc.saga}
          </span>
          <span className="text-xs text-slate-400">
            ({arc.totalEps} Episode)
          </span>
        </div>
        <h2 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition">{arc.arcName}</h2>
        <p className="text-xs text-slate-400 leading-relaxed">{arc.description}</p>
      </div>

      <div className="shrink-0 flex items-center gap-3">
        <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs px-3 py-1.5 rounded-lg font-mono font-semibold shadow-sm">
          {arc.epsRange}
        </span>

        {/* Tombol Bookmark */}
        <button
          onClick={(e) => onToggleBookmark(e, arc.id.toString())}
          className={`p-2.5 rounded-xl border transition cursor-pointer ${
            isBookmarked 
              ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-sm' 
              : 'bg-slate-800/80 border-slate-700 text-slate-500 hover:text-slate-300'
          }`}
          title={isBookmarked ? "Hapus dari Bookmark" : "Simpan ke Bookmark"}
        >
          {isBookmarked ? '★' : '☆'}
        </button>
      </div>
    </div>
  );
}
