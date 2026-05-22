import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

import miImagen from "../assets/lufra.png";
import { MessageCircle } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
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
    href: "#contacto",
    label: "Contacto",
  },
  {
    href: "#faq",
    label: "Preguntas",
  },
  {
    href:"/plataformas",
    label:"Plataformas",
  },
   {
    href: "/gorras",
    label: "Gorras",
   }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 text-xl flex items-center gap-2"
            >
              <img
                src={miImagen}
                alt="Descripción"
                className="w-8 h-8 object-contain"
              />
              <span>INNOVATECH</span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            {/*<ModeToggle />*/}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    INNOVATECH
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                 
                    <a
                      rel="noreferrer noopener"
                      href="https://wa.me/529514362937"
                      target="_blank"
                      className={`border ${buttonVariants({ variant: "secondary" })}`}
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Contáctanos
                    </a>
                  
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://wa.me/529514362937"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Contáctanos
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
