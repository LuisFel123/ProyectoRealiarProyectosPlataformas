import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu, MessageCircle, LogIn } from "lucide-react";

import miImagen from "../assets/lufra.png";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/plataformas",
    label: "Plataformas",
  },
  {
    href: "/gorras",
    label: "Gorras",
  },
  {
    href: "/ropa",
    label: "Ropa",
  },
  {
    href: "/",
    label: "Inicio",
  },
];

export const NavbarGorrasPla = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black text-white">
      <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-4">
        {/* LOGO */}
        <a
          rel="noreferrer noopener"
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src={miImagen}
            alt="Logo"
            className="h-10 w-10 shrink-0 object-contain"
          />

          <span className="whitespace-nowrap text-xl font-black text-white sm:text-2xl">
            INNOVATECH
          </span>
        </a>

        {/* MOBILE */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-zinc-900"
              >
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[290px] border-r border-zinc-800 bg-black px-6 text-white sm:w-[340px]"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center gap-2 text-2xl font-black text-white">
                  <img
                    src={miImagen}
                    alt="Logo"
                    className="h-9 w-9 object-contain"
                  />
                  INNOVATECH
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-10 flex flex-col items-center justify-center gap-5 text-center">
                {routeList.map(({ href, label }: RouteProps) => (
                  <a
                    rel="noreferrer noopener"
                    key={label}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-4 py-2 text-lg font-bold text-white transition hover:bg-zinc-900"
                  >
                    {label}
                  </a>
                ))}

                <a
                  rel="noreferrer noopener"
                  href="https://wa.me/529514362937"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center justify-center rounded-md bg-zinc-800 px-6 py-3 text-lg font-bold text-white transition hover:bg-zinc-700"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Contáctanos
                </a>

                <a
                  rel="noreferrer noopener"
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center rounded-md bg-zinc-800 px-6 py-3 text-lg font-bold text-white transition hover:bg-zinc-700"
                >
                  <LogIn className="mr-2 h-6 w-6" />
                  Iniciar sesión
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* DESKTOP */}
        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {routeList.map((route: RouteProps, i) => (
            <a
              rel="noreferrer noopener"
              href={route.href}
              key={i}
              className={`whitespace-nowrap text-sm text-white 2xl:text-base ${buttonVariants(
                {
                  variant: "ghost",
                }
              )}`}
            >
              {route.label}
            </a>
          ))}
        </nav>

        {/* BOTONES DESKTOP */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <a
            rel="noreferrer noopener"
            href="https://wa.me/529514362937"
            target="_blank"
            className={`whitespace-nowrap border border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700 ${buttonVariants(
              {
                variant: "secondary",
              }
            )}`}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contáctanos
          </a>

          <a
            rel="noreferrer noopener"
            href="/login"
            className={`whitespace-nowrap border border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700 ${buttonVariants(
              {
                variant: "secondary",
              }
            )}`}
          >
            <LogIn className="mr-2 h-5 w-5" />
            Iniciar sesión
          </a>
        </div>
      </div>
    </header>
  );
};