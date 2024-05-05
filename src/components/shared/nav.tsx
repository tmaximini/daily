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
  ShoppingCart,
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
      <Link
        href="#"
        className={isActive("/") ? activeClasses : inactiveClasses}
      >
        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
        <span className="sr-only">Daily Hustle</span>
      </Link>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className={isActive("/dashboard") ? activeClasses : inactiveClasses}
          >
            <Home className="h-4 w-4 group-hover:scale-110" />
            <span className="sr-only">Dashboard</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Dashboard</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className={isActive("/mission") ? activeClasses : inactiveClasses}
          >
            <Goal className="h-5 w-5" />
            <span className="sr-only">Mission</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Mission</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className={isActive("/checkin") ? activeClasses : inactiveClasses}
          >
            <CalendarDays className="h-5 w-5" />
            <span className="sr-only">Daily Checkin</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Daily Checkin</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className={isActive("/analytics") ? activeClasses : inactiveClasses}
          >
            <LineChart className="h-5 w-5" />
            <span className="sr-only">Analytics</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Analytics</TooltipContent>
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
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Daily Hustle</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <ShoppingCart className="h-5 w-5" />
            Orders
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <CalendarDays className="h-5 w-5" />
            Daily Checkin
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Goal className="h-5 w-5" />
            Goal
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <LineChart className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
