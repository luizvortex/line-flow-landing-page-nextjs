import { BellRing, CalendarClock, Gift, Megaphone, Repeat, Stamp } from "lucide-react";
import { GlassCard } from "./shared/glass-card";
import { EyebrowLabel } from "./shared/eyebrow-label";

const stamps = 10;
const filled = 7;

const items = [
  {
    icon: Repeat,
    title: "Lembrete de retorno",
    desc: "Cada serviço tem o seu prazo. Passou o tempo, o cliente recebe o aviso para voltar.",
  },
  {
    icon: Megaphone,
    title: "Story de horários vagos",
    desc: "Todo dia o LineFlow publica no seu perfil os horários livres. Sem você abrir o editor.",
  },
  {
    icon: CalendarClock,
    title: "Lista de espera da agenda",
    desc: "Agenda cheia? O cliente entra na espera e é avisado quando abrir uma vaga.",
  },
];

export function Retencao() {
  return (
    <section id="fidelizacao" className="bg-[#072233]/30 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <EyebrowLabel>Fidelização</EyebrowLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#e8f2f1] max-w-2xl">
          Atender bem é só metade. A outra é fazer o cliente voltar.
        </h2>
        <p className="mt-4 text-[#8bb5b0] max-w-xl leading-relaxed">
          Fidelidade, indicação e avisos automáticos trabalham por você depois
          que o cliente sai da porta.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Cartão fidelidade */}
          <GlassCard className="md:col-span-7 p-8">
            <div className="flex items-center gap-2 text-[#77aca2]">
              <Stamp size={16} strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.10em] font-medium">
                Cartão fidelidade
              </span>
            </div>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              Cada atendimento vira um selo
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2 max-w-md">
              O selo cai sozinho quando o atendimento é concluído. Juntou o
              suficiente, o cliente troca por uma recompensa que você define e
              é avisado na hora.
            </p>

            <div className="mt-6 bg-[#031926] rounded-xl p-5 border border-[#1a3d52]">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="text-[#e8f2f1] font-semibold">
                  Barbearia Silva
                </span>
                <span className="text-[#77aca2] font-mono">
                  {filled}/{stamps} selos
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2 max-w-sm">
                {Array.from({ length: stamps }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-full border flex items-center justify-center ${
                      i < filled
                        ? "bg-[#77aca2]/20 border-[#77aca2] text-[#77aca2]"
                        : "border-[#1a3d52] border-dashed text-transparent"
                    }`}
                  >
                    <Stamp size={14} strokeWidth={1.5} />
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#4d7a80] mt-3">
                Faltam {stamps - filled} para a próxima recompensa
              </p>
            </div>
          </GlassCard>

          {/* Indique e ganhe */}
          <GlassCard className="md:col-span-5 p-8">
            <div className="flex items-center gap-2 text-[#77aca2]">
              <Gift size={16} strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.10em] font-medium">
                Indique e ganhe
              </span>
            </div>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              Quem traz cliente novo é premiado
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
              Cada cliente tem um código de indicação. Quando o indicado faz o
              primeiro atendimento, quem indicou ganha a recompensa.
            </p>
            <div className="mt-6 bg-[#031926] rounded-xl p-4 border border-[#1a3d52] text-center">
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#4d7a80] mb-1">
                Seu código de indicação
              </p>
              <p className="font-mono font-bold text-2xl text-[#77aca2] tracking-widest">
                AMIGO-4F8K
              </p>
            </div>
            <div className="mt-3 bg-[#031926] rounded-xl p-4 border border-[#1a3d52] flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[rgba(119,172,162,0.15)] flex items-center justify-center shrink-0">
                <BellRing size={15} strokeWidth={1.5} className="text-[#77aca2]" />
              </div>
              <div>
                <p className="text-[#e8f2f1] text-xs font-semibold">
                  Você ganhou uma recompensa!
                </p>
                <p className="text-[#8bb5b0] text-xs">
                  Seu amigo fez o primeiro atendimento.
                </p>
              </div>
            </div>
          </GlassCard>

          {items.map(({ icon: Icon, title, desc }) => (
            <GlassCard key={title} className="md:col-span-4 p-8">
              <Icon size={18} strokeWidth={1.5} className="text-[#77aca2]" />
              <h3 className="text-base font-semibold text-[#e8f2f1] mt-3">
                {title}
              </h3>
              <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
                {desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
