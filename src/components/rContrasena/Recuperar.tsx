import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { NavbarGorrasPla } from "../NavbarGorrasPla";

const Recuperar = () => {
  const [step, setStep] = useState<number>(1);

  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [generatedCode, setGeneratedCode] = useState<string>("");

  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSendCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Ingresa tu correo electrónico");
      return;
    }

    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();

    setGeneratedCode(randomCode);
    setStep(2);

    console.log("Código enviado al correo:", randomCode);

    alert(
      `Código enviado correctamente. Para prueba, tu código es: ${randomCode}`
    );
  };

  const handleVerifyCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!code.trim()) {
      alert("Ingresa el código de verificación");
      return;
    }

    if (code !== generatedCode) {
      alert("El código es incorrecto");
      return;
    }

    setStep(3);
  };

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      alert("Completa los campos de contraseña");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Correo:", email);
    console.log("Nueva contraseña:", newPassword);

    alert("Contraseña reestablecida correctamente");

    setEmail("");
    setCode("");
    setGeneratedCode("");
    setNewPassword("");
    setConfirmPassword("");
    setStep(1);
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
                  <i className="pi pi-lock text-3xl text-green-400" />
                </div>

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-sm font-semibold text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,1)]" />
                  Recuperar acceso
                </div>

                <h2 className="max-w-lg text-4xl font-black leading-tight text-white">
                  Reestablece tu{" "}
                  <span className="bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent">
                    contraseña
                  </span>
                </h2>

                <p className="mt-4 max-w-lg text-base leading-7 text-zinc-400">
                  Ingresa tu correo, recibe un código de verificación y crea una
                  nueva contraseña para volver a entrar a tu cuenta.
                </p>
              </div>

              <div className="relative grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-green-500/20 bg-black/35 p-3 text-center">
                  <p className="text-xl font-bold text-white">1</p>
                  <p className="text-xs text-zinc-400">Correo</p>
                </div>

                <div className="rounded-xl border border-green-500/20 bg-black/35 p-3 text-center">
                  <p className="text-xl font-bold text-white">2</p>
                  <p className="text-xs text-zinc-400">Código</p>
                </div>

                <div className="rounded-xl border border-green-500/20 bg-black/35 p-3 text-center">
                  <p className="text-xl font-bold text-white">3</p>
                  <p className="text-xs text-zinc-400">Nueva clave</p>
                </div>
              </div>
            </div>

            {/* FORMULARIO */}
            <div className="flex items-center justify-center p-5 sm:p-7">
              <div className="w-full max-w-[430px]">
                <div className="mb-5 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/30 bg-green-400/10 shadow-[0_0_25px_rgba(34,197,94,0.25)] lg:hidden">
                    <i className="pi pi-lock text-2xl text-green-400" />
                  </div>

                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.45em] text-green-400">
                    Seguridad
                  </p>

                  <h1 className="text-3xl font-black text-white">
                    Reestablecer contraseña
                  </h1>

                  <p className="mt-2 text-sm text-zinc-400">
                    {step === 1 && "Ingresa tu correo para recibir el código"}
                    {step === 2 && "Escribe el código que se envió a tu correo"}
                    {step === 3 && "Crea tu nueva contraseña"}
                  </p>
                </div>

                {/* PASOS */}
                <div className="mb-5 flex items-center justify-center gap-2">
                  <div
                    className={`h-2 w-10 rounded-full ${
                      step >= 1 ? "bg-green-400" : "bg-zinc-700"
                    }`}
                  />
                  <div
                    className={`h-2 w-10 rounded-full ${
                      step >= 2 ? "bg-green-400" : "bg-zinc-700"
                    }`}
                  />
                  <div
                    className={`h-2 w-10 rounded-full ${
                      step >= 3 ? "bg-green-400" : "bg-zinc-700"
                    }`}
                  />
                </div>

                {/* PASO 1 */}
                {step === 1 && (
                  <form onSubmit={handleSendCode} className="flex flex-col gap-4">
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

                    <Button
                      type="submit"
                      label="Enviar código"
                      icon="pi pi-send"
                      className="mt-2 h-[50px] w-full rounded-xl border-none bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 font-black text-black shadow-[0_0_30px_rgba(34,197,94,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_0_45px_rgba(34,197,94,0.55)]"
                    />

                    <p className="pt-1 text-center text-sm text-zinc-400">
                      ¿Ya recordaste tu contraseña?{" "}
                      <a
                        href="/login"
                        className="font-bold text-green-400 transition-colors hover:text-green-300"
                      >
                        Inicia sesión
                      </a>
                    </p>
                  </form>
                )}

                {/* PASO 2 */}
                {step === 2 && (
                  <form
                    onSubmit={handleVerifyCode}
                    className="flex flex-col gap-4"
                  >
                    <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-center">
                      <p className="text-sm text-zinc-300">
                        Código enviado a:
                      </p>
                      <p className="font-bold text-green-400">{email}</p>
                    </div>

                    <div className="w-full">
                      <label className="mb-1.5 block text-sm font-semibold text-zinc-300">
                        Código de verificación
                      </label>

                      <div className="relative w-full">
                        <i className="pi pi-key absolute left-4 top-1/2 z-10 -translate-y-1/2 text-zinc-400" />

                        <InputText
                          value={code}
                          required
                          maxLength={6}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setCode(e.target.value)
                          }
                          placeholder="Ingresa el código"
                          className="h-[48px] w-full rounded-xl border border-zinc-700 bg-zinc-900/80 pl-11 pr-4 text-center text-xl font-bold tracking-[0.35em] text-white outline-none transition-all placeholder:text-sm placeholder:tracking-normal placeholder:text-zinc-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/30"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      label="Verificar código"
                      icon="pi pi-check"
                      className="mt-2 h-[50px] w-full rounded-xl border-none bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 font-black text-black shadow-[0_0_30px_rgba(34,197,94,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_0_45px_rgba(34,197,94,0.55)]"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setCode("");
                      }}
                      className="text-sm font-bold text-zinc-400 transition hover:text-green-400"
                    >
                      Cambiar correo
                    </button>
                  </form>
                )}

                {/* PASO 3 */}
                {step === 3 && (
                  <form
                    onSubmit={handleResetPassword}
                    className="flex flex-col gap-4"
                  >
                    <div className="w-full">
                      <label className="mb-1.5 block text-sm font-semibold text-zinc-300">
                        Nueva contraseña
                      </label>

                      <Password
                        value={newPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setNewPassword(e.target.value)
                        }
                        placeholder="Nueva contraseña"
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

                    <div className="w-full">
                      <label className="mb-1.5 block text-sm font-semibold text-zinc-300">
                        Confirmar contraseña
                      </label>

                      <Password
                        value={confirmPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setConfirmPassword(e.target.value)
                        }
                        placeholder="Repite la contraseña"
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

                    <Button
                      type="submit"
                      label="Guardar nueva contraseña"
                      icon="pi pi-lock"
                      className="mt-2 h-[50px] w-full rounded-xl border-none bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 font-black text-black shadow-[0_0_30px_rgba(34,197,94,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_0_45px_rgba(34,197,94,0.55)]"
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recuperar;