"use client";

import { useState } from "react";

interface Status {
  status: number;
}

export default function Home() {
  const [data, setData] = useState<Status>();

  function handleClick() {
    fetch("https://api.aaf-bet.ru/api/parser/soccerway/connection-test")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div>
      <main className="mt-12 px-4">
        {data !== undefined ? (
          data.status !== 200 ? (
            <div className="bg-red-800 w-full p-2 rounded-lg my-3">
              <p className="text-white">Cервисы недоступны.</p>
            </div>
          ) : (
            <div className="bg-green-800 w-full p-2 rounded-lg my-3">
              <p className="text-white">Все сервисы доступны.</p>
            </div>
          )
        ) : null}

        <button
          type="button"
          onClick={handleClick}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Test connection.
        </button>
      </main>
    </div>
  );
}
