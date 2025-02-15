import { cn } from "@/lib/utils"

import {
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableHead,
    TableHeader,
} from "@/components/ui/table"

interface Task {
    uuid: string
    name: string
    state: 'STARTED' | 'FAILURE' | 'SUCCESS'
}

type TasksTableProps = {
    tasks: Task[]
}

export const TasksTable = ({ tasks }: TasksTableProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>
                        ID
                    </TableHead>
                    <TableHead>
                        Parser Name
                    </TableHead>
                    <TableHead>
                        Status
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {tasks.map((task) => (
                    <TableRow key={task.uuid} >
                        <TableCell>
                            {task.uuid}
                        </TableCell>
                        <TableCell className="capitalize">
                            {task.name.replace('app.tasks.celery_app.', '').replace('_parser_task', '')}
                        </TableCell>
                        <TableCell>
                            <p className={cn("px-2 py-1 w-fit rounded-md",
                                task.state === 'STARTED' && 'bg-yellow-200',
                                task.state === 'FAILURE' && 'bg-rose-200',
                                task.state === 'SUCCESS' && 'bg-green-200',
                            )}>
                                {task.state}
                            </p>
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    )
}