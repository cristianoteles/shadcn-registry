"use client";

import { useOrganization as useOrg } from "@/components/devemp/providers/organization-provider";

export const useOrganization = () => {
  return useOrg();
};
