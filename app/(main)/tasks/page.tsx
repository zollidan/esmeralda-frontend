"use client"

import { useCallback, useEffect, useState } from "react"

import { TbFaceIdError } from "react-icons/tb"

export default function ParsersPage() {
    const [tasks, setTasks] = useState()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [error, setError] = useState()

    const fetchTasks = useCallback(async () => {
        try {
            setIsLoading(true)

            const response = await fetch('/api/tasks')
            const data = await response.json()
            setTasks(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    //TODO: сделать анимацию грустного лица
    return (
        isLoading
            ? <div className="text-center">Загрузка...</div>
            : <article className="flex justify-center">
                {!tasks
                    ? <div className="flex flex-col items-center gap-y-4">
                        <TbFaceIdError className="size-20" />
                        <h1>В данный момент задач нет</h1>
                    </div>
                    : <>table</>
                }
            </article>
    )
}
