import Link from "next/link"

import { FaRegUser } from "react-icons/fa6"

export const Login = () => {
    return (
        <Link href='/login' className="flex justify-center items-center w-10 h-10 border rounded-full"><FaRegUser /></Link>
    )
}