import { type OPdtoTypes } from "../dto/OPdtoTypes";
import ArcCard from "./OPArcCard";

interface OPArcListProps {
  arcs: OPdtoTypes[];
  onReset: () => void;
}

export default function OPArcList({ arcs, onReset }: OPArcListProps) {
  if (arcs.length === 0) {
    return (
      <div className="text-center py-16 bg-slate-800/40 border border-dashed border-slate-700 rounded-xl">
        <p className="text-slate-400 font-medium">Arc atau episode yang kamu cari tidak ditemukan...</p>
        <button 
          onClick={onReset}
          className="mt-3 text-xs text-amber-400 hover:underline cursor-pointer"
        >
          Reset pencarian
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {arcs.map((arc) => (
        <ArcCard key={arc.id} arc={arc} />
      ))}
    </div>
  );
}