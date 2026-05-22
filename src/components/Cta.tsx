import { useState } from "react";
import { Button } from "./ui/button";

export const Cta = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const texto = encodeURIComponent(
      `Hola, soy ${nombre}\nCorreo: ${correo}\nProyecto: ${mensaje}`,
    );

    window.open(`https://wa.me/529514362937?text=${texto}`, "_blank");
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <section id="contacto" className="container pt-24 sm:py-24">
      {/* TÍTULO */}
      <div className="flex justify-center mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
            Contáctanos
          </span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* TEXTO */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Listo para llevar tu negocio al siguiente nivel? 🚀
          </h2>

          <p className="text-white text-lg">
            Cuéntanos tu idea y te ayudamos a convertirla en una solución
            digital.
          </p>

          <p className="text-sm text-white">
            Respondemos en menos de 24 horas ⚡
          </p>
        </div>

        {/* FORMULARIO */}
        <div className="relative group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6 overflow-hidden">
          {/* Glow animado */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="absolute w-[300px] h-[300px] bg-green-500/20 blur-3xl rounded-full -top-20 -left-20" />
          </div>

          {/* HEADER */}
          <div className="relative space-y-2 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              Cuéntanos tu proyecto 🚀
            </h3>
            <p className="text-sm text-muted-foreground">
              Te respondemos en menos de 24 horas
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="relative space-y-5">
            {/* INPUT NOMBRE */}
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Nombre</label>
              <input
                type="text"
                placeholder="Ej: Juan Pérez"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none 
        focus:ring-2 focus:ring-green-500 focus:border-green-500 
        transition-all duration-200 placeholder:text-muted-foreground
        hover:border-green-500/40"
              />
            </div>

            {/* INPUT CORREO */}
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Correo</label>
              <input
                type="email"
                placeholder="ejemplo@email.com"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none 
        focus:ring-2 focus:ring-green-500 focus:border-green-500 
        transition-all duration-200 placeholder:text-muted-foreground
        hover:border-green-500/40"
              />
            </div>

            {/* TEXTAREA */}
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Proyecto</label>
              <textarea
                placeholder="Cuéntanos qué necesitas..."
                rows={4}
                required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none 
        focus:ring-2 focus:ring-green-500 focus:border-green-500 
        transition-all duration-200 placeholder:text-muted-foreground
        resize-none hover:border-green-500/40"
              />
            </div>

            {/* BOTÓN */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 
      text-white font-semibold py-3 rounded-xl shadow-lg
      transition-all duration-300
      hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/30
      active:scale-95"
            >
              Enviar por WhatsApp 💬
            </Button>

            {/* TEXTO PEQUEÑO */}
            <p className="text-xs text-center text-muted-foreground">
              🔒 Tu información es privada
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
