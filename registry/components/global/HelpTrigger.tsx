"use client";

import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export function HelpTrigger() {
  return (
    <Button variant="ghost" size="icon" aria-label="Help">
      <HelpCircle className="h-5 w-5" />
    </Button>
  );
}
