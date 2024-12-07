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
    url: "/users/registration",
    icon: Home,
  },
  {
    title: "listado",
    url: "/users/list",
    icon: Inbox,
  },
];

const quotationOptions = [
  {
    title: "Recibir",
    url: "/quotations/list",
    icon: Inbox,
  },
  {
    title: "Cotizar",
    url: "/quotations/registration",
    icon: Search,
  },
  {
    title: "Enviar",
    url: "/quotations/list",
    icon: ArrowRight,
  },
];

const reportsOptions = [
  {
    title: "Reportes",
    url: "/reports/home",
    icon: ArrowRight,
  },
];

const productsOptions = [
  {
    title: "Lista",
    url: "/products/list",
    icon: ArrowRight,
  },
  {
    title: "Registrar",
    url: "/products/registration",
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
        <SidebarGroup>
          <SidebarGroupLabel>Reportes y análisis</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {reportsOptions.map((item) => (
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
          <SidebarGroupLabel>Productos</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {productsOptions.map((item) => (
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
