"use client";

import { useOrganization as useOrg } from "@/components/devemp/providers/OrganizationProvider";

export const useOrganization = () => {
  return useOrg();
};
