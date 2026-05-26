import React from "react";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";

interface Order {
  id: string;
  customer: string;
  product: string;
  status: "Pagado" | "Pendiente" | "Enviado";
  price: string;
}

interface Stat {
  title: string;
  value: string;
  icon: string;
  change: string;
}

const Principal = () => {
  const stats: Stat[] = [
    {
      title: "Ventas totales",
      value: "$24,500",
      icon: "pi pi-dollar",
      change: "+12%",
    },
    {
      title: "Pedidos",
      value: "156",
      icon: "pi pi-shopping-cart",
      change: "+8%",
    },
    {
      title: "Productos",
      value: "48",
      icon: "pi pi-box",
      change: "+5%",
    },
    {
      title: "Clientes",
      value: "320",
      icon: "pi pi-users",
      change: "+18%",
    },
  ];

  const getStatusSeverity = (
    status: Order["status"],
  ): "success" | "warning" | "info" => {
    switch (status) {
      case "Pagado":
        return "success";
      case "Pendiente":
        return "warning";
      case "Enviado":
        return "info";
      default:
        return "info";
    }
  };

  const recentOrders: Order[] = [
    {
      id: "#001",
      customer: "Luis Álvarez",
      product: "Gorra verde",
      status: "Pagado",
      price: "$350",
    },
    {
      id: "#002",
      customer: "Ana Pérez",
      product: "Playera negra",
      status: "Pendiente",
      price: "$280",
    },
    {
      id: "#003",
      customer: "Carlos López",
      product: "Plataforma",
      status: "Enviado",
      price: "$1,200",
    },
    {
      id: "#004",
      customer: "María Gómez",
      product: "Sudadera",
      status: "Pagado",
      price: "$650",
    },
  ];

  const statusTemplate = (rowData: Order) => {
    return (
      <Tag
        value={rowData.status}
        severity={getStatusSeverity(rowData.status)}
      />
    );
  };

  const priceTemplate = (rowData: Order) => {
    return <span className="font-bold text-white">{rowData.price}</span>;
  };

  const idTemplate = (rowData: Order) => {
    return <span className="font-bold text-green-400">{rowData.id}</span>;
  };
  return (
    <section id="principal" className="p-4 sm:p-6">
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Card
            key={item.title}
            className="rounded-2xl border border-green-500/20 bg-zinc-950/80 text-white shadow-[0_0_35px_rgba(34,197,94,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-green-400/50 hover:shadow-[0_0_45px_rgba(34,197,94,0.18)]"
            pt={{
              body: {
                className: "p-5",
              },
              content: {
                className: "p-0",
              },
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                <i className={`${item.icon} text-2xl`} />
              </div>

              <Tag
                value={item.change}
                icon="pi pi-arrow-up"
                severity="success"
                className="bg-green-500/10 text-green-400"
              />
            </div>

            <p className="text-sm font-semibold text-zinc-400">{item.title}</p>

            <h3 className="mt-2 text-3xl font-black text-white">
              {item.value}
            </h3>
          </Card>
        ))}
      </div>

      {/* Sección media */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        {/* Tabla */}
        <Card
          className="rounded-2xl border border-green-500/20 bg-zinc-950/80 text-white shadow-[0_0_35px_rgba(34,197,94,0.08)] backdrop-blur-xl"
          pt={{
            body: {
              className: "p-5",
            },
            content: {
              className: "p-0",
            },
          }}
        >
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-black text-white">
                Pedidos recientes
              </h3>
              <p className="text-sm text-zinc-400">
                Últimos movimientos de la tienda
              </p>
            </div>

            <Button
              label="Ver todos"
              className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-bold text-green-400 hover:bg-green-500 hover:text-black"
            />
          </div>

          <DataTable
            value={recentOrders}
            responsiveLayout="scroll"
            className="overflow-hidden rounded-xl"
            pt={{
              table: {
                className: "bg-transparent",
              },
              header: {
                className: "bg-zinc-950 text-white",
              },
              thead: {
                className: "bg-zinc-900 text-zinc-400",
              },
              tbody: {
                className: "bg-zinc-950 text-zinc-300",
              },
            }}
          >
            <Column
              field="id"
              header="ID"
              body={idTemplate}
              headerClassName="bg-zinc-900 text-zinc-400"
              bodyClassName="bg-zinc-950 border-green-500/10"
            />
            <Column
              field="customer"
              header="Cliente"
              headerClassName="bg-zinc-900 text-zinc-400"
              bodyClassName="bg-zinc-950 text-zinc-200 border-green-500/10"
            />
            <Column
              field="product"
              header="Producto"
              headerClassName="bg-zinc-900 text-zinc-400"
              bodyClassName="bg-zinc-950 text-zinc-400 border-green-500/10"
            />
            <Column
              field="status"
              header="Estado"
              body={statusTemplate}
              headerClassName="bg-zinc-900 text-zinc-400"
              bodyClassName="bg-zinc-950 border-green-500/10"
            />
            <Column
              field="price"
              header="Total"
              body={priceTemplate}
              headerClassName="bg-zinc-900 text-zinc-400 text-right"
              bodyClassName="bg-zinc-950 border-green-500/10 text-right"
            />
          </DataTable>
        </Card>

        {/* Panel derecho */}
        <Panel
          header="Actividad rápida"
          className="rounded-2xl border border-green-500/20 bg-zinc-950/80 text-white shadow-[0_0_35px_rgba(34,197,94,0.08)] backdrop-blur-xl"
          pt={{
            header: {
              className:
                "rounded-t-2xl border-b border-green-500/20 bg-zinc-950 text-white",
            },
            title: {
              className: "text-xl font-black text-white",
            },
            content: {
              className: "rounded-b-2xl bg-zinc-950 p-5 text-white",
            },
          }}
        >
          <p className="text-sm text-zinc-400">Resumen general del sistema</p>

          <div className="mt-6 flex flex-col gap-4">
            <div className="rounded-xl border border-green-500/20 bg-black/30 p-4">
              <p className="text-sm text-zinc-400">Producto más vendido</p>
              <h4 className="mt-1 text-lg font-black text-white">
                Gorra verde
              </h4>
              <p className="mt-2 text-sm font-bold text-green-400">
                48 ventas esta semana
              </p>
            </div>

            <div className="rounded-xl border border-green-500/20 bg-black/30 p-4">
              <p className="text-sm text-zinc-400">Ingresos del día</p>
              <h4 className="mt-1 text-lg font-black text-white">$3,850</h4>
              <p className="mt-2 text-sm font-bold text-green-400">
                +15% comparado con ayer
              </p>
            </div>

            <div className="rounded-xl border border-green-500/20 bg-black/30 p-4">
              <p className="text-sm text-zinc-400">Stock bajo</p>
              <h4 className="mt-1 text-lg font-black text-white">
                6 productos
              </h4>
              <p className="mt-2 text-sm font-bold text-yellow-400">
                Revisa inventario
              </p>
            </div>
          </div>
        </Panel>
      </div>

      {/* Bloque inferior */}
      <Card
        className="mt-6 rounded-2xl border border-green-500/20 bg-zinc-950/80 text-white shadow-[0_0_35px_rgba(34,197,94,0.08)] backdrop-blur-xl"
        pt={{
          body: {
            className: "p-5",
          },
          content: {
            className: "p-0",
          },
        }}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-black text-white">Resumen de tienda</h3>
            <p className="text-sm text-zinc-400">
              Vista general del rendimiento mensual
            </p>
          </div>

          <Button
            label="Generar reporte"
            icon="pi pi-file"
            className="rounded-xl border-none bg-green-500 px-5 py-2.5 text-sm font-black text-black shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:bg-green-400"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card
            className="rounded-xl border border-green-500/20 bg-black/30 text-white"
            pt={{
              body: {
                className: "p-4",
              },
              content: {
                className: "p-0",
              },
            }}
          >
            <p className="text-sm text-zinc-400">Ventas mensuales</p>
            <h4 className="mt-2 text-2xl font-black text-white">$68,900</h4>
          </Card>

          <Card
            className="rounded-xl border border-green-500/20 bg-black/30 text-white"
            pt={{
              body: {
                className: "p-4",
              },
              content: {
                className: "p-0",
              },
            }}
          >
            <p className="text-sm text-zinc-400">Pedidos completados</p>
            <h4 className="mt-2 text-2xl font-black text-white">428</h4>
          </Card>

          <Card
            className="rounded-xl border border-green-500/20 bg-black/30 text-white"
            pt={{
              body: {
                className: "p-4",
              },
              content: {
                className: "p-0",
              },
            }}
          >
            <p className="text-sm text-zinc-400">Nuevos usuarios</p>
            <h4 className="mt-2 text-2xl font-black text-white">76</h4>
          </Card>
        </div>
      </Card>
    </section>
  );
};

export default Principal;
