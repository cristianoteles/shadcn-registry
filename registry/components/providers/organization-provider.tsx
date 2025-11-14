"use client";

import { OrganizationUserStorage } from "@/features/devemp/organization/organization-user-storage";
import React, { createContext, useContext, useMemo } from "react";

export type OrganizationProviderData = {
  id: string;
  name: string;
  alias: string;
  branding: {
    logo: string,
    primaryColor: string,
    secondaryColor: string,
  }
};

type OrganizationContextType = {
  organization: OrganizationProviderData | null;
  loading: boolean;
};

const OrganizationContext = createContext<OrganizationContextType | undefined>(
  undefined
);

export function OrganizationProvider({
  children,
  orgId,
}: {
  children: React.ReactNode;
  orgId: string;
}) {

  ;
  // In a real app, you would fetch the organization data based on orgId
  const value = useMemo(
    () => ({
      organization: OrganizationUserStorage.getCurrent(),
      loading: false,
    }),
    [orgId]
  );

  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  );
}

export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (context === undefined) {
    throw new Error(
      "useOrganization must be used within an OrganizationProvider"
    );
  }
  return context;
};
