import { OrgShell } from "@/components/devemp/layout/OrgShell";

interface OrganizationLayoutProps {
  children: React.ReactNode;
  params: Promise<{ org: string }>;
}

export default async function OrganizationLayout({ children, params }: OrganizationLayoutProps) {
  const { org } = await params;
  return <OrgShell orgId={org} key={`org-${org}`}>{children}</OrgShell>;
}
