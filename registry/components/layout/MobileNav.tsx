"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SuperAdminReturnButton } from "../global/SuperAdminReturnButton";
import { NotificationsTrigger } from "../global/NotificationsTrigger";
import { HelpTrigger } from "../global/HelpTrigger";
import { useOrganization } from "@/hooks/useOrganization";
import { useEffect, useState } from "react";
import { mobileNav } from "@/features/devemp/configs/nav";
import { UserNav } from "../global/UserNav";

export function MobileNav() {
  const [isClient, setIsClient] = useState<boolean>(false);

  const { organization } = useOrganization();
  const pathname = usePathname();

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <nav className="flex items-center justify-around p-1">
        {mobileNav.map((item) => {
          const href = item.organization && organization ? `/o/${organization.id}${item.href}` : item.href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-1 rounded-md p-2 text-sm font-medium text-muted-foreground hover:bg-muted",
                pathname === href && "text-primary"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          )
        })}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex flex-col items-center gap-1 rounded-md p-2 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              <Menu className="h-5 w-5" />
              <span>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-48">
            <div className="flex flex-col gap-2 p-2">
              <SuperAdminReturnButton />
              <NotificationsTrigger />
              <HelpTrigger />
              <UserNav />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  );
}
