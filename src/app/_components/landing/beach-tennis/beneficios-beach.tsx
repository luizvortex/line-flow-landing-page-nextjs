import {
  ArrowLeftRight,
  CalendarX2,
  Check,
  MessageCircle,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { StackCards } from "../shared/stack-cards";
import { LightCard, PhotoCard, UiCard } from "../shared/cartoes-beneficio";

/**
 * Benefícios da página /beach-tennis, no mesmo formato da home (cards
 * empilhados no celular, grade no desktop). Só o que o modo Reserva de
 * quadras faz hoje: grade, reserva online e pelo bot, preço por faixa,
 * horários fixos, comanda da reserva e turmas com presença.
 */

type TipoGrade = "avulsa" | "fixa" | "aula" | "bloqueio" | null;

const COR: Record<Exclude<TipoGrade, null>, string> = {
  avulsa: "bg-[#468189] text-white",
  fixa: "bg-lf-base text-white",
  aula: "bg-[#e3a857] text-lf-base",
  bloqueio: "bg-[repeating-linear-gradient(135deg,rgba(3,25,38,.14)_0_4px,transparent_4px_8px)] text-lf-base/60",
};

const GRADE: { hora: string; quadras: TipoGrade[] }[] = [
  { hora: "18h", quadras: ["avulsa", "aula", null] },
  { hora: "19h", quadras: ["fixa", "avulsa", "bloqueio"] },
  { hora: "20h", quadras: ["fixa", null, "bloqueio"] },
  { hora: "21h", quadras: [null, "avulsa", "avulsa"] },
];

const MENSALIDADES = [
  { nome: "Turma Iniciante", detalhe: "Ter e Qui · 07:00", pago: true },
  { nome: "Grupo do Rafa", detalhe: "Horário fixo · Qua 20:00", pago: true },
  { nome: "Júlia Martins", detalhe: "Turma Avançada", pago: false },
];

const COMANDA = [
  { item: "Quadra 2 · 19:00 às 21:00", valor: "R$ 240,00" },
  { item: "4× Água de coco", valor: "R$ 32,00" },
  { item: "2× Aluguel de raquete", valor: "R$ 40,00" },
];

const ALUNOS = [
  { nome: "Carla S.", presente: true },
  { nome: "Diego M.", presente: true },
  { nome: "Paula R.", presente: false },
  { nome: "Rafael T.", presente: true },
];

const recursos: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: CalendarX2, title: "Bloqueio de quadra", desc: "Feche quadras para torneio, evento ou manutenção." },
  { icon: ArrowLeftRight, title: "Trocar de quadra", desc: "Mova a reserva para outro horário ou quadra na grade." },
  { icon: ShieldCheck, title: "Política de reserva", desc: "Suas regras de cancelamento na tela da reserva." },
  { icon: MessageCircle, title: "Relatório no WhatsApp", desc: "O resumo da semana no seu celular." },
];

