import { redirect } from "next/navigation";
const Home = async () => {
  redirect("/authentication");

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
