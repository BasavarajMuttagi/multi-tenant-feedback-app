"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function CreateFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex w-full">
        <div className="h-full w-full">{children}</div>
      </div>
    </SidebarProvider>
  );
}
