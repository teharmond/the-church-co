import WebsiteClick from "@the-church-co/ui/icons/website-click";
import Mobile from "@the-church-co/ui/icons/mobile";
import Integrations from "@the-church-co/ui/icons/integrations";
import { IconProps } from "@the-church-co/ui/icons/types";

export const features: {
  title: string;
  href: string;
  description: string;
  icon: React.FC<IconProps>;
}[] = [
  {
    title: "Websites",
    href: "/docs/primitives/alert-dialog",
    description: "An easy to use Drag & Drop website designer",
    icon: WebsiteClick,
  },
  {
    title: "Mobile Apps",
    href: "/docs/primitives/hover-card",
    description:
      "A fully branded app with your name and logo in the app stores",
    icon: Mobile,
  },
  {
    title: "Integrations",
    href: "/docs/primitives/progress",
    description: "Fully connected to Planning Center, PushPay and ChurchSuite",
    icon: Integrations,
  },
];
