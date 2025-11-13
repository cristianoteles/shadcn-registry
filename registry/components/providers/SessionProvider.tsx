"use client";

import React, { createContext, useContext, useMemo } from "react";

// Mock session data
const mockSession = {
  user: {
    id: "user-123",
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://avatar.vercel.sh/john-doe",
    roles: ["user"], // Can be 'user', 'org_admin', 'super_admin'
  },
  expires: "2030-01-01T00:00:00.000Z",
};

// Mock organizations data
const mockOrganizations = [
    { id: "org-abc", name: "Acme Inc." },
    { id: "org-xyz", name: "Vandelay Industries" },
];

// Context for session and organizations
type SessionContextType = {
  session: typeof mockSession | null;
  organizations: typeof mockOrganizations;
  loading: boolean;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(() => ({
    session: mockSession,
    organizations: mockOrganizations,
    loading: false,
  }), []);

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
