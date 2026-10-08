import { type OPdtoTypes } from "../dto/OPdtoTypes";

interface OPArcCardProps {
  arc: OPdtoTypes;
}

export default function OPArcCard({ arc }: OPArcCardProps) {
  return (
    <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 hover:border-amber-400/50 transition shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="space-y-1.5 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {arc.saga}
          </span>
          <span className="text-xs text-slate-400">
            ({arc.totalEps} Episode)
          </span>
        </div>
        <h2 className="text-lg font-bold text-slate-100">{arc.arcName}</h2>
        <p className="text-xs text-slate-400 leading-relaxed">{arc.description}</p>
      </div>

      <div className="shrink-0">
        <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs px-3 py-1.5 rounded-lg font-mono font-semibold shadow-sm">
          {arc.epsRange}
        </span>
      </div>
    </div>
  );
}