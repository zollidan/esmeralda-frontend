"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface File {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: number;
  Owner: {
    DisplayName: string;
    ID: string;
  };
}

export default function FilesPage() {
  const [data, setData] = useState<File[]>([]);

  function fetchFiles() {
    const response = fetch("https://api.aaf-bet.ru/api/files");

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

  return (
    <div className="flex justify-center overflow-x-auto">
      <table className="w-2/3 mt-10 text-sm text-left rtl:text-right text-gray-500 ">
        <tbody>
          {data &&
            data.map((file) => (
              <tr className="bg-white border-b " key={file.ETag}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {file.Key}
                </th>
                <td className="px-6 py-4">
                  <Link
                    href={
                      "https://storage.yandexcloud.net/esmeralda/" + file.Key
                    }
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Download
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
