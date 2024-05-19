import { SubmitButton } from "./submit-button";
import { TaskTextField } from "./task-text-field";

export const AddTaskFormField = () => {
  return (
    <>
      <label htmlFor="add-task" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        TODO
      </label>
      <div className="relative w-80">
        <TaskTextField id={"add-task"}/>
        <SubmitButton name="Add" />
      </div>
    </>
  );
}
