import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings2,
  Home,
  Globe,
  Calendar,
  Users,
  FileText,
  DollarSign,
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
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: Home,
      isActive: true,
    },
    {
      title: "Website",
      url: "/website",
      icon: Globe,
      items: [
        {
          title: "Website",
          url: "#",
        },
        {
          title: "Pages",
          url: "#",
        },
        {
          title: "Navigation",
          url: "#",
        },
        {
          title: "Design",
          url: "#",
        },
        {
          title: "Website Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Events",
      url: "/events",
      icon: Calendar,
    },
    {
      title: "People",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "All People",
          url: "#",
        },
        {
          title: "Groups",
          url: "#",
        },
        {
          title: "Prayer",
          url: "#",
        },
      ],
    },
    {
      title: "Content",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Sermons",
          url: "#",
        },
        {
          title: "Forms",
          url: "#",
        },
        {
          title: "Blog",
          url: "#",
        },
        {
          title: "Announcements",
          url: "#",
        },
        {
          title: "Contributors",
          url: "#",
        },
      ],
    },
    {
      title: "Giving",
      url: "#",
      icon: DollarSign,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Funds",
          url: "#",
        },
        {
          title: "Transactions",
          url: "#",
        },
        {
          title: "Recurring",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Organization",
          url: "#",
        },
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Campuses",
          url: "#",
        },
        {
          title: "Integrations",
          url: "#",
        },
        {
          title: "Admin Team",
          url: "#",
        },
      ],
    },
  ],
};
