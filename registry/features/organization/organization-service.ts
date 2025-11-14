"use client"

import { OrganizationProviderData } from "@/components/devemp/providers/organization-provider";

const fakeOrganizations: OrganizationProviderData[] = [
  { id: "org-1", name: "Acme Corporation", alias: "acme", branding: { logo: "/logo.png", primaryColor: "#FFF", secondaryColor: "" } },
  { id: "org-2", name: "Stark Industries", alias: "stark", branding: { logo: "/logo.png", primaryColor: "#AAA", secondaryColor: "" } },
  { id: "org-3", name: "Wayne Enterprises", alias: "wayne", branding: { logo: "/logo.png", primaryColor: "#000", secondaryColor: "" } },
];

export const getOrganizationsUser = (): Promise<OrganizationProviderData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeOrganizations);
    }, 500); // Simulate network delay
  });
};
