import Sidebar from "@/components/Sidebar";
import Container from "@/components/Container";
import Grid from "@/components/Grid";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid>
      <Sidebar />
      <Container>{children}</Container>
    </Grid>
  );
}
