import { Nav } from "@/components/sidebar/nav"
import { Header } from "@/components/header/header"


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen w-full flex-col" >
            <Nav />
            <Header />
            {children}
        </div>
    )
}

export default MainLayout