import {
  BarChart2,
  Bell,
  Globe,
  ListOrdered,
  QrCode,
  Tv,
} from "lucide-react";
import { GlassCard } from "./shared/glass-card";
import { EyebrowLabel } from "./shared/eyebrow-label";

export function Funcionalidades() {
  return (
    <section id="funcionalidades" className="bg-[#031926] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <EyebrowLabel>Funcionalidades</EyebrowLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#e8f2f1]">
          Tudo que você precisa para atender sem caos
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card A — Dashboard */}
          <GlassCard className="md:col-span-7 p-8 min-h-[320px] relative overflow-hidden group">
            <EyebrowLabel>Gestão</EyebrowLabel>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              Dashboard em tempo real
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2 max-w-sm">
              Veja todas as filas, chame o próximo e acompanhe métricas do dia
              — tudo numa tela. O operador trabalha no celular ou no computador.
            </p>
            {/* Mini preview */}
            <div className="absolute bottom-0 right-0 w-[240px] h-[160px] pointer-events-none overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to top left, rgba(7,34,51,0.9) 30%, transparent 70%)",
                }}
              />
              <div className="absolute bottom-4 right-4 space-y-1.5">
                {[
                  { pos: "#001", name: "Rafael M.", active: true },
                  { pos: "#002", name: "Ana Costa", active: false },
                  { pos: "#003", name: "Carlos L.", active: false },
                ].map((row) => (
                  <div
                    key={row.pos}
                    className="flex items-center gap-2 bg-[#031926]/70 rounded px-2 py-1"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        row.active ? "bg-[#4ade80]" : "bg-[#77aca2]"
                      }`}
                    />
                    <span className="text-[9px] text-[#8bb5b0] font-mono whitespace-nowrap">
                      {row.pos} · {row.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Card B — Display TV */}
          <GlassCard className="md:col-span-5 p-8 min-h-[320px] group">
            <EyebrowLabel icon={<Tv size={11} strokeWidth={1.5} />}>
              Display
            </EyebrowLabel>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              Tela de TV na sala de espera
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
              Exiba o número chamado em tempo real. Profissionaliza o ambiente e
              evita dúvidas.
            </p>
            <div className="mt-6 bg-[#031926] rounded-xl p-5 border border-[#1a3d52] text-center">
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#77aca2] mb-1">
                Chamando
              </p>
              <p className="font-mono font-bold text-[52px] leading-none text-[#77aca2] tracking-tight">
                007
              </p>
              <p className="text-[#8bb5b0] text-xs mt-1">Corte masculino</p>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping-live absolute inline-flex h-full w-full rounded-full bg-[#77aca2] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#77aca2]" />
                </span>
                <span className="text-[10px] text-[#77aca2]">Ao vivo</span>
              </div>
            </div>
          </GlassCard>

          {/* Card C — QR Code */}
          <GlassCard className="md:col-span-4 p-8 group">
            <EyebrowLabel icon={<QrCode size={11} strokeWidth={1.5} />}>
              Entrada
            </EyebrowLabel>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              QR Code por fila
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
              Um por serviço ou um geral. Imprima, cole ou exiba na tela. Cada
              negócio tem seu link público permanente.
            </p>
            <div className="mt-6 mx-auto w-20 h-20 bg-[#031926] rounded-xl grid grid-cols-5 gap-0.5 p-2.5">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-[1px]"
                  style={{
                    background: [
                      0, 1, 2, 5, 6, 7, 10, 11, 13, 14, 15, 17, 18, 19, 22,
                      23, 24,
                    ].includes(i)
                      ? "rgba(119,172,162,0.55)"
                      : "transparent",
                  }}
                />
              ))}
            </div>
          </GlassCard>

          {/* Card D — Push */}
          <GlassCard className="md:col-span-4 p-8 group">
            <EyebrowLabel icon={<Bell size={11} strokeWidth={1.5} />}>
              Notificações
            </EyebrowLabel>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              Avisa o cliente na hora certa
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
              Quando faltam 2 pessoas, o celular do cliente vibra. Ele volta no
              momento certo. Sem fila fantasma.
            </p>
            <div className="mt-6 bg-[#031926] rounded-xl p-3.5 border border-[#1a3d52] flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-[rgba(119,172,162,0.15)] flex items-center justify-center shrink-0">
                <Bell size={14} strokeWidth={1.5} className="text-[#77aca2]" />
              </div>
              <div>
                <p className="text-[#e8f2f1] text-xs font-semibold">
                  LineFlow
                </p>
                <p className="text-[#8bb5b0] text-xs">
                  Sua vez está chegando! Posição #2
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Card E — Analytics */}
          <GlassCard className="md:col-span-4 p-8 group">
            <div className="flex items-center gap-2 flex-wrap">
              <EyebrowLabel icon={<BarChart2 size={11} strokeWidth={1.5} />}>
                Analytics
              </EyebrowLabel>
              <span className="text-[9px] uppercase tracking-widest bg-[rgba(119,172,162,0.15)] text-[#77aca2] px-1.5 py-0.5 rounded-full font-semibold">
                Pro
              </span>
            </div>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              Dados que revelam seus picos
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
              Veja o horário de maior movimento, tempo médio de espera, taxa de
              desistência e receita por serviço.
            </p>
            <div className="mt-6 flex items-end gap-1 h-12">
              {[38, 62, 48, 78, 100, 68, 52].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm relative"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 4
                        ? "#77aca2"
                        : `rgba(119,172,162,${0.25 + (h / 100) * 0.45})`,
                  }}
                >
                  {i === 4 && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0f3450] border border-[#255068] text-[8px] text-[#77aca2] px-1.5 py-0.5 rounded whitespace-nowrap font-mono">
                      Pico
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Card F — Multi-fila */}
          <GlassCard className="md:col-span-6 p-8 group">
            <EyebrowLabel icon={<ListOrdered size={11} strokeWidth={1.5} />}>
              Flexibilidade
            </EyebrowLabel>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              Uma fila para cada serviço
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
              Corte, barba e tintura em filas separadas. Cada uma com seu QR,
              seu operador e seu tempo estimado independente.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "Corte masculino", count: "8 na fila" },
                { label: "Barba", count: "3 na fila" },
                { label: "Tintura", count: "Fechado" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="bg-[rgba(119,172,162,0.15)] text-[#77aca2] text-xs px-3 py-1 rounded-full border border-[#77aca2]/20"
                >
                  {tag.label} · {tag.count}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Card G — PWA */}
          <GlassCard className="md:col-span-6 p-8 group">
            <EyebrowLabel icon={<Globe size={11} strokeWidth={1.5} />}>
              PWA
            </EyebrowLabel>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              Cliente não precisa instalar nada
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
              A tela do cliente funciona como app instalável (PWA) direto do
              navegador. Android e iOS. Rápido como app nativo.
            </p>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              {["Android", "iOS", "Chrome", "Safari"].map((platform) => (
                <div key={platform} className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-[#031926] border border-[#1a3d52] flex items-center justify-center">
                    <span className="text-[8px] text-[#4d7a80] font-bold">
                      {platform.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[8px] text-[#4d7a80]">{platform}</span>
                </div>
              ))}
              <span className="text-[10px] text-[#4d7a80] ml-1">
                Compatível com todos
              </span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
