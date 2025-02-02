import { Nav } from "./nav"
import {UserButton} from "@clerk/nextjs";

export const Header = () => {
    return (
        <header className="sticky pl-14 py-4">
            <div className="flex justify-between items-center gap-x-4 px-6">
                <Nav />
                <UserButton />
            </div>
        </header>
    )
}