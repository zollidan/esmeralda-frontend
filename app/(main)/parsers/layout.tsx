import { ParsersNav } from "@/components/parsers/nav"
import {Toaster} from "react-hot-toast";

type Props = {
    children: React.ReactNode
}

const ParsersLayout = async ({ children }: Props) => {
    return (
        <article className="space-y-4 pl-14">
            <div className="flex px-6">
                <ParsersNav />
            </div>
            <div><Toaster/></div>
            {children}
        </article>
    )
}

export default ParsersLayout