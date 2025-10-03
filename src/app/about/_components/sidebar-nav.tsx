
"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()
  
  // For client-side navigation that relies on hash, we need to manually track it.
  // A simple state could work if we only navigate within this page.
  // For linking from outside, we'd need to parse window.location.hash on mount.
  // Let's use a simpler approach for now. A full-fledged solution would use a state and effect.
  const getHash = () => {
    if (typeof window !== "undefined") {
      return window.location.hash;
    }
    return '';
  }
  const [activeHash, setActiveHash] = React.useState(getHash());

  React.useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    // Set initial hash
    setActiveHash(getHash());
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleClick = (hash: string) => {
    setActiveHash(hash);
  };

  return (
    <nav
      className={cn(
        "flex flex-col space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => {
        const itemHash = item.href.split('#')[1] ? `#${item.href.split('#')[1]}` : '';
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => handleClick(itemHash)}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              (pathname + activeHash) === item.href
                ? "bg-muted hover:bg-muted text-primary"
                : "hover:bg-muted/50 hover:underline",
              "justify-start"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
