import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react";
import WebsiteClick from "@the-church-co/ui/icons/website-click";
import CalendarIcon from "@the-church-co/ui/icons/calendar";
import UsersIcon from "@the-church-co/ui/icons/users";
import NotesIcon from "@the-church-co/ui/icons/notes";
import GivingIcon from "@the-church-co/ui/icons/giving";
import SettingsIcon from "@the-church-co/ui/icons/settings";
import HomeIcon from "@the-church-co/ui/icons/home";

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
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: "Website",
      url: "/website",
      icon: WebsiteClick,
      items: [
        {
          title: "Dashboard",
          url: "/website",
        },
        {
          title: "Pages",
          url: "/website/pages",
        },
        {
          title: "Navigation",
          url: "/website/navigation",
        },
        {
          title: "Design",
          url: "/website/design",
        },
        {
          title: "Website Settings",
          url: "/website/settings",
        },
      ],
    },
    {
      title: "Events",
      url: "/events",
      icon: CalendarIcon,
    },
    {
      title: "People",
      url: "#",
      icon: UsersIcon,
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
      icon: NotesIcon,
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
      icon: GivingIcon,
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
      icon: SettingsIcon,
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
