"use client";

import { useSession } from "@/components/devemp/providers/session-provider";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export function SuperAdminReturnButton() {
  const { session } = useSession();

  // This is a placeholder. In a real app, you'd have a more robust check
  // for "impersonation" mode.
  const isSuperAdmin = session?.user.roles.includes("super_admin");
  const isImpersonating = isSuperAdmin; // Mocking impersonation status

  if (!isImpersonating) {
    return null;
  }

  return (
    <Button variant="ghost" size="icon" aria-label="Return to Super Admin">
      <Eye className="h-5 w-5 text-yellow-500" />
    </Button>
  );
}
