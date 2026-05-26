import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu, MessageCircle, ChevronDown } from "lucide-react";

import miImagen from "../assets/lufra.png";

interface RouteProps {
  href?: string;
  label: string;
  children?: RouteProps[];
}

const routeList: RouteProps[] = [
  {
    href: "#inicio",
    label: "Inicio",
  },
  {
    href: "#servicios",
    label: "Servicios",
  },
  {
    href: "#proceso",
    label: "Proceso",
  },
  {
    href: "#tecnologias",
    label: "Tecnologías",
  },
  {
    href: "#proyectos",
    label: "Proyectos",
  },
  {
    href: "/plataformas",
    label: "Plataformas",
  },
  {
    label: "Tienda",
    children: [
      {
        href: "/gorras",
        label: "Gorras",
      },
      {
        href: "/ropa",
        label: "Ropa",
      },
    ],
  },
  {
    href: "#contacto",
    label: "Contacto",
  },
  {
    href: "#faq",
    label: "Preguntas",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black text-white">
      <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-4">
        {/* LOGO IZQUIERDA */}
        <a
          rel="noreferrer noopener"
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => {
            setOpenDropdown(null);
            setOpenMobileDropdown(null);
          }}
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

        {/* MENÚ MÓVIL DERECHA */}
        <div className="flex xl:hidden">
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
                {routeList.map((route) =>
                  route.children ? (
                    <div
                      key={route.label}
                      className="flex w-full flex-col items-center text-center"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === route.label
                              ? null
                              : route.label
                          )
                        }
                        className="flex items-center justify-center gap-2 rounded-md px-4 py-2 text-lg font-bold text-white transition hover:bg-zinc-900"
                      >
                        {route.label}

                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMobileDropdown === route.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {openMobileDropdown === route.label && (
                        <div className="mt-3 flex flex-col items-center gap-4">
                          {route.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenMobileDropdown(null);
                              }}
                              className="rounded-md px-4 py-2 text-lg font-bold text-white transition hover:bg-zinc-900"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      rel="noreferrer noopener"
                      key={route.label}
                      href={route.href}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                      className="rounded-md px-4 py-2 text-lg font-bold text-white transition hover:bg-zinc-900"
                    >
                      {route.label}
                    </a>
                  )
                )}

                <a
                  rel="noreferrer noopener"
                  href="https://wa.me/529514362937"
                  target="_blank"
                  className="mt-2 flex items-center justify-center rounded-md bg-zinc-800 px-6 py-3 text-lg font-bold text-white transition hover:bg-zinc-700"
                  onClick={() => {
                    setIsOpen(false);
                    setOpenMobileDropdown(null);
                  }}
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Contáctanos
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* MENÚ DESKTOP */}
        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {routeList.map((route, i) =>
            route.children ? (
              <div key={i} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === route.label ? null : route.label
                    )
                  }
                  className={`flex items-center gap-1 whitespace-nowrap text-sm text-white 2xl:text-base ${buttonVariants(
                    {
                      variant: "ghost",
                    }
                  )}`}
                >
                  {route.label}

                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === route.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === route.label && (
                  <div className="absolute left-0 top-full z-50 mt-2 flex min-w-[180px] flex-col rounded-md border border-zinc-800 bg-black p-2 shadow-md">
                    {route.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className="rounded-md px-3 py-2 text-sm text-white transition hover:bg-zinc-900"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                onClick={() => setOpenDropdown(null)}
                className={`whitespace-nowrap text-sm text-white 2xl:text-base ${buttonVariants(
                  {
                    variant: "ghost",
                  }
                )}`}
              >
                {route.label}
              </a>
            )
          )}
        </nav>

        {/* WHATSAPP DESKTOP */}
        <div className="hidden shrink-0 xl:flex">
          <a
            rel="noreferrer noopener"
            href="https://wa.me/529514362937"
            target="_blank"
            onClick={() => setOpenDropdown(null)}
            className={`whitespace-nowrap border border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700 ${buttonVariants(
              {
                variant: "secondary",
              }
            )}`}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contáctanos
          </a>
        </div>
      </div>
    </header>
  );
};