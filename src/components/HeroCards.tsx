
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Zap, BarChart3 } from "lucide-react";
export const HeroCards = () => {
  return (
    <div className="block w-full lg:w-[520px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Card 1 */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-5 transition duration-300 hover:scale-[1.03] hover:border-green-500/30">
          
          <CardHeader className="flex flex-col gap-4">
            
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-3 rounded-xl ring-1 ring-green-500/20">
                <Clock className="w-6 h-6 text-green-500" />
              </div>
              <CardTitle className="text-lg font-semibold">
                Ahorra tiempo
              </CardTitle>
            </div>

            <div className="w-10 h-[2px] bg-green-500/40 rounded-full" />

            <CardDescription className="text-lg text-white ">
              Automatiza procesos y elimina tareas manuales.
            </CardDescription>

          </CardHeader>
        </Card>

        {/* Card 2 */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-5 transition duration-300 hover:scale-[1.03] hover:border-green-500/30">
          
          <CardHeader className="flex flex-col gap-4">
            
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-3 rounded-xl ring-1 ring-green-500/20">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <CardTitle className="text-lg font-semibold">
                Más productividad
              </CardTitle>
            </div>

            <div className="w-10 h-[2px] bg-green-500/40 rounded-full" />

            <CardDescription className="text-lg text-white">
              Optimiza tu flujo de trabajo.
            </CardDescription>

          </CardHeader>
        </Card>

        {/* Card 3 */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-5 transition duration-300 hover:scale-[1.03] hover:border-green-500/30">
          
          <CardHeader className="flex flex-col gap-4">
            
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-3 rounded-xl ring-1 ring-green-500/20">
                <BarChart3 className="w-6 h-6 text-green-500" />
              </div>
              <CardTitle className="text-lg font-semibold">
                Escala tu negocio
              </CardTitle>
            </div>

            <div className="w-10 h-[2px] bg-green-500/40 rounded-full" />

            <CardDescription className="text-lg text-white">
              Datos en tiempo real.
            </CardDescription>

          </CardHeader>
        </Card>

        {/* Card 4 */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-5 transition duration-300 hover:scale-[1.03] hover:border-green-500/30">
          
          <CardHeader className="flex flex-col gap-4">
            
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-3 rounded-xl ring-1 ring-green-500/20">
                <BarChart3 className="w-6 h-6 text-green-500" />
              </div>
              <CardTitle className="text-lg font-semibold">
                Sistema personalizado
              </CardTitle>
            </div>

            <div className="w-10 h-[2px] bg-green-500/40 rounded-full" />

            <CardDescription className="text-lg text-white">
              Adaptado a tu negocio.
            </CardDescription>

          </CardHeader>
        </Card>

      </div>
    </div>
  );
};
