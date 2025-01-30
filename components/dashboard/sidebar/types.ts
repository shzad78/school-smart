// types.ts
export interface Team {
    name: string;
    logo: React.ComponentType<{ className?: string }>; // Lucide icons are React components
    plan: string;
  }
  
  export interface NavItem {
    title: string;
    url: string;
    icon?: React.ComponentType<{ className?: string }>; // Lucide icons are React components
    isActive?: boolean;
    items?: { title: string; url: string }[];
  }
  
  export interface Project {
    name: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>; // Lucide icons are React components
  }
  
  export interface User {
    name: string;
    email: string;
    avatar: string;
  }
  
  export interface AppData {
    user: User;
    teams: Team[];
    navMain: NavItem[];
    projects: Project[];
  }