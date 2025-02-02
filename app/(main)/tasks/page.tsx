"use client";
import React, { useEffect, useState } from "react";
import { TbFaceIdError } from "react-icons/tb";

export default function ParsersPage() {
  const [data, setData] = useState([]);
  // const [error, setError] = useState();

  function fetchFiles() {
    const response = fetch("https://api.aaf-bet.ru/api/tasks/all");

    console.log(response);

    return response;
  }

  useEffect(() => {
    fetchFiles()
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
//TODO: сделать анимацию грустного лица
  return (
    <div className="flex justify-center overflow-x-auto">
      {!data.length ? (
        <div className="flex flex-col items-center justify-center">
        <TbFaceIdError className="size-20"/>
        <p className="text-neutral-800 mt-10">В данный момент задач нет.</p>
        </div>
      ) : (
        <p>тут будет таблица</p>
      )}
    </div>
  );
}
