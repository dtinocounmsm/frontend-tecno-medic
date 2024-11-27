import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-4 mx-auto">
        <SidebarTrigger />
        <div className="container">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};
