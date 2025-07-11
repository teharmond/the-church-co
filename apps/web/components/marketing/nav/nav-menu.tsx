import { Button } from "@the-church-co/ui/button";
import TheChurchCo from "@the-church-co/ui/icons/the-church-co";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@the-church-co/ui/navigation-menu";
import Link from "next/link";
import MobileNavSheet from "./mobile-nav-sheet";
import { ListItem } from "./list-item";
import { features } from "./features";
import { Separator } from "@the-church-co/ui/separator";
import Compass from "@the-church-co/ui/icons/compass";

export function NavMenu() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-2 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-nowrap font-semibold leading-none tracking-tighter text-foreground sm:text-lg"
        >
          <TheChurchCo height={"26"} width={"26"} />
          <h2>The Church Co</h2>
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 md:w-[250px] lg:w-[300px]">
                  {features.map((feature) => (
                    <ListItem
                      key={feature.title}
                      title={feature.title}
                      href={feature.href}
                      icon={feature.icon}
                    >
                      {feature.description}
                    </ListItem>
                  ))}
                  <Separator />
                  <ListItem
                    title="Explore More"
                    href="/docs/primitives/alert-dialog"
                    icon={Compass}
                  >
                    There's so much more to The Church Co
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Pricing</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Examples</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="h-8 px-3 py-0 text-muted-foreground"
          >
            Sign out
          </Button>
          <Link href="/home">
            <Button className="h-8 px-3 py-0">Dashboard</Button>
          </Link>
          <MobileNavSheet />
        </div>
      </div>
    </header>
  );
}
