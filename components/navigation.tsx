"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";

const navigationItems = [
  { name: "Início", href: "/" },
  { name: "RH", href: "/rh" },
  { name: "Gestão de Projetos", href: "/gestao-projetos" },
  { name: "Marketing", href: "/marketing" },
  { name: "Comercial", href: "/comercial" },
  { name: "Pricing", href: "/pricing" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-bold">Engenharia de Prompt</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "transition-colors",
                  pathname === item.href && "bg-secondary"
                )}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
}

