import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { NavbarGorrasPla } from "../NavbarGorrasPla";

const Registro = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [terms, setTerms] = useState<boolean>(false);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!terms) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    console.log("Nombre:", name);
    console.log("Correo:", email);
    console.log("Contraseña:", password);
  };

  return (
    <>
      <NavbarGorrasPla />

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black px-4 py-4 text-white">
        {/* Fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:45px_45px]" />

        <div className="relative z-10 flex min-h-[calc(100vh-112px)] items-center justify-center">
          <div className="grid w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-green-500/30 bg-zinc-950/80 shadow-[0_0_80px_rgba(34,197,94,0.18)] backdrop-blur-2xl lg:grid-cols-[1fr_0.95fr]">
            
            {/* LADO IZQUIERDO */}
            <div className="relative hidden min-h-[500px] overflow-hidden bg-gradient-to-br from-green-500/20 via-zinc-950 to-black p-8 lg:flex lg:flex-col lg:justify-between">
              <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full border border-green-400/20" />
              <div className="absolute right-[-70px] top-[-70px] h-48 w-48 rounded-full border border-green-400/20" />

              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-400/30 bg-green-400/10 shadow-[0_0_30px_rgba(34,197,94,0.25)]">
                  <i className="pi pi-user-plus text-3xl text-green-400" />
                </div>

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-sm font-semibold text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,1)]" />
                  Crear cuenta
                </div>

                <h2 className="max-w-lg text-4xl font-black leading-tight text-white">
                  Únete a{" "}
                  <span className="bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent">
                    INNOVATECH
                  </span>
                </h2>

                <p className="mt-4 max-w-lg text-base leading-7 text-zinc-400">
                  Regístrate para acceder a tu cuenta, administrar productos,
                  pedidos y contenido desde un panel moderno y seguro.
                </p>
              </div>

              <div className="relative grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-green-500/20 bg-black/35 p-3 text-center">
                  <p className="text-xl font-bold text-white">Rápido</p>
                  <p className="text-xs text-zinc-400">Registro</p>
                </div>

                <div className="rounded-xl border border-green-500/20 bg-black/35 p-3 text-center">
                  <p className="text-xl font-bold text-white">100%</p>
                  <p className="text-xs text-zinc-400">Seguro</p>
                </div>

                <div className="rounded-xl border border-green-500/20 bg-black/35 p-3 text-center">
                  <p className="text-xl font-bold text-white">Pro</p>
                  <p className="text-xs text-zinc-400">Diseño</p>
                </div>
              </div>
            </div>

            {/* FORMULARIO */}
            <div className="flex items-center justify-center p-5 sm:p-7">
              <div className="w-full max-w-[430px]">
                <div className="mb-5 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/30 bg-green-400/10 shadow-[0_0_25px_rgba(34,197,94,0.25)] lg:hidden">
                    <i className="pi pi-user-plus text-2xl text-green-400" />
                  </div>

                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.45em] text-green-400">
                    Registro
                  </p>

                  <h1 className="text-3xl font-black text-white">
                    Crear cuenta
                  </h1>

                  <p className="mt-2 text-sm text-zinc-400">
                    Completa tus datos para registrarte
                  </p>
                </div>

                <form onSubmit={handleRegister} className="flex flex-col gap-3">
                  {/* NOMBRE */}
                  <div className="w-full">
                    <label className="mb-1.5 block text-sm font-semibold text-zinc-300">
                      Nombre
                    </label>

                    <div className="relative w-full">
                      <i className="pi pi-user absolute left-4 top-1/2 z-10 -translate-y-1/2 text-zinc-400" />

                      <InputText
                        value={name}
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setName(e.target.value)
                        }
                        placeholder="Tu nombre"
                        className="h-[48px] w-full rounded-xl border border-zinc-700 bg-zinc-900/80 pl-11 pr-4 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
                      />
                    </div>
                  </div>

                  {/* CORREO */}
                  <div className="w-full">
                    <label className="mb-1.5 block text-sm font-semibold text-zinc-300">
                      Correo electrónico
                    </label>

                    <div className="relative w-full">
                      <i className="pi pi-envelope absolute left-4 top-1/2 z-10 -translate-y-1/2 text-zinc-400" />

                      <InputText
                        value={email}
                        required
                        type="email"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEmail(e.target.value)
                        }
                        placeholder="ejemplo@gmail.com"
                        className="h-[48px] w-full rounded-xl border border-zinc-700 bg-zinc-900/80 pl-11 pr-4 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
                      />
                    </div>
                  </div>

                  {/* CONTRASEÑA */}
                  <div className="w-full">
                    <label className="mb-1.5 block text-sm font-semibold text-zinc-300">
                      Contraseña
                    </label>

                    <Password
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                      placeholder="Crea una contraseña"
                      feedback={false}
                      toggleMask
                      required
                      className="w-full"
                      inputClassName="h-[48px] w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 pr-12 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
                      pt={{
                        root: {
                          className: "w-full block",
                        },
                        input: {
                          className: "w-full",
                        },
                        iconField: {
                          className: "w-full block",
                        },
                        showIcon: {
                          className: "right-4 text-zinc-400",
                        },
                        hideIcon: {
                          className: "right-4 text-zinc-400",
                        },
                      }}
                    />
                  </div>

                  {/* CONFIRMAR CONTRASEÑA */}
                  <div className="w-full">
                    <label className="mb-1.5 block text-sm font-semibold text-zinc-300">
                      Confirmar contraseña
                    </label>

                    <Password
                      value={confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setConfirmPassword(e.target.value)
                      }
                      placeholder="Repite tu contraseña"
                      feedback={false}
                      toggleMask
                      required
                      className="w-full"
                      inputClassName="h-[48px] w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 pr-12 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
                      pt={{
                        root: {
                          className: "w-full block",
                        },
                        input: {
                          className: "w-full",
                        },
                        iconField: {
                          className: "w-full block",
                        },
                        showIcon: {
                          className: "right-4 text-zinc-400",
                        },
                        hideIcon: {
                          className: "right-4 text-zinc-400",
                        },
                      }}
                    />
                  </div>


                  {/* BOTÓN REGISTRARSE */}
                  <Button
                    type="submit"
                    label="Registrarse"
                    className="mt-2 h-[50px] w-full rounded-xl border-none bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 font-black text-black shadow-[0_0_30px_rgba(34,197,94,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_0_45px_rgba(34,197,94,0.55)]"
                  />

                  {/* LOGIN */}
                  <p className="pt-1 text-center text-sm text-zinc-400">
                    ¿Ya tienes cuenta?{" "}
                    <a
                      href="/login"
                      className="font-bold text-green-400 transition-colors hover:text-green-300"
                    >
                      Inicia sesión
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registro;