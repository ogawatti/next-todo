"use client";

import { done } from "@/actions/task";
import { useRouter } from "next/navigation";

type TaskPorps = {
  id: bigint;
  content: string;
}

export const Task = ({ id, content }: TaskPorps) => {
  const router = useRouter();
  const taskId = Number(id).toString();

  return (
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      <div className="flex items-center ps-3">
        <input 
          id={taskId}
          type="checkbox"
          value=""
          onChange={async () => {
            await done(id);
            router.refresh()
          }} 
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        <label htmlFor={taskId} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {content}
        </label>
      </div>
    </li>
  );
}

export default Task;
