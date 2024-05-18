import Task from "@/components/task";
import prisma from '@/lib/prisma';

export const Tasks = async () => {
  const tasks = await prisma.task.findMany({
    where: {
      done: false
    },
  });
  console.log(tasks);

  return (
    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {tasks.map((task) => {
        return <Task key={task.id} id={task.id} content={task.content} />
      })}
    </ul>
  );
}

export default Tasks;
