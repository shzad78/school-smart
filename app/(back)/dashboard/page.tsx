"use client";

import * as React from "react";
import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import { AppHeader } from "@/components/dashboard/sidebar/sidebar-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardContent } from "./dashboard";

export default function SidebarV3() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <DashboardContent />
      </SidebarInset>
    </SidebarProvider>
  );
}
