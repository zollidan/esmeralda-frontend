"use client";

import { useState } from "react";

export default function ParsersPage() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function runSoccerway(data: string) {
    const url = "https://api.aaf-bet.ru/api/parser/soccerway/?date=" + data;

    const response = fetch(url);

    return response;
  }

  function handleClick() {
    if (!data) {
      setError("Дата не выбрана!");
    } else {
      setError("");
      runSoccerway(data)
        .then((res) => res.json())
        .then((data) => {
          if (data.status == 200) {
            setSuccess("Парсер запустился!");
          } else {
            setError("Парсер не смог запуститься.");
          }
        });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-8">Запустить Soccerway</h1>
      {success && <p className="my-10 text-green-500">{success}</p>}
      {error && <p className="my-10 text-rose-500">{error}</p>}

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
