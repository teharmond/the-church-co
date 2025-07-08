import TheChurchCo from "@the-church-co/ui/icons/the-church-co";
import Link from "next/link";
import { links } from "./links";
import SocialIcons from "./social-icons";

export default function Footer() {
  return (
    <footer className="border-b bg-accent pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-16">
          <div className="flex flex-col gap-3 lg:col-span-2">
            <Link
              href="/"
              aria-label="go home"
              className="flex items-center gap-2 text-nowrap text-lg font-semibold leading-none tracking-tighter text-foreground"
            >
              <span className="shrink-0">
                <TheChurchCo height={"26"} width={"26"} />
              </span>{" "}
              The Church Co
            </Link>
            <div className="flex flex-col gap-1">
              <Link
                href="javascript:Intercom('showNewMessage', '')"
                className="w-fit text-sm text-muted-foreground hover:text-primary"
              >
                Talk to an expert
              </Link>
              <Link
                href="mailto:support@thechurchco.com"
                className="w-fit text-sm text-muted-foreground hover:text-primary"
              >
                support@thechurchco.com
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-muted-foreground duration-150 hover:text-primary"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="order-last block text-center text-sm text-muted-foreground md:order-first">
            © {new Date().getFullYear()} The Church Co
          </span>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
