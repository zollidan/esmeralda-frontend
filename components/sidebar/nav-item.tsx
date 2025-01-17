'use client'

import Link from "next/link"

import { cn } from "@/lib/utils"
import { IconType } from "react-icons"
import { usePathname } from "next/navigation"

type NavLink = {
    title: string
    href: string
    icon?: IconType
}

export const NavItem = ({ title, href, icon: Icon }: NavLink) => {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            title={title}
            className={cn("flex justify-center items-center size-10 text-lg text-gray-500 hover:text-black rounded-lg hover:bg-gray-300/60 transition-colors",
                pathname.split('/').includes(title.toLocaleLowerCase()) && 'text-black bg-gray-300/60'
            )}
        >
            {Icon ? <Icon className="size-6" /> : title.toUpperCase().split('').shift()}
        </Link>
    )
}