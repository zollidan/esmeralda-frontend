"use client";
import { useEffect, useState } from "react";
import { MainPage } from "../components/MainPage";

export default function Home() {
  const [data, setData] = useState();

  return (
    <div>
      <main className="mt-12 px-4">
        <MainPage data={data}></MainPage>
      </main>
    </div>
  );
}
