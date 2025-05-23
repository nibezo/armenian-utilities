import { UtilityResult } from "@/types";

interface ResultsTableProps {
  results: UtilityResult[];
  onRemove: (index: number) => void; // Callback to remove a user
}

export default function ResultsTable({ results, onRemove }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-300 text-gray-900">
            <th className="p-4 text-left font-bold border-2 border-gray-400">
              Person
            </th>
            <th className="p-4 text-left font-bold border-2 border-gray-400">
              Electricity
            </th>
            <th className="p-4 text-left font-bold border-2 border-gray-400">
              Water
            </th>
            <th className="p-4 text-left font-bold border-2 border-gray-400">
              Gas
            </th>
            <th className="p-4 text-left font-bold border-2 border-gray-400">
              Total
            </th>
            <th className="p-4 text-left font-bold border-2 border-gray-400">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr
              key={result.personIndex}
              className="hover:bg-gray-100 transition-colors"
            >
              <td className="p-3 border border-gray-400 text-gray-900">
                {result.personIndex + 1}
              </td>
              <td className="p-3 border border-gray-400 text-gray-900">
                {result.electricity}
              </td>
              <td className="p-3 border border-gray-400 text-gray-900">
                {result.water}
              </td>
              <td className="p-3 border border-gray-400 text-gray-900">
                {result.gas}
              </td>
              <td className="p-3 border border-gray-400 text-gray-900 font-semibold">
                {result.total}
              </td>
              <td className="p-3 border border-gray-400 text-center">
                <button
                  onClick={() => onRemove(result.personIndex)}
                  className="text-red-600 hover:text-red-800 font-bold text-xl"
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
