'use client'

import { Toaster } from "react-hot-toast"

export const ToasterContext = () => {
    return (
        <Toaster position="bottom-right" reverseOrder={false} />
    )
}