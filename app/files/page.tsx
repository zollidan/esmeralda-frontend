"use client";
import React, { useState, useEffect } from "react";

// Описание структуры данных файла
interface File {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: number;
  StorageClass: string;
  Owner: {
    DisplayName: string;
    ID: string;
  };
}

export default function FilesPage() {
  const [data, setData] = useState<File[]>([]); // Явно указываем тип массива
  const [error, setError] = useState<string | null>(null);

  async function fetchFiles() {
    try {
      const response = await fetch("https://api.aaf-bet.ru/api/s3/files");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const files: File[] = await response.json(); // Указываем, что это массив объектов типа File
      setData(files);
    } catch (err) {
      setError((err as Error).message); // Приведение ошибки к типу Error
    }
  }

  useEffect(() => {
    fetchFiles();
  }, []);

  function handleDownload(key: string) {
    const url = `https://api.aaf-bet.ru/api/s3/files/${key}`;
    window.open(url, "_blank");
  }

  return (
    <div className="flex justify-center overflow-x-auto">
      {error ? (
        <p className="text-red-500">Failed to fetch files: {error}</p>
      ) : (
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Key</th>
              <th className="border border-gray-300 px-4 py-2">
                Last Modified
              </th>
              <th className="border border-gray-300 px-4 py-2">Size (KB)</th>
              <th className="border border-gray-300 px-4 py-2">Download</th>
            </tr>
          </thead>
          <tbody>
            {data.map((file, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{file.Key}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(file.LastModified).toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {(file.Size / 1024).toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handleDownload(file.Key)}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
