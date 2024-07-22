"use client";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
  CalendarDays,
  Goal,
  Home,
  LineChart,
  Package2,
  PanelLeft,
  Repeat,
  Settings,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export function SideNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const activeClasses =
    "flex h-9 w-9 items-center justify-center transition-colors md:h-8 md:w-8 rounded-full bg-primary text-primary-foreground text-lg font-semibold";
  const inactiveClasses =
    "flex h-9 w-9 items-center justify-center transition-colors hover:text-foreground md:h-8 md:w-8 rounded-lg text-muted-foreground";

  return (
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/"
            className={isActive("/") ? activeClasses : inactiveClasses}
          >
            <Home className="h-4 w-4 group-hover:scale-110" />
            <span className="sr-only">Home</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Home</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/check-in"
            className={isActive("/check-in") ? activeClasses : inactiveClasses}
          >
            <CalendarDays className="h-5 w-5" />
            <span className="sr-only">Check-in</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Check-in</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/dashboard/goals"
            className={
              isActive("/dashboard/goals") ? activeClasses : inactiveClasses
            }
          >
            <Goal className="h-5 w-5" />
            <span className="sr-only">Goals</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Goals</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/dashboard/habits"
            className={
              isActive("/dashboard/habits") ? activeClasses : inactiveClasses
            }
          >
            <Repeat className="h-5 w-5" />
            <span className="sr-only">Habits</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Habits</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/dashboard/dashboard/analytics"
            className={
              isActive("/dashboard/dashboard/analytics")
                ? activeClasses
                : inactiveClasses
            }
          >
            <LineChart className="h-5 w-5" />
            <span className="sr-only">Analytics</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Analytics</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/settings"
            className={isActive("/settings") ? activeClasses : inactiveClasses}
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
    </nav>
  );
}

export function SheetNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/check-in"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <CalendarDays className="h-5 w-5" />
            Check-in
          </Link>
          <Link
            href="/dashboard/oals"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Goal className="h-5 w-5" />
            Goals
          </Link>
          <Link
            href="/dashboard/habits"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Repeat className="h-5 w-5" />
            Habits
          </Link>

          <Link
            href="/dashboard/analytics"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <LineChart className="h-5 w-5" />
            Analytics
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
