import {
  CheckSquare,
  ChevronDown,
  CircleDot,
  Edit,
  Link,
  Text,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const items = [
  {
    title: "Input",
    url: "#",
    icon: Edit,
  },
  {
    title: "Textarea",
    url: "#",
    icon: Text,
  },
  {
    title: "Checkbox",
    url: "#",
    icon: CheckSquare,
  },
  {
    title: "Radio Button",
    url: "#",
    icon: CircleDot,
  },
  {
    title: "Select",
    url: "#",
    icon: ChevronDown,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link className="ml-2 text-xl font-bold" href="/dashboard">
          Replex
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Form Fields</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
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
    </Sidebar>
  );
}
