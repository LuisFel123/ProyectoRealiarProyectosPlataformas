import React, { useEffect, useState } from "react";
import { ProductService } from "./ProductService";
import { Button } from "primereact/button";
import { DataViewLayoutOptions } from "primereact/dataview";
import { Paginator } from "primereact/paginator";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { NavbarGorrasPla } from "@/components/NavbarGorrasPla";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK";
  rating: number;
}

type LayoutType = "list" | "grid";

export default function Plataformas() {
  const [products, setProducts] = useState<Product[]>([]);
  const [layout, setLayout] = useState<LayoutType>("grid");

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);

  useEffect(() => {
    ProductService.getProducts().then((data: Product[]) => {
      setProducts(data.slice(0, 12));
    });
  }, []);

  const visibleProducts = products.slice(first, first + rows);

  const getSeverity = (
    product: Product
  ): "success" | "warning" | "danger" | undefined => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return undefined;
    }
  };

  const listItem = (product: Product) => {
    return (
      <div
        key={product.id}
        className="w-full rounded-2xl border border-green-500/20 bg-[#171717] p-5 shadow-[0_0_35px_rgba(34,197,94,0.08)] transition hover:border-green-500/50 hover:shadow-[0_0_45px_rgba(34,197,94,0.18)]"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <img
            className="mx-auto h-36 w-36 rounded-xl border border-green-500/20 object-cover shadow-md md:mx-0"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />

          <div className="flex flex-1 flex-col items-center gap-3 text-center md:items-start md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <span className="flex items-center gap-2 font-semibold text-gray-200">
                <i className="pi pi-tag text-green-400"></i>
                {product.category}
              </span>

              <Tag
                value={product.inventoryStatus}
                severity={getSeverity(product)}
              />
            </div>

            <h3 className="text-2xl font-bold text-white">{product.name}</h3>

            <p className="max-w-xl text-sm text-gray-400">
              {product.description}
            </p>

            <Rating value={product.rating} readOnly cancel={false} />
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <span className="text-3xl font-bold text-green-400">
              ${product.price}
            </span>

            <Button
              icon="pi pi-shopping-cart"
              rounded
              disabled={product.inventoryStatus === "OUTOFSTOCK"}
            />
          </div>
        </div>
      </div>
    );
  };

  const gridItem = (product: Product) => {
    return (
      <div
        key={product.id}
        className="rounded-xl border border-green-500/20 bg-[#171717] p-2 shadow-[0_0_25px_rgba(34,197,94,0.08)] transition hover:-translate-y-1 hover:border-green-500/50 hover:shadow-[0_0_35px_rgba(34,197,94,0.18)] sm:rounded-2xl sm:p-5"
      >
        <div className="mb-3 flex flex-col items-center justify-between gap-2 sm:mb-5 sm:flex-row">
          <span className="flex items-center gap-1 text-[10px] font-semibold text-gray-200 sm:text-sm">
            <i className="pi pi-tag text-green-400"></i>
            <span className="truncate">{product.category}</span>
          </span>

          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
            className="text-[8px] sm:text-xs"
          />
        </div>

        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <img
            className="h-20 w-20 rounded-lg border border-green-500/20 object-cover shadow-md sm:h-44 sm:w-44 sm:rounded-xl"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />

          <h3 className="min-h-[38px] text-center text-xs font-bold leading-tight text-white sm:min-h-[64px] sm:text-2xl">
            {product.name}
          </h3>

          <p className="hidden text-center text-sm text-gray-400 sm:block">
            {product.description}
          </p>

          <div className="scale-75 sm:scale-100">
            <Rating value={product.rating} readOnly cancel={false} />
          </div>
        </div>

        <div className="mt-3 flex flex-col items-center gap-2 sm:mt-6 sm:flex-row sm:justify-between">
          <span className="text-sm font-bold text-green-400 sm:text-3xl">
            ${product.price}
          </span>

          <Button
            icon="pi pi-shopping-cart"
            rounded
            disabled={product.inventoryStatus === "OUTOFSTOCK"}
            className="h-8 w-8 sm:h-12 sm:w-12"
          />
        </div>
      </div>
    );
  };

  return (
    <>
    

      <main className="min-h-screen bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.22),transparent_35%),#050505] px-3 py-8 text-white sm:px-6 sm:py-10">
        <section className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-5 rounded-2xl border border-green-500/20 bg-[#111111]/95 px-4 py-5 shadow-[0_0_40px_rgba(34,197,94,0.12)] sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Plataformas
              </h1>

              <p className="mt-1 text-sm text-gray-400">
                Explora nuestros productos disponibles
              </p>
            </div>

            <div className="w-fit rounded-xl border border-green-500/20 bg-black/40 p-2">
              <DataViewLayoutOptions
                layout={layout}
                onChange={(e) => {
                  setLayout(e.value as LayoutType);
                  setFirst(0);
                }}
              />
            </div>
          </div>

          {layout === "grid" ? (
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {visibleProducts.map((product) => gridItem(product))}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {visibleProducts.map((product) => listItem(product))}
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-green-500/20 bg-[#111111]/95 p-3 shadow-[0_0_35px_rgba(34,197,94,0.10)]">
            <Paginator
              first={first}
              rows={rows}
              totalRecords={products.length}
              rowsPerPageOptions={[3, 6, 9, 12]}
              onPageChange={(e) => {
                setFirst(e.first);
                setRows(e.rows);
              }}
              className="
                border-none bg-transparent text-white

                [&_.p-paginator-page]:mx-1
                [&_.p-paginator-page]:rounded-lg
                [&_.p-paginator-page]:border
                [&_.p-paginator-page]:border-green-500/30
                [&_.p-paginator-page]:bg-black/40
                [&_.p-paginator-page]:text-gray-300

                [&_.p-paginator-page:hover]:border-green-400
                [&_.p-paginator-page:hover]:bg-green-500/10
                [&_.p-paginator-page:hover]:text-green-400

                [&_.p-paginator-page.p-highlight]:border-green-400
                [&_.p-paginator-page.p-highlight]:bg-green-500
                [&_.p-paginator-page.p-highlight]:text-black

                [&_.p-paginator-first]:rounded-lg
                [&_.p-paginator-prev]:rounded-lg
                [&_.p-paginator-next]:rounded-lg
                [&_.p-paginator-last]:rounded-lg

                [&_.p-paginator-first]:border
                [&_.p-paginator-prev]:border
                [&_.p-paginator-next]:border
                [&_.p-paginator-last]:border

                [&_.p-paginator-first]:border-green-500/30
                [&_.p-paginator-prev]:border-green-500/30
                [&_.p-paginator-next]:border-green-500/30
                [&_.p-paginator-last]:border-green-500/30

                [&_.p-paginator-first]:bg-black/40
                [&_.p-paginator-prev]:bg-black/40
                [&_.p-paginator-next]:bg-black/40
                [&_.p-paginator-last]:bg-black/40

                [&_.p-paginator-first]:text-gray-300
                [&_.p-paginator-prev]:text-gray-300
                [&_.p-paginator-next]:text-gray-300
                [&_.p-paginator-last]:text-gray-300

                [&_.p-paginator-first:hover]:bg-green-500/10
                [&_.p-paginator-prev:hover]:bg-green-500/10
                [&_.p-paginator-next:hover]:bg-green-500/10
                [&_.p-paginator-last:hover]:bg-green-500/10

                [&_.p-dropdown]:border-green-500/30
                [&_.p-dropdown]:bg-black/40
                [&_.p-dropdown]:text-white
                [&_.p-dropdown-label]:text-white
                [&_.p-dropdown-trigger]:text-green-400
              "
            />
          </div>
        </section>
      </main>
    </>
  );
}