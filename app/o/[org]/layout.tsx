import { AppShell } from "@/registry/components/layout/app-shell";
import { OrganizationProvider } from "@/registry/components/providers/organization-provider";

interface OrganizationLayoutProps {
  children: React.ReactNode;
  params: Promise<{ org: string }>;
}

export default async function OrganizationLayout({ children, params }: OrganizationLayoutProps) {
  const { org } = await params;
  return (
    <OrganizationProvider orgId={org} key={`org-${org}`}>
      <AppShell>{children}</AppShell>
    </OrganizationProvider>
  )
}
