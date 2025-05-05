'use client'

import Link from "next/link"
import toast from "react-hot-toast"

import { File } from "@/types"

import {
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableHead,
    TableHeader,
} from "@/components/ui/table"

import { IoCloudDownloadOutline, IoTrash } from "react-icons/io5"

type FilesTableProps = {
    files: File[]
}

export const FilesTable = ({ files }: FilesTableProps) => {
    const handleOnDelete = async (id: string) => {
        try {
            const response = await fetch(`https://api.aaf-bet.ru/api/files/delete/${id}`, {
                method: 'DELETE',
                cache: 'no-cache'
            })
            const data = await response.json()
            if (!data.ok) {
                toast.error('Не получилось удалить файл!')
                return
            }

            toast.success('Файл удален!')
        } catch (error) {
            toast.error('Что-то пошло не так!')
            console.error('DELETE FILE ERROR', error)
        }
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>
                        File ID
                    </TableHead>
                    <TableHead>
                        Title
                    </TableHead>
                    <TableHead>
                        Created at
                    </TableHead>
                    <TableHead>
                        <IoCloudDownloadOutline className="size-6 mx-2" />
                    </TableHead>
                    <TableHead>
                        <IoTrash className="size-6 mx-2" />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {files.map((file) => (
                    <TableRow key={file.id} >
                        <TableCell>
                            {file.id}
                        </TableCell>
                        <TableCell>
                            {file.name}
                        </TableCell>
                        <TableCell>
                            {Intl.DateTimeFormat('ru-RU', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                            }).format(new Date(file.created_at))}
                        </TableCell>
                        <TableCell>
                            <Link
                                href={`https://api.aaf-bet.ru/` + file.file_url}
                                onClick={() => toast.success('Файл загружен!')}
                                download
                                aria-label="Download"
                                className="flex w-fit p-2 rounded-full hover:bg-gray-300/60 transition-colors"
                            >
                                <IoCloudDownloadOutline className="size-6" />
                            </Link>
                        </TableCell>
                        <TableCell>
                            <button
                                type="button"
                                aria-label="Delete"
                                onClick={() => handleOnDelete(file.id)}
                                className="p-2 hover:text-rose-500 rounded-full hover:bg-rose-100 transition-colors"
                            >
                                <IoTrash className="size-6" />
                            </button>
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    )
}