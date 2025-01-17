import { Nav } from "./nav"
import { Login } from "./login"

export const Header = () => {
    return (
        <header className="sticky pl-14 py-4">
            <div className="flex justify-between items-center gap-x-4 px-6">
                <Nav />
                <Login />
            </div>
        </header>
    )
}