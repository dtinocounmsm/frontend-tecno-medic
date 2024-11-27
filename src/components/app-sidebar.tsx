import { Home, Inbox, Search, ArrowRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const userOptions = [
  {
    title: "Registro",
    url: "/dashboard/user-registration",
    icon: Home,
  },
  {
    title: "listado",
    url: "/dashboard/user-list",
    icon: Inbox,
  },
];

const quotationOptions = [
  {
    title: "Cotizar",
    url: "/dashboard/user-registration",
    icon: Search,
  },
  {
    title: "Enviar",
    url: "/dashboard/user-list",
    icon: ArrowRight,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Usuarios</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userOptions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Cotizaciones</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quotationOptions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
