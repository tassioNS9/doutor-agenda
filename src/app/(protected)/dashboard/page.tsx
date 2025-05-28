import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SignOutButton from "./components/sign-out-button";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  //Pegando clinicas do usuário, onde o userId da tabela de clinicas seja igual do usuário logado
  // const clinics = await db.query.usersToClinicsTable.findMany({
  //   where: eq(usersToClinicsTable.userId, session.user.id),
  // });
  if (!session.user.clinic) {
    redirect("/clinic-form");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
