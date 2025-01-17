"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center gap-4">
        <Link
          href="/parsers/marafon"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Marafon
        </Link>
        <Link
          href="/parsers/soccerway"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300 ease-in-out"
        >
          Soccerway
        </Link>
      </div>
    </main>
  );
}
