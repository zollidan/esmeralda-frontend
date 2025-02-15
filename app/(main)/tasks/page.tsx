"use client"

import { useCallback, useEffect, useState } from "react"

import { TbFaceIdError, TbLoader } from "react-icons/tb"
import { TasksTable } from "@/components/tasks/tasks-table"

interface Task {
    uuid: string
    name: string
    state: 'STARTED' | 'FAILURE' | 'SUCCESS'
}

const TasksPage = () => {
    const [tasks, setTasks] = useState<Task[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchTasks = useCallback(async () => {
        try {
            setIsLoading(true)

            const response = await fetch('/api/tasks')
            const data = await response.json()
            const arr = Object.values(data) as Task[]

            const result = arr.map((item: Task) => ({
                uuid: item.uuid,
                name: item.name,
                state: item.state,
            }))

            setTasks(result)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    if (isLoading) return (
        <article className="flex justify-center items-center pl-14">
            <TbLoader className="size-10 animate-spin" />
        </article>
    )

    return (
        <article className="flex justify-center pl-14">

            {!tasks
                ? <div className="flex flex-col items-center gap-y-4">
                    <TbFaceIdError className="size-20" />
                    <h1>В данный момент задач нет</h1>
                </div>
                : <TasksTable tasks={tasks} />
            }

        </article>
    )
}

export default TasksPage
