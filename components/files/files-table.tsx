import Link from "next/link"

import {
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableHead,
    TableHeader,
} from "@/components/ui/table"

import { IoCloudDownloadOutline, IoTrash } from "react-icons/io5"

interface File {
    id: string
    name: string
    file_url: string
    created_at: string
    updated_at: string
}

type FilesTableProps = {
    files: File[]
    handleOnDelete: (id: string) => void
}

export const FilesTable = ({ files, handleOnDelete }: FilesTableProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>
                        ID
                    </TableHead>
                    <TableHead>
                        Date of Creation
                    </TableHead>
                    <TableHead>
                        Date of Update
                    </TableHead>
                    <TableHead>
                        Update Time
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
                            {new Date(file.created_at).toLocaleDateString('ru-RU')}
                        </TableCell>
                        <TableCell>
                            {new Date(file.updated_at).toLocaleDateString('ru-RU')}
                        </TableCell>
                        <TableCell>
                            {new Date(file.updated_at).toLocaleTimeString('ru-RU')}
                        </TableCell>
                        <TableCell>
                            <Link
                                href={file.file_url}
                                download={file.file_url}
                                aria-label="Download"
                                className="flex w-fit p-2 rounded-md hover:bg-gray-300/60 transition-colors"
                            >
                                <IoCloudDownloadOutline className="size-6" />
                            </Link>
                        </TableCell>
                        <TableCell>
                            <button
                                type="button"
                                aria-label="Download"
                                onClick={() => handleOnDelete(file.id)}
                                className="p-2 rounded-md hover:text-rose-500 hover:bg-rose-100 transition-colors"
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