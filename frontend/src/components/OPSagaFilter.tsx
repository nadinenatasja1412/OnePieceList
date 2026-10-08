interface SagaFilterProps {
  sagas: string[];
  selectedSaga: string;
  onSagaChange: (saga: string) => void;
}

export default function OPSagaFilter({ sagas, selectedSaga, onSagaChange }: SagaFilterProps) {
  return (
    <div className="md:w-72">
      <select
        value={selectedSaga}
        onChange={(e) => onSagaChange(e.target.value)}
        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 transition cursor-pointer">
        {sagas.map((saga) => (
          <option key={saga} value={saga} className="bg-slate-800 text-slate-100">
            {saga === "All" ? "✨ Semua Saga" : saga}
          </option>
        ))}
      </select>
    </div>
  );
}