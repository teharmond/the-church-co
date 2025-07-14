import Sermons from "@the-church-co/ui/icons/sermons";
import WebsiteClick from "@the-church-co/ui/icons/website-click";
import Media from "@the-church-co/ui/icons/media";
import React from "react";
import Users from "@the-church-co/ui/icons/users";
import Calendar from "@the-church-co/ui/icons/calendar";
import Notes from "@the-church-co/ui/icons/notes";
import Prayer from "@the-church-co/ui/icons/prayer";
import Giving from "@the-church-co/ui/icons/giving";
import Settings from "@the-church-co/ui/icons/settings";

const quickLinks = [
  {
    title: "Web Pages",
    icon: <WebsiteClick />,
  },
  {
    title: "Media",
    icon: <Media />,
  },
  {
    title: "Groups",
    icon: <Users />,
  },
  {
    title: "Events",
    icon: <Calendar />,
  },
  {
    title: "Blog",
    icon: <Notes />,
  },
  {
    title: "Prayer",
    icon: <Prayer />,
  },
  {
    title: "People",
    icon: <Users />,
  },
  {
    title: "Giving",
    icon: <Giving />,
  },
  {
    title: "Sermons",
    icon: <Sermons />,
  },
  {
    title: "Settings",
    icon: <Settings />,
  },
];

export default function page() {
  return (
    <div className="mt-2 w-full space-y-6 p-5">
      <h2 className="text-2xl font-bold">Quick Links</h2>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-5">
        {quickLinks.map((link) => (
          <div
            className="flex flex-col items-center gap-2 rounded-xl border bg-secondary p-4"
            key={link.title}
          >
            <span className="text-primary [&_svg:not([class*='size-'])]:size-6">
              {link.icon}
            </span>

            <div className="text-center text-sm font-medium">{link.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
