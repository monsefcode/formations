import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Formations
      </Link>
      <Link
        href="/users"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Users
      </Link>
      <Link
        href="/settings"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
