"use client";

import { siteConfig } from "@/features/devemp/configs/site";
import { useOrganization } from "@/hooks/useOrganization";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Logo() {
  const [isClient, setIsClient] = useState(false)
  const { organization } = useOrganization();

  useEffect(() => {
    setIsClient(true)
  }, [])

  // In a real app, you'd likely have a fallback or default logo
  const logoSrc = organization?.branding?.logo || siteConfig.logo;
  const orgName = organization?.name || siteConfig.name;

  if (!organization || !isClient) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Image src={logoSrc} alt={`${orgName} Logo`} width={24} height={24} />
      <span className="font-bold">{orgName}</span>
    </div>
  );
}
