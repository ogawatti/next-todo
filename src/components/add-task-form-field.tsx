import { SubmitButton } from "./submit-button";
import { TaskTextField } from "./task-text-field";

export const AddTaskFormField = () => {
  return (
    <>
      <label
        htmlFor="add-task"
        data-testid="add-task-form-field-label"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        TODO
      </label>
      <div data-testid="add-task-form-text-field" className="relative w-80">
        <TaskTextField id={"add-task"}/>
        <SubmitButton name="Add" />
      </div>
    </>
  );
}
