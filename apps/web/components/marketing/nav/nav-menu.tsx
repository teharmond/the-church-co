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

export function NavMenu() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-2 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-nowrap font-semibold leading-none tracking-tighter text-foreground sm:text-lg"
        >
          <TheChurchCo height={"26"} width={"26"} />
          <h1>The Church Co</h1>
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 md:w-[250px] lg:w-[300px]">
                  {features.map((feature) => (
                    <ListItem
                      key={feature.title}
                      title={feature.title}
                      href={feature.href}
                    >
                      {feature.description}
                    </ListItem>
                  ))}
                  <Separator />
                  <ListItem
                    title="Explore More"
                    href="/docs/primitives/alert-dialog"
                  >
                    Explore More
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
            className="text-muted-foreground h-8 py-0 px-3"
          >
            Log in
          </Button>
          <Button className="h-8 py-0 px-3">Sign up</Button>
          <MobileNavSheet />
        </div>
      </div>
    </header>
  );
}