export function BeneficiosBeach() {
  return (
    <section id="beneficios" className="px-4 sm:px-6 py-20 md:py-28 overflow-x-clip">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-[42px] font-bold tracking-tight leading-[1.12] text-lf-primary max-w-3xl">
          Do primeiro saque ao último game,{" "}
          <span className="text-lf-accent">sua quadra não fica vazia.</span>
        </h2>

        <div className="mt-12">
          <StackCards
            items={[
              {
                key: "grade",
                node: (
                  <LightCard title="Todas as quadras numa grade só">
                    <div className="w-full max-w-[260px] rounded-2xl bg-white/70 p-3">
                      <div className="grid grid-cols-[30px_repeat(3,1fr)] gap-1 text-[10px]">
                        <span />
                        {["Quadra 1", "Quadra 2", "Quadra 3"].map((q) => (
                          <span key={q} className="text-center font-semibold text-lf-base/70">
                            {q}
                          </span>
                        ))}
                        {GRADE.map((linha) => (
                          <div key={linha.hora} className="contents">
                            <span className="font-mono text-lf-base/55 self-center">{linha.hora}</span>
                            {linha.quadras.map((t, i) => (
                              <span
                                key={i}
                                className={`h-8 rounded-md ${t ? COR[t] : "border border-dashed border-lf-base/20"}`}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="mt-2.5 flex flex-wrap gap-x-2.5 gap-y-1 text-[9.5px] text-lf-base/70">
                        {(
                          [
                            ["avulsa", "Avulsa"],
                            ["fixa", "Mensalista"],
                            ["aula", "Aula"],
                            ["bloqueio", "Bloqueio"],
                          ] as const
                        ).map(([t, rotulo]) => (
                          <span key={t} className="flex items-center gap-1">
                            <i className={`w-2.5 h-2.5 rounded-sm ${COR[t]}`} />
                            {rotulo}
                          </span>
                        ))}
                      </div>
                    </div>
                  </LightCard>
                ),
              },
              {
                key: "reserva",
                wide: true,
                node: (
                  <PhotoCard
                    src="/images/beach/quadra-dia.svg"
                    alt="Quadra de beach tennis com rede, areia e céu azul"
                    title="Reserva online 24 horas, até pelo WhatsApp"
                    overlay={
                      <UiCard>
                        <div className="space-y-2 text-[11.5px] leading-snug">
                          <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-lf-accent/25 px-3 py-2 text-lf-primary">
                            Quero quadra sábado à noite
                          </p>
                          <p className="max-w-[92%] rounded-2xl rounded-bl-md bg-lf-elevated px-3 py-2 text-lf-secondary">
                            Quadra 2 livre às <b className="text-lf-primary">19:00</b> e{" "}
                            <b className="text-lf-primary">20:00</b>. Quais horários você quer?
                          </p>
                          <p className="ml-auto max-w-[60%] rounded-2xl rounded-br-md bg-lf-accent/25 px-3 py-2 text-lf-primary">
                            Os dois!
                          </p>
                          <p className="max-w-[92%] rounded-2xl rounded-bl-md bg-lf-elevated px-3 py-2 text-lf-secondary">
                            ✅ Reservado: Quadra 2, sáb 19:00 às 21:00 · R$ 240
                          </p>
                        </div>
                      </UiCard>
                    }
                  />
                ),
              },
              {
                key: "preco",
                wide: true,
                node: (
                  <PhotoCard
                    src="/images/beach/quadra-noite.svg"
                    alt="Quadra de beach tennis iluminada à noite"
                    title="Horário nobre com preço de horário nobre"
                    overlay={
                      <UiCard>
                        <p className="text-[11px] uppercase tracking-[0.12em] text-lf-muted font-medium">
                          Preço da Quadra 2
                        </p>
                        <div className="mt-2.5 space-y-1.5 text-[12px]">
                          {[
                            ["Seg a sex · 06h às 17h", "R$ 80"],
                            ["Seg a sex · 17h às 23h", "R$ 120"],
                            ["Sáb e dom · o dia todo", "R$ 110"],
                          ].map(([faixa, preco], i) => (
                            <div
                              key={faixa}
                              className={`flex items-center justify-between rounded-lg px-2.5 py-2 ${
                                i === 1 ? "bg-lf-accent/20 text-lf-primary" : "text-lf-secondary"
                              }`}
                            >
                              <span>{faixa}</span>
                              <span className="font-mono font-bold">{preco}</span>
                            </div>
                          ))}
                        </div>
                        <p className="mt-2.5 text-[10.5px] text-lf-muted">
                          O preço é calculado sozinho em cada horário.
                        </p>
                      </UiCard>
                    }
                  />
                ),
              },
              {
                key: "mensalistas",
                node: (
                  <LightCard title="Mensalistas e turmas com a mensalidade em dia">
                    <div className="w-full max-w-[260px] rounded-2xl bg-white/70 p-4">
                      <p className="text-[11px] font-semibold text-lf-base/60 uppercase tracking-[0.1em]">
                        Mensalidades de novembro
                      </p>
                      <div className="mt-3 space-y-2.5">
                        {MENSALIDADES.map((m) => (
                          <div key={m.nome} className="flex items-center gap-2.5">
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-medium text-lf-base truncate">{m.nome}</p>
                              <p className="text-[10.5px] text-lf-base/55 truncate">{m.detalhe}</p>
                            </div>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                m.pago ? "bg-[#15803d]/15 text-[#15803d]" : "bg-[#c2410c]/15 text-[#c2410c]"
                              }`}
                            >
                              {m.pago ? "Pago" : "Em aberto"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </LightCard>
                ),
              },
              {
                key: "comanda",
                node: (
                  <LightCard title="Água, cerveja e raquete na conta da quadra">
                    <div className="w-full max-w-[260px] rounded-2xl bg-white/70 p-4">
                      <p className="text-[11px] font-semibold text-lf-base/60 uppercase tracking-[0.1em]">
                        Comanda · Quadra 2
                      </p>
                      <div className="mt-3 space-y-2 text-[12.5px] text-lf-base">
                        {COMANDA.map((c) => (
                          <p key={c.item} className="flex justify-between gap-3">
                            <span className="truncate">{c.item}</span>
                            <span className="font-mono shrink-0">{c.valor}</span>
                          </p>
                        ))}
                        <p className="flex justify-between gap-3 pt-2 border-t border-lf-base/15 font-bold">
                          <span>Total</span>
                          <span className="font-mono">R$ 312,00</span>
                        </p>
                      </div>
                    </div>
                  </LightCard>
                ),
              },
              {
                key: "aulas",
                wide: true,
                node: (
                  <PhotoCard
                    src="/images/beach/aula.svg"
                    alt="Aula de beach tennis com professor e alunos na areia"
                    title="Aulas e turmas com lista de presença"
                    overlay={
                      <UiCard>
                        <p className="text-[13px] font-semibold text-lf-primary">Turma Iniciante</p>
                        <p className="text-[11px] text-lf-muted">Ter e Qui · 07:00 · Prof. Diego</p>
                        <div className="mt-3 space-y-1.5">
                          {ALUNOS.map((a) => (
                            <div key={a.nome} className="flex items-center gap-2 text-[12px]">
                              <span
                                className={`w-5 h-5 rounded-md grid place-items-center ${
                                  a.presente ? "bg-lf-success/20 text-lf-success" : "bg-lf-elevated text-lf-muted"
                                }`}
                              >
                                {a.presente && <Check size={12} strokeWidth={3} />}
                              </span>
                              <span className={a.presente ? "text-lf-primary" : "text-lf-muted"}>{a.nome}</span>
                              {!a.presente && <span className="ml-auto text-[10px] text-lf-muted">Faltou</span>}
                            </div>
                          ))}
                        </div>
                        <p className="mt-2.5 text-[10.5px] text-lf-muted">3 de 4 presentes · 6 vagas de 8</p>
                      </UiCard>
                    }
                  />
                ),
              },
            ]}
          />
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {recursos.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <span className="w-9 h-9 rounded-lg bg-lf-accent/15 grid place-items-center">
                <Icon size={17} strokeWidth={1.75} className="text-lf-accent" />
              </span>
              <h3 className="mt-3 text-[15px] font-semibold text-lf-primary">{title}</h3>
              <p className="mt-0.5 text-sm leading-relaxed text-lf-secondary">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
