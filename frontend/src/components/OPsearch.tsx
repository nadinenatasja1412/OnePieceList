import { useState } from "react";
import { OPdata } from "../data/OPdata";
import SearchInput from "./OPsearchInput";
import SagaFilter from "./OPSagaFilter";
import ArcList from "./OPArcList";
import { type OPdtoTypes } from "../dto/OPdtoTypes";

export default function OPSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSaga, setSelectedSaga] = useState<string>("All");

  // Daftar unik saga untuk opsi dropdown
  const sagas = ["All", ...Array.from(new Set(OPdata.map((arc) => arc.saga)))];

  // Logika Filter
  const filteredArcs = OPdata.filter((arc: OPdtoTypes) => {
    const matchesSearch = 
      arc.arcName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      arc.epsRange.toLowerCase().includes(searchTerm.toLowerCase()) ||
      arc.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSaga = selectedSaga === "All" || arc.saga === selectedSaga;

    return matchesSearch && matchesSaga;
  });

  const handleReset = () => {
    setSearchTerm("");
    setSelectedSaga("All");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider text-amber-400">
            ONE PIECE ARC & EPISODE FINDER
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Cari arc petualangan Topi Jerami berdasarkan judul, nomor episode, atau saga!
          </p>
        </header>

        {/* Action Controls (Search & Filter) */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <SagaFilter sagas={sagas} selectedSaga={selectedSaga} onSagaChange={setSelectedSaga} />
        </div>

        {/* Display List / Results */}
        <ArcList arcs={filteredArcs} onReset={handleReset} />

      </div>
    </div>
  );
}