import AddTaskForm from "@/components/add-task-form";
import Header from "@/components/header";
import Tasks from "@/components/tasks";

export const Home = () => {
  return (
    <main className="container mx-auto">
      <Header />

      <div>
        <AddTaskForm />
        <Tasks />
      </div>
    </main>
  );
}

export default Home;
