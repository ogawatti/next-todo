import { headers } from 'next/headers'
import AddTaskForm from "@/components/add-task-form";
import Header from "@/components/header";
import Tasks from "@/components/tasks";
import * as jwt from 'jsonwebtoken';
import { getUserInfo } from '@/lib/user-info';

export const Home = () => {
  // const xAmznOidcData = headers().get('x-amzn-oidc-data');
  // const { email } = getUserInfo(xAmznOidcData);
  // console.log(email);

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
