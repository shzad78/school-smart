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
      <div className="flex">
        <div className="w-64 p-0 m-0">
          {" "}
          {/* Remove padding and margin */}
          <AppSidebar />
        </div>
        <div className="flex-1 p-0 m-0">
          {" "}
          {/* Remove padding and margin */}
          <AppHeader
            searchQuery={""}
            setSearchQuery={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <DashboardContent />
        </div>
      </div>
    </SidebarProvider>
  );
}
