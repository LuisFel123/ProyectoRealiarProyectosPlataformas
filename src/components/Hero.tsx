
import { HeroCards } from "./HeroCards";

import miImagen from "../assets/lufra.png";

export const Hero = () => {
  return (
    <section
      className="container grid lg:grid-cols-2 place-items-center py-10 md:py-16 gap-10"
      id="inicio"
    >
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="text-white">Creamos sistemas web y páginas</span>{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              que automatizan tu negocio.
            </span>
          </h1>{" "}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Deja de perder tiempo con procesos manuales. Digitaliza y escala.
        </p>

        <a
          rel="noreferrer noopener"
          className="flex items-center justify-center gap-2 mx-auto"
        >
          <img
            src={miImagen}
            alt="Descripción"
            className="w-24 h-24 object-contain"
          />
          <span className="text-xl font-bold">INNOVATECH</span>
        </a>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
