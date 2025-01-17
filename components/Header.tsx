import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="font-bold text-xl">
        <Link href="/">aaf-bet.ru</Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/tasks"
              className="text-blue-600 hover:bg-lavender-blush-100 rounded-lg p-2 transition-all duration-300"
            >
              Задачи
            </Link>
          </li>
          <li>
            <Link
              href="/files"
              className="text-blue-600 hover:bg-lavender-blush-100 rounded-lg p-2 transition-all duration-300"
            >
              Файлы
            </Link>
          </li>
          {/* <li>
            <Link
              href="/parsers"
              className="text-blue-600 hover:bg-lavender-blush-100 rounded-lg p-2 transition-all duration-300"
            >
              Парсеры
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
