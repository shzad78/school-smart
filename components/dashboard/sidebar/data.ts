// data.ts
import {
  LayoutDashboard,
  Users,
  BookOpen,
  UserCog,
  MessageSquare,
  CreditCard,
  Bus,
  Library,
  FileText,
  Settings,
} from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: LayoutDashboard,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: Users,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: BookOpen,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
      ],
    },
    {
      title: "Student Management",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Student Directory",
          url: "#",
        },
        {
          title: "Enrollment",
          url: "#",
        },
        {
          title: "Attendance",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
      ],
    },
    {
      title: "Academics",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Curriculum",
          url: "#",
        },
        {
          title: "Timetable",
          url: "#",
        },
        {
          title: "Examinations",
          url: "#",
        },
        {
          title: "Assignments",
          url: "#",
        },
        {
          title: "Report Cards",
          url: "#",
        },
      ],
    },
    {
      title: "Staff Management",
      url: "#",
      icon: UserCog,
      items: [
        {
          title: "Staff Directory",
          url: "#",
        },
        {
          title: "Attendance",
          url: "#",
        },
        {
          title: "Leave Management",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
      ],
    },
    {
      title: "Communication",
      url: "#",
      icon: MessageSquare,
      items: [
        {
          title: "Messages",
          url: "#",
        },
        {
          title: "Announcements",
          url: "#",
        },
        {
          title: "Notice Board",
          url: "#",
        },
        {
          title: "Emergency Alerts",
          url: "#",
        },
      ],
    },
    {
      title: "Finance",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Fee Management",
          url: "#",
        },
        {
          title: "Payments",
          url: "#",
        },
        {
          title: "Scholarships",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Transport",
      url: "#",
      icon: Bus,
      items: [
        {
          title: "Routes",
          url: "#",
        },
        {
          title: "Tracking",
          url: "#",
        },
        {
          title: "Drivers",
          url: "#",
        },
        {
          title: "Maintenance",
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: Library,
      items: [
        {
          title: "Library",
          url: "#",
        },
        {
          title: "Inventory",
          url: "#",
        },
        {
          title: "Facilities",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
      ],
    },
    {
      title: "Reports & Analytics",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Academic Reports",
          url: "#",
        },
        {
          title: "Financial Reports",
          url: "#",
        },
        {
          title: "Custom Reports",
          url: "#",
        },
        {
          title: "Analytics Dashboard",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "School Profile",
          url: "#",
        },
        {
          title: "User Management",
          url: "#",
        },
        {
          title: "System Settings",
          url: "#",
        },
        {
          title: "Backup & Security",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: Users,
    },
    {
      name: "Travel",
      url: "#",
      icon: BookOpen,
    },
  ],
};