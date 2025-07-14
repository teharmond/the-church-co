import CalendarIcon from "@the-church-co/ui/icons/calendar";
import GivingIcon from "@the-church-co/ui/icons/giving";
import HomeIcon from "@the-church-co/ui/icons/home";
import NotesIcon from "@the-church-co/ui/icons/notes";
import SettingsIcon from "@the-church-co/ui/icons/settings";
import UsersIcon from "@the-church-co/ui/icons/users";
import WebsiteClick from "@the-church-co/ui/icons/website-click";

export const data = {
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
          title: "Settings",
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
      url: "/people",
      icon: UsersIcon,
      items: [
        {
          title: "Dashboard",
          url: "/people",
        },
        {
          title: "All People",
          url: "/people/all",
        },
        {
          title: "Groups",
          url: "/people/groups",
        },
        {
          title: "Prayer",
          url: "/people/prayer",
        },
      ],
    },
    {
      title: "Content",
      url: "/content",
      icon: NotesIcon,
      items: [
        {
          title: "Dashboard",
          url: "/content",
        },
        {
          title: "Sermons",
          url: "/content/sermons",
        },
        {
          title: "Forms",
          url: "/content/forms",
        },
        {
          title: "Blog",
          url: "/content/blog",
        },
        {
          title: "Announcements",
          url: "/content/announcements",
        },
        {
          title: "Media",
          url: "/content/media",
        },
        {
          title: "Contributors",
          url: "/content/contributors",
        },
      ],
    },
    {
      title: "Giving",
      url: "/giving",
      icon: GivingIcon,
      items: [
        {
          title: "Dashboard",
          url: "/giving",
        },
        {
          title: "Funds",
          url: "/giving/funds",
        },
        {
          title: "Transactions",
          url: "/giving/transactions",
        },
        {
          title: "Recurring",
          url: "/giving/recurring",
        },
        {
          title: "Settings",
          url: "/giving/settings",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
      items: [
        {
          title: "Profile",
          url: "/settings",
        },
        {
          title: "Organization",
          url: "/settings/organization",
        },
        {
          title: "Admin Team",
          url: "/settings/admin-team",
        },
        {
          title: "Campuses",
          url: "/settings/campuses",
        },
        {
          title: "Branding",
          url: "/settings/branding",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        },
        {
          title: "Integrations",
          url: "/settings/integrations",
        },
        {
          title: "Block List",
          url: "/settings/block-list",
        },
      ],
    },
  ],
};
