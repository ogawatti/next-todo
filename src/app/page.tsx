import AddTaskForm from "@/components/add-task-form";
import Header from "@/components/header";
import Tasks from "@/components/tasks";
import Layout from "./layout";

export const Home = () => {
  return (
    <div>
      <AddTaskForm />
      <Tasks />
    </div>
  );
}


Home.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;
