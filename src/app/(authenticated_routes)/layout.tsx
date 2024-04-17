import Sidebar from "@/components/Sidebar";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import { nextAuthOptions } from "@/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <Grid>
      <Sidebar />
      <Container>{children}</Container>
    </Grid>
  );
}
