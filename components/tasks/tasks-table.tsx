"use client";

import toast from "react-hot-toast";

import { Task } from "@/types";
import { cn } from "@/lib/utils";

import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

import { MdCancel } from "react-icons/md";

type TasksTableProps = {
  tasks: Task[];
};

export const TasksTable = ({ tasks }: TasksTableProps) => {
  const handleOnAbort = async (id: string) => {
    try {
      await fetch(`https://flower.aaf-bet.ru/api/task/abort/${id}`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Парсер остановлен!");
    } catch (error) {
      toast.error("Что-то пошло не так!");
      console.error("ABORT TASK ERROR", error);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task ID</TableHead>
          <TableHead>Parser Name</TableHead>
          <TableHead>Runtime</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Started</TableHead>
          <TableHead>Abort</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.uuid}>
            <TableCell>{task.uuid}</TableCell>
            <TableCell className="capitalize">{task.name}</TableCell>
            <TableCell>{task.runtime}</TableCell>
            <TableCell>
              <p
                className={cn(
                  "px-2 py-1 w-fit rounded-md",
                  task.state === "STARTED" && "bg-yellow-200",
                  task.state === "FAILURE" && "bg-rose-200",
                  task.state === "SUCCESS" && "bg-green-200"
                )}
              >
                {task.state}
              </p>
            </TableCell>
            <TableCell>
              {new Date(task.started * 1000).toLocaleString("ru-RU", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
              })}
            </TableCell>
            <TableCell>
              <button
                type="button"
                aria-label="Abort"
                onClick={() => handleOnAbort(task.uuid)}
                disabled={task.state !== "STARTED"}
                className="p-2 hover:text-rose-500 rounded-full hover:bg-rose-100 disabled:text-neutral-500 disabled:bg-transparent transition-colors"
              >
                <MdCancel className="size-6" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
