import { CogIcon, Search, FileSpreadsheet, CirclePlus } from "lucide-react";

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
import { Link } from "react-router-dom";

const menuOptions = [
  {
    path: "users",
    title: "Usuarios",
    options: [
      {
        title: "Lista",
        url: "list",
        icon: FileSpreadsheet,
      },
      {
        title: "Registrar",
        url: "registration",
        icon: CirclePlus,
      },
    ],
  },
  {
    path: "quotations",
    title: "Cotizaciones",
    options: [
      {
        title: "Cotizar",
        url: "create",
        icon: Search,
      },
    ],
  },
  {
    path: "products",
    title: "Productos",
    options: [
      {
        title: "Lista",
        url: "list",
        icon: FileSpreadsheet,
      },
      {
        title: "Registrar",
        url: "registration",
        icon: CirclePlus,
      },
    ],
  },
  {
    path: "customers",
    title: "Clientes",
    options: [
      {
        title: "Lista",
        url: "list",
        icon: FileSpreadsheet,
      },
      {
        title: "Registrar",
        url: "registration",
        icon: CirclePlus,
      },
    ],
  },
  {
    path: "settings",
    title: "Configuración",
    options: [
      {
        title: "Configuración",
        url: "general",
        icon: CogIcon,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        {menuOptions.map((group) => (
          <SidebarGroup key={group.path}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.options.map((option) => (
                  <SidebarMenuItem key={option.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={`/${group.path}/${option.url}`}
                        data-testid={`${group.path}-${option.url}`}
                      >
                        <option.icon />
                        <span>{option.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
