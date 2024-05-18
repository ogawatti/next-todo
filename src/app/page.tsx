import Header from "@/components/header";
import Tasks from "@/components/tasks";

export const Home = () => {
  return (
    <main className="container mx-auto">
      <Header />

      <div className="flex justify-center">
        <Tasks />
      </div>
    </main>
  );
}

export default Home;
