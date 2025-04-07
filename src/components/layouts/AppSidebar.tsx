
import React from 'react';
import { Calendar, Clock, Users, LayoutDashboard, Zap, Focus, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from '@/components/ui/button';

// Menu items
const mainItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Calendar",
    url: "/",
    icon: Calendar,
  },
  {
    title: "Smart Schedule",
    url: "/",
    icon: Zap,
  },
  {
    title: "Focus Time",
    url: "/",
    icon: Focus,
  },
  {
    title: "Meetings",
    url: "/",
    icon: Users,
  },
  {
    title: "Reminders",
    url: "/",
    icon: Clock,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="py-4 px-4">
        <div className="flex items-center space-x-2">
          <Calendar className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">Smart Calendar</h1>
        </div>
        <SidebarTrigger className="ml-auto lg:hidden" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Your Calendar</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-3 py-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-calendar-event-primary"></div>
                <span className="text-sm">Work</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-calendar-event-secondary"></div>
                <span className="text-sm">Personal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-calendar-event-focus"></div>
                <span className="text-sm">Focus Time</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-4">
          <Button variant="outline" className="w-full flex items-center justify-center">
            <Settings className="h-4 w-4 mr-2" />
            <span>Settings</span>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
