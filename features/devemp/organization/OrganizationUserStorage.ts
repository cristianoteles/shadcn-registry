"use client"

import { OrganizationProviderData } from "@/components/devemp/providers/OrganizationProvider";

const STORAGE_KEY_ALL = "user-organizations";
const STORAGE_KEY_CURRENT = "user-organization-current";

export const OrganizationUserStorage = {
  getCurrent: (): OrganizationProviderData | null => {
    if (typeof window === "undefined") return null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY_CURRENT);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  },

  setCurrent(organization: OrganizationProviderData | null) {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY_CURRENT, JSON.stringify(organization));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  },

  getAll: (): OrganizationProviderData[] => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY_ALL);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  },

  set: (organizations: OrganizationProviderData[]): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY_ALL, JSON.stringify(organizations));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  },

  add: (organization: OrganizationProviderData): void => {
    const current = OrganizationUserStorage.getAll();
    const exists = current.some((org) => org.id === organization.id);
    if (!exists) {
      OrganizationUserStorage.set([...current, organization]);
    }
  },

  remove: (organizationId: string): void => {
    const current = OrganizationUserStorage.getAll();
    const filtered = current.filter((org) => org.id !== organizationId);
    OrganizationUserStorage.set(filtered);
  },

  clear: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY_ALL);
    localStorage.removeItem(STORAGE_KEY_CURRENT);
  },
};
