"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useOrganization } from "@/hooks/use-organization";
import { useEffect, useState } from "react";
import { siteConfig } from "@/features/devemp/configs/site";
import { mainNav } from "@/features/devemp/configs/nav";

interface SidebarProps {
  isCollapsed?: boolean;
}

export function Sidebar({ isCollapsed = false }: SidebarProps) {
  const [isClient, setIsClient] = useState<boolean>(false);
  const { organization } = useOrganization();
  const pathname = usePathname();

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <div className={cn(
      "hidden border-r bg-muted/40 md:block transition-all duration-300",
      isCollapsed ? "w-16" : "w-64 lg:w-72"
    )}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className={cn(
          "flex h-14 items-center border-b transition-all duration-300",
          isCollapsed ? "px-2" : "px-4 lg:h-[60px] lg:px-6"
        )}>
          {isCollapsed ? (
            <div className="flex justify-center w-full">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">
                  <Image
                    src={siteConfig.logo}
                    alt={`${siteConfig.name} Logo`}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div>
                <h2 className="text-sm font-semibold tracking-tight">{siteConfig.name}</h2>
                <p className="text-xs text-muted-foreground">{siteConfig.title}</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1">
          <nav className={cn(
            "grid items-start text-sm font-medium transition-all duration-300",
            isCollapsed ? "px-1" : "px-2 lg:px-4"
          )}>
            {mainNav.map((item) => {
              const href = item.organization && organization ? `/o/${organization.id}${item.href}` : item.href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center rounded-lg py-2 text-muted-foreground transition-all hover:text-primary",
                    isCollapsed
                      ? "justify-center px-2"
                      : "gap-3 px-3",
                    pathname === href && "text-primary bg-muted"
                  )}
                  title={isCollapsed ? item.title : undefined}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="truncate">{item.title}</span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
