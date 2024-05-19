type TaskTextFieldProps = {
  id: string;
}

export const TaskTextField = ({ id }: TaskTextFieldProps) => {
  return(
    <input
      type="text"
      id={id}
      name="content"
      placeholder="TODO"
      required
      className="block w-full pl-8 p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
  )
}
