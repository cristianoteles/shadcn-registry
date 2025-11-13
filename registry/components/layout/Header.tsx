"use client";

import { UserNav } from "../global/UserNav";
import { NotificationsTrigger } from "../global/NotificationsTrigger";
import { HelpTrigger } from "../global/HelpTrigger";
import { SuperAdminReturnButton } from "../global/SuperAdminReturnButton";
import { useOrganization } from "@/hooks/useOrganization";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeftRight, Check, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { OrganizationProviderData } from "../providers/OrganizationProvider";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getOrganizationsUser } from "@/features/devemp/organization/OrganizationService";
import { OrganizationUserStorage } from "@/features/devemp/organization/OrganizationUserStorage";
import { siteConfig } from "@/features/devemp/configs/site";

interface HeaderProps {
  isCollapsed?: boolean;
  toggleSidebar?: () => void;
}

export function Header({ isCollapsed = false, toggleSidebar }: HeaderProps) {
  const [isClient, setIsClient] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [organizations, setOrganizations] = useState<OrganizationProviderData[]>([]);
  const { organization } = useOrganization();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    getOrganizationsUser().then((orgs) => {
      setOrganizations(orgs);
      OrganizationUserStorage.set(orgs);
    });
  }, []);

  const handleOrgChange = (orgId: string) => {
    OrganizationUserStorage.setCurrent(organizations.find((org) => org.id === orgId) || null);
    router.push(`/o/${orgId}`);
    router.refresh();
    setDialogOpen(false);
  };

  if (!isClient) return null;
  return (
    <>
      {/* Mobile Layout - Two Headers */}
      <div className="md:hidden">
        {/* Header Superior - Aplicação */}
        <header className="sticky top-0 z-40 w-full border-b bg-primary/10 backdrop-blur supports-[backdrop-filter]:bg-primary/10">
          <div className="container flex h-12 items-center">
            {/* App Brand */}
            <div className="flex items-center space-x-2">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <h1 className="text-base font-semibold tracking-tight text-primary">{siteConfig.name}</h1>
            </div>

            {/* Global App Actions */}
            <div className="flex-1 flex items-center justify-end space-x-1">
              <nav className="flex items-center space-x-1">
                <SuperAdminReturnButton />
                <NotificationsTrigger />
                <HelpTrigger />
                <UserNav />
              </nav>
            </div>
          </div>
        </header>

        {/* Header Inferior - Organização */}
        <header className="sticky top-12 z-35 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-12 items-center">
            {/* Organization Name Display */}
            <div className="flex-1 flex items-center">
              <div className="flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs font-medium text-primary">
                  {organization?.name?.charAt(0)?.toUpperCase() || 'O'}
                </div>
                <span className="text-sm font-medium text-foreground truncate max-w-[150px]">
                  {organization?.alias || 'Organização'}
                </span>
              </div>
            </div>

            {/* Organization Switch Button */}
            <div className="flex items-center">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-accent"
                    title="Trocar organização"
                  >
                    <ArrowLeftRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Trocar Organização</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      {organizations.map((org) => (
                        <button
                          key={org.id}
                          onClick={() => handleOrgChange(org.id)}
                          className={cn(
                            "w-full flex items-center justify-between p-3 rounded-lg border text-left hover:bg-accent transition-colors",
                            organization?.id === org.id && "border-primary bg-primary/5"
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-sm font-medium text-primary">
                              {org.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-medium">{org.name}</p>
                              <p className="text-sm text-muted-foreground">{org.alias}</p>
                            </div>
                          </div>
                          {organization?.id === org.id && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>
      </div>

      {/* Desktop Layout - Single Header */}
      <header className="hidden md:flex sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          {/* Sidebar Toggle */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="h-8 w-8"
              title={isCollapsed ? "Expandir sidebar" : "Recolher sidebar"}
            >
              {isCollapsed ? (
                <PanelLeftOpen className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Organization Context - Left Side */}
          <div className="flex-1 flex items-center justify-start px-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs font-medium text-primary">
                {organization?.name?.charAt(0)?.toUpperCase() || 'O'}
              </div>
              <span className="text-sm font-medium text-foreground">
                {organization?.alias || 'Organização'}
              </span>
            </div>
          </div>

          {/* Organization Switch + User Actions - Right Side */}
          <div className="flex items-center space-x-2">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-accent"
                  title="Trocar organização"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Trocar Organização</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    {organizations.map((org) => (
                      <button
                        key={org.id}
                        onClick={() => handleOrgChange(org.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-lg border text-left hover:bg-accent transition-colors",
                          organization?.id === org.id && "border-primary bg-primary/5"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-sm font-medium text-primary">
                            {org.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium">{org.name}</p>
                            <p className="text-sm text-muted-foreground">{org.alias}</p>
                          </div>
                        </div>
                        {organization?.id === org.id && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <nav className="flex items-center space-x-1">
              <SuperAdminReturnButton />
              <NotificationsTrigger />
              <HelpTrigger />
              <UserNav />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
