"use client";

import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export function NotificationsTrigger() {
  return (
    <Button variant="ghost" size="icon" aria-label="Toggle notifications">
      <Bell className="h-5 w-5" />
    </Button>
  );
}
