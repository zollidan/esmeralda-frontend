import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="sticky pl-14 py-4">
      <div className="flex justify-between items-center gap-x-4 px-6">
        <Nav />
      </div>
    </header>
  );
};
