import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Creamos sistemas personalizados adaptados a las necesidades de tu negocio.",
  },
  {
    icon: <Radar size={34} />,
    name: "Eliminamos tareas manuales para que ahorres tiempo y reduzcas errores.",
  },
  {
    icon: <Radar size={34} />,
    name: "Diseñamos páginas modernas, rápidas y optimizadas para convertir visitantes en clientes.",
  },
  {
    icon: <Radar size={34} />,
    name: "Controla tu negocio con reportes, métricas y datos en tiempo real.",
  },
];

export const Sponsors = () => {
  return (
    <section id="servicios" className="container pt-24 sm:py-24">
      <h1 className="text-center text-3xl lg:text-4xl font-bold mb-8">
        <span className="text-white">Servicios que </span>
        <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
          impulsan tu negocio
        </span>
      </h1>

      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-white text-center">
        Desarrollamos soluciones digitales a medida para automatizar, optimizar
        y hacer crecer tu empresa.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-12">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground text-center max-w-xs"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
