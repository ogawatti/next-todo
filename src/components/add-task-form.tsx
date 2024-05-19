"use client";

import { create } from "@/actions/create";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const AddTaskForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  return (
    <div className="flex justify-center my-2">
      <form
        ref={ref}
        action={
          async (formData: FormData) => {
            await create(formData);
            router.refresh();
            ref?.current?.reset()
        }
      }>   
        <label htmlFor="add-task" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          TODO
        </label>
        <div className="relative w-80">
          <input
            type="text"
            id="add-task"
            name="content"
            placeholder="TODO"
            required
            className="block w-full pl-8 p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTaskForm;
