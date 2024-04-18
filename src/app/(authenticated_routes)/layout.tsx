import Sidebar from "@/components/Sidebar";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import { nextAuthOptions } from "@/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import * as queries from "@/queries";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);
  const avatar = await queries.userProfile();
  if (!session) {
    redirect("/");
  }

  return (
    <Grid>
      <Sidebar avatar={avatar} />
      <Container>{children}</Container>
    </Grid>
  );
}
