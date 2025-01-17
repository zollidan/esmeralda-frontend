'use client'

import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


const parsers = [
    {
        title: 'Marafon',
        href: '/parsers/marafon',
    },
    {
        title: 'Soccerway',
        href: '/parsers/soccerway',
    },
]

export const ParsersNav = () => {
    const pathname = usePathname()

    return (
        <nav className="flex items-center gap-x-4 p-1 bg-gray-200/60 rounded-lg">

            {parsers.map((parser) => (
                <Link key={parser.title} href={parser.href} className={cn("font-medium text-sm px-3 py-1.5 rounded transition-colors",
                    pathname.split('/').pop() === parser.title.toLowerCase() && 'bg-white'
                )}>
                    {parser.title}
                </Link>
            ))}

        </nav>
    )
}