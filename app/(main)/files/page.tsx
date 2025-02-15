"use client"

import { useState, useEffect } from "react"

import { TbFaceIdError, TbLoader } from "react-icons/tb"
import { FilesTable } from "@/components/files/files-table"

const FilesPage = () => {
    const [files, setFiles] = useState()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchFiles = async () => {
        try {
            setIsLoading(true)

            const response = await fetch("https://api.aaf-bet.ru/api/files/all")
            const files = await response.json()
            setFiles(files)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleOnDelete = async (id: string) => {
        try {
            const response = await fetch(`https://api.aaf-bet.ru/api/files/delete/${id}`, {
                method: 'DELETE',
            })
            const data = await response.json()

            if (data.status === 'deleted') fetchFiles()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchFiles()
    }, [])

    if (isLoading) return (
        <article className="flex justify-center items-center pl-14">
            <TbLoader className="size-10 animate-spin" />
        </article>
    )

    return (
        <article className="flex justify-center pl-14">

            {!files
                ? <div className="flex flex-col items-center gap-y-4">
                    <TbFaceIdError className="size-20" />
                    <h1>Файлы не найдены</h1>
                </div>
                : <FilesTable files={files} handleOnDelete={handleOnDelete} />
            }

        </article>
    )
}

export default FilesPage