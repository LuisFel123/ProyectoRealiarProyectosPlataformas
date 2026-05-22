import {
  Card,
  CardContent,

  CardTitle,
} from "@/components/ui/card";

import ventas from "../assets/ventas.png";
import pagina from "../assets/pagina.png";
import { Image } from "primereact/image";
import reservas from "../assets/reservas.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Sistema de ventas automatizado",
    description:
      "Controla ventas, clientes y productos en tiempo real desde una sola plataforma y reduce el trabajo manual en tu negocio.",
    image: ventas,
  },
  {
    title: "Landing page para negocio",
    description:
      "Página web moderna diseñada para atraer clientes, generar confianza y aumentar tus ventas desde el primer día.",
    image: pagina,
  },
  {
    title: "Sistema de reservas online",
    description:
      "Permite a tus clientes agendar citas o servicios en línea de forma rápida y automática, sin llamadas ni complicaciones.",
    image: reservas,
  },
];

export const Features = () => {
  return (
    <section id="proyectos" className="container pt-24 text-center sm:py-24 ">
      <h1 className="text-3xl  md:text-4xl font-bold">
        <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
          Proyectos
        </span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-1"
          >
            {/* Glow efecto */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute w-[200px] h-[200px] bg-green-500/20 blur-3xl rounded-full -top-10 -left-10" />
            </div>

            {/* Imagen arriba */}
            <div className="relative p-4 group">
              <Image
                src={image}
                alt="Image"
                preview
                imageClassName="w-full h-[320px] rounded-xl transition duration-300 group-hover:scale-105 cursor-pointer"
              />


              {/* 👇 AQUÍ */}
              <p className="text-xs text-muted-foreground text-center mt-2">
                Haz clic en la imagen para ver más grande
              </p>
            </div>

            {/* Contenido */}
            <CardContent className="relative space-y-3 pb-6">
              <CardTitle className="text-xl font-semibold leading-tight">
                {title}
              </CardTitle>

              <div className="w-full h-[2px] bg-green-500/40 rounded-full" />

              <p className="text-lg text-white">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
