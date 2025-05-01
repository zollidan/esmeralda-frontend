import { TbFaceIdError } from "react-icons/tb"
import { FilesTable } from "@/components/files/files-table"

const FilesPage = async () => {
    const response = await fetch("https://api.aaf-bet.ru/api/files", {
        cache: 'no-cache'
    })
    const data = await response.json()
    if (!!!data.length) return (
        <article className="flex justify-center pl-14">
            <div className="flex flex-col items-center gap-y-4">
                <TbFaceIdError className="size-20" />
                <h1>Файлы отсутствуют</h1>
            </div>
        </article>
    )

    return (
        <article className="flex justify-center pl-14">
            <FilesTable files={data} />
        </article>
    )
}

export default FilesPage