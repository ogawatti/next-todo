"use client";

import { create } from "@/actions/task";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { AddTaskFormField } from "./add-task-form-field";

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
        <AddTaskFormField />
      </form>
    </div>
  );
}

export default AddTaskForm;
