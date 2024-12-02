"use client";

import { useState } from "react";

export default function ParsersPage() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  function handleClick() {
    if (!data) {
      setError("No date selected");
    } else {
      setError("");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-8">Запустить Soccerway</h1>
      <p>{error}</p>
      <input
        type="date"
        className="p-3 rounded-md border border-gray-300 w-64 mb-8"
        onChange={(e) => setData(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Run Soccerway
      </button>
    </div>
  );
}
