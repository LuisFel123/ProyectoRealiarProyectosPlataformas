import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import reacta from "../assets/reacta.png";
import spri from "../assets/spri.png"; 
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: (
      <img
        src={reacta}
        alt="React y Angular"
        className="w-20 h-20 object-contain"
      />
    ),
    title: "Frontend",
    description:
      "Desarrollo de interfaces dinámicas y responsivas utilizando tecnologías como React y Angular, enfocadas en ofrecer una experiencia de usuario moderna y fluida.",
  },
  {
     icon: (
      <img
        src={spri}
        alt="React y Angular"
        className="w-20 h-20 object-contain"
      />
    ),
    title: "Backend",
    description:
      "Desarrollo de la lógica del sistema utilizando tecnologías como Laravel y Spring Boot, permitiendo crear aplicaciones seguras, escalables y bien estructuradas.",
  },
  {
      icon: (
      <img
        src={mysql}
        alt="React y Angular"
        className="w-20 h-20 object-contain"
      />
    ),
    title: "Base de datos",
    description:
      "Diseño y gestión de bases de datos utilizando MySQL y PostgreSQL, garantizando un manejo eficiente y confiable.",
  },
  {
     icon: (
      <img
        src={git}
        alt="React y Angular"
        className="w-20 h-20 object-contain"
      />
    ),
    title: "Control de versiones",
    description:
      "Se emplean herramientas como Git y GitHub para asegurar trazabilidad, control de cambios y estabilidad en los proyectos.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="tecnologias" className="container text-center pt-24 sm:py-24">
      {/* TITULO */}
      <h1 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
          Tecnologías
        </span>
      </h1>

      {/* DESCRIPCION */}
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-white text-center">
        Se utilizan herramientas y tecnologías modernas para el desarrollo de
        soluciones web eficientes, seguras y escalables.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="group relative overflow-hidden 
            bg-gradient-to-br from-white/5 via-white/0 to-transparent
            border border-white/10
            backdrop-blur-xl
            rounded-2xl
            p-6
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            transition-all duration-300
            hover:scale-[1.04]
            hover:border-green-500/40"
          >
            {/* GLOW VERDE */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-10 -left-10 w-[200px] h-[200px] bg-green-500/20 blur-3xl rounded-full" />
            </div>

            {/* CONTENIDO */}
            <CardHeader className="relative flex flex-col items-center text-center gap-4">
              {/* ICONO */}
              <div
                className="bg-gradient-to-br from-green-500/20 to-green-500/10 
                p-4 rounded-2xl 
                ring-1 ring-green-500/20 
                flex items-center justify-center
                group-hover:scale-110 transition"
              >
                {icon}
              </div>

              {/* TITULO */}
              <CardTitle className="text-xl font-semibold text-white">
                {title}
              </CardTitle>

              {/* LINEA */}
              <div className="w-10 h-[2px] bg-green-500/40 rounded-full group-hover:w-16 transition-all"></div>
            </CardHeader>

            {/* DESCRIPCION */}
            <CardContent className="relative text-center text-lg text-white">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
