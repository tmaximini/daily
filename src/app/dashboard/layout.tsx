import { DashboardLayout } from "@/layouts/DashboardLayout";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
