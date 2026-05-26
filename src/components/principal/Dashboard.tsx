import React, { useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { useNavigate } from "react-router-dom";

import Principal from "./Principal";
import PlataformasG from "../../plataformas/PlataformasG";

interface DashboardMenuItem {
  label: string;
  icon: string;
  section: string;
}

const Dashboard = () => {
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("principal");

  const navigate = useNavigate();

  const menuItems: DashboardMenuItem[] = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      section: "principal",
    },
    {
      label: "Plataformas",
      icon: "pi pi-box",
      section: "plataformas",
    },
    {
      label: "Productos",
      icon: "pi pi-box",
      section: "productos",
    },
    {
      label: "Pedidos",
      icon: "pi pi-shopping-bag",
      section: "pedidos",
    },
    {
      label: "Clientes",
      icon: "pi pi-users",
      section: "clientes",
    },
    {
      label: "Inventario",
      icon: "pi pi-warehouse",
      section: "inventario",
    },
    {
      label: "Configuración",
      icon: "pi pi-cog",
      section: "configuracion",
    },
  ];

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        const exists = menuItems.some((item) => item.section === hash);

        if (exists) {
          setActiveSection(hash);
        } else {
          setActiveSection("principal");
        }
      } else {
        setActiveSection("principal");
      }
    };

    readHash();

    window.addEventListener("hashchange", readHash);

    return () => {
      window.removeEventListener("hashchange", readHash);
    };
  }, []);

  const currentTitle =
    menuItems.find((item) => item.section === activeSection)?.label ||
    "Dashboard";

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
    setVisibleSidebar(false);

    if (section === "principal") {
      navigate("/dashboard");
      return;
    }

    navigate(`/dashboard#${section}`);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const SidebarContent = () => {
    return (
      <div className="flex h-full flex-col justify-between bg-zinc-950 text-white">
        <div>
          {/* LOGO */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-400/30 bg-green-400/10 shadow-[0_0_25px_rgba(34,197,94,0.25)]">
              <i className="pi pi-th-large text-2xl text-green-400" />
            </div>

            <div>
              <h1 className="text-xl font-black text-white">INNOVATECH</h1>
              <p className="text-xs text-zinc-400">Panel administrador</p>
            </div>
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.section}
                label={item.label}
                icon={item.icon}
                text={activeSection !== item.section}
                onClick={() => handleMenuClick(item.section)}
                className={`w-full justify-start rounded-xl border-none px-4 py-3 font-bold ${
                  activeSection === item.section
                    ? "bg-green-500 text-black shadow-[0_0_25px_rgba(34,197,94,0.35)]"
                    : "bg-transparent text-zinc-300 hover:bg-green-500/10 hover:text-green-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CERRAR SESIÓN */}
        <div className="mt-8 border-t border-green-500/20 pt-5">
          <Button
            label="Cerrar sesión"
            icon="pi pi-sign-out"
            text
            onClick={handleLogout}
            className="w-full justify-start rounded-xl border-none px-4 py-3 font-bold text-red-400 hover:bg-red-500/10"
          />
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (activeSection === "principal") {
      return <Principal />;
    }

    if (activeSection === "plataformas") {
      return (
        <section id="plataformas">
          <PlataformasG />
        </section>
      );
    }

    if (activeSection === "productos") {
      return (
        <section id="productos" className="p-4 sm:p-6">
          <div className="rounded-2xl border border-green-500/20 bg-zinc-950/80 p-6 text-white shadow-[0_0_35px_rgba(34,197,94,0.08)]">
            <h1 className="text-3xl font-black text-white">Productos</h1>
            <p className="mt-2 text-zinc-400">
              Aquí irá la interfaz para administrar productos.
            </p>
          </div>
        </section>
      );
    }

    if (activeSection === "pedidos") {
      return (
        <section id="pedidos" className="p-4 sm:p-6">
          <div className="rounded-2xl border border-green-500/20 bg-zinc-950/80 p-6 text-white shadow-[0_0_35px_rgba(34,197,94,0.08)]">
            <h1 className="text-3xl font-black text-white">Pedidos</h1>
            <p className="mt-2 text-zinc-400">
              Aquí irá la interfaz para revisar pedidos.
            </p>
          </div>
        </section>
      );
    }

    if (activeSection === "clientes") {
      return (
        <section id="clientes" className="p-4 sm:p-6">
          <div className="rounded-2xl border border-green-500/20 bg-zinc-950/80 p-6 text-white shadow-[0_0_35px_rgba(34,197,94,0.08)]">
            <h1 className="text-3xl font-black text-white">Clientes</h1>
            <p className="mt-2 text-zinc-400">
              Aquí irá la interfaz para administrar clientes.
            </p>
          </div>
        </section>
      );
    }

    if (activeSection === "inventario") {
      return (
        <section id="inventario" className="p-4 sm:p-6">
          <div className="rounded-2xl border border-green-500/20 bg-zinc-950/80 p-6 text-white shadow-[0_0_35px_rgba(34,197,94,0.08)]">
            <h1 className="text-3xl font-black text-white">Inventario</h1>
            <p className="mt-2 text-zinc-400">
              Aquí irá la interfaz para controlar inventario.
            </p>
          </div>
        </section>
      );
    }

    if (activeSection === "configuracion") {
      return (
        <section id="configuracion" className="p-4 sm:p-6">
          <div className="rounded-2xl border border-green-500/20 bg-zinc-950/80 p-6 text-white shadow-[0_0_35px_rgba(34,197,94,0.08)]">
            <h1 className="text-3xl font-black text-white">Configuración</h1>
            <p className="mt-2 text-zinc-400">
              Aquí irá la interfaz de configuración.
            </p>
          </div>
        </section>
      );
    }

    return <Principal />;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* FONDO */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_35%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:45px_45px]" />

      <div className="relative z-10 flex">
        {/* SIDEBAR ESCRITORIO */}
        <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-green-500/20 bg-zinc-950/90 p-5 shadow-[0_0_45px_rgba(34,197,94,0.10)] backdrop-blur-xl lg:block">
          <SidebarContent />
        </aside>

        {/* SIDEBAR MÓVIL */}
        <Sidebar
          visible={visibleSidebar}
          onHide={() => setVisibleSidebar(false)}
          position="left"
          className="w-72 border-r border-green-500/20 bg-zinc-950 text-white"
          pt={{
            root: {
              className: "bg-zinc-950 text-white",
            },
            header: {
              className: "bg-zinc-950 text-white",
            },
            content: {
              className: "bg-zinc-950 text-white p-5",
            },
            closeButton: {
              className:
                "text-green-400 hover:bg-green-500/10 hover:text-green-300",
            },
            mask: {
              className: "backdrop-blur-sm",
            },
          }}
        >
          <SidebarContent />
        </Sidebar>

        {/* CONTENIDO */}
        <main className="min-h-screen w-full lg:ml-72">
          {/* BARRA ARRIBA */}
          <header className="sticky top-0 z-40 border-b border-green-500/20 bg-zinc-950/80 px-4 py-4 backdrop-blur-xl sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Button
                  icon="pi pi-bars"
                  rounded
                  text
                  onClick={() => setVisibleSidebar(true)}
                  className="border border-green-500/20 bg-green-500/10 text-green-400 hover:bg-green-500/20 lg:hidden"
                />

                <div>
                  <h2 className="text-xl font-black text-white sm:text-2xl">
                    {currentTitle}
                  </h2>
                  <p className="hidden text-sm text-zinc-400 sm:block">
                    Bienvenido al panel de administración
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="p-input-icon-left hidden md:block">
                  <i className="pi pi-search text-zinc-500" />
                  <InputText
                    placeholder="Buscar..."
                    className="h-11 w-64 rounded-xl border border-zinc-700 bg-zinc-900/80 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
                  />
                </span>

                <div className="relative">
                  <Button
                    icon="pi pi-bell"
                    rounded
                    text
                    className="border border-green-500/20 bg-zinc-900/80 text-zinc-300 hover:bg-green-500/10 hover:text-green-400"
                  />
                  <Badge
                    value=""
                    severity="success"
                    className="absolute right-1 top-1 h-3 min-w-3 rounded-full bg-green-400 p-0"
                  />
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-zinc-900/80 p-2">
                  <Avatar
                    icon="pi pi-user"
                    shape="square"
                    className="bg-green-500 text-black"
                  />

                  <div className="hidden text-left sm:block">
                    <p className="text-sm font-bold text-white">Admin</p>
                    <p className="text-xs text-zinc-400">Administrador</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* AQUÍ SE MUESTRA LA INTERFAZ SELECCIONADA */}
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;