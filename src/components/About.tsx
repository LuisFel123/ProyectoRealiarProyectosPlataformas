import { Timeline } from "primereact/timeline";


interface TimelineEvent {
  status: string;
  date: string;
  icon: string;
  description?: string;
}

export const About = () => {
  const events: TimelineEvent[] = [
    {
      status: "Análisis",
      date: "Entendemos tu negocio",
      icon: "pi pi-search",
      description:
        "Analizamos tus procesos actuales, detectamos problemas y oportunidades para crear una solución realmente útil y eficiente.",
    },
    {
      status: "Diseño",
      date: "Creamos la solución",
      icon: "pi pi-pencil",
      description:
        "Diseñamos la estructura, funcionalidades y experiencia del sistema enfocándonos en usabilidad, rendimiento y resultados.",
    },
    {
      status: "Desarrollo",
      date: "Construimos tu sistema",
      icon: "pi pi-cog",
      description:
        "Programamos tu sistema o página web con tecnologías modernas, asegurando rapidez, seguridad y escalabilidad.",
    },
    {
      status: "Lanzamiento",
      date: "Publicamos tu proyecto",
      icon: "pi pi-check",
      description:
        "Implementamos tu sistema en producción listo para usarse, optimizado para rendimiento y preparado para crecer.",
    },
    {
      status: "Soporte y mejora",
      date: "Te acompañamos siempre",
      icon: "pi pi-wrench",
      description:
        "Damos mantenimiento, mejoras continuas y soporte técnico para que tu sistema evolucione junto a tu negocio.",
    },
  ];

  const customizedMarker = (item: TimelineEvent) => {
    return (
      <span
        className="
        flex items-center justify-center
        w-10 h-10
        rounded-full
        border border-green-500/30
        bg-green-500/10
        shadow-lg
      "
      >
        <i className={`${item.icon} text-green-400 text-sm`} />
      </span>
    );
  };

  const customizedContent = (item: TimelineEvent) => {
    return (
      <div
        className="
        group
        bg-[#0f0f0f]/70
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-6
        shadow-[0_0_30px_rgba(0,0,0,0.6)]

        transition-all duration-300

        hover:-translate-y-2
        hover:border-green-500/40
        hover:shadow-[0_0_60px_rgba(34,197,94,0.15)]
      "
      >
        <div className="space-y-4">
          {/* TITULO */}
          <h3 className="text-white text-xl font-bold">{item.status}</h3>

          {/* LINEA */}
          <div className="w-full h-[2px] bg-green-500/40 rounded-full" />

          {/* SUBTITULO */}
          <p className="text-gray-50 text-lg font-semibold">{item.date}</p>

          {/* TEXTO */}
          <p className="text-gray-100 text-lg leading-relaxed font-medium">
            {item.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="proceso" className="container pt-24 sm:py-24">
      {/* GLOW DE FONDO */}
      <div
        className="
        absolute
        w-[400px] h-[400px]
        bg-green-500/20
        blur-[120px]
        rounded-full
        top-10 right-10
        -z-10
      "
      />

      {/* CONTENEDOR */}
      <div
        className="
        bg-black/40
        border border-white/10
        rounded-2xl
        py-12
        backdrop-blur
      "
      >
        <h1 className="text-center text-3xl lg:text-4xl font-bold mb-8">
          <span className="text-white">Cómo </span>
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
            trabajamos
          </span>
        </h1>
        <div className="px-6">
          <Timeline
            value={events}
            align="alternate"
            className="mt-10"
            marker={customizedMarker}
            content={customizedContent}
          />
        </div>
      </div>

      {/* AJUSTE LINEA TIMELINE */}
      <style>
        {`
          .p-timeline-event-connector {
            background: #262626 !important;
          }
        `}
      </style>
    </section>
  );
};
