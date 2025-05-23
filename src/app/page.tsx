"use client";

import { useState, useEffect } from "react";
import UtilityForm from "../components/UtilityForm";
import ResultsTable from "../components/ResultsTable";
import OfflineNotice from "../components/OfflineNotice";
import { calculateUtilities } from "../lib/calculateUtilities";
import { UtilityInput, UtilityResult } from "@/types";
export default function Home() {
  const [input, setInput] = useState<UtilityInput>({
    prices: { electricity: 12459, water: 2005, gas: 25439 },
    days: [31, 18, 25],
  });
  const [results, setResults] = useState<UtilityResult[]>([]);

  useEffect(() => {
    // Load saved inputs from localStorage
    const savedInput = localStorage.getItem("utilityInput");
    if (savedInput) {
      setInput(JSON.parse(savedInput));
    }
  }, []);

  useEffect(() => {
    // Save inputs to localStorage and calculate results
    localStorage.setItem("utilityInput", JSON.stringify(input));
    setResults(calculateUtilities(input));
  }, [input]);

  const handleRemove = (index: number) => {
    const newDays = input.days.filter((_, i) => i !== index);
    setInput({ ...input, days: newDays });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Utility Bill Calculator
        </h1>
        <OfflineNotice />
        <UtilityForm input={input} setInput={setInput} />
        <ResultsTable results={results} onRemove={handleRemove} />
      </div>
    </div>
  );
}
