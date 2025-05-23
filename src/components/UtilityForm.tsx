"use client";

import { UtilityInput } from "@/types";
import { useState } from "react";

interface UtilityFormProps {
  input: UtilityInput;
  setInput: (input: UtilityInput) => void;
}

export default function UtilityForm({ input, setInput }: UtilityFormProps) {
  const [personCount, setPersonCount] = useState(input.days.length);

  const handlePriceChange = (
    field: keyof UtilityInput["prices"],
    value: string
  ) => {
    setInput({
      ...input,
      prices: { ...input.prices, [field]: Number(value) },
    });
  };

  const handleDaysChange = (index: number, value: string) => {
    const newDays = [...input.days];
    newDays[index] = Number(value);
    setInput({ ...input, days: newDays });
  };

  const addPerson = () => {
    setInput({ ...input, days: [...input.days, 0] });
    setPersonCount(personCount + 1);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Enter Utility Prices and Days
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="number"
            placeholder="Electricity Price"
            value={input.prices.electricity}
            onChange={(e) => handlePriceChange("electricity", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
          />
          <input
            type="number"
            placeholder="Water Price"
            value={input.prices.water}
            onChange={(e) => handlePriceChange("water", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
          />
          <input
            type="number"
            placeholder="Gas Price"
            value={input.prices.gas}
            onChange={(e) => handlePriceChange("gas", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          {input.days.map((days, index) => (
            <input
              key={index}
              type="number"
              placeholder={`Days for Person ${index + 1}`}
              value={days}
              onChange={(e) => handleDaysChange(index, e.target.value)}
              className="w-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
            />
          ))}
        </div>
        <button
          onClick={addPerson}
          className="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Add Person
        </button>
      </div>
    </div>
  );
}
