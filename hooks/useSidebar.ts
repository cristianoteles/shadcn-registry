"use client";

import { useEffect, useState } from "react";

const SIDEBAR_STORAGE_KEY = "sidebar-collapsed";

export function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Load initial state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (stored !== null) {
      setIsCollapsed(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return {
    isCollapsed,
    toggleSidebar,
  };
}
