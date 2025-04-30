import { Task } from "@/types"

import { TbFaceIdError } from "react-icons/tb"
import { TasksTable } from "@/components/tasks/tasks-table"

const TasksPage = async () => {
    const response = await fetch('https://flower.aaf-bet.ru/api/tasks')
    const data = await response.json()
    const tasks: Task[] = Object.values(data) as Task[]

    if (!!!tasks.length) {
        return (
            <article className="flex justify-center items-center pl-14">
                <div className="flex flex-col items-center gap-y-4">
                    <TbFaceIdError className="size-20" />
                    <h1>Задач нет</h1>
                </div>
            </article>
        )
    }

    return (
        <article className="flex justify-center pl-14">
            <TasksTable tasks={tasks} />
        </article>
    )
}

export default TasksPage
