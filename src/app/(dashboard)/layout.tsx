import NavbarUI from "@/components/NavbarComponent";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
interface Props {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: Readonly<Props>) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/signIn");
  return (
    <div>
      <NavbarUI />
      <div className="h-16">
        <BreadcrumbComponent />
      </div>

      <main>{children}</main>
    </div>
  );
}
