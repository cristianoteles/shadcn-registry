"use client";

import { OrganizationProvider } from "@/components/devemp/providers/OrganizationProvider";
import { AppShell } from "@/components/devemp/layout/AppShell";

interface OrgShellProps {
  children: React.ReactNode;
  orgId: string;
}

export function OrgShell({ children, orgId }: OrgShellProps) {
  return (
    <OrganizationProvider orgId={orgId}>
      <AppShell>{children}</AppShell>
    </OrganizationProvider>
  );
}
