import { ParsersNav } from "@/components/parsers/nav"

type Props = {
    children: React.ReactNode
}

const ParsersLayout = async ({ children }: Props) => {
    return (
        <article className="space-y-4 pl-14">
            <div className="flex px-6">
                <ParsersNav />
            </div>
            {children}
        </article>
    )
}

export default ParsersLayout