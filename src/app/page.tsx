"use server";
import Todo from "@/components/todo";
import prisma from '@/lib/prisma';

export const Home = async () => {
  const tasks = await prisma.task.findMany({
    where: {
      done: false
    },
  });

  return (
    <main className="container mx-auto">
      <header className="my-8">
        <h2 className="text-center text-4xl">Next.js TODO Application</h2>
      </header>

      <div className="flex justify-center">
        <ul className="list-disc list-inside">
          {tasks.map((task) => {
            return <Todo key={task.id} content={task.content} />
          })}
        </ul>
      </div>
    </main>
  );
}

export default Home;
