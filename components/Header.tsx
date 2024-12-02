import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="font-bold text-xl">
        <a href="/">aaf-bet.ru</a>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/files"
              className="text-blue-600 hover:bg-lavender-blush-100 rounded-lg p-2 transition-all duration-300"
            >
              Files
            </Link>
          </li>
          <li>
            <Link
              href="/parsers"
              className="text-blue-600 hover:bg-lavender-blush-100 rounded-lg p-2 transition-all duration-300"
            >
              Parsers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
