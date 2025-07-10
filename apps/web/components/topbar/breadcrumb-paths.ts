import { data } from "../sidebar/sidebar-nav";

interface BreadcrumbPath {
  label: string;
  href: string;
}

export function getBreadcrumbPaths(pathname: string): BreadcrumbPath[] {
  const segments = pathname.split("/").filter(Boolean);
  const paths: BreadcrumbPath[] = [];

  if (segments.length === 0) {
    return [{ label: "Home", href: "/home" }];
  }

  let currentPath = "";
  
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;
    
    // Find the main nav item
    const mainNavItem = data.navMain.find(
      (item) => item.url === currentPath || item.url.startsWith(currentPath + "/")
    );
    
    if (mainNavItem) {
      paths.push({
        label: mainNavItem.title,
        href: mainNavItem.url,
      });
      
      // Check for sub-items
      if (mainNavItem.items && i < segments.length - 1) {
        const remainingPath = "/" + segments.slice(0, i + 2).join("/");
        const subItem = mainNavItem.items.find((item) => item.url === remainingPath);
        
        if (subItem) {
          paths.push({
            label: subItem.title,
            href: subItem.url,
          });
          i++; // Skip the next segment since we've already processed it
        }
      }
    } else {
      // Handle paths not in sidebar nav
      const label = segment
        ? segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        : "Unknown";
      
      paths.push({
        label,
        href: currentPath,
      });
    }
  }
  
  return paths;
}