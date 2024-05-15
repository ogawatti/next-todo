import Todo from "@/components/todo";

export default function Home() {
  const tasks = [
    { id: 1, content: "First todo" },
    { id: 2, content: "Second todo" },
    { id: 3, content: "Third todo" },
  ];

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
